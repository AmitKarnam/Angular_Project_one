import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phNo: any;
  reCaptcha: any;

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  phoneNumberSubmission() {
      this.reCaptcha = new firebase.auth.RecaptchaVerifier('captcha',{});
      firebase.auth().signInWithPhoneNumber(this.phNo,this.reCaptcha).then((res) => {localStorage.setItem('verify',JSON.stringify(res.verificationId))

      this.router.navigate(['/phoneLogin'])}).catch((error) => {
        alert(error);
        setTimeout(() => {
          window.location.reload();
        })
      })
  }

}
