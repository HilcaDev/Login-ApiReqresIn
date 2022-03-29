import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface IUserFields {
  id?: (number | ((control: AbstractControl) => ValidationErrors))[],
  name: (string | ((control: AbstractControl) => ValidationErrors))[],
  job: (string | ((control: AbstractControl) => ValidationErrors))[],
}
