import { Iexperience } from "./Iexperience";

export class Experience implements Iexperience {
    id!: number;
    position!: String;
    company!: String;
    logo!: String;
    mode!: String;
    dateStart!: String;
    dateEnd!: String;
    timeElapsed!: String;

    constructor(){}
    
}