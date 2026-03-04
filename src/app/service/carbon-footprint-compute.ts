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


  public addTravelPerso(dist:number,conso:number,transport:string) {
    const distance = dist
    let consumptionPer100 =conso
    let CFP =0

    switch (transport){
      case "voiture": CFP=this.calculeV(dist,conso);
      break;
      case "train": CFP=this.calculeT(dist);
                    consumptionPer100=0;
        break;
      case "avion": CFP=this.calculeA(dist)
        consumptionPer100=0;

        break;
      default: null

    }

    this.travels.push({
      distance: distance,
      consumptionPer100: consumptionPer100,
      cFp:CFP
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

  public calculeV(distance:number,conso:number){
    return (distance * conso) / 100 * 2.3
  }
  public calculeT(distance:number){
    return distance * 0.03
  }
  public calculeA(distance:number){
    return distance * 0.2
  }

  // Ajouter une liste déroulant avec le type de voyage voiture, train ou avion dans le composant carbon-footprint-form
  // Dans le cas d'un voyage en voiture, on demande la consommation pour 100 kms, pas dans le cas d'un voyage en train ou en avion
  // Modifier la formule de calcul du service carbon-footprint-compute pour calculer l'empreinte carbone en fonction du type de voyage est la suivante :
  // voiture : quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3
  // train : quantiteCO2 = distanceKm * 0.03
  // avion : quantiteCO2 = distanceKm * 0.2
}

