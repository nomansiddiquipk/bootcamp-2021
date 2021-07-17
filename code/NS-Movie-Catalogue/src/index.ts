import { MovieItem } from "./movieItem";
import { Language } from "./movieItem";
import { MovieCollection } from "./movieCollection";
import * as inquirer from 'inquirer';

let movies = [
    new MovieItem (1,"Cars",new Date('01-Jan-2006')),
    new MovieItem (2,"Kung fu Panda",new Date('15-Jul-2009')),
    new MovieItem(3,"Ice Age",new Date('20-Aug-2015'))
];

let collection = new MovieCollection("NS",movies);
collection.addMovie("test Movie", new Date('01-Jul-2021'),Language.ur);

function showMovies(lang:Language):void{
    console.clear();
    // console.log(`${collection.userName} ${collection.getMovies}`);
    

    collection.getMovies(lang).forEach(
        movie => movie.printDetails()
    );

}

//showMovies();
function promptMovieLanguage():void {
    console.clear();
    showMovies(Language.all);
    inquirer.prompt({
        type:"list",
        name:"command",
        message:"choose language",
        choices: Object.values(Language)
    }).then (a => {
        switch(a["command"]){
            case Language.en:
                showMovies(Language.en);
                // promptMovieLanguage();
                break;
                case Language.ur:
                    showMovies(Language.ur);
                    // promptMovieLanguage();
                    break;
        }
    })

}
promptMovieLanguage();