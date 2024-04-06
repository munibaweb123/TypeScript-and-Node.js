/**Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade. */

function grade(score:number){
    if(score>=80){
        return("Grade A")
    }
    else if(score>=70 && score<80){
        return("Grade B")
    }
    else if(score>=60 && score<70){
        return("Grade C")
    }
    else if(score>=50 && score<60){
        return("Grade D")
    }
    else{
        return("Grade F")
    }

}
console.log(grade(45));
console.log(grade(89));