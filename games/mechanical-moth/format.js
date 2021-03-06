// здесь можно настроить свои спецзнаки для форматирования исходников
// Совет 1: они не должны смешиваться с основным текстмо
// Совет 2: думайте, как упростить набор текста, а не усложнить ради каких-то концепций
// Совет 3: парсер думает строками, "начало" он воспринимает только если оно в начале строки
// Совет 4: маркеры не должны содержать другие маркеры. Особенно это касается знака -

var GameSourceFormat = {
    nodeStart: "#", // [начало строки] символ начала узла
    nodeTitleStart: ":", // [внутри строки] символ начала расширенного описания локации,
    nodeStyleStart: "@style", // [начало строки] маркер стиля локации, первый на строке
    commentStart: "//", // [внутри строки] начало комментария на строке
    choiceStart: "*", // [начало строки] начало выбора на строке
    choiceTitleStart: ":", // [внутри строки] начало описания выбора
    choiceOneWayMarker: "@oneway", // [начало строки]  после знака выбора -  начало описания выбора
    paramStart: "@param", // маркер параметра. 1 параметр - 1 строка
    paramLabelStart: "@label", // маркер начала ui-текста для вывода параметра
    paramOperations: {
        plus: "+",
        minus: "-",
        assign: "="
    }, // маркеры операций над параметрами
};