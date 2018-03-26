import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContainerComponent } from './../container/container.component'

@Component({
    selector: 'app-in-container',
    templateUrl: './in-container.component.html',
    styleUrls: ['./in-container.component.css']
})
export class InContainerComponent implements OnInit {
    @Input() public number = 0;
    @Input() public isEditable: boolean;
    @Output() public dataSender = new EventEmitter<number>();
    @Output() public stringSender = new EventEmitter<string>();

    constructor() { }

    onMoveHigher(): void {
        this.dataSender.emit(this.number);
        this.stringSender.emit("h");
    }

    onMoveBellow(): void {
        this.dataSender.emit(this.number);
        this.stringSender.emit("b");
    }
    onPriority(): void {
        this.dataSender.emit(this.number);
        this.stringSender.emit("p");
    }

    onDelete(): void {
        this.dataSender.emit(this.number);
        this.stringSender.emit("d")
    }
    ngOnInit() { }
}