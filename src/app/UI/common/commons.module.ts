import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PaperComponent } from './paper/paper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ButtonComponent,CardComponent,PaperComponent,TabsComponent],
  imports: [
    CommonModule,ReactiveFormsModule, MatIconModule
  ],
  exports:[ButtonComponent,CardComponent,PaperComponent,TabsComponent]
})
export class CommonsModule { }
