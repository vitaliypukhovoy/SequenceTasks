export class Task {
    public number: number;
    public task: string;
    public isEditable: boolean;

    constructor(number: number, task: string, isEditable: boolean) {
        this.number = number;
        this.task = task;
        this.isEditable = isEditable;
    };

    // get number():number
    // {
    //   return this.number;
    // };
    //
    // get task(): string
    // {
    //   return this.string;
    // }
}
