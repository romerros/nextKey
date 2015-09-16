$(document).on('ready', function() {
    
    $('button.nextLocker').on('click', function() {
        var lockers = $('div.locker');
        var arr = [];
        var index;
        for (var i = 0; i < lockers.length; i++) {
            arr[i] = lockers.eq(i).data("lockerstatus");
        }
          
        index = getNextLockNum(arr);
        select(lockers.eq(index));
        
        if (index == -1) {
            alert('No free lockers found');
        }
    });
    
    $("div.locker").on('click', function() {
         deSelect ($(this));
    });
});

function select(lockers) {
    lockers.addClass('lockLocked');
    lockers.data('lockerstatus', 1);
};

function deSelect(lockers) {
    lockers.removeClass('lockLocked');
    lockers.data('lockerstatus', 0);
};