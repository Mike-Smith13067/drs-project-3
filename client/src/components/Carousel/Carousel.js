// import React, { Component } from "react";
// // import test from ./images"

// function Carousel(props) {
//     const image0 = require("../../assets/images/image0.jpg")
//     const image1 = require("../../assets/images/image1.jpg")
//     const image2 = require("../../assets/images/image2.jpg")
//     const image3 = require("../../assets/images/image3.jpg")
//     const image4 = require("../../assets/images/image4.jpg")
//     const image5 = require("../../assets/images/image5.jpg")
//     const h20 = "";
//     const h21 = "Diagnostic Test";
//     const h22 = "Brake Test";
//     const h23 = "Fluid Change";
//     const h24 = "Tune Up";
//     const h25 = "Tire Services";

//     const p0 = "";
//     const p1 = "Whether your vehicle is showing obvious signs of a problem or you noticed the check engine light is on, a quick car diagnostic test by an expert technician can help pinpoint the problem.";
//     const p2 = "The brake inspection typically involves checking the brake components according to manufacturer's guidelines. For example, measuring the brake pad or brake shoe material thickness and inspecting brake discs. If there are signs that pads or caliper guide (slide) pins are not moving freely, DRS Automotive may recommend servicing your brakes.The disc brake service includes removing the pads and calipers, cleaning and lubricating guide pins and the caliper brackets to prevent sticking or seizing. The brake discs (rotors) might also need to be cleaned out from the surface rust, especially on the edges, to prevent squeaking.";
//     const p3 = "Checking fluid levels regularly and changing the fluids and filters periodically can minimize the risks of breakdowns and prolong the life of the engine, transmission, cooling system and brakes. So, if you are driving a (maintenance challenged) vehicle, isn't it about time to start paying closer attention to the fluids and filters?";
//     const p4 = "Regular engine tune-ups restore power and efficiency back to your car. At DRS Auto Services we'll visually inspect your engine components. Install new parts (including spark plugs, fuel and air filters) as necessary, adjust timing and idle settings if applicable, and provide fuel system cleaning services to restore fuel system performance.  By following your vehicle manufacturer's recommendations, you're investing in your vehicle's longevity. Saving you time and money in the long run.  Contact us today to find out additional information.";
//     const p5 = "Properly maintained tires will give you a safer, more comfortable ride and a longer tread life. Tire component properties evolve over time. For each tire, this evolution depends upon many factors such as weather, storage conditions, and conditions of use (load, speed, inflation pressure, maintenance etc.) to which the tire is subjected throughout its life. In addition to regular inspections and inflation pressure maintenance by consumers, it is recommended to have passenger car tires and light truck tires, including spare tires, inspected regularly by a qualified tire specialist, such as a tire dealer, who will assess the tire's suitability for continued service.";

//     const slides = document.querySelectorAll('.slide');
//     const next = document.querySelector('#next');
//     const prev = document.querySelector('#prev');
//     const auto = true; // Auto scroll
//     let intervalTime = 4000;
//     let counter = 1;
//     let counterh2 = 1;
//     let counterp = 1;
//     let slideInterval;

//     const nextSlide = () => {
//         counter++
//         if (counter >= 6) {
//             counter = 0
//         }
//         counterh2++
//         if (counterh2 >= 6) {
//             counterh2 = 0
//         }
//         counterp++
//         if (counterp >= 6) {
//             counterp = 0
//         }
//         var imageArray = [image0, image1, image2, image3, image4, image5];
//         var h2Array = [h20, h21, h22, h23, h24, h25];
//         var pArray = [p0, p1, p2, p3, p4, p5];
//         var image = imageArray[counter];
//         var subheader = h2Array[counterh2];
//         var subtext = pArray[counter];


//         var currentImage = document.getElementById("current-image");
//         currentImage.setAttribute("src", image);

//         var currentSubheader = document.getElementById("subheader");
//         currentSubheader.innerHTML = "";
//         currentSubheader.append(subheader);

//         var currentSubtext = document.getElementById("subtext");
//         currentSubtext.innerHTML = "";
//         currentSubtext.append(subtext);
//         return image, subheader, subtext;
//     };
//     const prevSlide = () => {
//         // Get current class
//         const current = document.querySelector('.current');
//         // Remove current class
//         current.classList.remove('current');
//         // Check for prev slide
//         if (current.previousElementSibling) {
//             // Add current to prev sibling
//             current.previousElementSibling.classList.add('current');
//         } else {
//             // Add current to last
//             slides[slides.length - 1].classList.add('current');
//         }
//         setTimeout(() => current.classList.remove('current'));
//     };
//     // Button events

//     nextSlide();
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }


//     prevSlide();
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// }



// export default  Carousel;