import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Task } from './serv.task'

@Injectable()
export class Service {

    url: string = "http://localhost:1297/api/values";
    constructor(private _http: HttpClient) {

    }
    //get all
    public getTasks(): Observable<Array<Task>> {
        let tasks = this._http.get(this.url)
            .map(response => response
            // let tasksArray : Array<Task> = new Array<Task>();
            // for(let res of response. ){
            //   let task = new Task(res['id'], res['title'])
            //   tasksArray.push(task);
            // }
            // return tasksArray;
            )
            .catch(this.handleError);
        return tasks;
    }
    //get with param
    public getTask(id: string): Observable<Task> {
        let task = this._http.get(this.url + "/" + id)
            .map(response => response)
            .catch(this.handleError);
        return task;
    }

    //post
    public postTask(task: Task): void {
        this._http.post(this.url, task)
            .catch(this.handleError)
    }

    public putTask(task: Task): void {
        this._http.put(this.url + "/" + task.number, task, )
            .catch(this.handleError)
    }

    public delete(task: Task): void {
        this._http.delete(this.url + "/" + task.number)
            .catch(this.handleError)
    }


    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable.throw(message);
    }

}
