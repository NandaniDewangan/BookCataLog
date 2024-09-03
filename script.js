const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

// Load books when page opens
window.onload = function () {
    loadBooks("fiction");
};

// Fetch books from API with a specified number of results
function loadBooks(query, maxResults = 20) {
    const url = `${API_URL}${query}&maxResults=${maxResults}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                displayBooks(data.items);
            } else {
                alert("No books found. Please try a different search.");
            }
        })
        .catch(error => {
            console.log('Error:', error);
            alert("Failed to fetch books. Please check your connection or try again later.");
        });
}

// Display books on the page
function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = book.volumeInfo.title || 'No title';
        const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '150x150';
        const description = book.volumeInfo.description ? book.volumeInfo.description.substring(0, 100) + '...' : 'No description available';
        const infoLink = book.volumeInfo.infoLink || '#'; // Get book info link from API

        bookCard.innerHTML = `
        <a href="${infoLink}" target="_blank">
            <img src="${thumbnail}" alt="Book Cover">
            <h3>${title}</h3>
        </a>
        <p class="author-name" onclick="showAuthorDetails('${author}')">${author}</p>
        <button class="like-btn" onclick="addToFavorites('${title}', '${author}', '${thumbnail}', '${infoLink}')">Like</button>
        <button onclick="showAuthorDetails('${author}')">Author Info</button>`;

        bookList.appendChild(bookCard);
    });
}

// Function to add a book to favorites
function addToFavorites(title, author, thumbnail, infoLink) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const book = { title, author, thumbnail, infoLink };
    favorites.push(book);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert("Book added to favorites!");

    // Update the favorites section if it's visible
    if (document.getElementById('favorites-list').style.display === 'block') {
        displayFavorites();
    }
}

// Function to display favorite books
function displayFavorites() {
    const favoriteBooksList = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoriteBooksList.innerHTML = "";  // Clear the list before updating

    if (favorites.length === 0) {
        favoriteBooksList.innerHTML = "<p>No favorites added yet.</p>";
        return;
    }

    favorites.forEach((book, index) => {
        const bookCard = document.createElement('div');

        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <img src="${book.thumbnail}" alt="Book Cover">
            <h3>${book.title}</h3>
            <p class="author-name">${book.author}</p>
            <a href="#" onclick="readBook('${book.infoLink}')" class="read-link">Read Book</a>
            <button onclick="showAuthorDetails('${book.author}')">Author Info</button>
            <button onclick="removeFromFavorites(${index})">Remove</button>
        `;

        favoriteBooksList.appendChild(bookCard);
    });
}

// Function to read a book
function readBook(infoLink) {
    window.open(infoLink, '_blank');
}

// Function to remove a book from favorites
function removeFromFavorites(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.splice(index, 1);  // Remove the book at the given index

    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();  // Update the UI
}

// Show author details when "Author Info" is clicked
function showAuthorDetails(authorName) {
    const authorSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(authorName)}`;
    window.open(authorSearchUrl, '_blank');
}

// Handle search functionality
function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value;
    loadBooks(query);
    searchInput.value = '';  // Clear search input after performing the search
}

// Show home page
document.getElementById('homeLink').addEventListener('click', function () {
    const bookList = document.getElementById('book-list');
    const favoritesList = document.getElementById('favorites-list');

    bookList.classList.add('visible');   // Show the book list
    bookList.classList.remove('hidden'); // Ensure it's visible

    favoritesList.classList.add('hidden'); // Hide the favorites list
    favoritesList.classList.remove('visible'); // Ensure it's hidden

    loadBooks("fiction"); // Load default books
});

// Show favorites page
document.getElementById('favoritesLink').addEventListener('click', function () {
    const bookList = document.getElementById('book-list');
    const favoritesList = document.getElementById('favorites-list');

    bookList.classList.add('hidden');    // Hide the book list
    bookList.classList.remove('visible'); // Ensure it's hidden

    favoritesList.classList.add('visible'); // Show the favorites list
    favoritesList.classList.remove('hidden'); // Ensure it's visible

    displayFavorites(); // Display favorite books
});

function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

