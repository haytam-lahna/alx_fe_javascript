// Quotes Array
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Dream big and dare to fail.", category: "Motivation" },
  { text: "Success is not for the lazy.", category: "Success" }
];

// Show Random Quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Using innerHTML as required
  quoteDisplay.innerHTML = `
    "${randomQuote.text}"<br>
    <em>- ${randomQuote.category}</em>
  `;
}

// Add New Quote (logic)
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

// Dynamically create Add Quote Form (required function)
function createAddQuoteForm() {
  const formContainer = document.createElement("div");

  formContainer.innerHTML = `
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
    <button id="addQuoteBtn">Add Quote</button>
  `;

  document.body.appendChild(formContainer);

  // attach event inside DOM
  document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Call function to create form when page loads
createAddQuoteForm();
// Global quotes array - Initialized by loading from Local Storage
let quotes = [];

// ======================================
// STEP 1: Web Storage Integration
// ======================================

const LOCAL_STORAGE_KEY = 'quoteGeneratorQuotes';
const SESSION_STORAGE_KEY = 'lastViewedQuote';

/**
 * Loads quotes from Local Storage on application initialization.
 */
function loadQuotes() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
        // Parse the JSON string back into a JavaScript array
        quotes = JSON.parse(storedQuotes);
        // You would typically call a function here to update the DOM
        // e.g., displayQuotes(); 
    }
}

/**
 * Saves the current quotes array to Local Storage.
 */
function saveQuotes() {
    // Stringify the JavaScript array to store it as a JSON string
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

/**
 * Saves the last viewed quote index to Session Storage.
 * @param {number} index - The index of the last viewed quote.
 */
function saveLastViewedQuote(index) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, index.toString());
}

/**
 * Retrieves the last viewed quote index from Session Storage.
 * @returns {number|null} The index, or null if not found.
 */
function loadLastViewedQuote() {
    const index = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return index ? parseInt(index, 10) : null;
}

// ======================================
// Example Quote Handling (Connects to storage)
// ======================================

/**
 * Example function to add a new quote.
 * Assumes quoteText and quoteAuthor are collected from the DOM.
 */
function addQuote(quoteText, quoteAuthor) {
    const newQuote = { text: quoteText, author: quoteAuthor, id: Date.now() };
    quotes.push(newQuote);
    saveQuotes(); // CRUCIAL: Persist the new quote
    // Call your DOM update function here
}

// Example: Simulating viewing a quote to save to Session Storage
function viewQuote(quoteIndex) {
    // ... logic to display the quote ...
    saveLastViewedQuote(quoteIndex);
}


// ======================================
// STEP 2: JSON Data Import and Export
// ======================================

/**
 * Allows users to download the current quotes array as a JSON file.
 */
function exportToJsonFile() {
    if (quotes.length === 0) {
        alert('No quotes to export!');
        return;
    }

    // 1. Convert the JavaScript object to a formatted JSON string
    const jsonString = JSON.stringify(quotes, null, 2); 
    
    // 2. Create a Blob (Binary Large Object) from the string
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // 3. Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // 4. Create a temporary <a> element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes_export_' + new Date().toISOString().slice(0, 10) + '.json'; // File name
    
    // 5. Simulate a click and clean up
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Release the temporary URL
}

// Global quotes array - Initialized by loading from Local Storage
let quotes = [];

// ======================================
// STEP 1: Web Storage Integration
// ======================================

const LOCAL_STORAGE_KEY = 'quoteGeneratorQuotes';
const SESSION_STORAGE_KEY = 'lastViewedQuote';

/**
 * Loads quotes from Local Storage on application initialization.
 */
function loadQuotes() {
    const storedQuotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuotes) {
        // Parse the JSON string back into a JavaScript array
        quotes = JSON.parse(storedQuotes);
        // You would typically call a function here to update the DOM
        // e.g., displayQuotes(); 
    }
}

/**
 * Saves the current quotes array to Local Storage.
 */
function saveQuotes() {
    // Stringify the JavaScript array to store it as a JSON string
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
}

/**
 * Saves the last viewed quote index to Session Storage.
 * @param {number} index - The index of the last viewed quote.
 */
function saveLastViewedQuote(index) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, index.toString());
}

/**
 * Retrieves the last viewed quote index from Session Storage.
 * @returns {number|null} The index, or null if not found.
 */
function loadLastViewedQuote() {
    const index = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return index ? parseInt(index, 10) : null;
}

// ======================================
// Example Quote Handling (Connects to storage)
// ======================================

/**
 * Example function to add a new quote.
 * Assumes quoteText and quoteAuthor are collected from the DOM.
 */
function addQuote(quoteText, quoteAuthor) {
    const newQuote = { text: quoteText, author: quoteAuthor, id: Date.now() };
    quotes.push(newQuote);
    saveQuotes(); // CRUCIAL: Persist the new quote
    // Call your DOM update function here
}

// Example: Simulating viewing a quote to save to Session Storage
function viewQuote(quoteIndex) {
    // ... logic to display the quote ...
    saveLastViewedQuote(quoteIndex);
}


// ======================================
// STEP 2: JSON Data Import and Export
// ======================================

/**
 * Allows users to download the current quotes array as a JSON file.
 */
function exportToJsonFile() {
    if (quotes.length === 0) {
        alert('No quotes to export!');
        return;
    }

    // 1. Convert the JavaScript object to a formatted JSON string
    const jsonString = JSON.stringify(quotes, null, 2); 
    
    // 2. Create a Blob (Binary Large Object) from the string
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // 3. Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // 4. Create a temporary <a> element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes_export_' + new Date().toISOString().slice(0, 10) + '.json'; // File name
    
    // 5. Simulate a click and clean up
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Release the temporary URL
}

