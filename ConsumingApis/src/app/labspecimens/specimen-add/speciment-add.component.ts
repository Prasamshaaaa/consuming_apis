import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: 'add-specimen',
    templateUrl: './speciment-add.component.html'
})
export class AddSpecimentDialogComponent {
    NewSpecimen: string = "";
    constructor(public dialogRef: MatDialogRef<AddSpecimentDialogComponent>){
        
    }
    SubmitData(){
        this.dialogRef.close(this.NewSpecimen);
    }
    ClosePopup(): void {
        this.dialogRef.close();
      }
}