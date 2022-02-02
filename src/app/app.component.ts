import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource:any;
  title = 'angular-material';
  displayedColumns:string[]=['id','name','username','email'];

  constructor(private userserviceService:UserserviceService){

  }
  ngOnInit(){
    this.getAllUsers();
  }

  public getAllUsers(){
    this.userserviceService.getAllUsers().subscribe(userData=>{
      this.dataSource = userData;
    })
  }
}