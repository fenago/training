import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatGridListModule,
  MatListModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
