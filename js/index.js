$(document).on('ready', function() {
    
        var $lockers;
    $('button.nextLocker').on('click', function() {
        $lockers = $('div.locker');
        var massivForFunction = [];
        var $index;
        for (var i = 0; i < $lockers.length; i++) {
            massivForFunction[i] = $lockers.eq(i).data("lockerstatus");
        }
          
            $index = getNextLockerNumber(massivForFunction);
            selectLocker($lockers.eq($index));
        
        if ($index == -1) {
            alert('No free lockers found');
            $('button.nextLocker').attr('disabled', "disabled").addClass("button--disabled");
        };
    });
    
    $('#block').delegate("div", 'click', function() {
        deSelectLocker($(this));
        $('button.nextLocker').removeAttr("disabled").removeClass("button--disabled");
    });
                       //Adding new locker by button (+)
    var k;
    var newDiv = {};
    $('button.addLocker').on('click', function() {
        newDiv = document.createElement('div');
        $(newDiv).attr({
            'id': 'newLocker',
            'data-lockerstatus': '0',
            'class': 'locker animated bounce'
        });
        var $summeryLockersNow = $('div');
            for (var i = 0; i < $summeryLockersNow.length; i++) {
            k = i + 1;
            newDiv.innerHTML = k;
        };
        var cont = document.getElementById('block');
        cont.appendChild(newDiv);
        $('#newLocker:last-child').append('<button class="trashBox" title="Delete Locker" ><span class="trash1"></span><span class="trash2"></span></button>');
        $('.trashBox').hide();
    });
                       //CheckBox function
        $('.trashBox').hide();
        $('.unlockTrashBox').on("click", function() {
            $('.trashBox').toggle().animate;
        });
});

function selectLocker($lockers) {
    $lockers.addClass('locker--locked');
    $lockers.data('lockerstatus', 1);
};

function deSelectLocker($lockers) {
    $lockers.removeClass('locker--locked');
    $lockers.data('lockerstatus', 0);
};