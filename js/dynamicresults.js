var results = angular.module("results", []);

results.controller("resultsController",
    function educationController($scope) {
        $scope.result = {

            thirdYear: {
                gpa: "3.43",
                resultList: [{
                    subjectName: "Work Placement",
                    grade: "Pass"
                }, {
                    subjectName: "Project",
                    grade: "B"
                }, {
                    subjectName: "Advanced Databases",
                    grade: "A"
                }, {
                    subjectName: "Cloud Services",
                    grade: "B+"
                }, {
                    subjectName: "Innovation",
                    grade: "B"
                }, {
                    subjectName: "Operation Systems",
                    grade: "B+"
                }, {
                    subjectName: "Web Design 2",
                    grade: "A"
                }, {
                    subjectName: "Algorithms and Data Structures",
                    grade: "B+"
                }]
            },

            secondYear: {
                gpa: "3.88",
                resultList: [{
                    subjectName: "Information Security",
                    grade: "A"
                }, {
                    subjectName: "Analysis & Design",
                    grade: "A"
                }, {
                    subjectName: "Management Science",
                    grade: "A"
                }, {
                    subjectName: "Networking 1",
                    grade: "B+"
                }, {
                    subjectName: "Networking 2",
                    grade: "A"
                }, {
                    subjectName: "Software Quality",
                    grade: "A"
                }, {
                    subjectName: "Project",
                    grade: "A"
                }, {
                    subjectName: "Web Design",
                    grade: "B+"
                }, {
                    subjectName: "Discrete Maths 2",
                    grade: "A"
                }, {
                    subjectName: "Database 2",
                    grade: "B+"
                }, {
                    subjectName: "Software Devlopment 3",
                    grade: "A"
                }, {
                    subjectName: "Software Development 4",
                    grade: "A"
                }]
            },

            firstYear: {
                gpa: "3.21",
                resultList: [{
                    subjectName: "Operating Systems",
                    grade: "C+"
                }, {
                    subjectName: "Database Fundamentals",
                    grade: "B+"
                }, {
                    subjectName: "Statistics",
                    grade: "B+"
                }, {
                    subjectName: "System Analysis",
                    grade: "B+"
                }, {
                    subjectName: "Software Development 1",
                    grade: "A"
                }, {
                    subjectName: "Software Development 2",
                    grade: "A"
                }, {
                    subjectName: "Discrete Maths",
                    grade: "B-"
                }, {
                    subjectName: "Business Systems",
                    grade: "B+"
                }, {
                    subjectName: "Interface Design",
                    grade: "B+"
                }, {
                    subjectName: "Social Media",
                    grade: "B+"
                }, {
                    subjectName: "Learning to Learn",
                    grade: "C+"
                }, {
                    subjectName: "Computer Architecture",
                    grade: "B+"
                }]

            }
        }
    });
	