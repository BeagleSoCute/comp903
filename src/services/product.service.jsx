// Function to generate a random product ID
export const generateId = () => {
  return Math.floor(Math.random() * 10000) + 1; // Generate a random number between 1 and 10000
};

// Function to generate a random product name
const generateName = () => {
  const adjectives = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Sunny",
    "Fierce",
    "Mysterious",
  ];
  const nouns = [
    "Car",
    "Book",
    "Chair",
    "Table",
    "Computer",
    "Phone",
    "Shirt",
    "Mountain",
    "Forest",
    "Ocean",
  ];
  const landings = [
    "Co",
    "Corp",
    "Industries",
    "Ltd",
    "Technologies",
    "Enterprises",
    "Incorporated",
    "Group",
    "Solutions",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomLanding = landings[Math.floor(Math.random() * landings.length)];

  // Generate a random string
  const randomString = Math.random().toString(36).substring(7); // Random string of 6 characters

  return `${randomString} - ${randomAdjective} ${randomNoun} ${randomLanding}`;
};

// Function to generate a random price
const generatePrice = () => {
  return parseInt((Math.random() * 1000).toFixed(2));
};

// Function to generate a random product description
const generateDescription = () => {
  const descriptions = [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

// Function to generate a random product
export const generateProduct = () => {
  return {
    id: generateId(),
    name: generateName(),
    price: generatePrice(),
    description: generateDescription(),
  };
};


export const lightweightGenProduct = () => {
  return{
    id: generateId(),
    name: 'p',
    price: 1,
    description: 'd1',
  }
}
