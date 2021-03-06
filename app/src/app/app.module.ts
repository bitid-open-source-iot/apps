/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* --- COMPONENTS --- */
import { AppComponent } from './app.component';

/* --- ENVIRONMENT --- */
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            'enabled': environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }