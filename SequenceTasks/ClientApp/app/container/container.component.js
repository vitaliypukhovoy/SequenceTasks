var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer } from '@angular/core';
import { Service } from './../serv/serv.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_servise, el, renderer) {
        this._servise = _servise;
        this._columns = ["number", "task"];
        this.columns = ["id", "title"];
        this.discussion = "Test string";
        this.editable = false;
        this.tasks =
            [
                {
                    number: 1,
                    task: 'Lemon Candy'
                },
                {
                    number: 2,
                    task: 'Gum Person'
                },
                {
                    number: 3,
                    task: 'Flame Person'
                },
                {
                    number: 4,
                    task: 'Lumpy Space Person'
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
            this.tasks.findIndex(function (x) {
                if (x.number == _this._number) {
                    x.isEditable = true;
                }
            });
            //this.tasks.map((i: Task) => i.isEditable = false);
        }
    };
    ContainerComponent.prototype.onSave = function () {
        this.tasks.map(function (i) { i.isEditable = false; });
    };
    ContainerComponent.prototype.onAdd = function () {
        this.tasks.push({ number: this.f_number, task: this.f_task });
        console.log(this.tasks);
    };
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._servise.getTasks()
            .subscribe(function (response) { _this._tasks = response; });
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
        // alert(form);
        // console.log(form);
    };
    ContainerComponent = __decorate([
        Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        }),
        __metadata("design:paramtypes", [Service, ElementRef, Renderer])
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map