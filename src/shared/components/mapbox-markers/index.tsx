import React from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';
import {DstATopComposition} from 'react-native-image-filter-kit';

import { ExploreThumbnail } from '../icons';
const frame = require('src/assets/images/hexagon_frame.png');
interface IProp {
    images: ImageSourcePropType[];
}

const Hexagon = () => {
    return (
        <View style={{
            width: 100,
            height: 55,
        }}>

        </View>
    );

};

const MapboxMarkers = ({images} : IProp) => {
    return (
        <View style={{flexDirection: 'row',backgroundColor: 'transparent'}}>
            
            { images.map((image: ImageSourcePropType | string, index:number)=>{
                return (
                    <View key={index} style={{marginLeft: index == 0 ? 0 : -90, zIndex: 1000 - index}}>
                        <ExploreThumbnail image={image} width={100} height={100} />
                    </View>
                )
            })
            }

        </View>
    );

}

export default MapboxMarkers;