import { Validators } from "@angular/forms";

export const AuthenticationFormFields = {
  email:['', [Validators.required]],
  password:['',[Validators.required]]
}

export const UserFields = {
  name:['', [Validators.required]],
  job:['',[Validators.required]]
}
