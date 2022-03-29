import { Provider } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

export const LoginProvider: Provider = {
  provide: 'loginRepository',
  useClass: AuthService
}
