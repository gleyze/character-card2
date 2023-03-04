import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker';

const fuecocoPic = new URL('../assets/fuecocopicture.png', import.meta.url).href;

export class CharacterCard2 extends LitElement {
  static get properties() {
    return {
      characterName: {
        type: String, 
        reflect: true
      }, 
      characterDetails: {
        type: String,
        reflect: true
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
        reflect: true
      },

      img: {
        type: String, 
        reflect: true 
      },
      opened: {
        type: Boolean, 
        reflect: true
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
    this.img = "https://www.serebii.net/Shiny/SV/new/909.png"
    this.subtitle="#fuecocoslay"
  }


  toggleEvent(e){
    console.log(this.shadowRoot.querySelector('details').getAttribute('open'));
    const state=this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    
    console.log(state);
    this.opened=state;
  }


updated(changedProperties){
  changedProperties.forEach((oldValue,propName) => {
    if(propName==="opened"){
      this.dispatchEvent(new CustomEvent('opened-changed',{
        composed: true,
        bubbles: true,
        cancelable: true,
        detail:{
          value: this[propName]
        }
      }))
      
    }
  });
}

  render() {
    return html`
  <div class="all">
  <h1 class="title">
  ${this.characterName}
</h1>
<h2 class="subtitle">
${this.subtitle}
</h2>

  <img src = "https://www.serebii.net/Shiny/SV/new/909.png" width=300px>
  
  <details class="details" .open='${this.opened}' @toggle=${this.toggleEvent}>
  <summary>Character Details</summary>
  <p class ="text">
    ${this.characterDetails}
  </p>
</details>

  <slot name = "img"></slot>
</div>
    `;
  }
}

customElements.define('character-card2', CharacterCard2);