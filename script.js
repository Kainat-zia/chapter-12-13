// // Q1
// let studentname = []
// console.log("john","sarah","eman")

// // Q2
// let students = new array()
// console.log("john","sarah", "eman");

// // Q3
// let studentNames = ["Alice", "Bob", "Charlie", "David"];

// // Q4
// let num = [1,2,3,4,5,6,,7]

// // Q5
// let boolian = ["true","false"]

// // Q6
// let mixedArray = [1,"ali","true",54,"false"]


// Q7
let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phill", "PhD"]
document.write ("<h3>Qualification</h3>")
document.write("<ol>")
for (let i = 0;i<=7; i++){
    document.write("<li><b>" + qualification[i] +"</b> </li>")
}
document.write("</ol>")

// Q8
let StudentsName = ["Michael","John","Tony"]
let score1 = [320]
let score2 = [230]
let score3 = [480]
let totalmarks =  500;

for(let i = 0; i< StudentsName.length; i++){
    let percentage = (score1[i] / totalmarks)* 100;
    let Percentage = (score2[i] / totalmarks)* 100;
    let PercenTage = (score3[i] / totalmarks)* 100;
    document.write("Score of Michael is " + score1 + ".  " + "Percentage:"+ percentage +'.' +"<br>" + "Score of John is " + score1 + ". " + "Percentage:"+ Percentage +'.' +"<br>" + "Score of Tony is " + score3 + "." +"Percntage:"+ PercenTage +':'+"<br>" )
}

// q9
// let colors = ["pink",'red',"orange","blue","purple","yellow","green"]
// document.write("<h3>" +"original array" + colors + "</h3>")
// let newcolor = prompt("what color do you want to add in the beginning")
// colors.unshift(newcolor)
// document.write ("updated array:" + colors + "<br>")

// let Colors = ["pink",'red',"orange","blue","purple","yellow","green"]
// document.write("<h3>" +"original array" + Colors + "</h3>")
// let new_color = prompt("what color do you want to add in the end")
// Colors.push(new_color)
// document.write ("updated array:" + Colors + "<br>")


let Colours = ["pink",'red',"orange","blue","purple","yellow","green"]
document.write("<h3>" +"original array:" + Colours + "</h3>")
let New_color = prompt("what color do you want to add two more colors in the beginning")
Colours.unshift(New_color)
document.write ("updated array:" + Colours + "<br>")

let Colourss = ["pink",'red',"orange","blue","purple","yellow","green"]
document.write("<h3>" +"original array:" + Colourss + "</h3>")
let New_colors = prompt("what color do you want to add two more colors in the beginning")
Colours.pop (New_colors)
document.write ("updated array:" + Colourss + "<br>")
