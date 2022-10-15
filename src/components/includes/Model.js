import React, { useRef, useEffect } from 'react';
import { Engine, Scene, Vector3, ArcRotateCamera, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF/2.0/glTFLoader";

export const Canvas = props => {
    const css = {
        width:  '100%',
        height: '100%',
        background: 'transparent',
        border: 'unset'
    }
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const engine = new Engine(canvas, true, null, true);

        const createScene = function() {
            const scene = new Scene(engine);
            const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0));
            camera.attachControl(canvas, true);

            SceneLoader.ImportMesh('', '/assets/', 'scene.gltf', scene, function(m) {
                scene.createDefaultCameraOrLight(true, true, true);
                scene.createDefaultEnvironment();
            });
            
            return scene;
        }

        const scene = createScene();

        engine.runRenderLoop(() => scene.render());

        window.addEventListener('resize', function() {
            engine.resize();
        });
    }, []);

    return(
        <canvas style={css} ref={canvasRef} {...props}></canvas>
    );
}