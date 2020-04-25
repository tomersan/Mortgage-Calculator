let Fund = document.getElementById('FundAmount')
let Interest = document.getElementById('Interest')
let Years = document.getElementById('Years')
let Payment = document.getElementById('Payment')
let result = document.getElementById('result')
let FundAmountError = document.getElementById('FundAmountError')
let InterestError = document.getElementById('InterestError')
let YearsError = document.getElementById('YearsError')
let PaymentError = document.getElementById('PaymentError')
let isok = document.getElementById('isok')


let arrayInput = [
    Fund,
    Interest,
    Years,
    Payment
]
let arrayInputerror = [
    FundAmountError,
    InterestError,
    YearsError,
    PaymentError
]



function calc() {

    result.value = Number(Fund.value) * (1 + (Number(Interest.value / 100))) / (Number(Years.value) * 12);

    if (isNaN(result.value) || result.value == Infinity) {
        isok.innerHTML = "";
        result.innerHTML = ""
        for(let j =0 ; j < arrayInputerror.length; j++){

            if (arrayInput[j].value == "") {
                arrayInput[j].style.border = '2px solid red'
                arrayInputerror[j].innerHTML = 'נא להזין מספרים'
            } else {
                arrayInput[j].style.border = ''
                arrayInputerror[j].innerHTML = ''
            }
            }

    } 
    else {
        
        if (Payment.value < result.value) {
            result.innerHTML = result.value
            isok.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה";

        } 
        else {
            result.innerHTML = result.value
            isok.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו";
        }
    }
}

for (let i = 0; i < arrayInput.length; i++) {

    arrayInput[i].addEventListener(
        'keyup',
        checkInput
    )

    function checkInput(event) {
        let value = Number(event.target.value)
        let error = arrayInputerror[i];



        if (isNaN(value) || value=="") {
            arrayInput[i].style.border = '2px solid red'

            error.innerHTML = 'נא להזין מספרים'
        } else {
            arrayInput[i].style.border = ''
            error.innerHTML = ''
        }
    }

}