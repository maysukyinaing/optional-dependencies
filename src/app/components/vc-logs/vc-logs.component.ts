import {Component, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {Logger} from "../../interfaces/logger";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges{
  @Input()
  vName:any

  logs:string[]=[]
  logger!:Logger;

  ngOnInit(): void {
  }

  constructor(@Optional() private loggerService:LoggerService) {
    if(!this.loggerService) {
      this.logger = console;
    }else{
      this.logger=this.loggerService
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue=changes['vName'].currentValue
    let message;
    if(changes['vName'].isFirstChange()){
      message=`initial version is ${currentValue.trim()}`
    }else{
      message=`version changed to ${currentValue.trim()}`
      this.logger.log(message)
    }
    this.logs.push(message)
  }

}


