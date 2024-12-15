import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way, taken from
    //  https://stackoverflow.com/questions/7410063/how-can-i-listen-to-the-form-submit-event-in-javascript

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Attempt to sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // If login is successful
        const user = userCredential.user;
        console.log('Logged in as:', user.email);

        // Redirect or update the page, etc. after successful login
        window.location.href = '/dashboard.html';  // Example redirection to a dashboard page

    } catch (error) {
        // Handle errors (e.g., wrong credentials)
        console.error('Error logging in:', error.message);
        alert('Login failed: ' + error.message);
    }
});
