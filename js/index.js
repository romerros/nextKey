$(document).on('ready', function () {

    $('button.nextLocker').on('click', function () {
        var $lockers = $('div.locker');
        var lockerValues = [];
        var nextLockerNumber;

        for (var i = 0; i < $lockers.length; i++) {
            lockerValues[i] = $($lockers[i]).data('isfree');
        }

        nextLockerNumber = getNextLockerNumber(lockerValues);
        $('div.locker').eq(nextLockerNumber).css('background-color', 'rgba(255, 0, 128, 0.55)');
    }); 
});
