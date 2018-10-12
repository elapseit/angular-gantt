(function() {
    'use strict';
    angular.module('gantt').factory('GanttTasksManager', ['GanttRow', 'ganttArrays', '$filter', '$timeout', 'moment', function() {
        var TasksManager = function(gantt) {
            //var self = this;

            this.gantt = gantt;

            //this.gantt.api.registerMethod('tasks', 'updateStyle2', TasksManager.prototype.updateTaskStyle, self);
            
            //this.gantt.api.registerEvent('tasks', 'add');
            

            //this.updateVisibleObjects();
        };

        return TasksManager;
    }]);
}());
