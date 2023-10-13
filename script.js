function myFunction() {
    alert("Hello, World!");
}

// Assuming you have HTML elements to work with
const destinationInput = document.getElementById("destination-input");
const departureInput = document.getElementById("departure-date");
const returnInput = document.getElementById("return-date");
const calculateButton = document.getElementById("calculate-button");
const priceOutput = document.getElementById("price-output");
const mapContainer = document.getElementById("map-container");

// Define a list of travel destinations with their corresponding prices
const destinationPrices = {
    "Istanbul": 2000,
    "Mexico": 1000,
    "New York": 1500,
    "Rome": 1200,
    // Add more destinations and prices here
};

// Event listener for calculating the travel price
calculateButton.addEventListener("click", function () {
    const selectedDestination = destinationInput.value;
    const departureDate = new Date(departureInput.value);
    const returnDate = new Date(returnInput.value);

    // Calculate the number of days for the trip
    const numberOfDays = Math.ceil((returnDate - departureDate) / (1000 * 60 * 60 * 24));

    if (destinationPrices[selectedDestination] && numberOfDays > 0) {
        const totalCost = destinationPrices[selectedDestination] * numberOfDays;
        priceOutput.textContent = `Total Cost: $${totalCost}`;
    } else {
        priceOutput.textContent = "Please enter valid details.";
    }

    // Dynamic component 3: Interactive Map (You can use a mapping library like Leaflet or Google Maps)
    // Here's a simplified example of showing a map using a placeholder image
    mapContainer.innerHTML = '<img src="map.png" alt="Travel Map">';
});