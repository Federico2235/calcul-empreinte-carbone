import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {CarbonFootprintCompute} from '../service/carbon-footprint-compute';
import {CarbonFootprintForm} from './carbon-footprint-form/carbon-footprint-form';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    DecimalPipe,
    CarbonFootprintForm
  ],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint {

  public quantiteCO2Totale: number
  public distance: number
  public consumptionPer100: number
  public travels: { distance: number, consumptionPer100: number, cFp: number }[]

  constructor(private carbonService: CarbonFootprintCompute) {
    this.quantiteCO2Totale = carbonService.getResumeVoyages().quantiteCO2Totale
    this.distance = carbonService.getResumeVoyages().distT;
    this.consumptionPer100 = carbonService.getResumeVoyages().consM;
    this.travels = carbonService.getTravels()

  }


  public add100km() {
    this.distance += 100;
  }

  public addVoyage() {
    this.carbonService.addTravel()
    this.calculateDistanceAndConsumption()
  }


  public calculateDistanceAndConsumption() {

    const result =this.carbonService.getResumeVoyages()



    this.distance = result.distT

    this.consumptionPer100 = result.consM
    this.quantiteCO2Totale= result.quantiteCO2Totale
  }


  public getVoyages() {
    this.carbonService.getTravels()
  }


}
