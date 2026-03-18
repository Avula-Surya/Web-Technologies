// Define the Course class
class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    // Method to display course details
    displayCourse() {
        console.log(`Course: ${this.courseName}, Instructor: ${this.instructor}`);
    }
}

// Instantiate the class (Create a new course object)
let course1 = new Course("Web Technologies", "Dr. Kumar");

course1.displayCourse();

// Implement a Promise for enrollment
let enrollCourse = new Promise((resolve, reject) => {
    let seatsAvailable = true; // Simulating the condition

    if (seatsAvailable) {
        resolve("Enrollment Successful");
    } else {
        reject("Course Full");
    }
});

// Handling the Promise result
enrollCourse
    .then(msg => {
        console.log(msg);
        //alert(msg);
    })
    .catch(err => {
        console.log(err);
        //alert(err);
    });