export class Forest {
    public name: string;
    public location: string;
    public img: string;
    public id: number;
    public description: string;
    
    constructor( name: string, location: string, img: string, id: number, description: string) {
        this.name = name;
        this.location = location;
        this.img = img;
        this.id = id; 
        this.description = description;
    }
        
}