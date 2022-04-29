import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl):ValidationErrors|null{
    const value=control.value;

    if(!/.{5,}@(gmail|abv|yahoo|mail)\.(bg|com)/.test(value)){
        return{
            email:true,
        }
    }
    return null;
}

export function passwordMatch(passwordFormControl: AbstractControl){

    return (rePasswordFormControl: AbstractControl)=>{
        if(passwordFormControl.value===rePasswordFormControl.value){

            console.log('true pass');
            return{
                
                passwordMatch: true
            }
        }
        else{
            return {passwordMatch: false}
        }
    }
}

