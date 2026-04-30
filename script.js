function loadCourses() {

    let courses = [
        { name: "HTML", progress: 80 },
        { name: "CSS", progress: 60 },
        { name: "JavaScript", progress: 40 }
    ];

    let output = "<h2>My Courses</h2>";

    courses.forEach(course => {
        output += `
            <div>
                <h3>${course.name}</h3>
                <progress value="${course.progress}" max="100"></progress>
                <p>${course.progress}% Completed</p>
            </div>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

function showDeadlines() {
    let output = `
        <h2>Deadlines</h2>
        <ul>
            <li>HTML Project - 20 April</li>
            <li>JavaScript Quiz - 22 April</li>
            <li>Python Assignment - 25 April</li>
        </ul>
    `;

    document.getElementById("output").innerHTML = output;
}

function showWelcome() {
    document.getElementById("output").innerHTML =
    "<h2>Welcome to CodeMaster 🚀</h2>";
}

function clearData() {
    document.getElementById("output").innerHTML = "";
}
function getUsers() {

    let output = "<h2>Loading...</h2>";
    document.getElementById("output").innerHTML = output;

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let output = "<h2>Users (From API)</h2>";

        for (let i = 0; i < data.length; i++) {
            output += `
                <div>
                    <h3>${data[i].name}</h3>
                    <p>Email: ${data[i].email}</p>
                </div>
            `;
        }

        document.getElementById("output").innerHTML = output;
    })
    .catch(function(error) {
        document.getElementById("output").innerHTML =
        "<h2>API Error </h2>";
    });
}
