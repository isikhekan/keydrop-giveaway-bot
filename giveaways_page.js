// ==UserScript==
// @name         giveaway_page_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://key-drop.com/tr/giveaways/list/
// @match        https://key-drop.com/tr/giveaways/list
// @icon         https://www.google.com/s2/favicons?sz=64&domain=key-drop.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(()=>{
        console.log("giveawayPage script");
        if (window.location.href.indexOf("giveaways/keydrop/") > -1) {
            location.reload();
        }
        else {
            var pageGiveawayButtons = document.getElementsByClassName("button ml-2.5 h-11 w-28 px-3.5 text-[10px] sm:ml-4 button-light-green");
            var enteredGiveawaysButton = document.getElementsByClassName("button ml-2.5 h-11 w-28 px-3.5 text-[10px] sm:ml-4 button-primary");
            if(enteredGiveawaysButton.length != 0){
                window.location.replace("https://key-drop.com/tr/");
            }
            var giveawayButton = pageGiveawayButtons[pageGiveawayButtons.length -1];
            giveawayButton.click();
        }
    },1000)
})();