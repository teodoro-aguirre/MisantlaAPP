import React from 'react'
import { Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const Map = () => {
    return (
        <>
            <MapView
                style={{flex: 1}}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title="Bote de basura"
                description="Botes de basura Organico/Inorganico"
            >
                <Image
                    source={require('../assets/trash-can.png')}
                    style={{width: 26, height: 28}}
                    resizeMode="contain"
                />
            </Marker>  
                
            </MapView> 
        </>
    )
}
