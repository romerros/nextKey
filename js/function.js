function getNextLockerNumber(lockers) {
    for (var i = 0; i < lockers.length; i++) {
          if (i == 0 && lockers[i] == 0 && lockers[i+1] == 0) {
              return i;
          }
          if (lockers[i] == 0 && lockers[i-1] == 0 && lockers[i+1] == 0) {
              return i;
          }
          if (i == lockers.length -1 && lockers[i] == 0 && lockers[i-1] == 0) {
              return i;
          }
    }
    for (i = 0; i <= lockers.length; i++) {
          if (lockers[i] == 0) {
              return i;
          }
    }
    return -1;
}