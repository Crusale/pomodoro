import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Modules
import { PomodoroModule } from './pages/pomodoro/pomodoro.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PomodoroModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
