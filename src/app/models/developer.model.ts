export class Developer{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    startContract:Date;

    constructor(){
        this.id=0;
        this.firstName="";
        this.lastName="";
        this.email="";
        this.password="";
        this.startContract=new Date();

    }
}