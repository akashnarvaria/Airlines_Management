import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingSpinnerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
