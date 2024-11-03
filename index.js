const express = require('express');
const app = express();
const continentRoutes = require('./routes/continentRoutes');

// Middleware to parse JSON
app.use(express.json());

// Register continent routes
app.use('/api', continentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
