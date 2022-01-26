import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials:any) { 
    // return this.http.post('/api/authenticate', 
    //    JSON.stringify(credentials));
    console.log(credentials);
    if(credentials && credentials.email){
      console.log('kali');
      if(credentials.email === 'chris'){
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
        localStorage.setItem('token',token);
        return true;
      }
       
    }      
    return false;
   }
 
   logout() { 
     localStorage.removeItem('token')
   }
 
   isLoggedIn() { 
     let jwtHelper = new JwtHelperService();
     let myRawToken:string|null = localStorage.getItem('token');
     if(myRawToken){
     const decodedToken = jwtHelper.decodeToken(myRawToken);
      const expirationDate = jwtHelper.getTokenExpirationDate(myRawToken);
      const isExpired = jwtHelper.isTokenExpired(myRawToken);
      return !isExpired;
     }
     return false;
   }
}
