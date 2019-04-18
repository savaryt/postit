import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BoardComponent } from './board.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSliderModule,
  MatProgressBarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DurationPipeModule } from '../../pipes/duration/duration.module';
@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressBarModule,

    FlexLayoutModule,

    DurationPipeModule

  ],
  exports: [BoardComponent],
})
export class BoardModule { }
