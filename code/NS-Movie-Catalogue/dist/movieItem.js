"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieItem = exports.Language = void 0;
var Language;
(function (Language) {
    Language["all"] = "all";
    Language["en"] = "en";
    Language["ur"] = "ur";
})(Language = exports.Language || (exports.Language = {}));
class MovieItem {
    constructor(id, name, releaseDate, lang = Language.en) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.lang = lang;
    }
    printDetails() {
        console.log(`${this.id} 
                     ${this.name} 
                     ${this.releaseDate}
                     ${this.lang} \n`);
    }
}
exports.MovieItem = MovieItem;
