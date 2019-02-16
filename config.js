// конфиг конкретной игры
// Совет 1: путь к локальному файлу должен начинаться с ./
// Совет 2: локальный файл должен лежать в папке внутри папки с index.html
var GameConfig = {
    src: "./games/mechanical-moth/game-source1.html", // исходный код игры
    html: "./games/mechanical-moth/moth.html", // Html для вывода игры
    // css: "./design/01sample/game.css", // постоянный css для вывода игры, проще менять в HTML
    func: "./games/mechanical-moth/func.js", // функции в jS для использования в игре

    format: "./games/mechanical-moth/format.js", // JS со своим форматом для игры

	preloader: "./games/01test/img/preloader-39.svg", // картинка прелоадера
    styles: { // сменные стили в формате name: path //
    //    dark: "./design/01sample/css/dark.css",
    //    light: "./design/01sample/css/light.css",
    }
};