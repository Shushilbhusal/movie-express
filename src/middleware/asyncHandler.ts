// This function wraps an async controller and automatically sends any error to Express’s global error handler.

import { Request, Response, NextFunction } from "express";

type AsyncFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler = (fn: AsyncFn) => {
// Runs your async controller
// If it succeeds → nothing happens
// If it fails → .catch(next) runs
// next(error) sends error to global error middleware

// Equivalent to:
// try {
//   await fn(req, res, next);
// } catch (error) {
//   next(error);
// }
// But written once, reusable everywhere.

  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default asyncHandler;


// Controller runs
//      ↓
// Error happens (throw / DB error)
//      ↓
// Promise is rejected
//      ↓
// .catch(next)
//      ↓
// Express global error middleware

