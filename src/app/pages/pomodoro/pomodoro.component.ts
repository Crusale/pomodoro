import { Component } from '@angular/core'

@Component({
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.component.html',
    styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {
    pomodoro: string = 'Some day this will be a beautiful web app, at least 🤪'
}
