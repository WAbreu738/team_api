


SELECT 
        students.id AS student_id,
        CONCAT(fire_name, '', last_name) AS full_name,
        course_id,
        name,
        type
    FROM students
    JOIN courses
    ON students.course_id = courses.id;
    WHERE courses.id = 3;


