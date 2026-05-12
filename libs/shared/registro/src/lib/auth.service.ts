import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  userData: FirebaseUser | null = null;

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userData = user;

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  // 🔐 LOGIN
  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if (result.user) {
          this.router.navigate(['']);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // 📝 REGISTER
  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (result) => {
        if (result.user) {
          await sendEmailVerification(result.user);
          await this.setUserData(result.user);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // 👤 SAVE USER IN FIRESTORE
  setUserData(user: FirebaseUser) {
    const userRef = doc(this.firestore, 'users', user.uid);

    return setDoc(
      userRef,
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      },
      { merge: true }
    );
  }

  // 🔎 LOGIN STATUS
  get isLoggedIn(): boolean {
    return !!this.userData;
  }

  // 🚪 LOGOUT
  SignOut() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}