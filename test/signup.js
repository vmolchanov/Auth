const mocha = require("mocha");
const assert = require("chai").assert;

const isValidName = require("../modules/signupFormValidation").isValidName;
const isValidSurname = require("../modules/signupFormValidation").isValidSurname;
const isValidMiddlename = require("../modules/signupFormValidation").isValidMiddlename;
const isValidEmail = require("../modules/signupFormValidation").isValidEmail;
const isValidPhone = require("../modules/signupFormValidation").isValidPhone;
const isValidGender = require("../modules/signupFormValidation").isValidGender;


describe("Валидация формы регистрации", () => {

    describe("Тестирование функции isValidName", () => {
        it("isValidName('Petya') === true", done => {
            assert.isTrue(isValidName("Petya"));
            done();
        });

        it("isValidName('Петя') === true", done => {
            assert.isTrue(isValidName("Петя"));
            done();
        });

        it("isValidName('Вася123') === false", done => {
            assert.isFalse(isValidName("Вася123"));
            done();
        });

        it("isValidName('') === false", done => {
            assert.isFalse(isValidName(""));
            done();
        });

        it("isValidName('_Вася_') === false", done => {
            assert.isFalse(isValidName("_Вася_"));
            done();
        });

        it("isValidName('Mr. Johnson') === true", done => {
            assert.isTrue(isValidName("Mr. Johnson"));
            done();
        });

        it("isValidName('Pett') === true", done => {
            assert.isTrue(isValidName("Pett"));
            done();
        });
    });

    describe("Тестирование функции isValidSurname", () => {
        it("isValidSurname('Petrov') === true", done => {
            assert.isTrue(isValidSurname("Petrov"));
            done();
        });

        it("isValidSurname('Петров') === true", done => {
            assert.isTrue(isValidSurname("Петров"));
            done();
        });

        it("isValidSurname('Васильев123') === false", done => {
            assert.isFalse(isValidSurname("Васильев123"));
            done();
        });

        it("isValidSurname('') === false", done => {
            assert.isFalse(isValidSurname(""));
            done();
        });

        it("isValidSurname('_Васильев_') === false", done => {
            assert.isFalse(isValidSurname("_Васильев_"));
            done();
        });

        it("isValidSurname('Mr. Johnson') === true", done => {
            assert.isTrue(isValidSurname("Mr. Johnson"));
            done();
        });

        it("isValidSurname('Oxlade-chamberlain') === true", done => {
            assert.isTrue(isValidSurname("Oxlade-chamberlain"));
            done();
        });
    });

    describe("Тестирование функции isValidMiddlename", () => {
        it("isValidMiddlename('Petrovich') === true", done => {
            assert.isTrue(isValidMiddlename("Petrovich"));
            done();
        });

        it("isValidMiddlename('Петрович') === true", done => {
            assert.isTrue(isValidMiddlename("Петрович"));
            done();
        });

        it("isValidMiddlename('Вася123') === false", done => {
            assert.isFalse(isValidMiddlename("Васильевич123"));
            done();
        });

        it("isValidMiddlename('') === true", done => {
            assert.isTrue(isValidMiddlename(""));
            done();
        });

        it("isValidMiddlename('_Вася_') === false", done => {
            assert.isFalse(isValidMiddlename("_Васильевич_"));
            done();
        });
    });

    describe("Тестирование функции isValidEmail", () => {
        it("isValidEmail('ivan.ivanov1978@yandex.ru') === true", done => {
            assert.isTrue(isValidEmail("ivan.ivanov1978@yandex.ru"));
            done();
        });

        it("isValidEmail('ivan.ivanov1978yandex.ru') === false", done => {
            assert.isFalse(isValidEmail("ivan.ivanov1978yandex.ru"));
            done();
        });

        it("isValidEmail('petya@yandex.ru') === true", done => {
            assert.isTrue(isValidEmail("petya@yandex.ru"));
            done();
        });
    });

    describe("Тестирование функции isValidPhone", () => {
        it("isValidPhone('81234567890') === true", done => {
            assert.isTrue(isValidPhone("81234567890"));
            done();
        });

        it("isValidPhone('+71234567890') === true", done => {
            assert.isTrue(isValidPhone("+71234567890"));
            done();
        });

        it("isValidPhone('+7(123) 456-78-90') === true", done => {
            assert.isTrue(isValidPhone("+7(123) 456-78-90"));
            done();
        });

        it("isValidPhone('8 123 456 78 90') === true", done => {
            assert.isTrue(isValidPhone("8 123 456 78 90"));
            done();
        });

        it("isValidPhone('8123456789') === false", done => {
            assert.isFalse(isValidPhone("8123456789"));
            done();
        });

        it("isValidPhone('4567890') === false", done => {
            assert.isFalse(isValidPhone("4567890"));
            done();
        });

        it("isValidPhone('89762346578') === true", done => {
            assert.isTrue(isValidPhone("89762346578"));
            done();
        });
    });

    describe("Тестирование функции isValidGender", () => {
        it("isValidGender('male') === true", done => {
            assert.isTrue(isValidGender("male"));
            done();
        });

        it("isValidGender('female') === true", done => {
            assert.isTrue(isValidGender("female"));
            done();
        });

        it("isValidGender('no-choice') === true", done => {
            assert.isTrue(isValidGender("no-choice"));
            done();
        });

        it("isValidGender('man') === false", done => {
            assert.isFalse(isValidGender("man"));
            done();
        });

        it("isValidGender('woman') === false", done => {
            assert.isFalse(isValidGender("woman"));
            done();
        });

        it("isValidGender('мужской') === false", done => {
            assert.isFalse(isValidGender("мужской"));
            done();
        });

        it("isValidGender('женский') === false", done => {
            assert.isFalse(isValidGender("женский"));
            done();
        });
    });

});

