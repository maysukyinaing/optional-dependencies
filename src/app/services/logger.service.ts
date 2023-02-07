import { Injectable } from '@angular/core';
import {Logger} from "../interfaces/logger";

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger{

  constructor() { }

  error(val:any) {
    this.saveLog(val, 'error')
  }

  info(val:any) {
    this.saveLog(val,'info')
  }

  log(val:any) {
    this.saveLog(val,'log')
  }

  warn(val:any) {
    this.saveLog(val, 'warn')
  }

  saveLog(val: any, type: any) {
    const key=`log_${type}`
    const logs=JSON.parse(localStorage.getItem(key) || '[]') //to js
    logs.push(val)
    localStorage.setItem(key,JSON.stringify(logs)) //to json
  }
}
