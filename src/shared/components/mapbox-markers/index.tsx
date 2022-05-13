import { MAPBOX_THUMBNAIL_SIZE } from '$constants';
import React, { memo } from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';

import { ExploreThumbnail } from '../icons';
const frame = require('src/assets/images/hexagon_frame.png');

interface IProp {
    images: ImageSourcePropType[];
    id: number;
}

interface IMapboxMarkerProp {
    image: ImageSourcePropType | string;
    imageIndex: number;
}


const MapboxMarker = memo(({image, imageIndex}: IMapboxMarkerProp)=>{
    return (
        <View style={{marginLeft: imageIndex == 0 ? 0 : -90, zIndex: 1000 - imageIndex}}>
            <ExploreThumbnail image={image} width={MAPBOX_THUMBNAIL_SIZE} height={MAPBOX_THUMBNAIL_SIZE} />
        </View>
    );
});

const MapboxMarkers = ({images, id} : IProp) => {
    return (
        <View style={{flexDirection: 'row',backgroundColor: 'transparent'}}>
            
            { images.map((image: ImageSourcePropType | string, index:number)=>{
                const mid = `marker${id}$_{index}`;
                return (
                    <MapboxMarker key={mid} image={image} imageIndex={index} />
                )
            })
            }

        </View>
    );

}

export default MapboxMarkers;