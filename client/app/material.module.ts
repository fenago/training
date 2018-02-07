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
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
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
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
