import express from "express";
import cors from "cors";
import authRouter from "./router/auth-router.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use(errorMiddleware);

const PORT = 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ready and listening on PORT ${PORT}`);
  });
});
