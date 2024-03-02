export class Task {
    constructor(private _id:number,
                private _title: string,
                private _description: string, 
                private _priority: number) {
    }
    
    public get Id() : number {
        return this._id;
    }

    public get Title() : string {
        return this._title;
    }
    
    public get Description() : string {
        return this._description;
    }

    public get Priority(): number {
        return this._priority;
    }
}