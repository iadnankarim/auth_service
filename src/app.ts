import express from "express";
import type { Request, Response, NextFunction } from "express";
import type { HttpError } from "http-errors";

const app = express();

app.get("/", (_req, res) => {
  res.send("welcome to auth service");
});

// Global Error Handler
app.use(
  (
    err: HttpError,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
  ) => {
    const statusCode = err.statusCode || err.status || 500;

    res.status(statusCode).json({
      error: [
        {
          type: err.name,
          msg: err.message,
          path: "",
          location: "",
        },
      ],
    });
  },
);

export default app;
