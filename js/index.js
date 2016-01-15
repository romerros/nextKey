$(document).on('ready', function() {
    
    
    
    $('button.nextLocker').on('click', function() {
        var $lockers = $('div.locker');
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
    
    $("div.locker").on('click', function() {
         deSelectLocker($(this));
        $('button.nextLocker').removeAttr("disabled").removeClass("button--disabled");
    });
    //Adding new locker by button (+)
    $('button.addLocker').on('click', function() {
        var newDiv = document.createElement('div');
        newDiv.className = 'locker';
        newDiv.innerHTML = '12';
        document.body.appendChild(newDiv);
    })
});

function selectLocker($lockers) {
    $lockers.addClass('locker--locked');
    $lockers.data('lockerstatus', 1);
};

function deSelectLocker($lockers) {
    $lockers.removeClass('locker--locked');
    $lockers.data('lockerstatus', 0);   
};