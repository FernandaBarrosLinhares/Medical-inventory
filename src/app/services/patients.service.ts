import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: any[];

  constructor(private storage: LocalStorageService) {
    this.patients = storage.getStorage('patients')
    ? storage.getStorage('patients')
    :[];
   }

   //getPatients(){
   // return this.patients
   //}
   getPatients(id:string){
    this.patients.find((patient) =>patient.id === id)
   }
   getAmountPatients(){
    return this.patients.length;
   }

   getAmoutExams(){
    let increment = 0
    this.patients.map((patient: any)=>{
    increment += patient.amount.length
   });
   return increment;
}

addPatient(patient:any){
  this.patients.push(patient);
  this.storage.setStorage("patients", this.patients)
}

  UpDatePatient(id:string, patient:any){
    const index= this.patients.findIndex((p)=>p.id === id);
    if(index !== -1){
      this.patients[index]= patient;
      this.storage.setStorage("patients",this.patients )
      return true;

     }else{
      return false;
    }
  }
  deletPatient(id:string){
    const index = this.patients.findIndex((p)=>p.id ===id);
    if(index !== -1){
      this.patients.splice(index, 1);
      this.storage.setStorage("patients", this.patients)
      return  true;
     }return false;
    }
  }

