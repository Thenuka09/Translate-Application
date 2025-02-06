
# Simple Translation App

This is a full-stack translation app that allows users to input text in different languages and translate it into English using an API. The app also supports reverse languages (like Hebrew and Arabic), ensuring the correct text orientation.


## Technologies Used  

- **Frontend**: ReactJS
- **Backend**: Express.js, Node.js (v16.20.2)
- **Translation API**: Google Translate API
- **State Management**: React useState
- **HTTP Requests**: Axios
- **Environment Management**: dotenv
- **CORS Handling**: CORS middleware
- **Version Control**: Git

## Features

- **Text Translation**: Input text and translate it into English.
- **Reverse Language Support**: Supports RTL languages (e.g., Hebrew, Arabic) with proper text orientation.
- **Clean UI**: Minimal and user-friendly web interface.
- **Error Handling**: Handles invalid inputs and API failures.

## Prerequisites
- **Node.js**: Version 16.20.2 (or higher)
- **npm**: Node package manager
- **API Key**: You need to create an API key for Google Translate API (or any translation API of your choice).


## Getting Started

### 1. Clone the repository


```bash
git clone https://github.com/Thenuka09/Translate-Application.git
cd translation-app
```
### 2. Set up the frontend

- Navigate to the frontend directory:

```bash
cd client
```

- Install the required dependencies:

```bash
npm install
```

### 3. Set up the backend

- Navigate to the backend directory:

```bash
cd server
```

- Install the required dependencies:

```bash
npm install
```

### 4. Configure environment variables

- The `.env` file is already included in the project with placeholders for your API key.
- Open the `.env` file in the root of the both backend and frontend project.
- Add your translation API key in the following format:

```bash
REACT_APP_API_KEY=your_api_key (for frontend)
API_KEY=your_api_key (for backend)
```

- Replace `your_api_key` with your actual API key obtained from the translation service (e.g., Google Translate API).

### 5. Running the App

- Start the backend server: This will start the Express.js server on http://localhost:3001.

```bash
cd server
npm start
```

- Start the frontend app: This will start the React app on http://localhost:3000.

```bash
cd client
npm start
```

## Deployed Version

The app has been deployed and can be accessed here:

[Deployed Link](https://translate-application-client.vercel.app/)

## Usage

- Enter any text in the input field.
- Click the "Translate" button.
- View the translated text displayed on the screen.
