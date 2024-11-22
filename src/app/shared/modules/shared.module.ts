import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
   imports: [ReactiveFormsModule, FormsModule],
   exports: [ReactiveFormsModule, FormsModule, FooterComponent],
   declarations: [ 
      FooterComponent
      ],

})
export class SharedModule { }
