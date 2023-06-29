class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    
    <p>Kafetaria &#169; 2023, Dicoding Academy | Designed by <a href="https://www.linkedin.com/in/esti-yogiyanti-131921260/">Esti Yogiyanti</a></p>
  </footer>      
          `;
  }
}
customElements.define('footer-bar', FooterBar);
