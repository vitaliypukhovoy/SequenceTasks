import { Component, OnInit, Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
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
    _tasks: Array<Task>;
    tasks: any;
    t: "any";

    public f_number: number;
    public f_task: string;
    _columns: string[] = ["number", "task"];
    columns: string[] = ["id", "title"];
    public _number: number;

    constructor(private _servise: Service, el: ElementRef, renderer: Renderer) {      

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
        this.tasks.map(i => i.isEditable = false);
    }

    public discussion: string = "Test string";
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
            //   this.renderer.invokeElementMethod(
            //     this.el.nativeElement.ownerDocument.activeElement, 'focus');
            this.tasks.findIndex((x : Task) => {
                if (x.number == this._number)
                      x.isEditable = true;
            });
        }
    }

    onSave(): void {
        this.tasks.map((i : Task) => i.isEditable = false);
    }

    onAdd(): void {
        this.tasks.push({ number: this.f_number, task: this.f_task });
        console.log(this.tasks);
    }

    ngOnInit() {

        this._servise.getTasks()
            .subscribe(response => { this._tasks = response });

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
        // alert(form);
        // console.log(form);
    }



}