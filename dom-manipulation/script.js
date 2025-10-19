// Quotes Array
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Dream big and dare to fail.", category: "Motivation" },
  { text: "Success is not for the lazy.", category: "Success" }
];

// Display Random Quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Using innerHTML as required
  quoteDisplay.innerHTML = `
    "${randomQuote.text}"<br>
    <em>- ${randomQuote.category}</em>
  `;
}

// Add New Quote
function addQuote() {
  const newText = document.getElementById("newQuoteText").value.trim();
  const newCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newText === "" || newCategory === "") {
    alert("Please enter both quote text and category.");
    return;
  }

  quotes.push({ text: newText, category: newCategory });
  alert("Quote added successfully!");

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
