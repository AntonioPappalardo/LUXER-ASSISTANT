import { decode, encode } from "base-64";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { Renderer } from "expo-three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import {
  AmbientLight,
  GridHelper,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";
import { Camera } from 'expo-camera';
import { Asset } from 'expo-asset';
import OrbitControlsView from 'expo-three-orbit-controls';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

let model = new THREE.Group();

export default function App() {
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('window').height;
  const [camera, setCamera] = React.useState();
  const [hasPermission, setHasPermission] = useState(false);
  let timeout;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(true);
    })();

    return () => clearTimeout(timeout);
  }, []);

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    const renderer = new Renderer({ gl, antialias: true, alpha: true });
    renderer.setSize(width, height);

    const camera = new PerspectiveCamera(120, width / height, 0.01, 1000);
    camera.position.set(0, 20, 0)

    setCamera(camera);
    const asset = Asset.fromModule(
      require("./assets/weapons/v_knife_karam/p1_1.gltf")
    );
    await asset.downloadAsync();
    const scene = new Scene();
    scene.add(new GridHelper(10, 10, 0xFFFFFF, 0x555555))
    const ambientLight = new AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const pointLight2 = new PointLight(0xffffff, 2, 1000, 1);
    pointLight2.position.set(200, 200, 0);
    scene.add(pointLight2);
    const spotLight = new SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);

    const loader = new GLTFLoader();
    loader.load(
      asset.uri || "",
      (gltf) => {
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        console.log(scene)
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );

   /*
    const ktx2Loader = new KTX2Loader();

    const loader = new GLTFLoader();
    loader.setKTX2Loader( ktx2Loader );
    loader.setMeshoptDecoder( MeshoptDecoder );
    loader.load(
      asset.uri || "",
      (fbx) => {
        gltf.scene.position.y = 8;
        model = gltf.scene;

        scene.add(model);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );

    
*/function update() {
      //if (model)
      //model.rotation.y += 0.004;
    }
    const render = () => {
      timeout = requestAnimationFrame(render);
      update();
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  }

  return (
    <Camera style={{ height: windowHeight, width: windowWidth }}>
      <OrbitControlsView style={{ flex: 1 }} camera={camera}>
        <GLView
          style={{ flex: 1 }}
          onContextCreate={onContextCreate}
        />
      </OrbitControlsView >
    </Camera>
  );
}