import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // userName: string="";
  // password: string="";
  myForm: FormGroup;

 
  constructor(private authService : AuthService, private router : Router,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
     
    });   
   }
  ngOnInit() {
    
  } 
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('User Name', form.value.userName);
    console.log('Password ', form.value.password);
    console.log(this.authService.login( form.value.userName,form.value.password));
  }
}
