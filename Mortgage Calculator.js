let Fund = document.getElementById('FundAmount')
let Interest = document.getElementById('Interest')
let Years = document.getElementById('Years')
let Payment = document.getElementById('Payment')
let result = document.getElementById('result')
let isok = document.getElementById('isok')


function calc() {

    result.value = Number(Fund.value) * (1 + (Number(Interest.value / 100))) / (Number(Years.value) * 12)
    result.innerHTML = result.value
    if (Payment.value < result.value) {

        isok.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה";
    } else {
        isok.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו";
    }
}

function checkInput(event) {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        FundAmount.style.border = '2px solid red'
        document.getElementById('FundAmountError').innerHTML = 'נא להזין רק מספרים'
    } else {
        FundAmount.style.border = ''
        document.getElementById('FundAmountError').innerHTML = ''
    }
}
FundAmount.addEventListener(
    'change',
    checkInput
)

function checkInput2(event) {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Interest.style.border = '2px solid red'
        document.getElementById('InterestError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Interest.style.border = ''
        document.getElementById('InterestError').innerHTML = ''
    }
}
Interest.addEventListener(
    'change',
    checkInput2
)

function checkInput3(event) {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Years.style.border = '2px solid red'
        document.getElementById('YearsError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Years.style.border = ''
        document.getElementById('YearsError').innerHTML = ''
    }
}
Years.addEventListener(
    'change',
    checkInput3
)


function checkInput4(event) {
    let value = Number(event.target.value)



    if (isNaN(value)) {
        Payment.style.border = '2px solid red'
        document.getElementById('PaymentError').innerHTML = 'נא להזין רק מספרים'
    } else {
        Payment.style.border = ''
        document.getElementById('PaymentError').innerHTML = ''
    }
}
Payment.addEventListener(
    'change',
    checkInput4
)