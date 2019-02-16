Движок для гипертекстовых игр на базе локаций, персонажей, квестов и предметов с инвентарем

### Совместимость
IE 11+, Firefox 56+, Chrome

## Возможности

* Работает без сервера в браузере - откройте index.html в браузере
* конфигурация своего дизайна, исходника, формата - в config.js
* Можно создавать параметры, менять их и показывать возможные варианты выбора при условии 
* Для работы с параметрами можно писать свои функции на JavaScript

## Основные понятия

Игра состоит из "узлов" или локаций. Каждая локация содержит
- имя для перехода из других узлов
- длинное имя для вывода в виде заголовка (если не задано, автоматически формируется из короткого)
- описание в виде текста
- набор вариантов, которые можно выбрать. К вариантам можно подключить изменение параметров и условия показа.

Пример локации в исходнике:

```text
# street: Морозные улицы Лондона

Рядом со мной стоит свободный кэб. В доме напротив заседает пятничный клуб веселых холостяков. Вниз по улице горят огни винного магазина - я слышал, они недавно получили ценный груз из Бордо. Вверх по улице высится памятник капитану Смолетту. Дальше все скрывает туман и смог. Холодает.

* @oneway arlingIntro: Сесть в кэб @param $healthFn(-10);
* clubIntro: Заглянуть в клуб веселых холостяков @param $healthFn(5);
* vineIntro: Зайти в винную лавку @param $healthFn(5);
* smollett: Осмотреть статую. @param $healthFn(-10);
```

### Локации

Одна локация объявляется стартовой. По умолчанию таковой является первая локация в исходном тексте игры.

## Формат для описания игры  по умолчанию

\// **Двойной слэш**. Комментарий. Не используется в игре. Комментарием считается все после двойного слэша.

\# **Решетка**. Начало данных о локации. Текст на одной строке с решеткой определяется как название локации.

\: **Двоеточие**. В строке названии локации  - начало расширенного заголовка локации. В строке выбора - начало описания выбора. Примеры:

```text
# traktir: Трактир Пивной Сом
```

```text
* street: Выйти на улицу
```

Строки между названием и выборами определяются как текст локации.

\* **Звездочка**. Выбор, формат которого задается как 

``* choiceText [location]``

где choiceText - текст, который видит пользователь, а location - id локации, к которой происходит переход

## Параметры
До первого узла в исходном тексте можно объявить параметры в виде

```text
@param $gold = 10 // золото собираем, на что-то тратим (подкуп, единоразовые действия)
@param $health = 100; // здоровье, будем страдать от чего-то, можем умереть
@param $intellect = 100 // интеллект
@param $spirit = 0 // алкогольное опьянение (прячем ряд действий, открывает уникальное воздействие)
```

## Функции 
В конфиге игры можно задать ссылку на файл функций, которые можно определять в игре. Это JavaScript-файл в котором описан объект GameFunc

```javascript
var GameFunc = {
    // записываем параметры через this.
    // как только функция применяется - параметр появляется
    // имена функций не должны совпадать с именами параметров
    spiritChange: function (value) {
        this.spirit += value;
    },
    
    intellectChange: function(value){
        this.intellect += value;
    },

    // в этом же объекте можно задавать параметры как поля
    someParam: 12, // добавили параметр с именем someParam и значением 12

    someParamChange: function (value) { // теперь можем вызывать эту функцию, чтобы менять параметр
        this.someParam += value;
    }	
};
```

Имя объекта всегда должно быть `GameFunc`. Внутри него как поля можно задать сколько угодно функций, которые можно использовать в игре. 

Внутри функции для обращения к параметру игры следует всегда использовать приставку `this.`

### Автолинк локаций в хабе

Если после заголовка узла-локации поставить спецпараметр `@hub`, то все узлы, на которые можно перейти из этой локации, автоматически получат обратно ссылку на ней. Это удобно для создания "хабов" - то есть узлов, из которых есть выход во множество узлов, из которых можно возвращаться обратно

```text
# start: Начало игры
@hub Начать игру заново
Вы стоите в центре лабиринта

* mino: Пойти в комнату с минотавром
* trap: Спуститься вниз
* left: Пойти налево
* right: Пойти направо
```

Во все указанные локации - теперь добавится обратная ссылка.

Если вы хотите сделать один или несколько переходов в хабе безвозвратным используйте маркер `@oneway` в строке выбора. Пример:  

```text
# start: Начало игры
@hub Начать игру заново
Вы стоите в центре лабиринта

* mino: Пойти в комнату с минотавром @oneway
* trap: Спуститься вниз
* left: Пойти налево
* right: Пойти направо
```

Теперь из комнаты с минотавром нет возврата - если только вы не пропишете её там вручную.