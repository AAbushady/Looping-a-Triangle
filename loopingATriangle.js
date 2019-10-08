/*global console*/
/*jshint esversion:6*/

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

(function () {
    "use strict";

    // Constants and Variables
    const loopAmount = 7;
    let originalString = "";

    // Takes in a string and adds a hash symbol to the end.
    function hashAdd(String) {
        return originalString += "#";
    }

    // Loop while loopAmount is less then the length of the string.
    // Outputs the result at the end of each loop.
    for (let cnt = originalString.length; cnt < loopAmount; cnt++) {
        originalString = hashAdd(originalString);
        console.log(originalString);
    }
})();
