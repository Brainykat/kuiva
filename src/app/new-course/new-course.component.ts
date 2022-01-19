import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  form:FormGroup;
  constructor(fb : FormBuilder) {
   this.form= fb.group({
      name:['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    });
   }

  ngOnInit(): void {
  }
   //form;
  //   = new FormGroup({
  //    name: new FormControl('',Validators.required),
  //    contact: new FormGroup({
  //      email: new FormControl(),
  //      phone: new FormControl()
  //    }),
  //     topics: new FormArray([])
  //  });

   addTopic(topic:HTMLInputElement){
      this.topics.push( new FormControl(topic.value));
      topic.value = '';
   }
   removeTopic(topic: FormControl){
     let index = this.topics.controls.indexOf(topic);
     this.topics.removeAt(index);
   }
   get topics(){
    return this.form.get('topics') as FormArray;
   }
}
