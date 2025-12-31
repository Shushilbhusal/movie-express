// AppError is a custom error class used to represent expected (operational) errors in your application.

// JavaScript already has an Error class
// We extend it to add extra information
// This keeps compatibility with Express and Node
/**
 * Custom Application Error
 * ------------------------
 * Used to create controlled, expected errors
 * like 400, 401, 404, etc.
 */


class AppError extends Error {
  // HTTP status code (e.g. 400, 404, 500)
  statusCode: number;

  // Marks this error as an expected (operational) error
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    // Call the parent Error class constructor
    super(message);

    // Assign HTTP status code
    this.statusCode = statusCode;

    // Mark this error as safe and expected
    this.isOperational = true;

    // Remove constructor from stack trace for cleaner debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
