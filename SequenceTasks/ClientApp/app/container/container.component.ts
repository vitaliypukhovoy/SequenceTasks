import { Component, OnInit, Input } from '@angular/core';
import { Service } from './../serv/serv.service';
import { Task } from './../serv/serv.task';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
    _form: FormGroup;
    _error: any;
    tasks: any;// Array<Task>;


    public f_number: number;
    public f_task: string;
    public _number: number;

    constructor(private _servise: Service) {

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

        this.tasks.map((i: Task) => i.isEditable = false);
    }

    public editable: boolean = false;

    public onHandleEvent(event: number) {
        this._number = event;
    }

    public onSHandleEvent(event: string) {
        let index = this.tasks.findIndex((x: Task) => x.number == this._number);


        if (event == "d")
            index > -1 ? this.tasks.splice(index, 1) : 0;
        else if (event == "h") {
            if (index - 1 >= 0) {
                let tmp = this.tasks[index];
                this.tasks[index] = this.tasks[index - 1];
                this.tasks[index - 1] = tmp;
            }
        }
        else if (event == "b") {
            if (index + 1 < this.tasks.length) {
                let tmp = this.tasks[index];
                this.tasks[index] = this.tasks[index + 1];
                this.tasks[index + 1] = tmp;
            }
        }
        else if (event == "p") {
            console.log(this.tasks);
            this.tasks.map(a => {
                if (a.number == this._number) {
                    a.isEditable = true;
                    return;
                }
            });
        }
    }

    onSave(): void {
        this.tasks.map((i: Task) => { i.isEditable = false; });
    }

    onAdd(): void {


        this.tasks.push(new Task(this.f_number, this.f_task, false));
        console.log(this.tasks);
    }

    ngOnInit() {

        // this._servise.getTasks()
        //     .subscribe(response => { this.tasks = response });

        this._form = new FormGroup({
            number: new FormControl('',
                [Validators.required,
                Validators.pattern('^[0-9]+$')
                ]),
            task: new FormControl('',
                [Validators.required,
                Validators.pattern('\\D*')
                ]),
        });

    }

    onSubmit(form: FormGroup) {
        // console.log(form);
    }



}
