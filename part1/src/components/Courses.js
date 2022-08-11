import React from "react";

const Course = ({ course }) => (
  <div>
    <h1> {course.name} </h1>
    <>
      {course.parts.map((part) => (
        <h3 key={part.id}>
          {part.name} {part.exercises}
        </h3>
      ))}
    </>
    <h4>
      Total of{" "}
      {course.parts.reduce((prev, current) => prev + current.exercises, 0)}{" "}
      exercises
    </h4>
  </div>
);

const Courses = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <Course key={course.id} course={course}></Course>
    ))}
  </div>
);

export default Courses;
