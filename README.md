# 🚗 Mini Ride Booking App (React Native)

A simple Uber-like mobile application built using React Native.\
This app demonstrates a basic ride-booking flow with clean UI and
navigation.

------------------------------------------------------------------------

## ✨ Features

-   Enter pickup and drop location
-   View available ride options
-   Select a ride
-   Confirm ride and view details
-   Clean UI with reusable components

------------------------------------------------------------------------

## 🧱 Tech Stack

-   React Native (Expo)
-   JavaScript
-   React Navigation

------------------------------------------------------------------------

## 📱 App Flow

1.  Home Screen → Enter pickup & drop
2.  Ride List Screen → View available rides
3.  Select Ride → Highlight selection
4.  Confirm Ride → View confirmation screen

------------------------------------------------------------------------

## 🔌 API (Mocked)

Currently using a mock API:

``` js
getRides(pickup, drop)
```

### Expected Backend API:

GET /rides?pickup=`<pickup>`{=html}&drop=`<drop>`{=html}

### Sample Response:

``` json
[
  {
    "id": "1",
    "driverName": "Rahul",
    "carType": "Mini",
    "price": 120,
    "ETA": "5 mins"
  }
]
```

------------------------------------------------------------------------

## 📂 Folder Structure

    src/
      components/
        RideCard.js
      screens/
        HomeScreen.js
        RideListScreen.js
        ConfirmationScreen.js
      api/
        api.js

------------------------------------------------------------------------

## 🚀 Future Improvements

-   Integrate real backend (Node.js + Express)
-   Add maps and live location
-   Add user authentication
-   Payment integration

------------------------------------------------------------------------

## 👩‍💻 Author

Built as a frontend prototype to demonstrate React Native skills and app
flow design.
