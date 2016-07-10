import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { _ } from 'meteor/underscore';

import { Students } from './students.js';

if(Meteor.isServer) {
  require('./server/publications.js');
  
  describe('students', function() {
    describe('mutators', function() {
      it('builds correctly from factory', function() {
        const student = Factory.create('todo');
        assert.typeOf(student, 'object');
        assert.typeOf(student.userId, 'String');
      });
    });
  });
  
  
  //TODO:: More Tests
}

