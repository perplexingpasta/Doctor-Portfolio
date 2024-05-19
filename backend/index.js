import express from "express";
import authRouter from "./router/auth-router.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use(errorMiddleware)

// app.get("/", (req, res) => {
  //   res.send("wasssupppppppppppppp");
  // });
  // app.get("/:slug", (req, res) => {
    //   res.send(`Hiya! You've reached ${req.params.slug}`);
    // });
    
    const PORT = 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ready and listening on PORT ${PORT}`);
  });
});
