//Student Name: Renay Hernandez
//Student ID: 1225941316
//Date: 09/2/2023
var students = [];

var student = {
    name: 'Joan Smith',
    birthYear: 2002,
    course: 'IFT 458',
    grade: 90,
    active: true,
    age: function calculate(){
        if(this.active){
            return 2022 - this.birthYear;
        }   
    } 
}

var student2 = {
    name: 'Andy Moore',
    birthYear: 2000,
    course: 'IFT 458',
    grade: 100,
    active: false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        }
        else{
            return 0;
        }   
    } 
}

students.push(student); //adds student object to array
students.push(student2); //adds student2 object to array
students.forEach((item)=> console.log(item.age));

console.log(students);
//console.log(student['name']);
//console.log(student.name);
//console.log(student2.age());
//console.log(student.age());