// script.js

// Get the current date
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Elements
const calendarElement = document.getElementById("calendar");
const currentStreakElement = document.getElementById("current-days");
const longestStreakElement = document.getElementById("longest-days");

// Track streaks
let currentStreak = 0;
let longestStreak = 0;
let lastActiveDay = null;

// Generate calendar for the current month
function generateCalendar(month, year) {
    // Clear the existing calendar
    calendarElement.innerHTML = "";

    // Days of the week
    const daysOfWeek = ["Su", "M", "T", "W", "Th", "F", "S"];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.classList.add("day", "header");
        calendarElement.appendChild(dayElement);
    });

    // Get the first day of the month
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    // Fill in the days
    for (let i = 0; i < firstDay; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        calendarElement.appendChild(dayElement);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;
        dayElement.classList.add("day");
        dayElement.id = `day-${i}`;
        calendarElement.appendChild(dayElement);
    }
}

// Update current and longest streaks
function updateStreaks() {
    currentStreakElement.textContent = currentStreak;
    longestStreakElement.textContent = longestStreak;
}

// Highlight today's date and update streaks
function highlightToday() {
    const todayElement = document.getElementById(`day-${today.getDate()}`);
    todayElement.classList.add("active");

    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const daysDifference = (now - lastVisitDate) / (1000 * 60 * 60 * 24);

        if (daysDifference > 1) {
            currentStreak = 1; // Reset to 1 if more than a day has passed
        } else if (daysDifference === 1) {
            currentStreak += 1; // Increment if the visit is the next day
        }
    } else {
        currentStreak = 1; // Start streak if it's the first visit
    }

    if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
    }

    localStorage.setItem('lastVisit', now);
    updateStreaks();
}

// Initialize the calendar
generateCalendar(currentMonth, currentYear);
highlightToday();


// goal setting 
function addGoal() {
    const goalInput = document.getElementById('goal');
    const goalList = document.getElementById('goal-list');
    const goalText = goalInput.value.trim();

    if (goalText === '') {
        alert('Please enter a goal.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = goalText;

    // Add Complete Button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
        li.classList.toggle('completed');
    };
    li.appendChild(completeButton);

    // Add Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        goalList.removeChild(li);
    };
    li.appendChild(deleteButton);

    goalList.appendChild(li);
    goalInput.value = '';
}





// leaderboard

// Example student data
const studentsCourses = [
    { name: 'Nikhil Mahour', score: 160 },
    { name: 'Yashwant Tanwar', score: 110 },
    { name: 'satyavathi C H', score: 70 },
    { name: 'Nikhil Mahour', score: 160 },
    { name: 'Yashwant Tanwar', score: 110 },
    { name: 'satyavathi C H', score: 70 },
    { name: 'Nikhil Mahour', score: 160 },
    { name: 'Yashwant Tanwar', score: 110 },
    { name: 'satyavathi C H', score: 70 },
    { name: 'Nikhil Mahour', score: 160 },
    { name: 'Yashwant Tanwar', score: 110 },
    { name: 'satyavathi C H', score: 70 },
    { name: 'Nikhil Mahour', score: 160 },
    { name: 'Yashwant Tanwar', score: 110 },
    { name: 'satyavathi C H', score: 70 },
    // Add more students as required
];

const studentsOverall = [
    { name: 'Yashwant Tanwar', score: 300 },
    { name: 'Nikhil Mahour', score: 250 },
    { name: 'satyavathi C H', score: 200 },
    { name: 'Yashwant Tanwar', score: 300 },
    { name: 'Nikhil Mahour', score: 250 },
    { name: 'satyavathi C H', score: 200 },
    { name: 'Yashwant Tanwar', score: 300 },
    { name: 'Nikhil Mahour', score: 250 },
    { name: 'satyavathi C H', score: 200 },
    { name: 'Yashwant Tanwar', score: 300 },
    { name: 'Nikhil Mahour', score: 250 },
    { name: 'satyavathi C H', score: 200 },
    { name: 'Yashwant Tanwar', score: 300 },
    { name: 'Nikhil Mahour', score: 250 },
    { name: 'satyavathi C H', score: 200 },
    // Add more students as required
];

const leaderboard = document.getElementById('leaderboard');
const coursesTab = document.getElementById('courses-tab');
const overallTab = document.getElementById('overall-tab');

function renderLeaderboard(students) {
    leaderboard.innerHTML = '';
    students.sort((a, b) => b.score - a.score);
    students.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.innerHTML = `<span class="rank">${index + 1}</span> ${student.name} <span>${student.score} XP</span>`;
        leaderboard.appendChild(studentDiv);
    });
}

coursesTab.addEventListener('click', () => {
    renderLeaderboard(studentsCourses);
    coursesTab.classList.add('active');
    overallTab.classList.remove('active');
});

overallTab.addEventListener('click', () => {
    renderLeaderboard(studentsOverall);
    overallTab.classList.add('active');
    coursesTab.classList.remove('active');
});

// Initial render
renderLeaderboard(studentsCourses);