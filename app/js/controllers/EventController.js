/**
 * Created by Jaideep on 19-03-2016.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = '<span style="color:red">This is the title from ng-bind html</span>';
        $scope.boolValue = false;
        $scope.date = new Date();
        $scope.myStyless = {color:'darkgoldenrod'};
        $scope.myCustomClass = 'sessNameCss';
        $scope.forEvenElem = 'sessEvenAuthors';
        $scope.forOddElem = 'sessOddAuthors';
        $scope.event =  {
            name: 'Angular Boot Camp',
            date: '19/03/2015',
            time: '10.30 am',
            location:{
                address: '15a, 1st cross street',
                city: 'chennai',
                province: 'tamilnadu'
            },
            imageUrl: './img/angularjs-logo.png',
            sessions:[
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Jaideep',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Basic Abstract',
                    upVoteCount: 3
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'Scopes are passed as parameters in controller and its used to interact with views. you will also learn two way binding between views and scope in this session',
                    upVoteCount: 2
                },
                {
                    name: 'Well behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are building blocks of angular js. You will learn complete info about controllers in this session',
                    upVoteCount: 1
                }
            ]
        };
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
    }
);