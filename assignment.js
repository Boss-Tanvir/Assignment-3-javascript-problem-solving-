

function kilometerToMeter(killometer) {
    var meter = killometer * 1000  
    return meter
}
var killoToMetter = kilometerToMeter(5)
console.log(killoToMetter)



function budgetCalculator(watch, phoneKoitaLagbo, laptopKoitaLagbo) {
 var watchPrice = 50 * khoriKoitaLagbo
 var phonePrice= 100 * phoneKoitaLagbo
 var laptopPrice = 500 * laptopKoitaLagbo

 var fullPrice = watchPrice + phonePrice + laptopPrice
 
 return fullPrice

}


var price = budgetCalculator(2, 2, 2)

console.log(price);


function hotelCost(hotelStayDays) {
var hotelRaint = 0
if (hotelStayDays <= 10) {
    hotelRaint = 10 * 100
}
else if(hotelStayDays<= 20){
    var first10Days = 10 * 100
    var stayTime = hotelStayDays - 10
    var first20Days = stayTime * 80
    hotelRaint = first10Days + first20Days
}
else{
    var first10Days = 10 * 100
    var first20Days = 10 * 80
    var stayTime = hotelStayDays - 20
    var unlimitedTime = stayTime * 300
    hotelRaint = first10Days + first20Days + unlimitedTime
}

return hotelRaint

}


var stayDaysCount = hotelCost(22)
console.log(stayDaysCount);





    



