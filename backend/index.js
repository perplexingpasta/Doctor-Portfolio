import express from "express";
import router from "./router/auth-router.js";
import { connectDB } from "./utils/db.js";
// import axios from "axios";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/auth", router);

// app.get("/", (req, res) => {
//   res.send("wasssupppppppppppppp");
// });
// app.get("/:slug", (req, res) => {
//   res.send(`Hiya! You've reached ${req.params.slug}`);
// });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ready and listening on PORT ${PORT}`);
  });
});
