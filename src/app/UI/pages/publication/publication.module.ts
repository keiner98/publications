import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './publication.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentsModule } from 'src/app/UI/components/components.module';
import { CommonsModule } from '../../common/commons.module';

@NgModule({
  declarations: [PublicationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    CommonsModule,
    MatIconModule,
    ComponentsModule,
    MatDialogModule,
  ],
  exports: [PublicationComponent],
})
export class PublicationModule {}
