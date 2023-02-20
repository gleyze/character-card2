import { html } from 'lit';
import '../src/character-card2.js';

export default {
  title: 'CharacterCard2',
  component: 'character-card2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <character-card2
      style="--character-card2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </character-card2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
