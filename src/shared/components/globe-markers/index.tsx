import React, { useRef, useEffect, Fragment, useState } from 'react';
import {Image, Text} from '@react-three/drei/native'
import { useLoader, useFrame, ThreeEvent } from '@react-three/fiber/native';
import * as THREE from 'three';
import {TweenMax} from 'three';
import { getVertex } from '../earth/util';
import { pozzleModel } from 'src/shared/api/pozzles/models';
import { ThreeMFLoader } from 'three-stdlib';
import { GLOBE_CAMERA_DISTANCE, GLOBE_THUMBNAIL_RADIUS, GLOBE_THUMBNAIL_SIZE } from '$constants';
import { SHEET_STATE } from '@gorhom/bottom-sheet';

// test image
const hexFrame = require('src/assets/images/hexagon_frame.png');



interface IMarkerType {
    lat: number; // latitude
    lng: number; // longitude
    radius: number;
    url: string;
}


interface IGlobeMarkersType {
    markers: pozzleModel[];
}

const Marker = React.memo(({lat, lng, radius, url}: IMarkerType) => {
    const mesh = useRef<THREE.Mesh>();
    // load by url
    // const texture = new THREE.TextureLoader().load('url');
    // load texture from local
    const [texture] = useLoader(THREE.TextureLoader, [hexFrame]);
    const [scaleVector, setScaleVector] = useState(new THREE.Vector3());
    const [isFirst, setIsFirst] = useState(true);

    let counter = 0;

    useEffect(()=>{
    }, [mesh, lng, radius]);

    const markerFade = (distance:number) => {
        let opacity = 1.0;
        // check distance is between edge to backside
        const maxDist = GLOBE_CAMERA_DISTANCE + GLOBE_THUMBNAIL_RADIUS;
        const minDist = GLOBE_CAMERA_DISTANCE - GLOBE_THUMBNAIL_RADIUS;
        const edge = (maxDist - minDist) / 3 + minDist;
        if (distance > edge) {
            opacity = 1 - 1/(maxDist - minDist) * (distance - edge) * 3;
        }
        return opacity;
    }


    useFrame(({camera})=>{
        if (mesh.current) {
            mesh.current.quaternion.copy(camera.quaternion);
    
            mesh.current.scale.x = GLOBE_THUMBNAIL_SIZE / camera.zoom;
            mesh.current.scale.y = GLOBE_THUMBNAIL_SIZE / camera.zoom;
            var distance = camera.position.distanceTo(mesh.current.position);

            const opacity = markerFade(distance);

            // first fade in
            if(isFirst) {
                counter++;
                mesh.current.material.opacity += opacity / 30;
                if (counter > 30) {
                   setIsFirst(false); 
                }
            } else {
                mesh.current.material.opacity = opacity;
            }
        }
    });

    return (
        <mesh ref={mesh} position={getVertex(lat, lng, radius)}>
            
            {/* decide to use Image or basic material
            <Image url={'url'} position={[0,0,0]} rotation={[0,0,0]} /> */}
            
            <planeBufferGeometry attach="geometry" args={[1,1]} />
            <meshBasicMaterial attach="material" map={texture} transparent={true} opacity={0} />
        </mesh>
    );
});

/* function show Text for PP
const Word = ({children, ...props}) => {
    const color = new THREE.Color();
    const fontProps = {
        font: '/Inter-Bold.woff',
        fontSize: 1,
        letterSpacing: -0.05, 
        lineHeight: 1,
        'material-toneMapped': false
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e:ThreeEvent<PointerEvent>) => {};
    const out = () => setHovered(false);

    useEffect(()=>{
        
    }, [hovered]);

    useFrame(({camera})=>{
        ref.current.quaternion.copy(camera.quaternion);
    });

    return (
        <Text animations={undefined} removeFromParent={undefined} ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}></Text>
    ); 
}*/

const GlobeMarkers = ({markers}: IGlobeMarkersType) => {
    return (
    <Fragment>
        {
            markers.map((marker, index) =>{
                return (
                    <Marker
                        key={marker._id}
                        lat={marker.location.coordinates[0]}
                        lng={marker.location.coordinates[1]}
                        radius={GLOBE_THUMBNAIL_RADIUS}
                        url={marker.muxThumbnail}
                        />
                );
            })
        }
    </Fragment>);
};

export default GlobeMarkers;