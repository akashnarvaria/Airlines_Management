import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from "@angular/material/table";
import {MatInputModule} from '@angular/material/input'

const MaterialComponents=[
  MatButtonModule,
  MatSliderModule,
  MatTableModule,
  MatFormField,
  MatInputModule
];


@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
