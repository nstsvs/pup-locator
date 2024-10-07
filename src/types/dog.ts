export interface Dog {
    id: number | string;
    name: string;
    breed: string;
    description: string;
    image: string;
    location: {
        lat: number;
        lng: number;
    };
}
