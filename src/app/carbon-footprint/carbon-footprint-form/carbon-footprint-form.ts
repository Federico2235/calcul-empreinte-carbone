import {Component, input} from '@angular/core';
import {CarbonFootprintCompute} from '../../service/carbon-footprint-compute';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CarbonFootprint} from '../carbon-footprint';

@Component({
  selector: 'app-carbon-footprint-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './carbon-footprint-form.html',
  styleUrl: './carbon-footprint-form.css',
})
export class CarbonFootprintForm {

  public form: FormGroup
  constructor(private serviceCfc:CarbonFootprintCompute,private cfp:CarbonFootprint) {
    this.form = new FormGroup(
      {
        distance: new FormControl('', [Validators.min(0), Validators.required]),
        conso: new FormControl('', [Validators.min(0), Validators.required]),
        date: new FormControl('', [Validators.required,this.dateValidator]),
        transport: new FormControl('voiture',[Validators.required,Validators.pattern(/^(voiture|train|avion)$/)])
      }
    )


    // comment utiliser observarbles
  //   this.form.get('travelType')?.valueChanges.subscribe(
  //     value => {
  //       const consumptionControl = this.form.get('conso')
  //       if (value === 'voiture') {
  //         consumptionControl?.setValidators([Validators.required, Validators.min(1)])
  //       } else {
  //         consumptionControl?.clearValidators()
  //         consumptionControl?.setValue(null)
  //       }
  //       consumptionControl?.updateValueAndValidity()
  //     }
  //   )
  // }


  }


  private dateValidator(control:AbstractControl){
    if(control && control.value){
      if (new Date()<new Date(control.value)){
        return {greaterThan:true}
      }
    }
    return null
  }

  protected addVoyage(dist: number, conso: number,transport:string,date:Date){
   if (this.form.valid){
    this.serviceCfc.addTravelPerso(dist,conso,transport,date)
     this.serviceCfc.getTravels()
    // this.cfp.calculateDistanceAndConsumption()
   }
  }

}
