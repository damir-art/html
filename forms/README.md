# Формы

## form
Формы созданы для того чтобы иметь возможность отправлять и принимать данные со страницы.

    <form action="#" method="get">

    </form>

* action - имя файла, который будет обрабатывать форму, не нужен если используется JavaScript
* method - принимает значение `get` или `post`, не нужен если используется JavaScript.

Вместо тега `form` можно использовать другую обертку, например `div`, если вы используете JavaScript.

## input
### text

    <input type="text" value="Введите телефон" />

placeholder:

    <input type="text" placeholder="Введите телефон" />

### submit

    <input type="submit" value="Отправить" />

### checkbox
Работает по принципу `Да/Нет`, переключатель состояний:

    <label for="ch">Чекбокс:</label>
    <input type="checkbox" id="ch" />

### email, number

    <input type="email" value="Введите E-mail" />
    <input type="number" placeholder="Введите число" />

## label
Можно ставить галочку через `id` или обернув `input`:

    <input class="form__chekbox" type="checkbox" id="pumpkin" />
    <label class="checkbox__label" for="pumpkin">Тыква</label>
    
    <label class="checkbox__label">
        <input class="form__chekbox" type="checkbox" /> Дыня
    </label>