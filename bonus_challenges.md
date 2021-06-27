###############
### PHASE 1 ###
###############

* Create a Decrement button (e.g. in case someone leaves the station)
But it should not be able to count below 0

* Create a Delete entries button that deletes all entries on the page
But have it only work on double clicks, not single clicks

* Add a timestamp in parentheses after the count, e.g. "4 (7:30) - "

Hint:
Google "get time of day javascript" -> https://tecadmin.net/get-current-date-time-javascript/

* Render the entries in an unordered list instead of a paragraph. You will need to use .innerHTML instead of just .textContent. Render the count and timestamp in different HTML elements inside the <li> element. This will give you more freedom in how to style it. Can you improve the styling?

* Create an "entries" array that stores each entry as an object in the array.
The object should contains both the count and a timestamp:
    {
        count: 12,
        timestamp: "8:36"
    }

* Create a render function that takes care of rendering out all the entries in the "entries" array (instead of rendering out just one entry at a time in the save() function). Call this render function each time the user saves.

###############
### PHASE 2 ###
###############

* Implement localStorage so that the entires don't get wiped out in case you refresh by a mistake

* Change the styling to make it your own! Have it count something that interests you.
Find a nice font (either web-safe or via Google Fonts), a color palette, background image, and overall styling to match it. Improve the user interface of the buttons.

* Can you refactor the code? Make it DRYer?
    * Wrap the "time-of-day" code in a function, getTime()?
    * Create a function that updates the count on the page (e.g. setCount(count))

* Do you have ideas for even more features?
