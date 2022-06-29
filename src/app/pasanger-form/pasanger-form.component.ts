import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";
@Component({
  selector: 'app-pasanger-form',
  templateUrl: './pasanger-form.component.html',
  styleUrls: ['./pasanger-form.component.scss']
})
export class PasangerFormComponent implements OnInit {
  pessangerForm:FormGroup;
  users: any;
  hidden: boolean= true;
  showEditPage:any;
  delete:any;
  totalrecords:number=0;
  pagenumber:number=0;
  users1: any;
  constructor(private apiService: ApiserviceService,
              private fb:FormBuilder,
              private rout:ActivatedRoute,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig,

               ) {
                this.pessangerForm = fb.group({
                  firstName: new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z\\S]*$/))]),
                  email: new FormControl('', [Validators.required])
                })
               }

  ngOnInit(): void {
    this.userApi();
    this.primengConfig.ripple = true;
  }
   userApi(){
        this.apiService.getApi('v1/passenger?page=0&size=10').subscribe((res:any)=>{
          this.users = res.data;
          console.log(res);
        });

    }

  AddForm(){
     console.log(this.pessangerForm.value);
  }


  toDelete(id: any){

      this.apiService.deleteAPi('v1/passenger/'+id).subscribe((data:any)=>{
      this.delete=data.data;
      console.log(data);
      alert('deleted successfully');
    })

  }

  confirm(id:any) {
    this.confirmationService.confirm({
      target: id.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
           this.toDelete(id);
           this.messageService.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted"
          });
      },
      reject: () => {
         alert ("this passanger list is not deleted");
      }
    });
  }

  getdata(pagenumber:any){
   this.apiService.getApi('passenger?page='+pagenumber+'&size=10').subscribe((data: any) => {
      this.users1 = data.data;
      console.log(data);
      console.log("list");
      this.totalrecords= data.totalPages;
    });
  }

  paginate(event:any){
    this.pagenumber=event.page;
    this.getdata(event.page);
    console.log(event);
  }

}


