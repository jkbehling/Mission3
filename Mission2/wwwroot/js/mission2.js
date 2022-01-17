$("#submit").click(function () {
    var assignmentWeight = 0.55
    var gpWeight = 0.05
    var quizWeight = 0.10
    var examWeight = 0.20
    var INTEXWeight = 0.1
    var finalGrade = (parseFloat($("#ass").val()) * assignmentWeight + parseFloat($("#gp").val()) * gpWeight + parseFloat($("#quizes").val()) * quizWeight + parseFloat($("#exams").val()) * examWeight + parseFloat($("#INTEX").val()) * INTEXWeight);
    var letterGrade = ""
    if (finalGrade > 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E"
    }

    alert("Final Percentage: " + finalGrade + "\nFinal Grade: " + letterGrade);
    
})