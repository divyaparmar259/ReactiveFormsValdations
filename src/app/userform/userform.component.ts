import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  countryFormGroup!: FormGroup;
  todayDate!:Date ;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {

    this.todayDate=new Date();

    this.countryFormGroup = this.formBuilder.group({
        custId:['', RxwebValidators.startsWith({value:'C_'
      ,message:'{{0}} does not starts with `C_`'
    })], 
      custName:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.maxLength({value:16
            ,message:'{{0}} Maximum 16 characters are allowed'}),
            RxwebValidators.alpha({message:'You can enter only alphabets.'})
            
        ]
      })
     ],
     email:['',RxwebValidators.compose({
       validators:[
         RxwebValidators.email({message:'please enter a valid email'}),
         RxwebValidators.lowerCase({message:'You can enter only lowerCase letters.' })
       ]
     })],
     comwebite:['',RxwebValidators.url({message:'enter a valid url pattern '})],
     dob:['',RxwebValidators.compose({
       validators:[
         RxwebValidators.maxDate({value:this.todayDate,message:'greater than today"s date not allowed'})
       ]
     })],
     pincode:['',RxwebValidators.compose({
       validators:[
         RxwebValidators.minLength({value:6,message:'must be six character '}),
         RxwebValidators.maxLength({value:6})
       ]
     })]
    });
}
}