"use strict"

/* Задание 1 */

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

/* Задание 2 */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


/* Задание 3 */
const ans1 = prompt("Один из последних фильмов?", ""),
      ans2 = +prompt("Поставьте оценку", ""),
      ans3 = prompt("Один из последних фильмов?", ""),
      ans4 = +prompt("Поставьте оценку", "");

personalMovieDB.movies[ans1] = ans2;
personalMovieDB.movies[ans3] = ans4;
console.log(personalMovieDB)