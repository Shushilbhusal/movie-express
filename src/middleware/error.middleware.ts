// This is the global error-handling middleware that sends the final error response to the client.

import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError";

// AppError is your custom error class
// It contains statusCode
// Used for expected (operational) errors

const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorMiddleware;
