/**
 * Created by Tony on 2015/8/12.
 */
'use strict';

angular.module("myApp.login", ['ngRoute'])

.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/login",{
            templateUrl: "login/login.html",
            controller: "LoginController"
        });
    }])

.controller("LoginController", ["$scope", function($scope){
        $scope.user={
            username: "",
            password: ""
        }

        var user = $scope.user;
        $scope.onSignIn = function(){
            //TODO: validate the username and password is or not empty.
            console.log("The username is "+user.username+", and the password is "+user.password);
            //TODO: call accessService to sign in the system.

        }
    }]);