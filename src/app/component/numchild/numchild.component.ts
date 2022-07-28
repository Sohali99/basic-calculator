import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numchild',
  templateUrl: './numchild.component.html',
  styleUrls: ['./numchild.component.css']
})
export class NumchildComponent implements OnInit {

  @Input()
  exData1:number=0;

  @Input()
  exData2:number=0;
  
  @Input()
  type:string='';

  @Output() 
  resultEvent=new EventEmitter<Number>()

  constructor() { }

  ngOnInit(): void {
  }

  showResult(){
    let res = 0;  
    switch(this.type) {
      case 'add':
        res = Number(this.exData1) + Number(this.exData2);
        break;
      
      case 'sub':
        res = Number(this.exData1) - Number(this.exData2);
        break;
      
      case 'multi':
        res = Number(this.exData1) * Number(this.exData2);
        break;
        
      case 'div':
        res = Number(this.exData1) / Number(this.exData2);
        break;
        
    }

    this.resultEvent.emit(res);
	
  }

}
