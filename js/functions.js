function getNextLockerNumber(drner) {
    // find perfect (????) next locker number
    for (var i = 0; i < drner.length; i++) {
        // arajin elementi stugum
        if (i == 0 && drner[i] == 0 && drner[i+1] == 0) { 
            return i;
        }

        // mejtexi elementi stugum
        if (drner[i-1] == 0 && drner[i] == 0 && drner[i+1] == 0) {
            return i;
        }

        // verjin elementi stugum
        if (i == drner.length - 1 && drner[i] == 0 && drner[i-1] == 0) {
            return i;
        }
    }

    // if perfect locker number is not found, then just return first free locker number
    for (i = 0; i < drner.length; i++) {
        if (drner[i] == 0) {
            return i;
        }     
    } 

    // nothing is found, which means all lockers are busy
    return -1;
};