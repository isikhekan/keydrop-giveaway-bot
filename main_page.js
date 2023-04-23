// ==UserScript==
// @name         main_page_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://key-drop.com/tr/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=key-drop.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("onloadoff");
    setInterval(()=>{
        console.log("intervalStart")
        window.location.href = "https://key-drop.com/tr/giveaways/list/";
        if(window.location.href == "https://key-drop.com/tr/giveaways/listhttps://key-drop.com/tr/giveaways/list"){
            window.sleep(1);
            var pageGiveawayButtons = document.getElementsByClassName("button ml-2.5 h-11 w-28 px-3.5 text-[10px] sm:ml-4 button-light-green")
            var giveawayButton = pageGiveawayButtons[pageGiveawayButtons.length -1];
            giveawayButton.click();
            if(window.location.href != "https://key-drop.com/tr/giveaways/list") {
                var giveawayEnterButton = document.getElementsByClassName("button mt-4 h-13 w-full whitespace-normal bg-gold text-left leading-none text-navy-900 hover:bg-gold-400 disabled:bg-navy-400 disabled:text-navy-100")[0];
                giveawayEnterButton.click();
            }
    }},1000)
})();