import { Injectable } from '@angular/core';
import { OptionItem } from './option-item.model';
import  {default as userOptions}  from './user-options.json';

@Injectable({
  providedIn: 'root'
})
export class UserOptionsService {

  constructor() { }

  getOptions(key: string): OptionItem[] {
    return userOptions[key];
  }
}
