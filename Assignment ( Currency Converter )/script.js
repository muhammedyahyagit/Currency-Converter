var conversionRates = {
    "INR": {
        "USD": 0.012,
        "EUR": 0.011,
        "GBP": 0.0091,
        "INR": 1
    },
    "USD": {
        "INR": 83.05,
        "EUR": 0.92,
        "GBP": 0.75,
        "USD": 1
    },
    "EUR": {
        "INR": 88.30,
        "USD": 1.09,
        "GBP": 0.81,
        "EUR": 1
    },
    "GBP": {
        "INR": 109.76,
        "USD": 1.33,
        "EUR": 1.23,
        "GBP": 1
    }
};

function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    var rate = conversionRates[fromCurrency][toCurrency];

    var convertedAmount = amount * rate;

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
