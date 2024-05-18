import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("wasssupppppppppppppppp");
});

app.get("/:slug", (req, res) => {
  res.send(`Hiya! You've reached ${req.params.slug}`);
});

app.listen(PORT, () => {
  console.log(`Server ready and listening on PORT ${PORT}`);
});
