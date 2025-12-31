import express,{ NextFunction, Request, Response } from "express";
import router from "./routes/movieRoutes";
import errorMiddleware from "./middleware/error.middleware";


const app = express();
const port = 7000;

// Body parser
app.use(express.json());

// Routes
app.use('/movies', router);

// // Global error middleware (must be last)
app.use(errorMiddleware);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
