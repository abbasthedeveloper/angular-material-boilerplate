import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
    MatNativeDateModule, MatToolbarModule, DateAdapter, MatIconModule, MatBadgeModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatDatepickerModule, MatTooltipModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatToolbarModule, MatIconModule],
    exports: [MatButtonModule, MatDatepickerModule, MatTooltipModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }