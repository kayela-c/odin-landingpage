    <!-- Nav -->
    <nav class="nav flex center">
        <ul class="flex nav-list between">
          <div class="logo-div">
            <a href="#" class="logo">Header Logo</a>
          </div>
          <div class="nav-link-div">
            <div class="flex nav-link">
              <li><a href="#" class="link"></a>Home</li>
              <li><a href="#" class="link"></a>About Us</li>
              <li><a href="#" class="link"></a>Call Now</li>
            </div>
          </div>
        </ul>
      </nav>
  
      <!-- /Nav -->
      <!-- Hero Section -->
      <section>
        <div id="hero" class="section center">
          <div class="hero-div flex between margin-x">
            <div class="hero-txt">
              <h1 class="heading-1">This website is awesome</h1>
              <p class="secondary-txt">
                This website has some subtext that goes here under the main title.
                It's a smaller font and the color is lower contrast
              </p>
              <button class="button button-p btn">Sign Up</button>
            </div>
  
            <div class="img-div flex">
              <!-- <img
                src="/img/1.svg"
                alt="Delivery Driver on scooter"
                class="img1"
              /> -->
            </div>
          </div>
        </div>
      </section>
      <!-- /Hero Section -->
      <!-- Info Section -->
      <section>
        <div class="flex center margin-x">
          <h2 class="heading-2">Some random information</h2>
        </div>
  
        <div id="info" class="flex center margin-x">
          <div class="card">
            <div class="card-img">
              <img src="./src/img/2.png" alt="Image of delivery box" />
            </div>
            <p class="card-txt">
              this is some subtext under an illustration or image
            </p>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="./src/img/3.png" alt="Image of delivery box" />
            </div>
            <p class="card-txt">
              this is some subtext under an illustration or image
            </p>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="./src/img/4.png" alt="Image of delivery box" />
            </div>
            <p class="card-txt">
              this is some subtext under an illustration or image
            </p>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="./src/img/5.png" alt="Image of delivery box" />
            </div>
            <p class="card-txt">
              this is some subtext under an illustration or image
            </p>
          </div>
        </div>
      </section>
      <!-- /Info Section -->
      <!-- Quote Section -->
      <section class="quote-section flex center">
        <div class="quote-div">
          <div class="quote margin-x">
            <blockquote class="quote-txt">
              This is an inspiring quote, or a testimonial from a customer. Maybe
              its just filling up space, or maybe people will actually read it.
              who knows? All I know is that is looks nice.
            </blockquote>
            <p class="quote-author flex">-Thor, God of Thunder</p>
          </div>
        </div>
      </section>
      <!-- /Quote Section -->
  
      <!-- Call to Action Section -->
      <section id="cta" class="section center">
        <div class="blue-container flex">
          <div class="cta-container margin-x">
            <h3 class="heading-3">Call to action! It's time!</h3>
            <p class="secondary-txt">
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
          <div class="button-div margin-x">
            <button class="button btn btn-outline">Sign Up</button>
          </div>
        </div>
      </section>
      <!-- /Call to Action Section -->
  
      <!-- footer -->
      <footer class="footer flex center">
        <p>Copyright &copy; The Odin Project 2021</p>
      </footer>
      <!-- /footer --> 

<style>
/* My custom variables */

:root {
	--bg-dark: #1f2937;
	--bg-light: #e5e7eb;
	--tx-dark: #1f2937;
	--button: #3882f6;
	--white: #f9faf8;
	--secondary: #303f54;
	
	font-family: 'Roboto', sans-serif;

}
/*  My Syles Start */

a {
	text-decoration: none;
}

ul {
	margin: 0;
	padding: 0;
}
/* utility classes */
.flex {
	display: flex;
}

.center {
	justify-content: center;
	align-items: center;
}

.between {
	justify-content: space-between;
}

.section {
	display: flex;
	gap: 4rem;
	padding: 5rem 0;
}

.heading-1 {
	font-size: 3rem;
	font-weight: 900;
   }
.heading-2 {
	padding: 3rem 0;
	font-size: 2.25rem;
	font-weight: 700;
	color: var(--tx-dark);
   }

.heading-3 {
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--white);
}

.secondary-txt {
	font-size: 1.125rem;
	font-weight: 300;
	margin-bottom: .68rem;
	color: var(--white);
}

.button {
	background-color: var(--button);
	color: var(--white);
	border: none;	
	border-radius: 8px;
	padding: .6em 2.5rem;
	font-weight: 500;
	font-size: 1rem;
	cursor: pointer;
}

.button::before {
content: ''
}

.button-p:hover {

	background-color: var(--bg-light);
	color: var(--button);
}

/* @media (max-width: 1200px) {
	.button {
		
	}
} */

.btn-outline {
	border: 2px solid var(--white);
}

.btn-outline:hover {

	background-color: rgba( 0, 0, 0, 0.2);
	cursor: pointer;
}

.margin-x {
	margin-left:  2rem;
	margin-right: 2rem;
}
/* Specific Styling Classes*/


/* Groups */

.nav,
.footer {
		background-color: var(--bg-dark);
		color: var(--white);
		
}

.nav-links, 
.nav-list,
.nav
{
	list-style-type: none;
	text-decoration: none;
	margin: 0;
}


h2,
p {
	color: inherit;
}

/* Nav */

.nav {
	align-items: center;
	height: 4rem;
}

.logo {
	font-size: 1.5rem;
	font-weight: 900;
	color: var(--white);
}

.nav-list
{
	min-width: 70vw;
}
.nav-link-div {
	justify-content: end;
}

.nav-links {
	font-weight: 300;
}


.link {
 padding-left: 1rem;
}
/* Hero Section  */

#hero {
	background-color: var(--bg-dark);	
	color: var(--white);
	padding-bottom: 3rem;
}

.hero-div {
	min-height: 13rem;
	min-width: 70vw;
	padding: 6rem 0;
	flex-wrap: wrap;
}

.hero-txt {
	max-width: 450px;
	padding-bottom: 3rem;
}

.img-div {
	height: 245px;
	width: 100%;
	max-width: 526px;
	justify-content: center;
}

.img1 {
	height: 100%;
	width: auto;
	}

/* Info Section */

#info {
	gap: 3rem;
	flex-wrap: wrap;

}

.card {
	display: flex;
	flex-direction: column;
	height: 270px;
	width: 180px;
	margin-bottom: 5rem;
}


.card-txt {
	font-size: 1.125rem;
	font-weight: 300;
	padding: .68rem;
	text-align: center;
	color: var(--tx-dark);
}

.card-img {
	height: 100%;
	width: 100%;
}


/* Quote Section */

.quote-div {
	max-width: 70vw;
}

.quote-section {
	padding: 8rem 0;
	background-color: var(--bg-light);
}

.quote-txt {
	font-size: 2.25rem;
	font-weight: 200;
	font-style: italic;
	color: var(--tx-dark);
}
.quote-author {
	justify-content: end;
	font-size: 1.5rem;
	font-weight: 700;
}

/* Call to Action Section */

.blue-container {
	background-color: var(--button);
	padding: 3rem 0;
	gap: 5rem;
	border-radius: 10px;
	width: 70vw;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

/* Footer */

.footer {
	text-align: center;
	justify-content: center;
	height: 6.2rem;
}

footer p {
	font-size: 1.068rem;
	font-weight: 300;
}



</style>
