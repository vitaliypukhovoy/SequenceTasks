import { Component } from '@angular/core';
import 'rxjs/Rx';


@Component({
    selector: 'app',
    template: ` <div style="margin: 100px 400px">
            <app-container></app-container>
            </div>`
})
export class AppComponent {
    title = 'SequenceTasks';
    constructor() { }

    ngOnInit() { }

}
