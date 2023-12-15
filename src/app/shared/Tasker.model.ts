import { Category } from "./Category.model";

export class Tasker{
    public name: string;
    public location: string;
    public contact: string;
    public rates: string;
    public category: string;

    constructor(name: string, location: string, contact: string, rates: string, category: string){
        this.name = name;
        this.location = location;
        this.contact = contact;
        this.rates = rates;
        this.category = category;
    }
}