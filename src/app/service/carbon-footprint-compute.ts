import {ChangeDetectorRef, Injectable, signal} from '@angular/core';
import {Travel} from '../model/travel';
import {ApiService} from './api-service';
import {concatMap, Observable, pipe} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  public distance: number
  public consumptionPer100: number|null
  // private travels: Travel | undefined
  private travel: Travel[]=[]


  private readonly  _travel=signal<Travel[]|null>(null)
  public readonly trav =this._travel.asReadonly()

  constructor(private api:ApiService) {
    this.distance = 0
    this.consumptionPer100 = 0

  }

  // Créer une méthode getVoyages() qui renvoie un tableau de voyages

  public getTravels() {
    return this.api.getTravels().subscribe(
      data=>this._travel.set(data)
    )
  }

  // Créer une méthode addVoyage(voyage) qui ajoute un voyage au tableau
  // public addTravel() {
  //   const distance = Math.round(Math.random() * 1000 + 1)
  //   const consumptionPer100 = Math.round(Math.random() * 10 + 1)
  //   const date=new Date()
  //   this.travel.push({
  //     distance: distance,
  //     consumptionPer100: consumptionPer100,
  //     cFp: (distance * consumptionPer100) / 100 * 2.3,
  //     date:date,
  //     transport:'voiture'
  //   })
  // }


  public addTravelPerso(dist:number,conso:number,transport:string,dateU:Date) {
    const distance = dist
    const transp=transport
    let consumptionPer100 =conso
    let CFP =0
    const date=dateU

    switch (transport){
      case "voiture": this.api.getCo2Voiture(conso,dist).subscribe({next:(res)=>CFP=res.empreinteCarbone});

      break;
      case "train": CFP=this.calculeT(dist);
                    consumptionPer100=0;
        break;
      case "avion": this.api.getCo2Avion(dist).subscribe({next:(res)=>CFP=res.empreinteCarbone});
        consumptionPer100=0;

        break;
      default: null

    }

    const travel={ userId:1,
      distance: distance,
      consommation: consumptionPer100,
      co2:CFP,
      travelType:transp}

    this.api.addTravel(travel).subscribe({
      complete: () => {
        this.getTravels()
      }
    })


    // this.travel.push({
    //   distance: distance,
    //   consumptionPer100: consumptionPer100,
    //   cFp:CFP,
    //   date:date,
    //   transport:transp
    // })
  }

  // Niveau 2
  // Créer une méthode getResumeVoyages() qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne

  // getResumeVoyages() {
  //
  //   const distT = this.travel.reduce(
  //     (acc, travel) => acc + travel.distance, 0
  //   )
  //
  //   const consM = this.travel.reduce(
  //     (acc, travel) => acc + travel.consumptionPer100!!, 0
  //   ) / this.travel.length
  //
  //   const quantiteCO2Totale = this.travel.reduce(
  //     (acc, travel) => acc + travel.cFp, 0
  //   )
  //
  //   return {distT, consM, quantiteCO2Totale}
  // }

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

