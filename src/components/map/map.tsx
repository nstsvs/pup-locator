import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import DogMarker from '../marker/dog-marker';
import { Dog } from '../../types/dog';
import '../../styles/map.scss'

const mapOptions = {
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY,
};

interface MapProps {
    dogs: Dog[];
    onDogClick: (dog: Dog) => void;
}

const Map: React.FC<MapProps> = ({ dogs, onDogClick }) => {
    const { isLoaded } = useJsApiLoader(mapOptions);

    const mapCenter = { lat: 41.6930, lng: 44.8015 }; // Тбилиси

    if (!isLoaded) return null;

    return (
        <GoogleMap
            mapContainerClassName="map-container"
            center={mapCenter}
            zoom={30}
            options={{
                disableDefaultUI: true,
                styles: [], // Пустой массив стилей для "очистки" карты
            }}
        >
            {dogs.map(dog => (
                <DogMarker
                    key={dog.id}
                    dog={dog}
                    onClick={() => onDogClick(dog)}
                />
            ))}
        </GoogleMap>
    );
}

export default React.memo(Map);