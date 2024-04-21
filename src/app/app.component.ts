import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'templateform';
  @ViewChild ("signUp") signUp!:NgForm
  mocArr=[
    {
      contactmode:'Email',
      id:123
    },
    {
      contactmode:'Phone',
      id:124
    }
  ]
userDetails={
 "userInfo":{
    "username":"ankita",
    "email": "ankitakulkarni012@gmail.com"
  },

"answer": "Cricket",
"modeofcontact": "Email",
"secretque": "sport",
"subscribe": "true"
}

constructor(){

}
  ngOnInit(): void {
      
  }
  onSignUp(signUp:NgForm){
    if(signUp.valid){
      console.log(signUp.valid)
      console.log(signUp);
    console.log(signUp.value)
    }
    
  }
  onEdit(){
    this.signUp.form.patchValue(this.userDetails)
  }
}
