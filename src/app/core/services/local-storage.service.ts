import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  saveItem(key: string, data: any): void {
    return window.localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    const UserJson = localStorage.getItem(key);
    if (UserJson !== null) {
      return JSON.parse(UserJson)
    }
  }

  removeItem(): void {
    return window.localStorage.clear();
  }
}
