import { GLView } from 'expo-gl';
import React, { useState, } from "react";
import ExpoTHREE, { Renderer } from 'expo-three';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import {
    AmbientLight,
    BoxBufferGeometry,
    Fog,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SpotLight,
} from 'three';
import BackButton from '../components/BackButton';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

export default function App({ navigation }) {
    let timeout;
    const [hasPermission, setHasPermission] = useState(false);

    React.useEffect(() => {
        // Clear the animation loop when the component unmounts
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(true);
        })();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Camera style={{ height: windowHeight, width: windowWidth }}>
            <BackButton onPress={() => { navigation.goBack()}} fixed />
            <GLView
                style={{ flex: 1 }}
                onContextCreate={async (gl) => {
                    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
                    const sceneColor = 0x000000;
                    // Create a WebGLRenderer without a DOM element
                    const renderer = new Renderer({ gl, alpha: true });
                    renderer.setSize(width, height);
                    renderer.clearColor(0, 0, 0, 1);
                    renderer.capabilities.maxVertexUniforms = 52502;
                    const camera = new PerspectiveCamera(68, width / height, 0.1, 1000);
                    camera.position.set(0, 5, 10);

                    const scene = new Scene();
                    scene.fog = new Fog(sceneColor, 1, 10000);

                    const ambientLight = new AmbientLight(0x101010);
                    scene.add(ambientLight);

                    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
                    pointLight.position.set(0, 200, 200);
                    scene.add(pointLight);

                    const spotLight = new SpotLight(0xffffff, 0.5);
                    spotLight.position.set(0, 500, 100);
                    spotLight.lookAt(scene.position);
                    scene.add(spotLight);
                    const cube = new IconMesh();

                    const model = {
                        'bag.obj': { uri: 'http://vvfsalerno.hostinggratis.it/public/models/3d-model.obj' },
                        'bag.mtl': { uri: 'http://vvfsalerno.hostinggratis.it/public/models/3d-model.mtl' },
                    };
                    // Load model!
                    await ExpoTHREE.loadAsync([model['bag.obj'], model['bag.mtl']], null, name => model[name])
                        .then((obj) => {
                            // // Update size and position
                            ExpoTHREE.utils.scaleLongestSideToSize(obj, 4);
                            ExpoTHREE.utils.alignMesh(obj, { y: 1 });
                            // Add the mesh to the scene
                            scene.add(obj);
                            camera.lookAt(obj.position);
                        }).catch((error) => {
                            console.log(error);
                        });

                    console.log(scene.children.length)

                    function update() {
                        if (scene.children.length == 4)
                            scene.children[3].rotateY(0.03);
                    }

                    // Setup an animation loop
                    const render = () => {
                        timeout = requestAnimationFrame(render);
                        update();
                        renderer.render(scene, camera);
                        gl.endFrameEXP();
                    };
                    render();
                }}
            />
        </Camera>
    );
}

class IconMesh extends Mesh {
    constructor() {
        super(
            new BoxBufferGeometry(1.0, 1.0, 1.0),
            new MeshStandardMaterial({
                color: 0xff0000
            })
        );
    }
}
