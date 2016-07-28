import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Schools } from '../schools.js';
import { Courses } from '../../courses/courses.js';
import { Teachers } from '../../teachers/teachers.js';
import { Students } from '../../students/students.js';

/*
--::TODO::--
*/

Meteor.publishComposite('student.courses', function studentsSchedule(studentId) {
  new SimpleSchema({
    studentId: { type: String },
  }).validate({ studentId });
  
  const userId = this._id;
  
/*  return {
    find() {
      const query = {
        
      };
      
      const options ={
        fields : { _id: 1 },
      };
      
      return Students.find(query,options);
    },
    
    
  };*/
});