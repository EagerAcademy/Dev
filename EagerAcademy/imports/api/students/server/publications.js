import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Students } from '../students.js';
import { Courses } from '../../courses/courses.js';
import { Teachers } from '../../teachers/teachers.js';

/*
--::TODO::--
** Publish all student data (including enrolled courses) to the client after
*/
Meteor.publishComposite('student.info', function studentsInfo(studentId) {
  new SimpleSchema({
    studentId: { type: String },
  }).validate({ studentId });

  const student_id = this._id;

  return Students.find(
    { _id: student_id, },
    { fields: Students.publicFields, });

  /* Alternative Query Method
  return {
    find() {
      const query = {
        _id: student_id,
      };
      const options ={
        fields : { _id: 1 },
      };
      return Students.find(query,options);
    },
    children: [{
      find(student) {
        return
      },
    }],
  };*/
});
