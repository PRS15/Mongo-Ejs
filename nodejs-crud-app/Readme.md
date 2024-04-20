
# Node.js CRUD App with Categories

This is a simple Node.js CRUD (Create, Read, Update, Delete) application that allows you to manage items with associated categories. The application uses Express.js for the server, MongoDB as the database with Mongoose for data modeling, and EJS (Embedded JavaScript) for server-side templating.

## Features

- **Items Management:**
  - View a list of items.
  - Create a new item with a name, description, and one or more categories.
  - Edit an existing item's details.
  - Delete an item.

- **Categories Management:**
  - View a list of categories.
  - Add a new category with a name and optional description.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14.x or higher)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd nodejs-crud-app
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory and define the following:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   ```

4. Start the application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Project Structure

The project structure is as follows:

- **`app.js`:** Entry point of the application.
- **`routes/`:** Contains route handlers for different endpoints.
  - `items.js`: Handles CRUD operations for items.
  - `categories.js`: Handles CRUD operations for categories.
- **`models/`:** Mongoose models for items and categories.
  - `item.js`: Item model with a reference to categories.
  - `category.js`: Category model.
- **`views/`:** Contains EJS templates for rendering HTML.
  - `items/`: Templates related to items (list, new, edit).
  - `categories/`: Templates related to categories (list, new).

## Usage

1. **Items Management:**

   - Navigate to `/items` to view a list of items.
   - Click on "Add New Item" to create a new item and associate it with categories.

2. **Categories Management:**

   - Navigate to `/categories` to view a list of categories.
   - Click on "Add New Category" to create a new category.

## Dependencies

- **Express.js:** Web framework for Node.js.
- **Mongoose:** MongoDB object modeling for Node.js.
- **EJS:** Embedded JavaScript templates for rendering server-side HTML.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
