# QuickNotes

A full-stack note-taking application built with **Next.js**, **React**, **Node.js**, **Express**, and **MongoDB**. This project demonstrates modern web development practices with authentication, secure API integration, and responsive UI design.

## Features

- 📝 **Create, Read, Update, Delete Notes** - Full CRUD functionality for managing notes
- 🔐 **User Authentication** - Secure signup and login with JWT tokens and bcrypt password hashing
- 🎨 **Responsive Design** - Built with Tailwind CSS for a beautiful, mobile-friendly interface
- 🌙 **Dark Mode Support** - Theme switching capability with next-themes
- 💻 **Modern Stack** - React 19, Next.js 15, Express 5, MongoDB integration
- 🔒 **Secure API** - Protected routes with middleware authentication

## Project Structure

```
quicknotes/
├── client/                    # Next.js frontend
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   └── auth/
│   │   │       ├── login/
│   │   │       └── signup/
│   │   ├── auth/             # Authentication pages
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── notes/            # Notes page
│   │   ├── layout.js         # Root layout
│   │   └── page.jsx          # Home page
│   ├── src/
│   │   ├── app/
│   │   └── components/       # Reusable components
│   │       ├── AuthProvider.jsx
│   │       ├── NoteCard.jsx
│   │       └── NoteForm.jsx
│   ├── public/               # Static assets
│   ├── package.json
│   ├── next.config.mjs
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── server/                    # Express backend
    ├── controllers/          # Business logic
    ├── middleware/
    │   └── auth.js           # JWT authentication middleware
    ├── models/
    │   ├── User.js           # User schema
    │   └── Note.js           # Note schema
    ├── routes/
    │   ├── authRoutes.js     # Auth endpoints
    │   └── noteRoutes.js     # Note endpoints
    ├── index.js              # Server entry point
    └── package.json
```

## Prerequisites

- **Node.js** 18+ and **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd quicknotes
```

### 2. Setup Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quicknotes
JWT_SECRET=your_jwt_secret_key_here
CORS_ORIGIN=http://localhost:3000
```

### 3. Setup Frontend (Client)

```bash
cd ../client
npm install
```

Create a `.env.local` file in the client directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running the Application

### Start Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd client
npm run dev
```

The client will run on `http://localhost:3000`

## Available Scripts

### Client (Next.js)

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Server (Express)

- `npm start` - Start the Express server
- `npm test` - Run tests (to be configured)

## Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Dark mode support
- **JWT** - Token-based authentication

### Backend

- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

### Shared

- **jsonwebtoken** - JWT implementation
- **bcryptjs** - Secure password hashing
- **cookie-parser** - Cookie parsing middleware
- **CORS** - Cross-Origin Resource Sharing

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Notes

- `GET /api/notes` - Get all user's notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Authentication Flow

1. User registers/logs in through the frontend
2. Credentials are validated against the database
3. Server generates a JWT token
4. Token is stored (typically in a secure cookie or localStorage)
5. All subsequent requests include the token for authentication
6. Server middleware validates the token before processing requests

## Database Models

### User

```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Note

```
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Development

### Code Quality

- ESLint is configured for code linting
- Follow the existing code structure for consistency
- Use components for reusable UI elements

### Environment Setup

Make sure both `.env` files are properly configured before running the application. Never commit sensitive information to version control.

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally or that your MongoDB Atlas connection string is correct
- Check the `MONGODB_URI` in your `.env` file

### CORS Errors

- Verify `CORS_ORIGIN` in server `.env` matches your client URL
- Ensure backend is running before starting frontend

### Port Conflicts

- Change `PORT` in server `.env` if port 5000 is in use
- Change port in client with `npm run dev -- -p 3001` if 3000 is in use

## Future Enhancements

- [ ] Add note categories/tags
- [ ] Implement note sharing
- [ ] Add search functionality
- [ ] Email verification for signup
- [ ] Password reset functionality
- [ ] Rich text editor for notes
- [ ] Collaborative editing
- [ ] Unit and integration tests

## License

ISC

## Support

For issues or questions, please open an issue in the repository.
