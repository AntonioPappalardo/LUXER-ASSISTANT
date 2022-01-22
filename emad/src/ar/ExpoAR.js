import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import ViewShot from "react-native-view-shot";
import {
  AmbientLight,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";
import { decode, encode } from "base-64";
import OrbitControlsView from 'expo-three-orbit-controls';
//OBJECT IMPORTER
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//IMPORT GRAPHICS ELEMENTS
import { Camera } from 'expo-camera';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/Fontisto';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import ARColorSwitcher from "../components/ARColorSwitcher";
import BackButton from "../components/BackButton";

import { useLanguage } from "../localization/Localization";
import { useTheme } from "../theme/ThemeProvider";



if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const ref = React.createRef();

let model = new THREE.Group();

const ExpoAR = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [lang, setLanguage] = useLanguage();
  const [zoom, setZoom] = useState(75);
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('window').height;
  const [camera, setCamera] = React.useState();
  const [scene, setScene] = React.useState();
  const [currentGl,setGl] = React.useState();
  const [hasPermission, setHasPermission] = useState(false);

  const tabBarHeight = useBottomTabBarHeight();

  
  let timeout;

  const [blackBag, setBlackBag] = React.useState();
  const [whiteBag, setWhiteBag] = React.useState();
  const [greenBag, setGreenBag] = React.useState();
  const [yellowBag, setYellowBag] = React.useState();

  const variants = [
    { "hex": "000000", "uri": require("./assets/gltf/bag_black.gltf") },
    { "hex": "F3F3F3", "uri": require("./assets/gltf/bag_white.gltf") },
    { "hex": "9AB38B", "uri": require("./assets/gltf/bag_green.gltf") },
    { "hex": "EEDF9D", "uri": require("./assets/gltf/bag_yellow.gltf") }
  ];

  useEffect(() => {
    (async () => {
      const { statusCamera } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(true);
      const { statusMedia } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(true);
    })();

    return () => clearTimeout(timeout);
  }, []);

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    setGl(gl);
    //CREATE RENDERERS
    const renderer = new Renderer({ gl, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor (0x000000, 0);
    //CREATE CAMERA
    const camera = new PerspectiveCamera(68, width / height, 0.01, 1000);
    camera.position.set(0,0,50);
    
    // Create cube render target
    setCamera(camera);
    //CREATE SCENE
    const scene = new Scene();
    setScene(scene);
    scene.add(camera);
    //ADD AMBIENTLIGHT
    const ambientLight = new AmbientLight(0x101010);
    scene.add(ambientLight);
    //ADD FIRST POINTLIGHT
    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);
    //ADD SECOND POINTLIGHT
    const pointLight2 = new PointLight(0xffffff, 2, 1000, 1);
    pointLight2.position.set(200, 200, 0);
    scene.add(pointLight2);
    //ADD THIRD POINTLIGHT
    const pointLight3 = new PointLight(0xffffff, 2, 1000, 1);
    pointLight3.position.set(0, 200, -200);
    scene.add(pointLight3);
    //ADD FOURTH POINTLIGHT
    const pointLight4 = new PointLight(0xffffff, 2, 1000, 1);
    pointLight4.position.set(-200, 200, 0);
    scene.add(pointLight4);
     //ADD FIFTH POINTLIGHT
     const pointLight5 = new PointLight(0xffffff, 2, 1000, 1);
     pointLight5.position.set(0, -200, 0);
     scene.add(pointLight5);
    // ADD SPOTLIGH
    const spotLight = new SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);

    
    const asset1 = Asset.fromModule(
      require('./assets/gltf/bag_black.gltf')
    );
    await asset1.downloadAsync();
    setBlackBag(asset1);

    const asset2 = Asset.fromModule(
      require('./assets/gltf/bag_white.gltf')
    );
    await asset2.downloadAsync();
    setWhiteBag(asset2);

    const asset3 = Asset.fromModule(
      require('./assets/gltf/bag_green.gltf')
    );
    await asset3.downloadAsync();
    setGreenBag(asset3);

    const asset4 = Asset.fromModule(
      require('./assets/gltf/bag_yellow.gltf')
    );
    await asset4.downloadAsync();
    setYellowBag(asset4);


    const loader = new GLTFLoader();
    loader.load(
      asset1.uri || "",
      (gltf) => {
        gltf.scene.scale.set(15, 15, 15);
        scene.add(gltf.scene);
        
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );
    

   
    function update() {
      if (model)
        model.rotation.y += 0.004;
    }

    const render = () => {
      timeout = requestAnimationFrame(render);
      update();
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  }


  function loadModel(color) {
    console.log(color)
    var newModel;
    if(color == '000000') {
      newModel = blackBag;
    }
    if(color == 'F3F3F3') {
      newModel = whiteBag;
    }
    if(color == '9AB38B') {
      newModel = greenBag;
    }
    if(color == 'EEDF9D') {
      newModel = yellowBag;
    }
    const loader = new GLTFLoader();
    loader.load(
      newModel.uri || "",
      (gltf) => {
        gltf.scene.scale.set(15, 15, 15);
        scene.add(gltf.scene);
        scene.remove(scene.children[7])
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );
  }

  async function takePicture() {
    const result = await captureRef(ref.current, {
      result: 'tmpfile',
      height: windowHeight,
      width: windowWidth,
      quality: 1,
      format: 'png',
    });
    
    const asset1 = await MediaLibrary.createAssetAsync(result);
  };

  function zoomIn() {
    var variance = zoom / 1.25
    setZoom(variance);
    camera.position.set(camera.position.x, camera.position.y, variance);
  }
  function zoomOut() {
    var variance = zoom * 1.25
    setZoom(variance);
    camera.position.set(camera.position.x, camera.position.y, variance);
  }

  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ViewShot ref={ref}>
        <Camera style={{ height: windowHeight, width: windowWidth }}>
          <View style={{ backgroundColor: colors.theme.background, flexDirection: 'row', paddingBottom: 20 }}>
            <BackButton onPress={() => { navigation.goBack() }} />
            <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
              <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}> {lang.viewer}</Text>
            </View>
          </View>
          <OrbitControlsView style={{ flex: 1 }} camera={camera}>
            <GLView
              style={{ flex: 1 }}
              onContextCreate={onContextCreate}
            />
          </OrbitControlsView >
          <View style={{
            //backgroundColor: colors.theme.background,
            width: 45,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: '15%',
            borderBottomRightRadius: 25,
            flex: 1
          }}>
            <TouchableOpacity style={{ width: 35, height: 35, margin: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} onPress={() => zoomIn()}>
              <Icon name={"zoom-plus"} size={30} color={colors.button.color} />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 35, height: 35, margin: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} onPress={() => zoomOut()} >
              <Icon name={"zoom-minus"} size={30} color={colors.button.color} />
            </TouchableOpacity>
          </View>

          <View style={{
            width: 45,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            top: '15%',
            borderBottomLeftRadius: 15,
            flex: 1
          }}>
            <ARColorSwitcher color={variants[0].hex} onPress={() => loadModel(variants[0].hex)} />
            <ARColorSwitcher color={variants[1].hex} onPress={() => loadModel(variants[1].hex)} />
            <ARColorSwitcher color={variants[2].hex} onPress={() => loadModel(variants[2].hex)} />
            <ARColorSwitcher color={variants[3].hex} onPress={() => loadModel(variants[3].hex)} />
          </View>
          <TouchableOpacity style={{
            backgroundColor: 'white',
            width: windowWidth/5,
            height: windowWidth/5,
            borderRadius: windowWidth/10,
            position: 'absolute',
            alignSelf: 'center',
            bottom: '10%',
            flex: 1,   
            justifyContent: 'center',
            alignItems:'center'
          }}
          onPress={() => takePicture()}>
            <Icon name={"camera"} size={30} color={colors.theme.secondary} />
            </TouchableOpacity>
        </Camera>
      </ViewShot>
    );
  }
}


export default ExpoAR;