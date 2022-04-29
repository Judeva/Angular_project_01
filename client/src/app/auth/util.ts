import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl):ValidationErrors|null{
    const value=control.value;

    if(!/.{5,}@gmail\.(bg|com)/.test(value)){
        return{
            email:true,
        }
    }
    return null;
}


