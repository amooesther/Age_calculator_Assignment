const outYear = document.querySelector('.yy');
const outMonth = document.querySelector('.mm');
const outDay = document.querySelector('.dd');
const btn = document.querySelector('.btn');

let isValid = false;
const inYear = document.querySelector('#year');
const inMonth = document.querySelector('#month');
const inDay = document.querySelector('#day');

const errorYear = document.querySelector('.errorYear');
const errorMonth = document.querySelector('.errorMonth');
const errorDay = document.querySelector('.errorDay');

btn.addEventListener('click', (event) => {
    event.preventDefault(); 

    checkAge();
});

inDay.addEventListener('input', () => {
    if (+inDay.value > 31) {
        errorDay.textContent = 'must be a valid date';
        isValid = false;
        return;
    } else if (+inDay.value === 0) {
        errorDay.textContent = 'this field is required';
        isValid = false;
        return;
    } else {
        errorDay.textContent = '';
        isValid = true;
    }
});

inMonth.addEventListener('input', () => {
    if (+inMonth.value > 12) {
        errorMonth.textContent = 'must be a valid date';
        isValid = false;
        return;
    } else if (+inMonth.value === 0) {
        errorMonth.textContent = 'this field is required';
        isValid = false;
        return;
    } else {
        errorMonth.textContent = '';
        isValid = true;
    }
});

inYear.addEventListener('input', () => {
    if (+inYear.value > 2023) {
        errorYear.textContent = 'must be a valid date';
        isValid = false;
        return;
    } else if (+inYear.value === 0) {
        errorYear.textContent = 'this field is required';
        isValid = false;
        return;
    } else {
        errorYear.textContent = '';
        isValid = true;
    }
});

function checkAge() {
    if (isValid) {
        let birthday = `${inYear.value}-${inMonth.value}-${inDay.value}`;
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear()- 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;
        outDay.textContent = ageDay;
        outMonth.textContent = ageMonth;
        outYear.textContent = ageYears;
        localStorage.setItem("age", inYear.value);
    } else {
        alert('error');
        
    }
}
