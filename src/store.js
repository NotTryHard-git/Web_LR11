import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        features : [
            { id: 1, title: 'Медленно', description: 'Наше приложение работает молниеносно' },
            { id: 2, title: 'Ненадёжно', description: 'Гарантированная стабильность работы' },
            { id: 3, title: 'Неудобно', description: 'Интуитивно понятный интерфейс' }
          ],
        welcome: "Greetings my friend!!",
        team: [
            { id: 1, name: 'Иван Иванов', position: 'CEO'},
            { id: 2, name: 'Петр Петров', position: 'CTO' },
            { id: 3, name: 'Сидор Сидоров', position: 'Дизайнер' }
          ],
          services : [
            { id: 1, name: 'Веб-разработка', description: 'Создание современных веб-приложений', price: 50000 },
            { id: 2, name: 'Мобильные приложения', description: 'Разработка под iOS и Android', price: 80000 },
            { id: 3, name: 'Дизайн', description: 'UI/UX дизайн для вашего продукта', price: 30000 }
          ]

        
    }),
    getters: {
// тут наши вычисляемые свойства
    },
    actions: {
// тут  наши выполняемые действия
    },
})
