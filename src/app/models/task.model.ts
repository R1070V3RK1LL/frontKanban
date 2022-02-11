import { Developer } from "./developer.model";

export class Task{
    public title:string;
    public type:string;
    public nbHoursForecast:number;
    public nbHoursReal:number;
    public Developer:Developer;
    constructor(){
        this.title="";
        this.type="";
        this.nbHoursForecast=0;
        this.nbHoursReal=0;
        this.Developer=new Developer();

    }
}