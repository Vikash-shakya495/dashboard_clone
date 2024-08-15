<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="sidebar">
        <div class="logo-image">
            <img src="./images/gyantech.jpg" alt="">
        </div>
        <div class="logo">
            <h1>GYANTECH</h1>
            <h3>Learn Smart Learn Anytime</h3>
        </div>
        <ul class="nav">
            <li><a href="#"><img src="./images/dashboard.png" alt=""> Dashboard</a></li>
            <li><a href="#"><img src="./images/enroll.png" alt=""> Enrolled Courses</a></li>
            <li><a href="#"><img src="./images/activity.png" alt=""> My Quiz Attempts</a></li>
            <li><a href="#"><img src="./images/male.png" alt="">My Instructor</a></li>
            <li><a href="#"><img src="./images/online-course.png" alt="">My Courses</a></li>
            <li><a href="#"><img src="./images/my-profile.png" alt=""> My Profile</a></li>
            <li><a href="./login.html"><img src="./images/logout.png" alt=""> Log out</a></li>
        </ul>
    </div>
    <div class="main-content">
        <div class="top-bar">
            <span>Dashboard</span>
            <span class="student-name">Student Name</span>
        </div>
        <div class="content">
            <div class="working">
                <div class="streak">
                    <h2>Consistency on Platform</h2>
                    <div id="streak-info">
                        <div id="current-streak">Current Streak: <span id="current-days">0</span> <img
                                src="./images/fire.png" alt=""></div>
                        <div id="longest-streak">Longest Streak: <span id="longest-days">0</span> <img
                                src="./images/fire.png" alt=""></div>
                    </div>
                    <div id="calendar"></div>
                    <!-- Streak content goes here -->
                </div>
                <div class="goal">
                    <h2>Goal Setting</h2>
                    <div class="goal-setting-container">
                        <label for="goal">Set a New Goal:</label>
                        <input type="text" id="goal" placeholder="Enter your goal">
                        <button onclick="addGoal()">Add Goal</button>
                    
                        <ul class="goal-list" id="goal-list">
                            <!-- Dynamic goal items will be inserted here -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="leaderboard-container">
                <div class="tabs">
                    <div class="tab active" id="courses-tab">Courses</div>
                    <div class="tab" id="overall-tab">Overall</div>
                </div>

                <div class="leaderboard" id="leaderboard">
                    <!-- Dynamic student entries will be inserted here -->
                </div>

                <div class="your-rank">
                    Your Rank!<br>
                    <span id="your-rank-name">vikash</span> <span id="your-rank-score">0 XP</span>
                </div>
            </div>
            <!-- Leaderboard content goes here -->
        </div>
        <div class="progress-chart">
            <h2>Progress Chart</h2>
            <div></div>
            lore.
            Provident, a architecto. Ab quibusdam quia eius dolor, pariatur assumenda officiis facilis repudiandae,
            as eius fugiat, tempora id debitis repellat hic magni in rem iste, quis neque.
            Dignissimos, minima earum aspernatur dicta error eos fuga quaerat odit sequi temporibus commodi odio dolore
            deserunt quas sed debitis quod placeat delectus culpa, itaque suscipit ducimus quia mollitia. Architecto,
            aliquam?
            Vero, rem. Alias ullam veniam vitae quasi repudiandae expedita voluptas corporis id consectetur ex a velit
            explicabo, deserunt soluta ipsam quae. Rerum a omnis ea fugiat, velit consequuntur enim dolorem.
            <!-- Progress chart content goes here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>

<?php 
$servername = "localhost";
$username = "root"; // Use your actual username if different
$password = ""; // Use your actual password if set
$dbname = "userdata"; // Use the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, exp FROM student ORDER BY exp DESC LIMIT 20";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    // Fetch data into an array
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo $data[name];
}

$conn->close();


?>