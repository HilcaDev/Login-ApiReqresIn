import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload, AuthenticationDto } from 'src/app/domain/login/login.dto';
import { IAuthRepository } from 'src/app/domain/login/login.repository';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService implements IAuthRepository {

  constructor(private http:HttpClient){}

  authentication(payload: Payload):Observable<HttpResponse<AuthenticationDto>> {
    return this.http.post<AuthenticationDto>(`${environment.baseUrl}/api/login`,payload, {observe:'response'});
  }

}
