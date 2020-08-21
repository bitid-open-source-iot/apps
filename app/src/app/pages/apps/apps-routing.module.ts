/* --- PAGES --- */
import { AppsPage } from './apps.page';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        'path':         '',
        'component':    AppsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule { }