import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 5000;

// Get the Direktory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/posts", posts);

// Error
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Server is Running on Port ${port}`));
