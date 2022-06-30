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
              private primengConfig: PrimeNGConfig,) {
                    this.getdata(0);
               }

  ngOnInit(): void {
   // this.userApi();
    this.primengConfig.ripple = true;

  }
  //  userApi(){
  //       this.apiService.getApi('v1/passenger?page=0&size=10').subscribe((res:any)=>{
  //         this.users = res.data;
  //         console.log(res);
  //     this.totalrecords= res.totalPages;

  //       });

  //   }

  toDelete(id: any){

      this.apiService.deleteAPi('v1/passenger/'+id).subscribe((data:any)=>{
      this.delete=data.data;
      console.log(data);
      alert('deleted successfully');
      this.getdata(this.pagenumber);
    })

  }

  confirm(event:any,id:any) {
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
        this.messageService.add({
          severity: "error",
          summary: "reject",
          detail: "You have rejected"
        });
         alert ("this passanger list is not deleted");
      }
    });
  }

  getdata(pagenumber:any){
   this.apiService.getApi('v1/passenger?page='+pagenumber+'&size=10').subscribe((data: any) => {
      this.users = data.data;
      console.log(data);
      this.totalrecords= data.totalPages;
    });
  }

  paginate(event:any){
    this.pagenumber=event.page;
    this.getdata(event.page);
    console.log(event);
  }

}


