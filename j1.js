var  maths=60
var  eng=90
var  phy=90
var  chem=60
var  bio=70
var  py=90
var sum=maths+eng+phy+chem+bio+py
var avg=(sum/6).toFixed(2)
document.write("Average marks:",avg)
alert("Page Contains Avg marks")
document.write("<br> ")
// if (avg<50){
//     document.write("Needs improvment")
//     }

// else{
//     document.write("Fair Score")
// }

switch(avg){
    default:
        document.write("Average Marks: ",avg)
        document.write("<br>")
        break;

    case (avg<50):
        document.write("Average Marks: ",avg)
        document.write("<br>")
        document.write("Needs Improvement")
        document.write("<br>")
        break;
 
    case (50>avg>80):
        document.write("Average Marks: ",avg)
        document.write("<br>")
        document.write("Good Marks")
        document.write("<br>")
        break;

    case (50>avg>90):
        document.write("Average Marks: ",avg)
        document.write("<br>")
        document.write("Excellent")
        document.write("<br>")
        break;

}

