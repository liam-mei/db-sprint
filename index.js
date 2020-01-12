const express = require("express");
const router = require("./router");

const server = express();

server.use(express.json());

// sanity check route
server.get("/", (req, res, next) => {
  res.json({ sanityCheck: "I work" });
});

// sub router
server.use("/api", router);

// path error middleware
server.use((req, res, next) => {
  res.status(404).json({ error: "route not found", route: req.originalUrl });
});

// global error middleware
server.use((err, req, res, next) => {
  res.status(500).json(err);
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
