import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private abc:ServiceService) { }
  

  ngOnInit(): void {
  }

  servername=""

  dblogic()
  
  {
   this.servername=this.abc.name;
  }

}
