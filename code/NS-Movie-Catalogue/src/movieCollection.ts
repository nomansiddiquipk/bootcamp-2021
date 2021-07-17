import { MovieItem } from "./movieItem";
import { Language } from "./movieItem";


export class MovieCollection {

    private nextId:number =1;
    private itemMap = new Map<number,MovieItem>();
    
    constructor(public userName:string,
                public movieItems:MovieItem[]=[]){
        movieItems.forEach(item => this.itemMap.set(item.id,item))
    }

    addMovie(name:string, releaseDate:Date, lang:Language):number {
        
        while(this.getMovieById(this.nextId)){
            this.nextId++;
        }

        this.itemMap.set(this.nextId,
            new MovieItem(this.nextId,
                          name,
                          releaseDate,
                          lang));
            return this.nextId;
                    
    }

    getMovieById(id:number):MovieItem{
        return this.itemMap.get(id);
    }

    getMovies(lang:Language):MovieItem[]{
        if (lang==Language.all){
            return [...this.itemMap.values()];    
        }else{
        return [...this.itemMap.values()]
                .filter(item => item.lang == lang);
        }
    }

}