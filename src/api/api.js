// src/api/api.js

// 🔹 Dummy data (replace later with backend API)
const rides = [
  { id: '1', driverName: 'Rahul', carType: 'Mini', price: 120, ETA: '5 mins' },
  { id: '2', driverName: 'Aman', carType: 'Sedan', price: 180, ETA: '8 mins' },
  { id: '3', driverName: 'Ravi', carType: 'SUV', price: 250, ETA: '10 mins' },
];
// const rides = []

// 🔹 Simulate API call
export const getRides = async (pickup, drop) => {
  console.log('Fetching rides for:', pickup, drop);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rides);
    }, 500); // simulate network delay
  });
};