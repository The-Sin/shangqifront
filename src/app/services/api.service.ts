import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { VehicleModel } from "src/app/models/vehicleModel";
import { TrackPlan } from "src/app/models/trackPlan";


@Injectable({
    providedIn: 'root'
  })
  export class APIService {
    public tracks = [ 
      {id: '1',carId:"1", coordinatesUpdated:[],start: {id: "1" , x:12,y:12},end: {id:"21", x:22,y:33},created:new Date(),predecessorId:null},
      {id: '2',carId:"1", coordinatesUpdated:[],start: {id: "2" , x:22,y:33},end: {id:"22", x:33,y:55},created:new Date(),predecessorId:'1'},
      {id: '3',carId:"1", coordinatesUpdated:[],start: {id: "3" , x:33,y:55},end: {id:"23", x:55,y:88},created:new Date(),predecessorId:'2'},
      {id: '4',carId:"1", coordinatesUpdated:[],start: {id: "4" , x:55,y:88},end: {id:"24", x:88,y:99},created:new Date(),predecessorId:'3'},
      {id: '5',carId:"1", coordinatesUpdated:[],start: {id: "5" , x:88,y:99},end: {id:"25", x:333,y:444},created:new Date(),predecessorId:'4'},
      {id: '6',carId:"1", coordinatesUpdated:[],start: {id: "6" , x:333,y:444},end: {id:"26", x:444,y:221},created:new Date(),predecessorId:'5'},   
      {id: '11',carId:"2", coordinatesUpdated:[],start: {id: "1" , x:55,y:88},end: {id:"21", x:100,y:33},created:new Date(),predecessorId:null},
      {id: '12',carId:"3", coordinatesUpdated:[],start: {id: "2" , x:333,y:444},end: {id:"22", x:200,y:200},created:new Date(),predecessorId:null},
      {id: '13',carId:"4", coordinatesUpdated:[],start: {id: "3" , x:33,y:55},end: {id:"23", x:109,y:107},created:new Date(),predecessorId:null}
  ];
    constructor(private http: HttpClient) {}

    public getLastTrackByCar(carId:string):Observable<TrackPlan>{
      var  found = this.tracks.find(x=>{return x.carId == carId});
      return of(found);
    }
    public getTracks(): Observable<TrackPlan[]>
    {
      
        return of(this.tracks);
        
    }

    public getVehicles(): Observable<VehicleModel[]>
    {
        var vehicles = [{ id: '1', isMain: true, status: '40%', battery: '40%', network: '40%' },
        { id: '2', isMain: false, status: '40%', battery: '40%', network: '40%' },
        { id: '3', isMain: false, status: '40%', battery: '40%', network: '40%' },
        { id: '4', isMain: false, status: '40%', battery: '40%', network: '40%' },
        ];
        return of(vehicles);
        
    }
    public getVehicle(cardId:string ): Observable<VehicleModel>
    {
        var vehicles = [{ id: '1', isMain: true, status: '40%', battery: '40%', network: '40%' },
        { id: '2', isMain: false, status: '40%', battery: '40%', network: '40%' },
        { id: '3', isMain: false, status: '40%', battery: '40%', network: '40%' },
        { id: '4', isMain: false, status: '40%', battery: '40%', network: '40%' },
        ];
        var found = vehicles.find(function(element) {
          return element.id == cardId
        });
        
        return of(found);
        
    }

  }  