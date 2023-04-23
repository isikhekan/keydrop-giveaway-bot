// ==UserScript==
// @name         giveaway_enter_page_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://key-drop.com/tr/giveaways/keydrop/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=key-drop.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    setInterval(()=>{
    var giveawayEnterButton = document.getElementsByClassName("button mt-4 h-13 w-full whitespace-normal bg-gold text-left leading-none text-navy-900 hover:bg-gold-400 disabled:bg-navy-400 disabled:text-navy-100")[0];
    giveawayEnterButton.click();
    setTimeout(() => {
      if(giveawayEnterButton.disabled == true) window.location.replace("https://key-drop.com/tr/");
    }, 15000);
},1000);
})();