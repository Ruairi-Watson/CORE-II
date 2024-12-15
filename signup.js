import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // Assuming firebase.js is set up properly

// Event listener for sign-up form submission
document.getElementById('signUpForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password confirmation check
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // If sign-up is successful
        const user = userCredential.user;
        console.log('Signed up as:', user.email);

        // Redirect or show a success message
        window.location.href = '/dashboard.html'; // Redirect to a dashboard after successful sign-up
    } catch (error) {
        // Handle errors (e.g., email already in use, weak password)
        console.error('Error signing up:', error.message);
        alert('Sign-up failed: ' + error.message);
    }
});
