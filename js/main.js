// Define variables to contain user name & age, distance to travel (in km) and final ticket price
let userName;
let userAge;
let travelKm;
let ticketPrice;

// Initialized discount rates.
const youngDiscount = 0.15; // for < 18yo.
const elderDiscount = 0.35; // for >= 65yo.

// Initialize buttons
const checkPriceButton = document.getElementById("generate-price-b");
const clearFormButton = document.getElementById("clear-form-b");

// Generate ticket price by pressing "Genera" button after inputting the data
checkPriceButton.addEventListener('click', function(){
    // Get the data from the input elements in the DOM
    userName = document.getElementById('user-name').value;
    userAge = parseInt(document.getElementById('user-age').value);
    travelKm = parseInt(document.getElementById('travel-km').value);

    // Check if the number inputted by the user is > 0 (otherwise it won't be valid for calculate the price)
    // There is no need to check if it's a number because the input tag is has the "number" type
    if (userAge < 0 || isNaN(userAge) || travelKm < 0 || isNaN(travelKm)) {
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


        // Calculate the carriage number (assuming all trains have 8 carriages)
        const carriageNumber = Math.floor((Math.random() * 8) + 1);
        console.log(carriageNumber);

        // Calculate the tiket number
        const ticketNumber = Math.floor((Math.random()) * 9999) + 10000;

        // Fill ticket information for printing
        document.getElementById("passenger-name").innerHTML = userName;
        document.getElementById("passenger-ticket-price").innerHTML = ticketPrice.toFixed(2) + "€";
        document.getElementById("carriage-number").innerHTML = carriageNumber;
        document.getElementById("passenger-ticket-num").innerHTML = "BF" + ticketNumber;
        document.getElementById("passenger-ticket").classList.add("d-block");
        document.getElementById("passenger-ticket").classList.remove("d-none");
        
        // Return the final ticket price (print in console)
        // console.log(`Il prezzo del tuo biglietto è pari a: ${ticketPrice.toFixed(2)}€`)
    }

})

// Delete inputted values if the user presses the button "Annulla"
clearFormButton.addEventListener('click', function(){
    document.getElementById('user-name').value = "";
    document.getElementById('user-age').value = "";
    document.getElementById('travel-km').value = "";
    document.getElementById("passenger-ticket").classList.remove("d-block");
    document.getElementById("passenger-ticket").classList.add("d-none");
    // TODO Rinascondere il biglietto quando si preme "annulla"
})

