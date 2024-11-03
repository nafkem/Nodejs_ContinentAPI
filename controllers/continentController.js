const continents = []; // In-memory storage for continents
let nextId = 1; // Initialize unique ID for continents

// Helper function to sanitize and validate input
function sanitizeInput(input) {
  return input.trim().toLowerCase(); // Remove spaces around and convert to lowercase
}

// Create a continent
exports.createContinent = (req, res) => {
  let { name, numberOfCountries, description } = req.body;

  // Sanitize and validate input
  if (!name || !numberOfCountries || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Sanitize inputs
  name = sanitizeInput(name);
  description = description.trim();

  // Check if continent already exists (case-insensitive)
  if (continents.some(continent => sanitizeInput(continent.name) === name)) {
    return res.status(400).json({ message: "Continent already exists" });
  }

  // Create new continent with sanitized and validated data
  const newContinent = {
    id: nextId++,
    name,
    numberOfCountries: parseInt(numberOfCountries), // Convert to number
    description,
  };

  continents.push(newContinent);
  res.status(201).json(newContinent);
};

// Get all continents
exports.getAllContinents = (req, res) => {
  res.json(continents);
};

// Get a continent by ID
exports.getContinentById = (req, res) => {
  const continent = continents.find(c => c.id === parseInt(req.params.id));
  if (!continent) return res.status(404).json({ message: "Continent not found" });
  res.json(continent);
};

// Update a continent by ID
exports.updateContinent = (req, res) => {
  const continent = continents.find(c => c.id === parseInt(req.params.id));
  if (!continent) return res.status(404).json({ message: "Continent not found" });

  const { numberOfCountries, description } = req.body;

  if (numberOfCountries) continent.numberOfCountries = parseInt(numberOfCountries);
  if (description) continent.description = description.trim();

  res.json(continent);
};

// Delete a continent by ID
exports.deleteContinent = (req, res) => {
  const index = continents.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Continent not found" });

  continents.splice(index, 1);
  res.json({ message: "Continent deleted" });
};
