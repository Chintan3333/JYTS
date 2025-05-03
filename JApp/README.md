# Celebrity Vedic Kundli Database

A MERN stack application to store and manage celebrity Vedic kundli data.

## Features
- Store and manage celebrity kundli data
- Track planetary positions (9 planets)
- Record zodiac sign placements
- Store house positions
- Track ascendant information

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file with the following variables:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
```

4. Start the server:
```bash
npm start
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure
```
celebrity-kundli/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.js
    └── package.json
``` 