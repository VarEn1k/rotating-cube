import * as THREE
  from 'https://cdn.skypack.dev/three@0.133.1/build/three.module.js';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls.js';

class App {
  constructor() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {

  }

  render() {

  }
}

export {App};
