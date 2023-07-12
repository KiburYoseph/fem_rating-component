let numbers = document.querySelectorAll('.numbers');
const ratingValue = document.querySelector('.ratingValue');
const submitButton = document.querySelector('.submitButton');
const firstCard = document.querySelector('.firstCard');
const secondCard = document.querySelector('.secondCard');

numbers.forEach(number => {
    number.onclick = function () {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].classList.remove('selected');
        }
            number.classList.add('selected');
            console.log(numbers)
    }
});

submitButton.onclick = () => {
    numbers.forEach((number, idx) => {
        if(number.classList.contains('selected')) {
            ratingValue.innerText = idx + 1;
        }
    })

    firstCard.style.opacity = "0";
    setTimeout(() => {
        firstCard.style.display = "none";
        secondCard.style.display = "flex"
    }, 300);
    setTimeout(() => {
        secondCard.style.opacity = "1"
    }, 500);
}
