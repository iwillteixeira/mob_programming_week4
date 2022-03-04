let fiveMultiple = (grade) =>{
    let counter = 0;
    while (grade % 5 != 0) {
        grade++;
        counter++;
    }
    return counter;
}

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    grades.forEach(e=>{
        let difference = fiveMultiple(e);
        let finalGrade = difference + e;
        if ((difference < 3) && (finalGrade >= 40)) {
            roundedGrades.push(finalGrade);
        } else {
            roundedGrades.push(e);
        }
    })
    return roundedGrades;

}

console.log(gradingStudents([73,67,38,33]))