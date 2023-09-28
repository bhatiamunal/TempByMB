import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm: any;
  constructor(private fb:FormBuilder){

  }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Sammy'),
      email: new FormControl(''),
      message: new FormControl(''),
      skills: this.fb.array([]) ,
    });
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }
 get skills() : FormArray {
  return this.myForm.get("skills") as FormArray
}
 addSkills() {
  this.skills.push(this.newSkill());
}
removeSkill(i:number) {
  this.skills.removeAt(i);
}
 
  onSubmit() {
    
    console.log('Name', this.myForm.value.name);
    console.log('Email', this.myForm.value.email);
    console.log('Message', this.myForm.value.message);
  }
  onReset(form: NgForm): void {
    form.reset();
  }
}
