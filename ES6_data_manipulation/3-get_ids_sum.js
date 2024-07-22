// 3-get_student_ids_sum.js

function getStudentIdsSum(students) {
    if (!Array.isArray(students)) {
        return 0;
    }
    return students.reduce((sum, student) => sum + student.id, 0);
}

module.exports = getStudentIdsSum;

