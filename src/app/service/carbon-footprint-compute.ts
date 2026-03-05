import {Injectable} from '@angular/core';
import {Travel} from '../model/travel';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  public distance: number
  public consumptionPer100: number|null
  private travels: Travel[]=[]


  constructor() {
    this.distance = 0
    this.consumptionPer100 = 0
    this.travels = [
      { distance: 50, consumptionPer100: 5, cFp: 12, date: new Date("2026-03-01"), transport: "voiture" },
      { distance: 150, consumptionPer100: 6, cFp: 25, date: new Date("2026-03-02"), transport: "voiture" },
      { distance: 250, consumptionPer100: 7, cFp: 35, date: new Date("2026-03-03"), transport: "voiture" },
      { distance: 350, consumptionPer100: 8, cFp: 45, date: new Date("2026-03-04"), transport: "voiture" },
      { distance: 450, consumptionPer100: 9, cFp: 60, date: new Date("2026-03-05"), transport: "voiture" }
    ];

  }

  // Créer une méthode getVoyages() qui renvoie un tableau de voyages

  getTravels() {
    return this.travels
  }

  // Créer une méthode addVoyage(voyage) qui ajoute un voyage au tableau
  public addTravel() {
    const distance = Math.round(Math.random() * 1000 + 1)
    const consumptionPer100 = Math.round(Math.random() * 10 + 1)
    const date=new Date()
    this.travels.push({
      distance: distance,
      consumptionPer100: consumptionPer100,
      cFp: (distance * consumptionPer100) / 100 * 2.3,
      date:date,
      transport:'voiture'
    })
  }


  public addTravelPerso(dist:number,conso:number|null,transport:string,dateU:Date) {
    const distance = dist
    const transp=transport
    let consumptionPer100 =conso
    let CFP =0
    const date=dateU

    switch (transport){
      case "voiture": CFP=this.calculeV(dist,conso);

      break;
      case "train": CFP=this.calculeT(dist);
                    consumptionPer100=null;
        break;
      case "avion": CFP=this.calculeA(dist)
        consumptionPer100=null;

        break;
      default: null

    }

    this.travels.push({
      distance: distance,
      consumptionPer100: consumptionPer100,
      cFp:CFP,
      date:date,
      transport:transp
    })
  }

  // Niveau 2
  // Créer une méthode getResumeVoyages() qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne

  getResumeVoyages() {

    const distT = this.travels.reduce(
      (acc, travel) => acc + travel.distance, 0
    )

    const consM = this.travels.reduce(
      (acc, travel) => acc + travel.consumptionPer100!!, 0
    ) / this.travels.length

    const quantiteCO2Totale = this.travels.reduce(
      (acc, travel) => acc + travel.cFp, 0
    )

    return {distT, consM, quantiteCO2Totale}
  }

  public calculeV(distance:number,conso:number|null){
    return (distance * conso!!) / 100 * 2.3
  }
  public calculeT(distance:number){
    return distance * 0.03
  }
  public calculeA(distance:number){
    return distance * 0.2
  }

}

