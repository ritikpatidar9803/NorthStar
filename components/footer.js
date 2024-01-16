class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
      <div class="wrapper">
          <div class="footer-links">
              <div class="links">
                  <h6>COMPANY INFO</h6>
                  <a href="">About Us</a>
                  <a href="">Latest Posts</a>
                  <a href="">Contact Us</a>
                  <a href="">Shop</a>
              </div>
              <div class="links">
                  <h6>HELP LINKS</h6>
                  <a href="">Tracking</a>
                  <a href="">Order Status</a>
                  <a href="">Delivery</a>
                  <a href="">Shipping Info</a>
                  <a href="">FAQ</a>
              </div>
              <div class="links">
                  <h6>USEFUL LINKS</h6>
                  <a href="">Special Offers</a>
                  <a href="">Gift Cards</a>
                  <a href="">Advetising</a>
                  <a href="">Terms of Use</a>
              </div>
              <div class="links last">
                  <h6>GET IN THE KNOW</h6>
                  <form action="">
                      <input type="text" placeholder="Enter email">
                      <button>></button>
                  </form>
              </div>
          </div>
          <div class="line"></div>
          <div class="copyrights ">
              <h5>© 2020 NorthStar eCommerce</h5>
              <h5>Privacy Policy Terms & Conditions </h5>
          </div>
      </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
