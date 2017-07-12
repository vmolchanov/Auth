/**
 * Функция проверяет корректность введенного имени.
 * Имя может содержать:
 * - Буквы английского алфавита
 * - Буквы русского алфавита
 * - Пробелы
 * - Точки
 * @param name - Имя, которое проверяется на корректность
 * @returns {boolean}
 */
function isValidName(name) {
    return !!name.length && name.search(/[^А-Яа-яёЁA-Za-z\. \-]/i) === -1;
}


/**
 * Функция проверяет корректность введенной фамилии
 * Фамилия может содержать:
 * - Буквы английского алфавита
 * - Буквы русского алфавита
 * - Пробелы
 * - Точки
 * @param surname - Фамилия, которая проверяется на корректность
 * @returns {boolean}
 */
function isValidSurname(surname) {
    return isValidName(surname);
}


/**
 * Функция проверяет корректность введенного отчества
 * Отчество может содержать:
 * - Буквы английского алфавита
 * - Буквы русского алфавита
 * - Пробелы
 * - Точки
 * @param middlename - Отчество, которое проверяется на корректность
 * @returns {boolean}
 */
function isValidMiddlename(middlename) {
    return !middlename.length || isValidName(middlename);
}


/**
 * Функция проверяет корректность введенной электронной почты
 * @param email - Электроная почта, которая проверяется на корректность
 * @returns {boolean}
 */
function isValidEmail(email) {
    return email.indexOf("@") !== -1;
}


/**
 * Функция проверяет на корректность введенный номер телефона
 * @param phone - Номер телефона, который проверяется на корректность
 * @returns {boolean}
 */
function isValidPhone(phone) {
    let correctPhone = phone.match(/\d/ig);

    return correctPhone.length === 11;
}


/**
 * Функция проверяет на корректность введенный пол
 * @param gender - Пол, который проверяется на корректность
 * @returns {boolean}
 */
function isValidGender(gender) {
    return gender === "no-choice" || gender === "male" || gender === "female";
}


exports.isValidName = isValidName;
exports.isValidSurname = isValidSurname;
exports.isValidMiddlename = isValidMiddlename;
exports.isValidEmail = isValidEmail;
exports.isValidPhone = isValidPhone;
exports.isValidGender = isValidGender;
