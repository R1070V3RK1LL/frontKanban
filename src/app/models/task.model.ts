import { Developer } from "./developer.model";
import { TaskStatus } from './taskStatus.model';
import { TaskTypes } from "./taskTypes.model";

export class Task{
    public title:string;
    public type:string;
    public nbHoursForecast:number;
    public nbHoursReal:number;
    public developer:Developer;
    public taskStatus:TaskStatus;
    public taskTypes:TaskTypes;
    constructor(){
        this.title="";
        this.type="";
        this.nbHoursForecast=0;
        this.nbHoursReal=0;
        this.developer=new Developer();
        this.taskStatus=new TaskStatus();
        this.taskTypes=new TaskTypes();

    }
}