// 4-update_student_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
        return [];
    }

    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A'
            };
        });
}

module.exports = updateStudentGradeByCity;

