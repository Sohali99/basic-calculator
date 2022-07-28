import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exData1:number=0;
  exData2:number=0;
  result:number= 0;
  type:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
 
  printresult(result: any) {
		this.result = result;
    console.log(result)
	}
}
