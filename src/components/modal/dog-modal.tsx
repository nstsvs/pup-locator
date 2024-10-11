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
            <div className={'modal__container'}>
                <h1>{dog.name}</h1>
                <div className={'modal-content'}>
                    <img className={'modal__img'} src={dog.image} alt={dog.name} />
                </div>
                <p>{dog.description}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default DogModal;
