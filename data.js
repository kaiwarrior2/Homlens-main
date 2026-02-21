// Хранилище отправленных текстов
let submissions = [];

// Добавить новый текст
function addSubmission(text, author, speechType) {
    const submission = {
        id: Date.now(),
        text: text,
        author: author,
        speechType: speechType,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString('ru-RU')
    };
    
    submissions.push(submission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
    return submission;
}

// Получить все тексты
function getSubmissions() {
    const stored = localStorage.getItem('submissions');
    if (stored) {
        submissions = JSON.parse(stored);
    }
    return submissions;
}

// Удалить текст
function deleteSubmission(id) {
    submissions = submissions.filter(s => s.id !== id);
    localStorage.setItem('submissions', JSON.stringify(submissions));
}

// Инициализация при загрузке
if (typeof window !== 'undefined') {
    getSubmissions();
}
