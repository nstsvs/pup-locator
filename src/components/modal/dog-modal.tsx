import React from 'react';
import { Dog } from '../../types/dog.ts';
import '../../styles/modal.scss'

interface DogModalProps {
    dog: Dog;
    onClose: () => void;
}

const DogModal: React.FC<DogModalProps> = ({ dog, onClose }) => {
    return (
        <div className={'modal'}>
            <h2>{dog.name}</h2>
            <img className={'modal__img'} src={dog.image} alt={dog.name} />
            <p>{dog.description}</p>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
};

export default DogModal;
