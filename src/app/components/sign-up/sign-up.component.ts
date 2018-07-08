import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FieldsService } from './fields.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private router: Router, private fs: FieldsService) { 
    this.signUpForm = new FormGroup({
      'username': new FormControl(this.fs.getName(),[
       Validators.required,
       Validators.pattern("[a-zA-Z_0-9]{2,}")    
      ]),
      'lastname': new FormControl(null,[
        Validators.required,
        Validators.pattern("[a-zA-Z_0-9]{2,}")    
       ]),
      'email' : new FormControl(this.fs.getEmail(),[
        Validators.required, 
        Validators.email,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}") 
      ]),
      'password' : new FormControl(null,[
        Validators.required, 
        Validators.pattern("[a-zA-Z0-9]{8,16}") 
      ]),
      'phone' : new FormControl(null,[
        Validators.required, 
        Validators.pattern("^[0-9]{1,6}$") 
      ]),
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.signUpForm.valid){
      this.router.navigate([''])
    }
  }

}
