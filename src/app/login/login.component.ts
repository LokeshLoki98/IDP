import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(){}



password:any;
val:any=[];

alertname='';

abc(name:any,pass:any)
{
    if(name==""||name==null && pass==""||pass==null)
    {
      this.alertname="entervalid name";
    
    
//console.log("my"+name+"hbgv"+pass)
    for (let i = 0; i <= localStorage.length-1; i++)    
    {        
       localStorage.setItem("i",name); 
       localStorage.setItem("i",pass);
       this.val.push(name,pass);
       localStorage.setItem('i',JSON.stringify(this.val));
      
    }   
  }
}  
  
  

  ngOnInit(): void {
  }

}
