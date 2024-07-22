// 2-get_students_by_location.js

function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.filter(student => student.location === city);
}

module.exports = getStudentsByLocation;

