import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private xyz:ServiceService) { }
  

  ngOnInit(): void {
  }

  dblogic(myname:any)
  {
    this.xyz.dblogic(myname);
  }

}
