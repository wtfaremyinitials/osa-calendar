var osa = require('osa');

var Calendar = {};

Calendar.getCalendars = function(cb) {
    osa(function() {
        var Calendar = Application('Calendar');
        var $calendars = Calendar.calendars;

        var calendars = [];

        for(var i=0; i<$calendars.length; i++) {
            calendars[i] = {
                name:        $calendars[i].name(),
                uid:         $calendars[i].uid(),
                description: $calendars[i].description(),
            };
        }

        return calendars;
    }, cb);
};

module.exports = Calendar;
