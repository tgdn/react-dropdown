import React from 'react'
import { configure, addDecorator } from '@kadira/storybook';
import '../css/index.sass'

function loadStories() {
  require('../components/stories/button');
  // require as many as stories you need.
}

addDecorator((story) => (
    <div style={{maxWidth: '1000px', minWidth: '300px', width: '90%', margin: 'auto'}}>
        {story()}
    </div>
))

configure(loadStories, module);
