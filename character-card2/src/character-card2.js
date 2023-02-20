import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker';

const fuecocoPic = new URL('https://www.serebii.net/Shiny/SV/new/909.png', import.meta.url).href;

export class CharacterCard2 extends LitElement {
  static get properties() {
    return {
      characterName: {
        type: String, 
        reflect: true
      }, 
      fuecocoDetails: {
        type: String,
      },

      topText: {
        type: String, 
        reflect: true
      },

      bottomText: {
        type: String,
        reflect: true
      },

      subtitle: {
        type: String, 
        reflect: true, 
      },

      img: {
        type: String, 
        reflect: true, 
      }

    }
  }

  static get styles() {
    return css`
      body {
  background: cyan; 
}
.all{
  border-style: dotted;
  border-color: #89CFF0;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  border-width: 10px;
  width: 400px;
  max-width: 500px;
  margin: auto;
  background-color: pink;
  margin-top: 10px;
}
.text { 
  font-size: 16px;
  color: black;
}
.title{
  font-size: 40px;
}
.buttons{
  text-align: center; 
  padding: 5px;
}
.detailButton {
  margin: 1px;
  position: center; 
}
button:hover,
buttons:focus{
  background-color: pink;
}
.picture {
  border-radius: 15px;
  border: #89CFF0;
  width: 400px;
  align-items: center;
}
meme-maker {
  border-radius: 10px;
  border: solid white;
  width: 400px;
}
@media (min-width: 500px) and (max-width: 800px) {
    
    .detailButton {
      display: none;
    }
  }
@media (max-width: 500px) {
  .all{
    transform: scale(0.8);
  }
}
    `;
  }

  constructor() {
    super();
    this.characterName = "Shiny Fuecoco";
    this.characterDetails = "Shiny fuecoco is pink. what a slay. fuecoco loves fire and eating and chomping. he has no thought behind his eyes. not one. fuecoco best boy!!!"
    //this.topText = "HEAD EMPTY"
    //this.bottomText = "CHOMPCHOMPCHOMP"
    //this.subtitle = "cutie croc"
    this.img = "https://www.serebii.net/Shiny/SV/new/909.png"
  }

  render() {
    return html`
  <div class="all">
  <h1 class="title">
  ${this.characterName}
</h1>
  <slot name = "subtitle"></slot>
  <img src = "https://www.serebii.net/Shiny/SV/new/909.png" width=300px>
  
  <p class ="text">
    ${this.characterDetails}
  </p>
  <slot name = "img"></slot>
</div>
    `;
  }
}

customElements.define('character-card2', CharacterCard2);