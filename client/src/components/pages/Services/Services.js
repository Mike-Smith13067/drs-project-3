// https://codepen.io/swightwick/pen/exPXYj

// HTML
// <div class="carousel-container"></div>

// CSS
// SASS variable for media query breakpoint
// $breakpoint-desktop: 992px;
// $shadow: 0px 0px 30px rgba(85, 85, 85, 0.5);
// $animDur: 0.75s;


// body{
//   padding: 0;
//   margin: 0;
//   overflow: hidden;
// }
// // Resetting default styles
// ul {
//   padding: 0;
//   margin: 0;
//   list-style-type: none;
// }

// // Fix for jumping arrows
// .carousel-container {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   min-height: 210px;
// }

// .carousel {
//   position: relative;
// }

// // Carousel slides
// .carousel__slide {
//   margin-right: auto;
//   margin-left: auto;
//   display: none;
//   max-width: 100%;
//   list-style-type: none;
//   text-align: center;
//   &__img{
        
//   }
//   @media (max-width: 991px) {
//     padding-right: 60px;
//     padding-left: 60px;
//   }

//   &--active {
//     display: block;
//   }

// }

// .carousel-slide__img{
//   margin: 0 auto;
//   position: relative;
// }

// // Content of slides
// .carousel-slide__content {
//   margin-bottom: 19px;
//   font-family: 'Open Sans', 'Trebuchet MS', sans-serif;
//   font-size: 16px;

//   @media (max-width: $breakpoint-desktop - 1px) {
//     font-size: 18px;
//   }
// }

// .carousel-slide__year,
// .carousel-slide__title {
//   font-family: 'Roboto', arial, sans-serif;
//   font-size: 14px;

//   @media (min-width: $breakpoint-desktop) {
//     font-size: 16px;
//   }
// }

// .carousel-slide__year{
//   position: absolute;
//   right: -106px;
//   transform: rotate(90deg);
//   top: 31px;
//   font-size: 5rem;
//   font-weight: bold;
//   letter-spacing: -5px;

// }


// .carousel-slide__title {
//     position: absolute;
//     width: auto;
//     background: #fff;
//     padding: 1rem 2rem;
//     font-size: 2rem;
//     box-shadow: $shadow;
//     left: -30px;
// }

// .carousel-slide__content{
//   background: white;
//   position: absolute;
//   bottom: -50px;
//   padding: 1rem;
//   right: -60px;
//   box-shadow: $shadow;
//   max-width: 600px;
// }

// // Carousel arrows
// .carousel__arrow {
//   position: absolute;
//   top: 50%;
//   display: block;
//   color: #111;
//   cursor: pointer;
//   opacity: .75;
//   transform: translateY(-50%);
//   transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

//   &:focus {
//     outline: 0;
//   }

//   &:hover {
//     opacity: .5;
//   }

//   &--left {
//     left: 32px;
//   }

//   &--right {
//     right: 32px;
//   }
// }

// // Carousel indicators
// .carousel__indicators {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//     margin-top: 30px;
//     float: left;
//   li {
//     &:nth-of-type(n + 2) {
//       margin-left: 9px;
//     }
//   }
// }
// .carousel__indicators__holder{
//   max-width: 1080px; 
//   margin: 0 auto;
// }


// .carousel__indicator {
//   display: block;
//   width: 24px;
//   height: 8px;
//   background-color: #111;
//   cursor: pointer;
//   opacity: .15;
//   transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

//   &:hover {
//     opacity: .5;
//   }

//   &--active {
//     &,
//     &:hover {
//       opacity: .75;
//     }
//   }
// }

// .carousel__slide--active{
//   .carousel-slide__year{

//   }
//   .carousel-slide__content{
//    -webkit-animation-duration: $animDur;
//     animation-duration: $animDur;
//     -webkit-animation-name: fadeInRight;
//     animation-name: fadeInRight;
//   }
//   .carousel-slide__img{
//        -webkit-animation-duration: $animDur;
//     animation-duration: $animDur;
//     -webkit-animation-name: fadeIn;
//     animation-name: fadeIn;
//   }
// }

// JS (Babel)
// const { Component } = React;
// const { render } = ReactDOM;

// const carouselContainer = document.querySelector(".carousel-container");

