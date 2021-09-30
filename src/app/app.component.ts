import { Component } from '@angular/core';
import { ServiceService } from './service.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Audiobreeze';

  data:any

  users:any

  constructor(private mydata:ServiceService){
    // this.data = new Array<any>()
    // this.users = new Array<any>()
  }
  
    getDataForAudio(){
      this.mydata.getData().subscribe((data)=>{
        console.log(data)
        this.data=data
      })
    }

    getusers(){
      this.mydata.getUser().subscribe((users)=>{
        console.log(users)
        this.users=users
      })
    } 
  
}
