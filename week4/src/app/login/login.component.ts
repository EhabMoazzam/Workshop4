import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = [
    {
      id : "alex",
      pwd : "123"
    },
    {
        id : "troy",
        pwd : "as2"
    },
    {
        id : "pet",
        pwd : "aaa"
    },
  ]

  is_show_alert = false

  constructor(private _router: Router) { }

  ngOnInit() {

  }

  onClickSubmit(data) {
    for (var i =0; i < this.userData.length; i++){
      var people = this.userData[i]
      
      if (people.id === data.username && people.pwd === data.password ){
        this.is_show_alert = false
        this._router.navigateByUrl("/account")
      }else{
        this.is_show_alert = true
      }

    }
 }

}
