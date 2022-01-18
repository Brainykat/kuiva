import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   form = new FormGroup({
      topics: new FormArray([])
   });

   addTopic(topic:HTMLInputElement){
      (this.form.get('topics') as FormArray).push( new FormControl(topic.value));
   }
}
