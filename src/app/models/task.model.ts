import { Developer } from "./developer.model";

export class Task{
    private title:string;
    private type: string;
    private nbHoursForecast:number;
    private nbHoursReal:number;
    private Developer:Developer;
    constructor(){
        this.title="";
        this.type="";
        this.nbHoursForecast=0;
        this.nbHoursReal=0;
        this.Developer=new Developer();

    }
}