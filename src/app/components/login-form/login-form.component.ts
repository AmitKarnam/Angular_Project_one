import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public firebaseService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    
    this.firebaseService
      .signin(this.registerForm.value.email, this.registerForm.value.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

      googleLogin() {
        this.firebaseService.GoogleLogin()
      }
   
  
}
