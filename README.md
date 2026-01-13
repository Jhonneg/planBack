# Planner App

This is a full-stack application designed to help users plan and manage their trips efficiently. It consists of a backend API built with Node.js and a frontend web application built with React.

## Features

*   Create new trips with destinations and dates.
*   Invite guests to trips via email.
*   Confirm participation in trips.
*   Add and manage activities for a trip.
*   Add and manage important links related to a trip.
*   View trip details, participants, activities, and links.

## Technologies Used

### Backend

*   **Node.js**: JavaScript runtime environment.
*   **Fastify**: A fast and low-overhead web framework for Node.js.
*   **Prisma**: Next-generation ORM for Node.js and TypeScript.
*   **Zod**: TypeScript-first schema declaration and validation library.
*   **Day.js**: A minimalist JavaScript library for parsing, validating, manipulating, and formatting dates.
*   **Nodemailer**: Module for Node.js applications to allow easy email sending.
*   **TypeScript**: Strongly typed programming language that builds on JavaScript.

### Frontend

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **date-fns**: Modern JavaScript date utility library.
*   **lucide-react**: A collection of beautiful hand-crafted SVG icons.
*   **Axios**: Promise-based HTTP client for the browser and Node.js.
*   **React Router DOM**: Declarative routing for React.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/planner-app.git
    cd planner-app
    ```

2.  **Backend Setup**:
    ```bash
    cd backend
    npm install
    npx prisma migrate dev --name init
    npm run dev
    ```

3.  **Frontend Setup**:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
DATABASE_URL="file:./dev.db"
PORT=3333
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:5173"
MAIL_HOST="smtp.ethereal.email"
MAIL_PORT=587
MAIL_USER="your-ethereal-email"
MAIL_PASS="your-ethereal-password"
```

*   `DATABASE_URL`: Connection string for your database. For development, `file:./dev.db` uses SQLite.
*   `PORT`: The port on which the backend server will run.
*   `API_BASE_URL`: The base URL of the backend API.
*   `WEB_BASE_URL`: The base URL of the frontend application.
*   `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`: Ethereal email credentials for sending development emails. You can get these from [Ethereal Email](https://ethereal.email/).

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── routes/             # API routes definitions
│   │   ├── lib/                # Utility functions (prisma client, mailer, etc.)
│   │   ├── errors/             # Custom error classes
│   │   ├── generated/          # Prisma client generated code
│   │   └── server.ts           # Backend entry point
│   ├── prisma/                 # Prisma schema and migrations
│   └── package.json            # Backend dependencies and scripts
└── frontend/
    ├── src/
    │   ├── pages/              # React pages (CreateTrip, TripDetails)
    │   ├── components/         # Reusable React components
    │   ├── lib/                # Frontend utility functions (axios instance)
    │   └── App.tsx             # Frontend entry point
    ├── public/
    ├── package.json            # Frontend dependencies and scripts
    ├── vite.config.ts          # Vite configuration
    └── tailwind.config.js      # Tailwind CSS configuration
```

## API Endpoints

The backend exposes the following main API endpoints:

*   `POST /trips`: Create a new trip.
*   `GET /trips/:tripId/confirm`: Confirm a trip.
*   `GET /participants/:participantId/confirm`: Confirm a participant.
*   `POST /trips/:tripId/activities`: Create an activity for a trip.
*   `GET /trips/:tripId/activities`: Get all activities for a trip.
*   `POST /trips/:tripId/links`: Create an important link for a trip.
*   `GET /trips/:tripId/links`: Get all important links for a trip.
*   `GET /trips/:tripId/participants`: Get all participants for a trip.
*   `POST /trips/:tripId/invites`: Invite participants to a trip.
*   `PUT /trips/:tripId`: Update trip details.
*   `GET /trips/:tripId`: Get trip details.
*   `GET /participants/:participantId`: Get participant details.

## Contributing

Feel free to open issues or submit pull requests.

## License

ISC
