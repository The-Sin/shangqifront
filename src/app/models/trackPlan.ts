import { Coordinate } from "./coordinate";

export class TrackPlan  {

    id:string;
    coordinatesUpdated: Coordinate[];
    carId:string;
    created:Date;
    predecessorId:string;
    start:Coordinate;
    end:Coordinate;

    
  }
  