//1. Exercise on Control statement

var isPrime = (num) => {
    let i = 2;

    while (i <= num / 2) {
        if (num % i === 0)
            return false;

        i++;
    }
    return true;
}

console.log(isPrime(199));  output : true



var Project = function (id, name, status, description) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.description = description;
}

let project1 = new Project(1, 'HRMS', 'in progress', 'Good');
let project2 = new Project(2, 'Preonboarding', 'new', 'Best');
let project3 = new Project(3, 'ARCI', 'new', 'Awesome');
let project4 = new Project(4, 'MAB', 'complete', 'Superb');
let project5 = new Project(5, 'RMS', 'in progress', 'Excellent');


let projects = [];
for (let index = 1; index < 6; index++) {
    projects.push(eval(`project${index}`));
}

// 2. Exercise on Object

var objHasKeyNValue = (obj) => {

    for (let [prop, val] of Object.entries(obj))
        if (prop === 'status' && val === 'complete')
            return true;
    return false;
}
// console.log(objHasKeyNValue({
//     a : 12,
//     b: 222,
//     status : 'complete'
// })); // output : true;


// 3. Exercise on Arrays 
var projectSearchByID = (id) => {
    return projects.find(el => el.id === id);
}

//console.log(projectSearchByID(1));  output :  Project {id: 1, name: "HRMS", status: "review", description: "Good"}

//     


// 4. Exercise on Functions

// Add the Project...

function addProject(id, name, status, description) {
    let project = new Project(id, name, status, description);
    projects.push(project);
    console.log(projects);

}

//addProject(8, 'Hello', 'complete', 'Best Project');

// Update the status

function updateProjectStatus() {
    projects.forEach(el => {
        if (el.status === 'in progress')
            el.status = 'complete';
    });
}

//updateProjectStatus();
// Delete the Project according to ID...


function deleteProject(id) {
    let index = projects.findIndex(el => el.id === id);
    projects.splice(index, 1);
}

//deleteProject(8);