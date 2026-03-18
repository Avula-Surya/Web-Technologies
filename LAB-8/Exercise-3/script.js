class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }
    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}
function enroll() {
    let courseName = document.getElementById("course").value;
    let instructor = document.getElementById("instructor").value;
    let course1 = new Course(courseName, instructor);
    let output = course1.displayCourse() + "<br>";
    let enrollCourse = new Promise((resolve, reject) => {
        let seatsAvailable = true; 
        if (seatsAvailable)
            resolve("Enrollment Successful");
        else
            reject("Course Full");
    });
    enrollCourse
        .then(msg => {
            output += msg;
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => {
            output += err;
            document.getElementById("output").innerHTML = output;
        });
}