/**
 * Reads the uploaded JSON file and imports the quotes.
 * This is the function you provided, integrated here.
 * @param {Event} event - The file input change event.
 */
function importFromJsonFile(event) {
    if (event.target.files.length === 0) return;
    
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            
            // Basic validation to ensure imported data is an array
            if (!Array.isArray(importedQuotes)) {
                 alert('Import failed: File content is not a valid quotes array.');
                 return;
            }
            
            // Add imported quotes to the existing array
            quotes.push(...importedQuotes);
            
            // Save the updated array to local storage
            saveQuotes();
            
            // You should also call your DOM update function here
            // e.g., displayQuotes(); 

            alert('Quotes imported successfully! Total quotes: ' + quotes.length);

        } catch (e) {
            alert('Import failed: Invalid JSON file format.');
            console.error(e);
        }
    };
    // Read the file content as text
    fileReader.readAsText(event.target.files[0]);
    
    // Reset file input to allow importing the same file again if needed
    event.target.value = '';
}


// ======================================
// Initialization
// ======================================

// Initialize the application by loading existing quotes
loadQuotes();

// Example of checking session storage on initialization
const lastIndex = loadLastViewedQuote();
if (lastIndex !== null) {
    console.log(`Last viewed quote index: ${lastIndex}`);
    // You could call a function here to jump to that quote
}
function importFromJsonFile(event) {
    if (event.target.files.length === 0) return;
    
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            
            // Basic validation to ensure imported data is an array
            if (!Array.isArray(importedQuotes)) {
                 alert('Import failed: File content is not a valid quotes array.');
                 return;
            }
            
            // Add imported quotes to the existing array
            quotes.push(...importedQuotes);
            
            // Save the updated array to local storage
            saveQuotes();
           
            alert('Quotes imported successfully! Total quotes: ' + quotes.length);

        } catch (e) {
            alert('Import failed: Invalid JSON file format.');
            console.error(e);
        }
    };
    // Read the file content as text
    fileReader.readAsText(event.target.files[0]);
    
    event.target.value = '';
}


loadQuotes();

const lastIndex = loadLastViewedQuote();
if (lastIndex !== null) {
    console.log(`Last viewed quote index: ${lastIndex}`);

  // Assume 'quotes' array and storage functions (loadQuotes, saveQuotes) exist from Task 1
// Each quote object must now have a 'category' property, e.g., { text: "...", author: "...", category: "Inspiration" }

const LOCAL_STORAGE_FILTER_KEY = 'quoteFilterPreference';

// ======================================
// Filter and Category Management
// ======================================

/**
 * Extracts unique categories from the quotes array and populates the filter dropdown.
 */
function populateCategories() {
    const filterElement = document.getElementById('categoryFilter');
    
    // Clear existing options (except "All Categories")
    filterElement.innerHTML = '<option value="all">All Categories</option>';

    // 1. Get unique categories
    // Map over quotes to get all categories, then use a Set to get only unique values
    const categories = [...new Set(quotes.map(quote => quote.category))];

    // 2. Populate the dropdown
    categories.forEach(category => {
        if (category) { // Ensure category is not empty or null
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterElement.appendChild(option);
        }
    });

    // 3. Restore the last selected filter preference from local storage
    restoreFilterPreference();
}

/**
 * Filters the displayed quotes based on the selected category from the dropdown.
 */
function filterQuotes() {
    const filterElement = document.getElementById('categoryFilter');
    const selectedCategory = filterElement.value;

    // 1. Save preference to Local Storage
    localStorage.setItem(LOCAL_STORAGE_FILTER_KEY, selectedCategory);

    // 2. Determine which quotes to display
    let filteredQuotes;
    if (selectedCategory === 'all') {
        filteredQuotes = quotes;
    } else {
        filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    }
    
    // 3. Update the DOM
    // This function needs to be implemented by you based on how your quotes are displayed.
    // displayQuotes(filteredQuotes); 
    
    // Placeholder console output for demonstration
    console.log(`Filtering by: ${selectedCategory}. Displaying ${filteredQuotes.length} quotes.`);
    // alert(`Displaying ${filteredQuotes.length} quotes for category "${selectedCategory}"`);
}

/**
 * Restores the user's last selected filter preference from local storage.
 */
function restoreFilterPreference() {
    const filterElement = document.getElementById('categoryFilter');
    const lastFilter = localStorage.getItem(LOCAL_STORAGE_FILTER_KEY);

    if (lastFilter) {
        // Set the dropdown value and immediately apply the filter
        filterElement.value = lastFilter;
        filterQuotes(); // Apply the filter based on the restored value
    } else {
        // If no preference is saved, ensure "All Categories" is selected and applied
        filterElement.value = 'all';
        filterQuotes();
    }
}


// ======================================
// Updated addQuote and Initialization
// ======================================

// Assume the existing addQuote function is updated to include category
function addQuote(quoteText, quoteAuthor, quoteCategory) {
    const newQuote = { 
        text: quoteText, 
        author: quoteAuthor, 
        category: quoteCategory || 'Uncategorized', // Ensure category exists
        id: Date.now() 
    };
    quotes.push(newQuote);
    saveQuotes();
    
    // CRUCIAL: Re-populate categories after a new one is added
    populateCategories();
}

// Ensure populateCategories is called after quotes are loaded on startup
function initializeApp() {
    loadQuotes(); // Load quotes from local storage (from Task 1)
    
    // Now that quotes are loaded, populate the filter dropdown
    populateCategories(); 
    
    // The call to restoreFilterPreference() is inside populateCategories,
    // which then calls filterQuotes() to display the correct set of quotes.
}

// Run the initialization function when the page loads
initializeApp();
