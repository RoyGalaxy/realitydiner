import { useRef } from 'react';
import { GLView } from 'expo-gl';
import ExpoThree, { THREE } from 'expo-three';

import OBJLoader from '../../utils/OBJLoader';

import { SafeAreaView, View, Text } from 'react-native';
import { Stack } from 'expo-router';

const ModelViewer = () => {

    const glViewRef = useRef();

    const onContextCreate = async (gl) => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,gl.drawingBufferWidth /gl.drawingBufferHeight, 0.1, 1000);
        const renderer = new ExpoThree.Renderer({gl});

        renderer.setSize(gl.drawingBufferWidth,gl.drawingBufferHeight);

        // Load OBJ model using THREE.OBJLoader
        const gltfLoader = new THREE.GLTFLoader();
        const model = await new Promise((resolve, reject) => {
            return gltfLoader.load(
                '../../assets/models/Croissant.glb',
                resolve,
                () => {},
                reject
            )
        });

        // Add the model to the Scene
        scene.add(model.scene);

        // Set Camerea Position
        camera.getWorldPosition.z = 5;

        // add a simple background cube
        const geometry = new THREE.BoxGeometry(10,10,10);
        const material = new THREE.MeshBasicMaterial({
            color: 0xaaaaaa,
            side: THREE.BackSide
        });
        const backgroundCube = new THREE.Mesh(geometry,material);
        scene.add(backgroundCube);


        const animate = () => {
            requestAnimationFrame(animate);

            // Animation update logic
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };

        animate();
    };



    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    headerTitle: 'ITs WORKING',
                }}
            />
            <GLView ref={glViewRef} style={{flex:1}} onContextCreate={onContextCreate} />
        </SafeAreaView>        
    )
}

export default ModelViewer;