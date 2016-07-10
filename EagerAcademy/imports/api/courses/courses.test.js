import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { _ } from 'meteor/underscore';

import { Courses } from './courses.js';

if(Meteor.isServer) {
  require('./server/publications.js');
  
  describe('courses', function() {
    describe('mutators', function() {
      it('builds correctly from factory', function() {
        const course = Factory.create('course');
        assert.typeOf(course, 'object');
        assert.typeOf(course._id, 'String');
      });
    });
  });
  
  /*
  --::TODO::--
    - Implement more Tests
  */
}