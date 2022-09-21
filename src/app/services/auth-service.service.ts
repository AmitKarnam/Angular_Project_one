import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable} from 'rxjs'
@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { 
    this.auth.authState.subscribe((user) => {
      this.isLoggedIn.next(Boolean(user?.uid))
    })
  }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).catch((err) => {alert(err)});
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.isLoggedIn.next(false);
    return this.auth.signOut();
  }

  GoogleLogin() {
    return this.auth.signInWithPopup(
      new GoogleAuthProvider()).then(res => {
        localStorage.setItem('token',JSON.stringify(res.user?.uid));
        this.router.navigate(['']);
  }).catch((err) => {
    alert(err);
  });
  }

  ifLoggedIn():Observable<boolean>{
    return this.isLoggedIn.asObservable();
  }


}