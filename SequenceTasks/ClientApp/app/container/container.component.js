var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Service } from './../serv/serv.service';
import { Task } from './../serv/serv.task';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_servise) {
        this._servise = _servise;
        this.editable = false;
        this.tasks =
            [
                {
                    number: 1,
                    taska: 'Lemon Candy'
                },
                {
                    number: 2,
                    taska: 'Gum Person'
                },
                {
                    number: 3,
                    task: 'Flame Person'
                },
                {
                    number: 4,
                    taska: 'Lumpy Space Person'
                },
            ];
        this.tasks.map(function (i) { return i.isEditable = false; });
    }
    ContainerComponent.prototype.onHandleEvent = function (event) {
        this._number = event;
    };
    ContainerComponent.prototype.onSHandleEvent = function (event) {
        var _this = this;
        var index = this.tasks.findIndex(function (x) { return x.number == _this._number; });
        if (event == "d")
            index > -1 ? this.tasks.splice(index, 1) : 0;
        else if (event == "h") {
            if (index - 1 >= 0) {
                var tmp = this.tasks[index];
                this.tasks[index] = this.tasks[index - 1];
                this.tasks[index - 1] = tmp;
            }
        }
        else if (event == "b") {
            if (index + 1 < this.tasks.length) {
                var tmp = this.tasks[index];
                this.tasks[index] = this.tasks[index + 1];
                this.tasks[index + 1] = tmp;
            }
        }
        else if (event == "p") {
            console.log(this.tasks);
            this.tasks.map(function (a) {
                if (a.number == _this._number) {
                    a.isEditable = true;
                    return;
                }
            });
        }
    };
    ContainerComponent.prototype.onSave = function () {
        this.tasks.map(function (i) { i.isEditable = false; });
    };
    ContainerComponent.prototype.onAdd = function () {
        this.tasks.push(new Task(this.f_number, this.f_task, false));
        console.log(this.tasks);
    };
    ContainerComponent.prototype.ngOnInit = function () {
        // this._servise.getTasks()
        //     .subscribe(response => { this.tasks = response });
        this._form = new FormGroup({
            number: new FormControl('', [Validators.required,
                Validators.pattern('^[0-9]+$')
            ]),
            task: new FormControl('', [Validators.required,
                Validators.pattern('\\D*')
            ]),
        });
    };
    ContainerComponent.prototype.onSubmit = function (form) {
        // console.log(form);
    };
    ContainerComponent = __decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        }),
        __metadata("design:paramtypes", [Service])
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map