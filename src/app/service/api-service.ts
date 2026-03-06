import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Travel} from '../model/travel';
import {apiTravel} from '../model/apiTravel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly BASE_URL ="http://localhost:8080"
  constructor(private http:HttpClient) {
  }

  public getTravels(){
    return this.http.get<any>(`${this.BASE_URL}/tousMesVoyages/1`)
      .pipe(
        map(travels =>
          travels.map((t: apiTravel) => ({
            distance: t.distance,
            consumptionPer100: t.consommation,
            cFp: t.co2,
            date: t.date,
            transport: t.travelType
          }))
        )
      );
  }

  public addTravel(travel:any){
    return this.http.post<Travel>(`${this.BASE_URL}/ajouterUnVoyage`,travel)

  }

public getCo2Voiture(consommationPour100Km: number, distanceKm: number){
  const params = new HttpParams()
    .set('consommationPour100Km', consommationPour100Km.toString())
    .set('distanceKm', distanceKm.toString());
    return this.http.get<{ empreinteCarbone: number }>(`${this.BASE_URL}/calculerTrajetVoiture`,{params})

}

  public getCo2Avion( distanceKm: number){
    const params = new HttpParams()
      .set('distanceKm', distanceKm.toString());
    return this.http.get<{ empreinteCarbone: number }>(`${this.BASE_URL}/calculerTrajetAvion`,{params})

  }

}
