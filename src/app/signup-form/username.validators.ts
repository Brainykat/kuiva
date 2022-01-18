import { AbstractControl, ValidationErrors } from "@angular/forms";

//UsernameValidators.cannotContainSpace
export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl) :ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >=0 )
            return {cannotContainSpace: true}
        return null;
    }
}