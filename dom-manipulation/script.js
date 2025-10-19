// Array of quote objects
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Do something today that your future self will thank you for.", category: "Motivation" },
  { text: "Dream big and dare to fail.", category: "Courage" },
];

// Display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quote = quotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" — ${quote.category}`;
}

// Dynamically create form to add new quote
function createAddQuoteForm() {
  const formContainer = document.getElementById("formContainer");

  const title = document.createElement("h2");
  title.textContent = "Add a New Quote";
  formContainer.appendChild(title);

  const inputText = document.createElement("input");
  inputText.id = "newQuoteText";
  inputText.placeholder = "Enter a new quote";
  formContainer.appendChild(inputText);

  const inputCategory = document.createElement("input");
  inputCategory.id = "newQuoteCategory";
  inputCategory.placeholder = "Enter quote category";
  formContainer.appendChild(inputCategory);

  const addButton = document.createElement("button");
  addButton.textContent = "Add Quote";
  addButton.onclick = addQuote;
  formContainer.appendChild(addButton);
}

// Add new quote to array and update DOM
function addQuote() {
  const newText = document.getElementById("newQuoteText").value.trim();
  const newCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newText === "" || newCategory === "") {
    alert("Please enter both quote text and category.");
    return;
  }

  quotes.push({ text: newText, category: newCategory });
  alert("✅ New quote added successfully!");

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

// Event Listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
createAddQuoteForm();
