export class Developer{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    startContract:Date;

    constructor(){
        this.id=0;
        this.firstname="";
        this.lastname="";
        this.email="";
        this.password="";
        this.startContract=new Date();

    }
}