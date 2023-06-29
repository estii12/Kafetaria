class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar">
    <div class="app-bar__brand">
      <h1>Kafetaria</h1>
    </div>
    <div class="app-bar__menu  fixed-top">
      <button id="hamburgerButton">☰</button>
    </div>
    
    <nav id="navigationDrawer" class="app-bar__navigation fixed-top">
      <ul>
        <li><a href="#/restaurant-list">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/esti-yogiyanti-131921260/">About Us</a></li>
      </ul>
    </nav>
  </div>
 
  
  <picture>
  <div class="hero">
  <source media="(max-width:600px)" srcset="/images/hero-image_2-small.jpg"  type="image/jpg">
  <img src="/images/heros/hero-image_2.jpg" alt="hero element">
  </div>
</picture>
   
          `;
  }
}
customElements.define('app-bar', AppBar);
