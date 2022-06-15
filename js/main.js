// Define variables to contain user age, distance to travel (in km) and final ticket price
let userAge;
let travelKm;
let ticketPrice;

// Initialized discount rates 
const youngDiscount = 0.15; // for < 18yo.
const elderDiscount = 0.35; // for >= 65yo.

// Initialize button element to submit the data and get the price
const checkPriceButton = document.getElementById("price-button");

checkPriceButton.addEventListener('click', function(){
    // Get the data from the input elements in the DOM
    userAge = parseInt(document.getElementById('user-age').value);
    travelKm = parseInt(document.getElementById('travel-km').value);

    // Check if the number inputted by the user is > 0 (otherwise it won't be valid for calculate the price)
    // There is no need to check if it's a number because the input tag is has the "number" type
    if (userAge < 0 || travelKm < 0) {
        console.log("Impossibile calcolare prezzo - i dati inseriti non sono corretti")
    } else {

        // Calculate the ticket price by multiplying the distance for the variable price (0.26€/km)
        ticketPrice = travelKm * 0.26;

        // Check if the user is elegible for the underaged (< 18 yo.) discount of 15%
        if (userAge < 18) {
            ticketPrice *= (1 - youngDiscount);

        // Check fi the user is eligile for the elders (>= 65yo.) discount of 35%
        } else if (userAge >= 65) {
            ticketPrice *= (1 - elderDiscount);
        }

        // Return the final ticket price (print in console)
        console.log(`Il prezzo del tuo biglietto è pari a: ${ticketPrice.toFixed(2)}€`)
    }

})


