"use strict";

const tabLinks = Array.from(document.querySelectorAll("div.tab-header a"));

tabLinks.forEach(function(link){
  link.onclick = function(e){
    e.preventDefault();
    
    //find currently active a and div
    const prevActive = document.querySelector(".tab-header a.active");
    const prevActiveDiv = document.querySelector(".tab-body div.active");

    //remove active class from previous active a and div
    prevActive.classList.remove("active");
    prevActiveDiv.classList.remove("active");

    //add active to clicked a
    this.classList.add("active");

    //find div related to a and add active to that div
    const href = this.getAttribute("href");
    document.querySelector(href).classList.add("active")
  }
})