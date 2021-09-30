import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  new_user:any

  constructor(private create:ServiceService) { }

  postUser(){
    this.create.postUser().subscribe((new_user)=>{
      console.log(this.new_user)
      this.new_user=this.new_user
    })
  } 

  ngOnInit(): void {
  }

}
