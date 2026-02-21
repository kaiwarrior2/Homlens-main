// Работа с базой данных через localStorage
const DB = {
    // Получить всех персонажей
    getCharacters: function() {
        return [
            {
                id: "karl",
                name: "Дедушка Карл",
                speechType: "рассуждение",
                description: "Мудрый старший хомлин, который любит чай из местных трав и мастерски обрабатывает дерево.",
                image: "img/photo_14_2026-02-08_16-46-58.jpg",
                location: "Медовый мост",
                year: 2018
            },
            {
                id: "leo",
                name: "Папа Лео",
                speechType: "описание",
                description: "Мечтательный поэт в элегантной шляпе, который наблюдает за облаками и пишет стихи.",
                image: "img/photo_20_2026-02-08_16-46-58.jpg",
                location: "Музей изобразительных искусств",
                year: 2021
            },
            {
                id: "vitya",
                name: "Витя",
                speechType: "повествование",
                description: "Мальчуган в морской фуражке, мечтающий о первом плавании по реке Преголе.",
                image: "img/photo_8_2026-02-08_16-46-58.jpg",
                location: "Набережная Петра Великого",
                year: 2021
            }
        ];
    },

    // Получить прогресс пользователя
    getProgress: function() {
        const progress = localStorage.getItem('userProgress');
        return progress ? JSON.parse(progress) : {
            karlCompleted: false,
            leoCompleted: false,
            vityaCompleted: false
        };
    },

    // Сохранить прогресс
    saveProgress: function(characterId, completed) {
        const progress = this.getProgress();
        progress[characterId + 'Completed'] = completed;
        localStorage.setItem('userProgress', JSON.stringify(progress));
    },

    // Получить процент завершения
    getCompletionPercentage: function() {
        const progress = this.getProgress();
        const total = 3;
        const completed = Object.values(progress).filter(v => v === true).length;
        return Math.round((completed / total) * 100);
    },

    // Сохранить результат теста
    saveTestResult: function(characterId, answer, correct) {
        const results = this.getTestResults();
        results.push({
            characterId: characterId,
            answer: answer,
            correct: correct,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('testResults', JSON.stringify(results));
    },

    // Получить результаты тестов
    getTestResults: function() {
        const results = localStorage.getItem('testResults');
        return results ? JSON.parse(results) : [];
    }
};
