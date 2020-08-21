/* --- PAGES --- */
import { AppsPage } from './apps.page';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AppsRoutingModule } from './apps-routing.module';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        AppsRoutingModule
    ],
    declarations: [
        AppsPage
    ]
})

export class AppsModule { }