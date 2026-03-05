import {Injectable} from '@angular/core';
import {map} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly BASE_URL ="http://localhost:8080"

  constructor(private http:HttpClient) {
  }

  public getTravels(){
    return this.http.get<any[]>(`${this.BASE_URL}/tousMesVoyages/1`)
      .pipe(
        map(travels =>
          travels.map(t => ({
            distance: t.distance,
            consumptionPer100: t.consommation,
            cFp: t.co2,
            date: t.date,
            transport: t.travelType
          }))
        )
      );
  }


}
