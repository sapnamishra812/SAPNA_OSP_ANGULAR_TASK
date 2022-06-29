import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent implements OnInit {
  showUserDetails: string ='';
  users: any;
  createForm: FormGroup;
  submitFormCheck: boolean=false;
  data: any;
 createFromValue: any;
 formSubmite: boolean = false;
  routeListener: any;
  airline: any;
  updatepasanger: any;
  constructor(private apiService: ApiserviceService,
              private rout:ActivatedRoute,private route: Router, private fb:FormBuilder) {
                this.createForm = fb.group({
                     id:new FormControl(''),
                     name: new FormControl('', [Validators.required,Validators.pattern((/^[a-zA-Z\\S]*$/))]),
                     trips: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,9}$/)]),
                     airline: new FormControl('', [Validators.required]),
                     country: new FormControl('', [Validators.required]),
                     logo: new FormControl('',[Validators.required]),
                     slogan: new FormControl('', [Validators.required]),
                     website:new FormControl('',[Validators.required]),
                     established: new FormControl('', [Validators.required]),
                     head_quaters: new FormControl('', [Validators.required]),
                     name1: new FormControl('', [Validators.required]),
                     message: new FormControl('', [Validators.required])

                })
              }

  ngOnInit(): void {

    this.routeListener = this.rout.params.subscribe( (params) => {
      console.log(params)
      const id = params["id"];
      console.log(id);
        this.apiService.getApi('v1/passenger/'+id).subscribe((res:any)=>{
        this.users = res;
        console.log(res);


        this.createForm.patchValue(
            // this.users.value
                   {id: this.users._id,
                    name: this.users.name,
                    trips: this.users.trips,
                    airline: this.users.airline[0].id,
                    country:this.users.airline[0].country,
                    logo:this.users.airline[0].logo,
                    slogan:this.users.airline[0].slogan,
                    website:this.users.airline[0].website,
                    head_quaters:this.users.airline[0].head_quaters,
                    name1: this.users.airline[0].name,
                    established:this.users.airline[0].established
                     }
                     )
                  });
    });
    this.createForm.value.message;

  }

  updateList(){

      const userData = {name: this.users.name, trips:this.users.trips, airline:this.users.airline[0].id };
      this.apiService.putApi('v1/passenger/'+this.users._id , userData).subscribe((res)=>{
        console.log(res);
        this.updatepasanger = res;
        alert('data succesfully posted');

       this.route.navigate(['/list']);
      })
      console.log(this.createForm.value);
        this.submitFormCheck= true;
       this.createForm.reset();
   }
}
