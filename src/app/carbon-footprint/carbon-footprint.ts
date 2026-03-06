import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, DecimalPipe} from '@angular/common';
import {CarbonFootprintCompute} from '../service/carbon-footprint-compute';
import {CarbonFootprintForm} from './carbon-footprint-form/carbon-footprint-form';
import {Travel} from '../model/travel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    DecimalPipe,
    CarbonFootprintForm,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint {

  // public quantiteCO2Totale: number
  // public distance: number
  // public consumptionPer100: number
  public travels


  constructor(private carbonService: CarbonFootprintCompute, private cdr: ChangeDetectorRef) {
    // this.quantiteCO2Totale = carbonService.getResumeVoyages().quantiteCO2Totale
    // this.distance = carbonService.getResumeVoyages().distT;
    // this.consumptionPer100 = carbonService.getResumeVoyages().consM;
    this.travels = this.carbonService.trav
    this.getVoyages()
  }

  public getVoyages() {
    this.carbonService.getTravels()
  }

  // public add100km() {
  //   this.distance += 100;
  // }

  // public addVoyage() {
  //   this.carbonService.addTravel()
  //   this.calculateDistanceAndConsumption()
  // }


  // public calculateDistanceAndConsumption() {
  //
  //   const result = this.carbonService.getResumeVoyages()
  //
  //
  //   this.distance = result.distT
  //
  //   this.consumptionPer100 = result.consM
  //   this.quantiteCO2Totale = result.quantiteCO2Totale
  // }




}
