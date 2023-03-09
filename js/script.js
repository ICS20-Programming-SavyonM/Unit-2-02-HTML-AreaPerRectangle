// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2022
// This file contains the JS functions for index.html
function calperm() {
  let fdigit = document.getElementById("1digit").value;
  let sdigit = document.getElementById("2digit").value;
  document.getElementById('add-math').innerHTML = 'Perimeter: 2(5+10) = ' + (30);
}

function area() {
  document.getElementById('area').innerHTML = 'Area: 5 x 10 = ' + (50);
}a
function doMathClicked () {
  // this function does basic math
  calperm()
  area()

}

