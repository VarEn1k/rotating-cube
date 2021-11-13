import * as THREE from 'three/build/three.module.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

class App {
  constructor() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    this.camera = new THREE.PerspectiveCamera(60,
        window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 0, 4);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xaaaaaa);

    const ambient = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.3);
    this.scene.add(ambient);

    const light = new THREE.DirectionalLight();
    light.position.set(0.2, 1, 1);
    this.scene.add(light);

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    // Add cube
    // const geometry = new THREE.BoxBufferGeometry();
    // const material = new THREE.MeshStandardMaterial({color: 0xFF0000});
    //
    // this.mesh = new THREE.Mesh(geometry, material);
    //
    // this.scene.add(this.mesh);

    //add sphere
    // const geometrySphere = new THREE.SphereGeometry( 1, 32, 16 );
    //  const materialSphere = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    //  const sphere = new THREE.Mesh( geometrySphere, materialSphere );
    //  sphere.position.x = 2
    //this.scene.add( sphere );

    const geometryKnot = new THREE.TorusKnotBufferGeometry( .8, .3, 120, 16 );
    //const materialKnot = new THREE.MeshStandardMaterial( { color: 0xfff00 })
    const materialKnot = new THREE.MeshPhongMaterial( { color: 0xfff00, specular: 0x444444, shininess: 60 } );
    this.knot = new THREE.Mesh( geometryKnot, materialKnot );
    this.knot.position.x = 0


    this.scene.add( this.knot );

    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.renderer.setAnimationLoop(this.render.bind(this));

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    // this.mesh.rotateX(0.005);
    // this.mesh.rotateY(0.01);
    this.knot.rotateY(0.01);
    this.knot.rotateX(0.02);
    this.renderer.render(this.scene, this.camera);
  }
}

export {App};
