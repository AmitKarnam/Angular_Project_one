import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  registerForm!: FormGroup;
  isSignedIn = this.firebaseService.ifLoggedIn()


  constructor(private fb: FormBuilder, public firebaseService: AuthServiceService,private router: Router) { }

  ngOnInit():  void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }
  
  async signup(){
   
    await this.firebaseService.signup(this.registerForm.value.email,this.registerForm.value.password).then(() => {
      alert("Successfully Signed in")
      this.router.navigate(['home'])
    }).catch((error) => alert(error))
    
  }

  

}