// // Data for carousel
// const carouselSlidesData = [
//   {
//     content:"Whether your vehicle is showing obvious signs of a problem or you noticed the check engine light is on, a quick car diagnostic test by an expert technician can help pinpoint the problem.";
//       "Tomorrow, you will be released. ",
//     title: "Diagnostic Test",
//     image: "https://webcomicms.net/sites/default/files/clipart/144693/auto-repair-images-144693-6818317.jpg"
//   }, {
//     content:
//       "The brake inspection typically involves checking the brake components according to manufacturer's guidelines. For example, measuring the brake pad or brake shoe material thickness and inspecting brake discs. If there are signs that pads or caliper guide (slide) pins are not moving freely, DRS Automotive may recommend servicing your brakes. The disc brake service includes removing the pads and calipers, cleaning and lubricating guide pins and the caliper brackets to prevent sticking or seizing. The brake discs (rotors) might also need to be cleaned out from the surface rust, especially on the edges, to prevent squeaking.",
//     title: "Brake Test",
//     image: "https://webcomicms.net/sites/default/files/clipart/144693/auto-repair-images-144693-8846964.jpg"
//   }, {
//     content:
//       "Checking fluid levels regularly and changing the fluids and filters periodically can minimize the risks of breakdowns and prolong the life of the engine, transmission, cooling system and brakes. So, if you are driving a (maintenance challenged) vehicle, isn't it about time to start paying closer attention to the fluids and filters?",
//     title: "Fluid Change",
//     image: "https://webcomicms.net/sites/default/files/clipart/144693/auto-repair-images-144693-9207452.jpg"
//   }, {
//     content:
//       "Regular engine tune-ups restore power and efficiency back to your car. At DRS Auto Services we'll visually inspect your engine components. Install new parts (including spark plugs, fuel and air filters) as necessary, adjust timing and idle settings if applicable, and provide fuel system cleaning services to restore fuel system performance.  By following your vehicle manufacturer's recommendations, you're investing in your vehicle's longevity. Saving you time and money in the long run.  Contact us today to find out additional information.",
//     title: "Tune Up",
//     image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg"
//   }, {
//     content:
//       "But it's not who you are underneath... it's what you do that defines you.",
//     year: "2015",
//     title: "not sure",
//     image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg"
//   }
// ];

// class CarouselLeftArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--left"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-left" />
//       </a>
//     );
//   }
// }

// class CarouselRightArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--right"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-right" />
//       </a>
//     );
//   }
// }

// class CarouselIndicator extends Component {
//   render() {
//     return (
//       <li>
//         <a
//           className={
//             this.props.index == this.props.activeIndex
//               ? "carousel__indicator carousel__indicator--active"
//               : "carousel__indicator"
//           }
//           onClick={this.props.onClick}
//         />
//       </li>
//     );
//   }
// }




// class CarouselSlide extends Component {
//   render() {
//     const style = {
//       backgroundImage: "url("+this.props.slide.image+")",
//       backgroundSize: "100% 100%",
//       height: "700px",
//       width: "1080px"
//     }
//     return (
//       <div
//         className={
//           this.props.index == this.props.activeIndex
//             ? "carousel__slide carousel__slide--active"
//             : "carousel__slide"
//         }>
//         <div className="carousel-slide__contentHolder">
          
//         <div className="carousel-slide__img" style={style}>
//         <p className="carousel-slide__content">{this.props.slide.content}</p>


//           <div className="carousel-slide__year">
//             {this.props.slide.year}
//           </div>
//           <div className="carousel-slide__title">
//             {this.props.slide.title}
//           </div>
          
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // Carousel wrapper component
// class Carousel extends Component {
//   constructor(props) {
//     super(props);

//     this.goToSlide = this.goToSlide.bind(this);
//     this.goToPrevSlide = this.goToPrevSlide.bind(this);
//     this.goToNextSlide = this.goToNextSlide.bind(this);

//     this.state = {
//       activeIndex: 0
//     };
//   }

//   goToSlide(index) {
//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToPrevSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length;

//     if (index < 1) {
//       index = slidesLength;
//     }

//     --index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToNextSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length - 1;

//     if (index === slidesLength) {
//       index = -1;
//     }

//     ++index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

//         <div className="carousel__slides">
//           {this.props.slides.map((slide, index) =>
//             <CarouselSlide
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               slide={slide}
//             />
//           )}
//         </div>

//         <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
//         <div className="carousel__indicators__holder">
//           <ul className="carousel__indicators">
//             {this.props.slides.map((slide, index) =>
//               <CarouselIndicator
//                 key={index}
//                 index={index}
//                 activeIndex={this.state.activeIndex}
//                 isActive={this.state.activeIndex==index} 
//                 onClick={e => this.goToSlide(index)}
//               />
//             )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// // Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);

