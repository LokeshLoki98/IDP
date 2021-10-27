import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
anyname:any;
anypassword:any;

constructor() { }


abc(username:any,password:any)

{
  this.anyname=localStorage.getItem("username")
  this.anypassword=localStorage.getItem("password")
  if(username==""||username==null&&password==""||password==null)
  {
    alert("Enter valid user name else signup")
  }
  else if(this.anyname==username && this.anypassword==password)
  {
    alert("logged in")
  }
  else{
    alert("Enter valid user name else signup")
  }
}

  ngOnInit(): void {
  }

}
