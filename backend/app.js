import express from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";

//connecting with database
connectDB(DATABASE_URL);

app.use(cors());
app.use("/", web);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
