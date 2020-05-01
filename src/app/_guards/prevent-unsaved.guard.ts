import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsaved implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if(component.editForm.dirty){
            return confirm('Do you cotinue? Any unsaved changes will be lost');
        }
        return true;
    }
}