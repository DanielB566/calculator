function calculateAndDisplay(){
    // Get input values from html//
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value
    // calculate tip, total bill, amt per person using helper function//
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)

    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2) // chops off everything after second demcial. tofixed(#)
    document.getElementById('totalBillResult').innerText =
     'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPers.toFixed(2)
}

// helper func to calc tip based on the bill and service quality

function calculateTip(bill, quality){
    if(quality === 'Great'){ // 20% tip
        return bill * .20
    }
    else if(quality === 'Good'){ // 15% tip
        return bill * .15
    }
    else if(quality === 'Poor'){ // 10% tip
        return bill * .1
    }
    else{
        return 0
    }
}

function calculateTotalBill(bill, tip){
    return bill + tip
}

function calculateAmtPerPers    (bill, numOfPpl){
    return bill / numOfPpl
}






/* let bill = 120
let num_of_people = 5
let servicequality = 'Great'

function tipcalc(quality){   //caluclates the tip based on how good/bad the service was
    if(quality === 'Great'){ // 20% tip
        return bill * .20
    }
    else if(quality === 'Good'){ // 15% tip
        return bill * .15
    }
    else if(quality === 'Poor'){ // 10% tip
        return bill * .1
    }
    else{
        //alert('Invalid value please try again!')
    }
}

let tip = tipcalc(servicequality)

function calctotalbill(bill, tip){
    return bill + tip
}

let totalbill = calctotalbill(bill, tip)

function calcAmtperperson(bill, num_of_people){
    return totalbill / num_of_people
}

let amtperperson = calcAmtperperson(totalbill, num_of_people)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalbill)
console.log('Amount per person' + amtperperson) */