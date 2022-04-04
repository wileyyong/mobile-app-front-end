import React from 'react';
import { View, ImageSourcePropType } from 'react-native';

import { ExploreThumbnail } from '../icons';

interface IProp {
    images: ImageSourcePropType[];
}

const MapboxMarkers = ({images} : IProp) => {
    return (
        <View style={{flexDirection: 'row',backgroundColor: 'transparent'}}>
            {images.map((image: ImageSourcePropType | string, index:number)=>{
                return (
                    <View style={{marginLeft: index == 0 ? 0 : -90, zIndex: 1000 - index}}>
                        <ExploreThumbnail image={image} width={100} height={100} />
                    </View>
                )
            })
            }

        </View>
    );

}

export default MapboxMarkers;