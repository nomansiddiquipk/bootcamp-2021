"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movieItem_1 = require("./movieItem");
const movieItem_2 = require("./movieItem");
const movieCollection_1 = require("./movieCollection");
const inquirer = require("inquirer");
let movies = [
    new movieItem_1.MovieItem(1, "Cars", new Date('01-Jan-2006')),
    new movieItem_1.MovieItem(2, "Kung fu Panda", new Date('15-Jul-2009')),
    new movieItem_1.MovieItem(3, "Ice Age", new Date('20-Aug-2015'))
];
let collection = new movieCollection_1.MovieCollection("NS", movies);
collection.addMovie("test Movie", new Date('01-Jul-2021'), movieItem_2.Language.ur);
function showMovies(lang) {
    console.clear();
    // console.log(`${collection.userName} ${collection.getMovies}`);
    collection.getMovies(lang).forEach(movie => movie.printDetails());
}
//showMovies();
function promptMovieLanguage() {
    console.clear();
    showMovies(movieItem_2.Language.all);
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "choose language",
        choices: Object.values(movieItem_2.Language)
    }).then(a => {
        switch (a["command"]) {
            case movieItem_2.Language.en:
                showMovies(movieItem_2.Language.en);
                // promptMovieLanguage();
                break;
            case movieItem_2.Language.ur:
                showMovies(movieItem_2.Language.ur);
                // promptMovieLanguage();
                break;
        }
    });
}
promptMovieLanguage();
