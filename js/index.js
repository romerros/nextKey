$(document).on('ready', function() {
    //Adding new Locker
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
    
    //Disabling NextKey Button        
        $('.locker').on('click', function() {
            deSelectLocker($(this));
            $('button.nextLocker').removeAttr("disabled").removeClass("button--disabled");
        });
    
    //Adding new locker by button (+)
    $('button.addLocker').on('click', function() {
        if ($('.unlockTrashBox').prop('checked')) {
            $('.unlockTrashBox').removeAttr('checked');
            alert('Checkbox is checked\nPlease click "Ok" to continue');
            $('.trashBox').hide();
            return;
        }
        
        var $summeryLockersNow = $('div.locker');
        var k = $summeryLockersNow.length + 1;
        var locker = $($('#block div.locker')[0]).clone(true);
        $(locker).appendTo('.conteiner');
        $('p:last').text(k);
        
        //Trashbox function
        $('.trashBox').on('click', function() {
            $(this).parent().remove();
        });
    });
    
    //CheckBox function
    $('.trashBox').hide();
    $('.unlockTrashBox').on("click", function() {
        $('.trashBox').toggle();
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