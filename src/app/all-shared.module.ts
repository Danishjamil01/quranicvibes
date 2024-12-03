import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppConfig } from './configuration/AppConfig';
import { SampleService } from './configuration/sample.service';
import { WINDOW_PROVIDERS } from './configuration/window.provider';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}



@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        SlickCarouselModule,
        // SlickCarouselModule,
        TranslateModule,
        ToastModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
     imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        ToastrModule.forRoot({ positionClass: 'toast-center-center', preventDuplicates: true, }),
        SlickCarouselModule], providers: [
            // { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
            // SnotifyService,
            DatePipe,
            SampleService,
            MessageService,
            AppConfig, {
                provide: APP_INITIALIZER,
                useFactory: initializeApp,
                deps: [AppConfig], multi: true,
            },
            WINDOW_PROVIDERS,
            provideHttpClient(withInterceptorsFromDi()),
        ]
})
export class AllSharedModule { }
