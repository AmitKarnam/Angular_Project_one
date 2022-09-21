import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  registerForm!: FormGroup;
  isSignedIn = false;


  constructor(private fb: FormBuilder, public firebaseService:AuthServiceService) { }

  ngOnInit():  void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }
  
  async signup(){
   
    await this.firebaseService.signup(this.registerForm.value.email,this.registerForm.value.password)
    this.isSignedIn=true
    
  }

  

}
