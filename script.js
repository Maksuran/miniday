document.addEventListener('DOMContentLoaded', function () {
    const datePicker = document.getElementById('date-picker');
    const textInput = document.getElementById('text-input');

    // Устанавливаем текущую дату в инпут для выбора даты
    const today = new Date().toISOString().split('T')[0];
    datePicker.value = today;

    // Загружаем текст для текущей даты, если он есть
    const savedText = localStorage.getItem(today) || '';
    textInput.value = savedText; // Устанавливаем значение в textarea

    datePicker.addEventListener('change', function () {
        const selectedDate = datePicker.value;
        if (selectedDate) {
            const savedText = localStorage.getItem(selectedDate) || '';
            textInput.value = savedText; // Устанавливаем значение в textarea
        }
    });

    textInput.addEventListener('input', function () {
        const selectedDate = datePicker.value;
        if (selectedDate) {
            // Сохраняем текст в localStorage
            localStorage.setItem(selectedDate, textInput.value);
        }
    });
});
