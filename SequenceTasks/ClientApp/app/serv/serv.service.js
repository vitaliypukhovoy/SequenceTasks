var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
var Service = /** @class */ (function () {
    function Service(_http) {
        this._http = _http;
        this.url = "/api/value";
    }
    //get all
    Service.prototype.getTasks = function () {
        var tasks = this._http.get(this.url)
            .map(function (response) { return response; }
        // let tasksArray : Array<Task> = new Array<Task>();
        // for(let res of response. ){
        //   let task = new Task(res['id'], res['title'])
        //   tasksArray.push(task);
        // }
        // return tasksArray;
        )
            .catch(this.handleError);
        return tasks;
    };
    //get with param
    Service.prototype.getTask = function (id) {
        var task = this._http.get(this.url + "/" + id)
            .map(function (response) { return response; })
            .catch(this.handleError);
        return task;
    };
    //post
    Service.prototype.postTask = function (task) {
        this._http.post(this.url, task)
            .catch(this.handleError);
    };
    Service.prototype.putTask = function (task) {
        this._http.put(this.url + "/" + task.number, task)
            .catch(this.handleError);
    };
    Service.prototype.delete = function (task) {
        this._http.delete(this.url + "/" + task.number)
            .catch(this.handleError);
    };
    Service.prototype.handleError = function (error, cought) {
        var message = "";
        if (error instanceof Response) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable.throw(message);
    };
    Service = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], Service);
    return Service;
}());
export { Service };
//# sourceMappingURL=serv.service.js.map