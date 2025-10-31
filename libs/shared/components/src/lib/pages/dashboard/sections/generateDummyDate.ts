const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to format a Date object as 'YYYY-MM-DD' string
const formatDate = (date: string | number | Date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateDummyData = () => {
  const dummyData = [];
  const numberOfDays = 200;
  
  // Start date: 200 days ago
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - numberOfDays);

  let currentQtyBase = 1000;
  let currentAmountBase = 50000;

  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Apply daily fluctuation (e.g., +/- 10% of the base)
    const qtyFluctuation = getRandomNumber(-90, 90);
    const amountFluctuation = getRandomNumber(-5000, 5000);

    // Update the base smoothly
    currentQtyBase = Math.max(0, currentQtyBase + qtyFluctuation / 10);
    currentAmountBase = Math.max(0, currentAmountBase + amountFluctuation / 10);
    
    // Calculate final values with more variance
    const totalQty = Math.round(currentQtyBase + getRandomNumber(-50, 50));
    const totalAmount = Math.round(currentAmountBase + getRandomNumber(-2000, 2000));

    dummyData.push({
      date: formatDate(currentDate),
      totalQty: Math.max(0, totalQty), // Ensure no negative quantity
      totalAmount: Math.max(0, totalAmount) // Ensure no negative amount
    });
  }

  return dummyData;
};