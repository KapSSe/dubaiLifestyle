import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.scss']
})
export class OptInComponent implements OnInit {
  invalid = false;
  optInForm: FormGroup;

  constructor(private router: Router) { 
    this.optInForm = new FormGroup({
      'username': new FormControl(null,[
       Validators.required,
       Validators.pattern("[a-zA-Z_0-9]{2,}")    
      ]),
      'email' : new FormControl(null,[
        Validators.required, 
        Validators.email,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
    })
  }

  ngOnInit() {
      
  }

  onSubmit(){
    if(this.optInForm.valid){
        this.router.navigate(['/members'])
    };
  }


}
