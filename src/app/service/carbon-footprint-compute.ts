import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  public distance: number
  public consumptionPer100: number
  private travels: { distance: number, consumptionPer100: number, cFp: number }[]


  constructor() {
    this.distance = 0
    this.consumptionPer100 = 0
    this.travels = [
      {distance: 50, consumptionPer100: 5, cFp: 12},
      {distance: 150, consumptionPer100: 6, cFp: 25},
      {distance: 250, consumptionPer100: 7, cFp: 35},
      {distance: 350, consumptionPer100: 8, cFp: 45},
      {distance: 450, consumptionPer100: 9, cFp: 60}
    ]
  }

  // Créer une méthode getVoyages() qui renvoie un tableau de voyages

  getTravels() {
    return this.travels
  }

  // Créer une méthode addVoyage(voyage) qui ajoute un voyage au tableau
  public addTravel() {
    const distance = Math.round(Math.random() * 1000 + 1)
    const consumptionPer100 = Math.round(Math.random() * 10 + 1)
    this.travels.push({
      distance: distance,
      consumptionPer100: consumptionPer100,
      cFp: (distance * consumptionPer100) / 100 * 2.3
    })
  }


  // Niveau 2
  // Créer une méthode getResumeVoyages() qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne

  getResumeVoyages() {

    const distT = this.travels.reduce(
      (acc, travel) => acc + travel.distance, 0
    )

    const consM = this.travels.reduce(
      (acc, travel) => acc + travel.consumptionPer100, 0
    ) / this.travels.length

    const quantiteCO2Totale = this.travels.reduce(
      (acc, travel) => acc + travel.cFp, 0
    )

    return {distT, consM, quantiteCO2Totale}
  }


}

