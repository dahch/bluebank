# BlueBank Project

BlueBank is a full-stack web application designed to manage banking operations. It consists of a backend API built with Node.js and Express, and a frontend application built with Next.js and React.

## Technologies Used

- **Backend**:

  - Node.js
  - Express
  - Sequelize
  - CORS
  - dotenv

- **Frontend**:
  - Next.js
  - React
  - NextAuth.js
  - Tailwind CSS
  - Axios

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL(Docker Container)

### Backend Setup

1. Install dependencies:
   ```bash
   cd bluebank/api
   npm install
   ```
2. Create a `.env` file in the `api` directory and add your environment variables:
   ```bash
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   JWT_SECRET=your_jwt_secret
   ```
3. Start the backend server
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `ui` directory and install dependencies
   ```bash
   cd ../ui
   npm install
   ```
2. Create a `.env` file in the `ui` directory and add your environment variables:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
3. Start the frontend server
   ```bash
   npm run dev
   ```

### Usage

- Start the DB docker container from the `api` directory with the command `docker compose up -d`
- The backend server will be running on `http://localhost:3001/api/`.
- The frontend application will be running on `http://localhost:3000`.

## API Documentation

### User/Auth

- **URL:** `/api/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Auth:** No
- **Body:**

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

- **Responses:**

  - **201:** User successfully registered
  - **500:** Error registering user

  ***

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Login
- **Auth:** No
- **Body:**

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

- **Responses:**

  - **401:** Invalid credentials
  - **200:** Login successful
  - **500 Internal Server Error:** Error login user

  ***

- **URL:** `/api/user`
- **Method:** `GET`
- **Description:** Get all users
- **Auth:** Yes
- **Responses:**

  - **200:** User list
  - **401:** Unauthorized

  ***

- **URL:** `/api/user/:id`
- **Method:** `GET`
- **Description:** Get user by ID
- **Auth:** Yes
- **Responses:**

  - **200:** User
  - **401:** Unauthorized
  - **404:** Not Found

  ***

- **URL:** `/api/user/:id`
- **Method:** `PUT`
- **Description:** Update user
- **Auth:** Yes
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses:**

  - **200:** User updated
  - **401:** Unauthorized
  - **404:** Not Found

  ***

- **URL:** `/api/user/:id`
- **Method:** `DELETE`
- **Description:** Delete user
- **Auth:** Yes
- **Responses:**
  - **200:** User updated
  - **401:** Unauthorized
  - **404:** Not Found

### Clients

- **URL:** `/api/clients`
- **Method:** `GET`
- **Description:** Get all clients
- **Auth:** Yes
- **Responses:**

  - **200:** Clients List
  - **401:** Unauthorized

  ***

- **URL:** `/api/clients/:id`
- **Method:** `GET`
- **Description:** Get client by ID
- **Auth:** Yes
- **Responses:**

  - **200:** Client
  - **401:** Unauthorized
  - **404:** Not Found

  ***

- **URL:** `/api/clients`
- **Method:** `POST`
- **Description:** Create client
- **Auth:** Yes
- **Body:**
  ```json
  {
     "name": "string",
     "address": "string",
     "clientType": "individual" | "business"
  }
  ```
- **Responses:**

  - **201:** Client created
  - **400:** Missing required fields
  - **400:** Invalid client type
  - **401:** Unauthorized

  ***

- **URL:** `/api/clients/:id`
- **Method:** `PUT`
- **Description:** Update client
- **Auth:** Yes
- **Body:**
  ```json
  {
     "name": "string",
     "address": "string",
     "clientType": "individual" | "business"
  }
  ```
- **Responses:**

  - **200:** Client updated
  - **400:** Missing required fields
  - **400:** Invalid client type
  - **401:** Unauthorized
  - **404:** Not found

  ***

- **URL:** `/api/clients/:id`
- **Method:** `DELETE`
- **Description:** Delete client
- **Auth:** Yes
- **Responses:**
  - **200:** Client deleted
  - **401:** Unauthorized
  - **404:** Not found

### Transactions

- **URL:** `/api/transactions`
- **Method:** `GET`
- **Description:** Get all transactions
- **Auth:** Yes
- **Responses:**

  - **200:** Transactions List
  - **401:** Unauthorized

  ***

- **URL:** `/api/transactions/:id`
- **Method:** `GET`
- **Description:** Get transaction by ID
- **Auth:** Yes
- **Responses:**

  - **200:** Transactions
  - **401:** Unauthorized
  - **404:** Not Found

  ***

- **URL:** `/api/transactions`
- **Method:** `POST`
- **Description:** Create transaction
- **Auth:** Yes
- **Body:**
  ```json
  {
      "accountId": "number",
      "amount": "number",
      "date": "string",
      "location": "string",
      "type": "deposit" | "withdrawal"
  }
  ```
- **Responses:**

  - **201:** Transaction created
  - **400:** Missing required fields
  - **400:** Invalid transaction type
  - **401:** Unauthorized

  ***

- **URL:** `/api/transactions/:id`
- **Method:** `PUT`
- **Description:** Update transaction
- **Auth:** Yes
- **Body:**
  ```json
  {
      "accountId": "number",
      "amount": "number",
      "date": "string",
      "location": "string",
      "type": "deposit" | "withdrawal"
  }
  ```
- **Responses:**

  - **200:** Transaction updated
  - **400:** Missing required fields
  - **400:** Invalid transaction type
  - **401:** Unauthorized
  - **404:** Not found

  ***

- **URL:** `/api/transactions/:id`
- **Method:** `DELETE`
- **Description:** Delete transaction
- **Auth:** Yes
- **Responses:**
  - **200:** Transaction deleted
  - **401:** Unauthorized
  - **404:** Not found

### Account

- **URL:** `/api/accounts`
- **Method:** `GET`
- **Description:** Get all accounts
- **Auth:** Yes
- **Responses:**

  - **200:** Accounts List
  - **401:** Unauthorized

  ***

- **URL:** `/api/accounts/:id`
- **Method:** `GET`
- **Description:** Get account by ID
- **Auth:** Yes
- **Responses:**

  - **200:** Account
  - **401:** Unauthorized
  - **404:** Not Found

  ***

- **URL:** `/api/accounts`
- **Method:** `POST`
- **Description:** Create account
- **Auth:** Yes
- **Body:**
  ```json
  {
      "accountNumber": "string",
      "balance": "number",
      "accountType": "savings" | "checking"
  }
  ```
- **Responses:**

  - **201:** Account created
  - **400:** Missing required fields
  - **400:** Invalid account type
  - **401:** Unauthorized

  ***

- **URL:** `/api/accounts/:id`
- **Method:** `PUT`
- **Description:** Update account
- **Auth:** Yes
- **Body:**
  ```json
  {
      "accountNumber": "string",
      "balance": "number",
      "accountType": "savings" | "checking"
  }
  ```
- **Responses:**

  - **200:** Account updated
  - **400:** Missing required fields
  - **400:** Invalid account type
  - **401:** Unauthorized
  - **404:** Not found

  ***

- **URL:** `/api/accounts/:id`
- **Method:** `DELETE`
- **Description:** Delete account
- **Auth:** Yes
- **Responses:**
  - **200:** Account deleted
  - **401:** Unauthorized
  - **404:** Not found
