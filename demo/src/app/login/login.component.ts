import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    console.log(event)
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    console.log(username, password)
    this.Auth.getUserDetails(username, password)
    // .subscribe(data => {
    //   if(data.success){

    //   }else{
    //     window.alert("Invalid")
    //   }
    // })
    

  }

}
