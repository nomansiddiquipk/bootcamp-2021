
export enum Language  {
    all="all",
    en="en",
    ur="ur"
}
export class MovieItem{

    public id:number;
    public name:string;
    public releaseDate:Date;
    public lang:Language;

    public constructor(id:number, name:string, releaseDate:Date,lang:Language=Language.en){
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.lang = lang;
    }

    public printDetails():void {
        console.log(`${this.id} 
                     ${this.name} 
                     ${this.releaseDate}
                     ${this.lang} \n`);
    }
}