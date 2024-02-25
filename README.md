# Sidebar component layout

Установка зависимостей `npm install`

Запуск проекта `npm run dev`

## Задание ([Анимированная версия](src/assets/design.mp4))

![design.png](src/assets/design.png)

#### Верстать нужно

- лого
- элементы навигации
- `hover`, `active` состояния у элементов сайдбара
- анимация при закрытии/открытии у элементов, которые скрываются/появляются

#### Верстать не нужно

- тултипы
- профиль
- анимация при загрузке страницы (не открытие/закрытие)

---

- иконки могут не соответствовать, это не так важно
- больше всего интересует анимация при открытии/закрытии
- достаточно одной темы (светлой или темной)

Выполнение
npm install styled-components
npm install react-sidebar --save

Проблемы и их решение
Была проблема отображения страницы задеплоенного проекта.
Решение путем вылавливания ошибки со статусом 404 с помощью инструментов разработчика.
Прописывание правильных путей (см.собственную доку по Гит)

Чтобы сделать плавное появление контента при раскрытии сайдбара, нужно добавить анимацию для свойства `opacity`.
.bottom-menu {
// border-bottom: 1px solid #fff; /_ Линия-разделитель между topRoutes и bottomRoutes _/
padding-top: 5em; /_ Внутренний отступ для bottomRoutes _/

    opacity: 0; /* Начальное значение нулевой прозрачности */
    transition: opacity 0.5s; /* Добавляем transition для плавного появления */

}

&.opened .bottom-menu {
opacity: 1; /_ Устанавливаем прозрачность на 1 для плавного появления _/
}
// Устанавливаем плавное появление контента сайдбара при его раскрытии. Контент будет плавно
появляться с прозрачности 0 до 1 за время, указанное в `transition`.