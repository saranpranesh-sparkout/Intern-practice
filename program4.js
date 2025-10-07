let students = [];
function addStudent(id, name, age, grade) {
let student = { id, name, age, grade };
students.push(student);
console.log(`Student ${name} added successfully.`);
}
function viewStudents() {
 console.log("All Students:");
students.forEach(student => {
console.log(student);
 });
}
function updateStudent(id, newData) {
let student = students.find(s => s.id === id);
if (student) {
Object.assign(student, newData); // update properties
console.log(`Student with ID ${id} updated successfully.`);
} else {
 console.log(`Student with ID ${id} not found.`);
 }
}
function deleteStudent(id) {
let index = students.findIndex(s => s.id === id);
if (index !== -1) {
let removed = students.splice(index, 1);
console.log(`Student ${removed[0].name} deleted successfully.`);
} else {
console.log(`Student with ID ${id} not found.`);
}
}
function searchStudent(name) {
let result = students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
console.log(`Search results for "${name}":`);
console.log(result);
}

function filterByGrade(grade) {
let result = students.filter(s => s.grade === grade);
console.log(`Students in Grade ${grade}:`);
console.log(result);
}
addStudent(1, "Saran", 22, "A");
addStudent(2, "Tamil", 24, "B");
addStudent(3, "sanjai", 23, "A");

viewStudents();
updateStudent(2, { age: 22, grade: "A" });
deleteStudent(3);
searchStudent("Saran");
filterByGrade("A");
