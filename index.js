const express = require("express");
const continentRoutes = require("./routes/continentRoutes");

const app = express(); // Create the Express app
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

app.use("/api", continentRoutes); // Use the continent routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app; // Export the app if needed for testing
