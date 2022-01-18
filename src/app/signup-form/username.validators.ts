import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UsernameValidators{
    //Custom validator
    static cannotContainSpace(control: AbstractControl) :ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >=0 )
            return {cannotContainSpace: true}
        return null;
    }
    //Async Validator simulated with a timer
    static shouldBeUnique(control: AbstractControl) :Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string).includes("Chris") || (control.value as string).includes("guest"))
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            },2000);
        });
        
    }
}