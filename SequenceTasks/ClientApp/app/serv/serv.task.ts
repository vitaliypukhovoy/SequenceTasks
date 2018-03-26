export class Task {
    public number: number;
    public taska: string;
    public isEditable: boolean;

    constructor(number: number, taska: string, isEditable: boolean) {
        this.number = number;
        this.taska = taska;
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
