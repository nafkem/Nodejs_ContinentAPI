const continents = []; // In-memory storage for continents

// Create a continent
exports.createContinent = (req, res) => {
  const { name, numberOfCountries, description } = req.body;
  if (continents.some(continent => continent.name === name)) {
    return res.status(400).json({ message: "Continent already exists" });
  }
  const newContinent = {
    id: continents.length + 1,
    name,
    numberOfCountries,
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
  if (numberOfCountries) continent.numberOfCountries = numberOfCountries;
  if (description) continent.description = description;
  res.json(continent);
};

// Delete a continent by ID
exports.deleteContinent = (req, res) => {
  const index = continents.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Continent not found" });

  continents.splice(index, 1);
  res.json({ message: "Continent deleted" });
};
