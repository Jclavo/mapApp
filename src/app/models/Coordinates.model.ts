
export class CoordinatesModel {
    // public id: string;
    public place: string;
    public description: string; 
    public latitude: number;
    public longitude: number;

    constructor(place: string, description: string, latitude: number, longitude: number )
    {
        this.place = place; 
        this.description= description; 
        this.latitude = latitude 
        this.longitude = longitude; 
    
    }
    
}