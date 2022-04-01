import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public showStack: boolean = false;
  public cursorShowedOnMyStack: number = 0;

  constructor() {}
}
