import { Observable } from "rxjs";
import { AuthenticationDto, Payload } from "./login.dto";

export interface IAuthRepository{
  authentication(payload:Payload):Observable<any>
}

