"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцениете его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    }
    else {
        console.log("Ошибка!");
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();