// Simulate leaderboard data (replace with actual data once I have clients)
const leaderboardData = [
    { name: 'Customer Support', points: 1500 },
    { name: 'R&D', points: 1200 },
    { name: 'IT', points: 1000 },
    { name: 'SaLes', points: 900 }
];

// Function to display leaderboard
function displayLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    if (!leaderboardList) {
        console.error('Leaderboard element not found!');
        return;
    }

    leaderboardList.innerHTML = ''; // Clear previous content

    leaderboardData.forEach(player => {
        // Create list items dynamically
        const listItem = document.createElement('li');
        listItem.textContent = `${player.name} - ${player.points} points`;
        listItem.setAttribute('aria-label', `${player.name} has ${player.points} points`);
        leaderboardList.appendChild(listItem);
    });
}

// Call the function to display leaderboard on page load
document.addEventListener('DOMContentLoaded', displayLeaderboard);
