function getNextLockNum(doors) {
    for (var i = 0; i < doors.length; i++) {
          if (i == 0 && doors[i] == 0 && doors[i+1] == 0) {
              return i;
          }
          if (doors[i] == 0 && doors[i-1] == 0 && doors[i+1] == 0) {
              return i;
          }
          if (i == doors.length -1 && doors[i] == 0 && doors[i-1] == 0) {
              return i;
          }
    }
        for (i = 0; i < doors.length; i++) {
              if (doors[i] == 0) {
                return i;
              }
        }
    return -1;
}