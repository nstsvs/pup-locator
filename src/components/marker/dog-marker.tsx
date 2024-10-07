import React from 'react';
import { Marker } from '@react-google-maps/api';
import { Dog } from '../../types/dog';

interface DogMarkerProps {
    dog: Dog;
    onClick: () => void;
}

const DogMarker: React.FC<DogMarkerProps> = ({ dog, onClick }) => {
    return (
        <Marker
            position={dog.location}
            onClick={onClick}
            title={dog.name}
        />
    );
};

export default React.memo(DogMarker);