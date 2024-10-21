import { Dog } from '../types/dog.ts';

const dogs: Dog[] = [
    {
        id: 1,
        name: "Боб",
        location: {
            lat: 41.6930,
            lng: 44.8015
        },
        image: "https://i.imgur.com/eSXVkz3.jpeg",
        description: "Кабачок"
    },
    {
        id: 2,
        name: "Фреклс",
        location: {
            lat: 41.6930,
            lng: 44.80159296
        },
        image: "https://i.imgur.com/jx5UuPZ.jpeg",
        description: "Кабачок"
    },
    {
        id: 3,
        name: "Сосиска",
        location: {
            lat: 41.6930,
            lng: 44.80138715
        },
        image: "https://i.imgur.com/JRordr0.jpeg",
        description: "Кабачок"
    },
];

export default dogs;
