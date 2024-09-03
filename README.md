# MyBookCatalog

## Description

This is a web application that allows users to browse a collection of books, search for specific titles or authors, and save their favorite books to a local storage. This project was created using HTML, CSS, and JavaScript and utilizes the Google Books API to fetch and display book information.

## Features

* **Browse Books:** View a collection of books, including their covers, titles, and authors.
* **Search Functionality:** Easily search for books by title, author, or genre using the search bar.
* **Favorites:** Save your favorite books to a local storage for later viewing.
* **Responsive Design:** The website layout adjusts to different screen sizes, providing an optimal viewing experience on various devices.

## Technologies Used

**Front-end:**

* HTML: Structure and content of the web pages.
* CSS: Styling and visual presentation of the website.
* JavaScript: Functionality, API interaction, and dynamic content updates.

**API:**

* Google Books API: Fetches book data such as titles, authors, descriptions, and cover images.

**Other:**

* Local Storage: Stores user's favorite books locally on their device.

## File Structure

```
├── index.html
├── script.js
└── styles.css
```

## Functionality

1. **`index.html`:** This file sets up the basic structure of the web page, including the header, search bar, book display area, favorites section, and footer. It also includes links to the external CSS file (`styles.css`) and the JavaScript file (`script.js`).

2. **`script.js`:** This file contains the JavaScript code that handles the following:
   * Fetching book data from the Google Books API based on user searches or default queries.
   * Dynamically generating HTML elements to display book information (title, author, cover image) on the page.
   * Adding and removing books from the favorites list using local storage.
   * Toggling between the book list and favorites views.
   * Handling search input and filtering book results accordingly.

3. **`styles.css`:** This file contains the CSS rules that define the visual appearance of the web page, including:
   * Layout of elements using Grid and Flexbox.
   * Colors, fonts, and overall styling.
   * Responsive design to ensure optimal viewing experience on different screen sizes.


## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/my-book-catalog.git
   ```

2. **Open `index.html` in your web browser:**
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" your preferred web browser.

3. **Browse and Search for Books:**
   - Use the search bar to find specific books by title, author, or genre.
   - Scroll through the book list to explore available titles.

4. **Add to Favorites:**
   - Click the "Like" button on a book card to add it to your favorites list.

5. **View Favorites:**
   - Click the "Favorites" link to view your saved books.

6. **Remove from Favorites:**
   - Click the "Remove" button on a book card in the favorites view to remove it from your list.

## Future Enhancements

- **Pagination for Book Results:** Implement pagination to handle large numbers of book results from the API.
- **Sorting Options:** Add the ability to sort book results by different criteria (e.g., title, author, publication date).
- **User Authentication:** Allow users to create accounts and save their favorites to a database for persistent storage and cross-device access.
- **More Detailed Book Information:** Display additional book details like descriptions, ratings, and reviews when a book card is clicked.
- **Improved Search Filters:** Enhance the search functionality with more specific filters (e.g., genre, publication year range).
