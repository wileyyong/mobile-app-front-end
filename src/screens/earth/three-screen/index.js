import { GLView } from 'expo-gl';
import { Renderer, TextureLoader } from 'expo-three';
import * as React from 'react';
import {
  AmbientLight,
  Fog,
  Mesh,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  SphereBufferGeometry,
  MeshBasicMaterial
} from 'three';
import OrbitControlsView from 'expo-three-orbit-controls';


import earthImg from '$assets/earth.jpg';

function EarthGlobeThreeScreen() {
  const [camera, setCamera] = React.useState(null);
 
  let timeout;
  
 
  React.useEffect(() => {
    
    return () => clearTimeout(timeout);
  }, []);


  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 0x6ad6f0;

    // Create a WebGLRenderer without a DOM element
    const renderer = new Renderer({ gl });

    renderer.setSize(width, height);
    renderer.setClearColor(sceneColor);

    const cam = new PerspectiveCamera(70, width / height, 0.01, 1000);

    cam.position.set(2, 2, 2);

    setCamera(cam);

    const scene = new Scene();

    scene.fog = new Fog(sceneColor, 1, 10000);
    // scene.add(new GridHelper(10, 10));

    const ambientLight = new AmbientLight(0x101010);

    scene.add(ambientLight);

    const pointLight = new PointLight(0xffffff, 2, 1000, 1);

    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const spotLight = new SpotLight(0xffffff, 0.5);

    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);


    const geometry = new SphereBufferGeometry(1, 72, 72);
    const material = new MeshBasicMaterial({
      color: 0xafeeee,
      map: new TextureLoader().load(earthImg)
    });
    const sphere = new Mesh(geometry, material);

    sphere.castShadow = true;
    
    scene.add(sphere);

    cam.lookAt(sphere.position);

    function update() {
      // sphere.rotation.y += 0.005;
      // sphere.rotation.x += 0.025;
    }

    // Setup an animation loop
    const render = () => {
      // eslint-disable-next-line no-undef
      timeout = requestAnimationFrame(render);
      update();
      renderer.render(scene, camera);

      // ref.current.getControls()?.update();
      gl.endFrameEXP();
    };

    render();
  };  

  return (
    // eslint-disable-next-line react/jsx-sort-props
    <OrbitControlsView style={{flex:1}} camera={camera}>
      <GLView key="d" style={{ flex: 1 }}  onContextCreate={onContextCreate} />
    </OrbitControlsView>
  );
}



export default EarthGlobeThreeScreen;
