class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="wrapper">
      <h1 class="logo">NorthStar</h1>
      <nav id="navigation">
          <div class="menu">
              <a href="index.html">HOME</a>
              <a href="about.html">ABOUT</a>
              <a href="">CONTACT US</a>
          </div>
          <div class="btns">
              <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                          d="M20 21.4761V19.4761C20 18.4152 19.5786 17.3978 18.8284 16.6476C18.0783 15.8975 17.0609 15.4761 16 15.4761H8C6.93913 15.4761 5.92172 15.8975 5.17157 16.6476C4.42143 17.3978 4 18.4152 4 19.4761V21.4761"
                          stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                          d="M12 11.4761C14.2091 11.4761 16 9.68521 16 7.47607C16 5.26694 14.2091 3.47607 12 3.47607C9.79086 3.47607 8 5.26694 8 7.47607C8 9.68521 9.79086 11.4761 12 11.4761Z"
                          stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </a>
              <a href="" class="cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                          d="M6 2.47607L3 6.47607V20.4761C3 21.0065 3.21071 21.5152 3.58579 21.8903C3.96086 22.2654 4.46957 22.4761 5 22.4761H19C19.5304 22.4761 20.0391 22.2654 20.4142 21.8903C20.7893 21.5152 21 21.0065 21 20.4761V6.47607L18 2.47607H6Z"
                          stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3 6.47607H21" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                      <path
                          d="M16 10.4761C16 11.5369 15.5786 12.5544 14.8284 13.3045C14.0783 14.0546 13.0609 14.4761 12 14.4761C10.9391 14.4761 9.92172 14.0546 9.17157 13.3045C8.42143 12.5544 8 11.5369 8 10.4761"
                          stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </a>
          </div>
      </nav>
      <a class="hamburger" id="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M3 12.4761H21" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              <path d="M3 6.47607H21" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              <path d="M3 18.4761H21" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
          </svg>
      </a>
  </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  //navbar for mobile version
const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
hamburger.addEventListener('click', () => {
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active');
    }
    else {
        navigation.classList.add('active');
    }
});