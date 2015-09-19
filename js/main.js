var todoApp = angular.module('todoList', []);
        todoApp.controller('todoListController', ['$scope', function ($scope) {
            $scope.name = 'to-do list';
            $scope.data = {};
            $scope.tasks = [
                {'title':'Learn some stuff', 'done':false}, 
                {'title':'Code some stuff', 'done':false},
                {'title':'Code some more', 'done':false}
            ];
            
            $scope.addTask = function submitTask() {
                $scope.tasks.push($scope.data.task);
                $scope.data.task = '';
            }
                        
            $scope.markAsDone = function markAsDone() {
                return $scope.tasks.done;
            }
            
            $scope.deleteTask = function deleteTask() {
                $scope.tasks.splice($scope.data.task);
            }
            
            $scope.clearCompleted = function(){}
        }]);