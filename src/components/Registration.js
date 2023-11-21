// RegistrationPage.js

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './RegistrationPage.css'; // Import your CSS file for styling

// const RegistrationPage = ({ userEmail }) => {
//   const history = useHistory(); // Access the history object from React Router
//   // ... your useState hooks and event handlers remain unchanged

//   const handleRegistration = async () => {
//     try {
//       // Your registration logic here, like sending data to the server
//       const userData = {
//         email: userEmail,
//         name,
//         gender,
//         dob,
//         phone,
//         address,
//       };
      

//       const response = await fetch('https://email-sending-and-verification.onrender.com/User/Registration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed');
//       }

//       // Assuming the registration endpoint returns a success response
//       console.log('Registration successful');

//       // Redirect to the 'Thank You' page on successful registration
//       history.push('/thankyou'); // Redirect to the route for the 'Thank You' page
//     } catch (error) {
//       console.error('Error in registration:', error);
//       // Handle errors or display an error message
//     }
//   };


//   return (
//     <div className="registration-container">
    
// <h1>Registration Page</h1>
//       <p>Welcome, {userEmail}</p>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={handleNameChange}
//       />
//       <input
//         type="text"
//         placeholder="Enter Gender"
//         value={gender}
//         onChange={handleGenderChange}
//       />
//       <input
//         type="date"
//         placeholder="Enter Date of Birth"
//         value={dob}
//         onChange={handleDOBChange}
//       />
//       <input
//         type="tel"
//         placeholder="Enter Phone Number"
//         value={phone}
//         onChange={handlePhoneChange}
//       />
//       <textarea
//         placeholder="Enter Address"
//         value={address}
//         onChange={handleAddressChange}
//       />
//       <button onClick={handleRegistration}>Register</button>
//     </div>
//   );
// };

// export default RegistrationPage;