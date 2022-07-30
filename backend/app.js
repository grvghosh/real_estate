const express = require("express");
const connectDB = require("./connection/connect");
const cors = require("cors");
const PORT = process.env.PORT || 3004;

connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Server is running");
});


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}!`);
  });



























// app.use("/", router);
// app.use(dataRouter);

// const startDB = async () => {
//   try {
//     await connectDB(process.env.MONGO_URL);

//     const port = 5000;
//     app.listen(port, () => {
//       console.log("server is running");
//       console.log("DB connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startDB();


