var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var InContainerComponent = /** @class */ (function () {
    function InContainerComponent() {
        this.number = 0;
        this.dataSender = new EventEmitter();
        this.stringSender = new EventEmitter();
    }
    InContainerComponent.prototype.onMoveHigher = function () {
        this.dataSender.emit(this.number);
        this.stringSender.emit("h");
    };
    InContainerComponent.prototype.onMoveBellow = function () {
        this.dataSender.emit(this.number);
        this.stringSender.emit("b");
    };
    InContainerComponent.prototype.onPriority = function () {
        this.dataSender.emit(this.number);
        this.stringSender.emit("p");
    };
    InContainerComponent.prototype.onDelete = function () {
        this.dataSender.emit(this.number);
        this.stringSender.emit("d");
    };
    InContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InContainerComponent.prototype, "number", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InContainerComponent.prototype, "isEditable", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], InContainerComponent.prototype, "dataSender", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], InContainerComponent.prototype, "stringSender", void 0);
    InContainerComponent = __decorate([
        Component({
            selector: 'app-in-container',
            templateUrl: './in-container.component.html',
            styleUrls: ['./in-container.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], InContainerComponent);
    return InContainerComponent;
}());
export { InContainerComponent };
//# sourceMappingURL=in-container.component.js.map