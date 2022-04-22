import React, { useRef, useEffect, Fragment, useState } from 'react';
import {Image, Text} from '@react-three/drei/native'
import { useLoader, useFrame, ThreeEvent } from '@react-three/fiber/native';
import * as THREE from 'three';
import { getVertex } from '../earth/util';
import { pozzleModel } from 'src/shared/api/pozzles/models';

// test image
const hexFrame = require('src/assets/images/hexagon_frame.png');



interface IMarkerType {
    lat: number; // latitude
    lng: number; // longitude
    radius: number;
    zoom: number;
    url: string;
}


interface IGlobeMarkersType {
    markers: pozzleModel[];
    zoom: number;
}

const Marker = ({lat, lng, radius, zoom, url}: IMarkerType) => {
    const mesh = useRef<THREE.Mesh>();
    // load by url
    // const texture = new THREE.TextureLoader().load('url');
    // load texture from local
    const [texture] = useLoader(THREE.TextureLoader, [hexFrame]);

    useEffect(()=>{
    }, [mesh, lng, radius]);

    useFrame(({camera})=>{
        mesh.current.quaternion.copy(camera.quaternion);
        mesh.current.scale.x = 0.5 / zoom;
        mesh.current.scale.y = 0.5 / zoom;
    });
    return (
        <mesh ref={mesh} position={getVertex(lat, lng, radius)}>
            
            {/* decide to use Image or basic material
            <Image url={'url'} position={[0,0,0]} rotation={[0,0,0]} /> */}
            
            <planeBufferGeometry attach="geometry" args={[1,1]} />
            <meshBasicMaterial attach="material" map={texture} transparent={true} />
        </mesh>
    );
}

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


const GlobeMarkers = ({markers, zoom}: IGlobeMarkersType) => {
    return (
    <Fragment>
        {
            markers.map((marker, index) =>{
                const height = 10;
                const radius = 1.7;
                return(
                    
                     <Marker
                        lat={marker.location.coordinates[0]}
                        lng={marker.location.coordinates[1]}
                        radius={radius}
                        zoom={zoom}
                        url={marker.muxThumbnail}
                     />
                );
            })
        }
    </Fragment>);
};

export default GlobeMarkers;