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

Calendar.getEvents = function(cal, cb) {
    if(typeof(cal) == 'object')
        cal = cal.uid;

    osa(function(id) {
        var Calendar = Application('Calendar');
        var $events = Calendar.calendars.byId(id).events;

        var events = [];

        for(var i=0; i<$events.length; i++) {
            events[i] = {
                name:        $events[i].summary(),
                uid:         $events[i].uid(),
                description: $events[i].description(),
                start:       $events[i].startDate(),
                end:         $events[i].endDate()
                /* TODO: More fields to grab */
            };
        }

        return events;
    }, cal, cb);
};

module.exports = Calendar;
