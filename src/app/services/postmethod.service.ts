import { Injectable, OnInit } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';
import axios from 'axios';
import { AppConfigModel } from '../configuration/AppConfigModel';
import { AppConfig } from '../configuration/AppConfig';
import { EncryptdecryptService } from '../configuration/encryptdecrypt-service';
import { SessionStatic } from '../configuration/SessionStatic';
@Injectable({
  providedIn: 'root'
})
export class PostmethodService {

  apiServer: AppConfigModel;
  constructor(private encryptService: EncryptdecryptService,) {
    this.apiServer = AppConfig.settings;
  }

  public notifyUser = async (message: string, type: any) => {
    // this.toastrService.showMessage(message, type);
  }

  focusAndScrollToElement(id: string) {
    const getId: HTMLElement = document.getElementById(id) as HTMLElement;
    if (!!getId) {
      getId.focus();
      getId.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  public async apiCalls(reqObj: any, url: String) {
    console.log("uri :: " + JSON.stringify(this.apiServer));
    // this.progressLoad();
    let resultResponse: ApiResponse;
    const uri = this.apiServer.webServicesUrl + url;

    try {
      const options = {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'en',
          'Authorization': 'Bearer ',
        },
      };
      let language = await this.getStorage(SessionStatic.shortlanguageName);
      if (!!language) {
        reqObj.lang = language;
      } else {
        reqObj.lang = 'ar';
      }
      resultResponse = await axios.post(uri, reqObj)
        .then((response) => {
          if (response.status === 200) {
            const result: ApiResponse = {
              status: 0,
              data: response.data,
              message: 'Success',
            };
            return result;
          } else {
            const result: ApiResponse = {
              status: 1,
              data: null,
              message: 'Please try again',
            };
            return result;
          }
        }, (error: any) => {
          const result: ApiResponse = {
            status: 2,
            data: error,
            message: 'Please try again',
          };
          return result;
        });

    } catch (error) {
      const result: ApiResponse = {
        status: 3,
        data: error,
        message: 'Please try again',
      };
      resultResponse = result;
    } finally {
      // this.progressUnLoad();
      this.printConsole('url: ' + uri);
      this.printConsole('input : ' + url + ':' + JSON.stringify(reqObj));
      this.printConsole('response: ' + url + ':' + JSON.stringify(resultResponse));
      return resultResponse;
    }
  }
  public printConsole(input: string) {
    // const date: any = moment();
    // const abc = date + '';
    // var dates = new Date(date);
    // console.log('dates: ' + dates + '')
    // console.log('date: ' + abc + '')
    if (this.apiServer.isConsole) {
      console.log(input);
    }
  }

  public getStorage = async (key: string) => {
    let result: any = null;
    try {
      const encptedKey = await this.encryptService.encryptData(key);
      let sessionValue = sessionStorage.getItem(encptedKey);
      if (sessionValue == null || sessionValue === 'undefined' || sessionValue === undefined) {
        sessionValue = localStorage.getItem(encptedKey);
      }
      if (!!sessionValue) {
        const value = await this.encryptService.decryptData(sessionValue);
        try {
          const jsonRegex = /{[^]*?}|[[^]*?]/g;
          const matches = value.match(jsonRegex);
          if (matches) {
            result = JSON.parse(value);
          } else {
            result = value;
          }
        } catch (e) {
          this.printConsole('key: ' + key)
          // this.printConsole('type: ' + type)
          this.printConsole('value: ' + JSON.stringify(value))
          this.printConsole('storage get:' + e);
          this.removeStorage(encptedKey);
          this.removeStorage(key);
          result = null;
        }
      } else {
        result = null;
      }
    } catch (e) {
      // this.printConsole('storage get2:' + e);
      return null;
    } finally {
      return result;
    }
  }
  public removeStorage = async (key: string) => {
    const encptedKey = await this.encryptService.encryptData(key);
    sessionStorage.removeItem(encptedKey);
    localStorage.removeItem(encptedKey);
  }

  public async apiCallsLocal(url: string) {
    let resultResponse: ApiResponse;
    const uri = url;
    try {
      resultResponse = await axios.get(uri)
        .then((response) => {
          if (response.status == 200) {
            const result: ApiResponse = new ApiResponse();
            result.status = 0;
            result.data = response.data;
            result.message = "Success";
            return result;
          } else {
            const result: ApiResponse = new ApiResponse();
            result.status = 1;
            result.message = "Please try again";
            return result;
          }
        }, (error) => {
          const result: ApiResponse = new ApiResponse();
          result.status = 2;
          result.message = "Please try later";
          return result;
        });

    } catch (error) {
      const result: ApiResponse = new ApiResponse();
      result.status = 3;
      result.message = "Please try again";
      resultResponse = result;
    } finally {
      // this.printConsole('apiCalls url :' + uri)
      // this.printConsole('apiCallsresponse:' + JSON.stringify(resultResponse))
      return resultResponse;
    }
  }
}
