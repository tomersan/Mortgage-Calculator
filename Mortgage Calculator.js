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

        isok.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה" ;
    }
    else
    {
        isok.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו";
    }



}

function checkInput(parameter, errorElement) {
    let errorParagraph = document.getElementById(errorElement)


    if (isNaN(parameter)) {
        errorParagraph.style.display = 'block'
    }
     else
     {
        errorParagraph.style.display = 'none'
    }

}




