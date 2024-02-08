//Practice JavaScript for Revision

//1 Objects in JavaScript

var Students_Name = {
    first_Student : {
        First_Name : "Abdul Rehman",
        Last_Name : "Muhammad Mustafa",
        Age : 18,
        Roll_No : "2K22-SE-12",
        Degree : "Software Engineering",
    }
}

console.log(Students_Name);

//2 Arrays in JavaScript

var Students_Marks = [29, 88, 93, 73, 48, 66];

Students_Marks[0] = Students_Marks[0] + "<br>";

Students_Marks[1] = Students_Marks[1] + "<br>";

Students_Marks[2] = Students_Marks[2] + "<br>";

Students_Marks[3] = Students_Marks[3] + "<br>";

Students_Marks[4] = Students_Marks[4] + "<br>";

Students_Marks[5] = Students_Marks[5] + "<br>";

document.write(Students_Marks + "This is a length of our array " + Students_Marks.length + "<br>");

//3 Operators in JavaScript

//1 Arithmetic Operator

var one = "1. Arithmetic Operator" + "<br>";

document.write(one);

var a = 29;

var b = 33;

document.write(a + b);

//2 Assignment Operator

var c = 38;

var d = 77;

document.write(c+=d);