// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2023
// This file contains the JS functions for index.html
function calperm() {calperm
  let fdigit = document.getElementById("2digit").value;
  document.getElementById('add-math').innerHTML = 'Perimeter: 2(5+10) = ' + (30);
}calperm


function area() {area
 let fdigit = document.getElementById('1digit').value;
   document.getElementById('add-math').innerHTML = 'Area: 5 x 10 = ' + (50);
}area
function doMathClicked () {
  // this function calculates value
  calperm()
  area()

}

