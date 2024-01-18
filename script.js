let bill = 120
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
console.log('Amount per person' + amtperperson)