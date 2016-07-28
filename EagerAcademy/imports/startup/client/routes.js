import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Factory } from 'meteor/factory';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
import '../../ui/accounts/accounts-templates.js';
import '../../ui/layouts/app-body.html';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
      console.log("FlowRouter: Rendered Homepage");
      BlazeLayout.render('App_Body', { main: 'main' });

  }
});

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});

FlowRouter.route('/students', {
  name: 'App.studentLoginPage',
  action() {
    BlazeLayout.render('App_Body', { main: 'student_login_page' });
  }
});

/*
** GET relavent student data
      - Courses
      - Points
      - Assignments
*/
FlowRouter.route('/studentData/:studentId', {
  name: 'App.student.home',
  action: function(params, queryParams){
    //TODO
  }
});

/*
** GET relavent teacher data
      - Courses
*/
FlowRouter.route('/teacherData/:teacherId', {
  name: 'App.teacher.home',
  action: function(params, queryParams){
    //TODO
  }
});

/*
** GET relevant course data
      - Students in course
      - Teacher of course
      - Assignments for course
*/
FlowRouter.route('/courseData/:courseId', {
  name: 'App.course',
  action: function(params, queryParams){
    //TODO
  }
});

/*
** TEMPLATE ROUTES
** ::START::
*/
FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Lists_show_page' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});
/*
** ::END::
*/