import {Component, Input, OnInit} from '@angular/core';
import {Logger} from "../../interfaces/logger";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit{
  @Input()
  vName:any

  logs:string[]=[]
  logger!:Logger;

  ngOnInit(): void {
  }

  constructor(private loggerService:LoggerService) {
  }

}

1/15
