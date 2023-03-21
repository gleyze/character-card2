import { LitElement, html, css } from 'lit';
import "./character-card2.js";

export class TeamRoster extends LitElement{

    static get tag(){
    return 'team-roster';
    }

    static get properties() {
        return{
            players: {type: Array},
            team: {type: String},
        }
    }

    constructor(){
        super();
        this.players = [];
        this.team = "Natalie's Pokemon Team";
        this.updateRoster();
        console.log(this.players)
    }

    updateRoster(){
        const address = '../api/roster';
        fetch(address).then((response) => {
            if (response.ok){
                return response.json()
            }
            return [];
        })

        .then((data) => {
            this.players = data;
        });
    }

    static get styles(){
        return css`
        :host{
            display: block;
        }
        .wrapper{
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }
        `;
    }

    render(){
        return html`
        <h2> ${this.team}</h2>
        <div class="wrapper">
            ${this.players.map(player =>     
            html`
            <div class="item">
                <character-card2 characterName="${player.characterName}" characterDetails="${player.characterDetails}" subtitle="${player.subtitle}" img="${player.img}"></character-card2>
            </div>
            `)}
        </div>
        `
    }


}

customElements.define(TeamRoster.tag, TeamRoster);



