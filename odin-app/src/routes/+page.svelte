    <!-- Nav -->
    <nav class="nav flex center">
        <ul class="flex nav-list between">
          <div class="logo-div">
            <a href="+page.svelte" class="logo">Header Logo</a>
          </div>
          <div class="nav-link-div">
            <div class="flex nav-link">
              <li><a href="/" class="link"></a>Home</li>
              <li><a href="/" class="link"></a>About Us</li>
              <li><a href="/" class="link"></a>Call Now</li>
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
              <h1 class="h1">This website is awesome</h1>
              <p class="secondary-txt">
                This website has some subtext that goes here under the main title.
                It's a smaller font and the color is lower contrast
              </p>
              <button class="btn variant-filled">Sign Up</button>
            </div>
  
            <div class="img-div flex">
              <img
                src="/img/1.svg"
                alt="Delivery Driver on scooter"
                class=""
              />
            </div>
          </div>
        </div>
      </section>
      <!-- /Hero Section -->
      <!-- Info Section -->
      <section>
        <div class="flex center">
          <h2 class="h2">Some random information</h2>
        </div>
  
        <div id="info" class="flex center gap-8">
          <div class="card p-4">
            <div class="card-header">
              <img src="./src/img/2.png" alt />
            </div>
            <div>
              <p class="h3">
                this is some subtext under an illustration or image
              </p>
            </div>
          </div>
          <div class="card p-4">
            <div class="card-header">
              <img src="./src/img/3.png" alt />
            </div>
            <div>
              <p class="h3">
                this is some subtext under an illustration or image
              </p>
            </div>
          </div>
          <div class="card p-4">
            <div class="card-header">
              <img src="./src/img/4.png" alt/>
            </div>
            <div>
              <p class="h3">
                this is some subtext under an illustration or image
              </p>
            </div>
          </div>
          <div class="card p-4">
            <div class="card-header">
              <img src="./src/img/5.png" alt/>
            </div>
            <div>
              <p class="h3">
                this is some subtext under an illustration or image
              </p>
            </div>
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
            <h3 class="h3">Call to action! It's time!</h3>
            <p class="secondary-txt">
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
          <div class="margin-x">
            <button class="btn variant-ghost-primary">Sign Up</button>
          </div>
        </div>
      </section>
      <!-- /Call to Action Section -->
  
      <!-- footer -->
      <footer class="footer flex center">
        <p>Copyright &copy; The Odin Project 2021</p>
      </footer>
      <!-- /footer --> 
