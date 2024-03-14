// Function to generate a random product ID
export const generateId = () => {
    return Math.floor(Math.random() * 10000) + 1; // Generate a random number between 1 and 10000
  };
  
  // Function to generate a random product name
  const generateName = () => {
    const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink'];
    const nouns = ['Car', 'Book', 'Chair', 'Table', 'Computer', 'Phone', 'Shirt'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  };
  
  // Function to generate a random price
  const generatePrice = () => {
    return (Math.random() * 1000).toFixed(2); // Generate a random price between 0 and 1000 with two decimal places
  };
  
  // Function to generate a random product description
  const generateDescription = () => {
    const descriptions = ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };
  
  // Function to generate a random product
  export const generateProduct = () => {
    return {
      id: generateId(),
      name: generateName(),
      price: generatePrice(),
      description: generateDescription()
    };
  };
  