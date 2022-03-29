import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser, IResponseListUsers } from 'src/app/domain/users/users.dto';
import { environment } from 'src/environments/environment';
import { IUserFields } from '../validators/userForm.validator';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<HttpResponse<IResponseListUsers>>{
    return this.http.get<IResponseListUsers>(`${environment.baseUrl}/api/users?page=2`, {observe:'response'});
  }

  createUser(payload:IUserFields): Observable<HttpResponse<ICreateUser>>{
    return this.http.post<ICreateUser>(`${environment.baseUrl}/api/users`, payload, {observe:'response'})
  }
}
