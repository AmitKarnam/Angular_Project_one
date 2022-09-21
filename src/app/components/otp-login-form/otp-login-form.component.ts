import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-otp-login-form',
  templateUrl: './otp-login-form.component.html',
  styleUrls: ['./otp-login-form.component.css']
})
export class OtpLoginFormComponent implements OnInit {

  otp: any;
  verify: any;

  constructor(
    public auth: AuthServiceService,
    public routter: Router
  ) { }

  ngOnInit(): void {
    this.verify=JSON.parse(localStorage.getItem('verify')||'{}');
  }

  onOtp(verifyOtp:any)
  {
    this.otp = verifyOtp;
  }

  onSubmitOtp() {
    var user = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp);

    firebase.auth().signInWithCredential(user).then(() => {
      this.routter.navigate(['']);
    }).catch((error) => {
      alert(error);
    })
  }

}
