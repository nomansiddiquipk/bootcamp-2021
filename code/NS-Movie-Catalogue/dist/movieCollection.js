"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieCollection = void 0;
const movieItem_1 = require("./movieItem");
const movieItem_2 = require("./movieItem");
class MovieCollection {
    constructor(userName, movieItems = []) {
        this.userName = userName;
        this.movieItems = movieItems;
        this.nextId = 1;
        this.itemMap = new Map();
        movieItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addMovie(name, releaseDate, lang) {
        while (this.getMovieById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new movieItem_1.MovieItem(this.nextId, name, releaseDate, lang));
        return this.nextId;
    }
    getMovieById(id) {
        return this.itemMap.get(id);
    }
    getMovies(lang) {
        if (lang == movieItem_2.Language.all) {
            return [...this.itemMap.values()];
        }
        else {
            return [...this.itemMap.values()]
                .filter(item => item.lang == lang);
        }
    }
}
exports.MovieCollection = MovieCollection;
