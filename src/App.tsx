import React, { useState } from 'react';
import Map from './components/map/map.tsx';
import Modal from './components/modal/dog-modal.tsx';
import { Dog } from './types/dog.ts';
import dogs from './data/dogs.ts';
// import './App.scss';

const App: React.FC = () => {
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

    const handleDogClick = (dog: Dog) => {
        setSelectedDog(dog);
    };

    const handleCloseModal = () => {
        setSelectedDog(null);
    };

    return (
        <div className="app">
            <Map dogs={dogs} onDogClick={handleDogClick} />
            {selectedDog && (
                <Modal dog={selectedDog} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;
