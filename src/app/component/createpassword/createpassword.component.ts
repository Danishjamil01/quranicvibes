import { Component } from '@angular/core';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrl: './createpassword.component.scss'
})
export class CreatepasswordComponent {
  password: string;
  isPasswordValid: boolean = false;
  visible: boolean = true;
  changetype: boolean = true;

  showPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  checkPasswordValidity() {
    this.isPasswordValid = this.password.length >= 8;
  }
}
