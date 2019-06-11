import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public roles = [{
    name:"车辆设置和链接",
    value:"1",
    checked:false
  },
  {
    name:"车辆轨迹",
    value:"2",
    checked:false
  },
  {
    name:"车辆触发事件和运行模块",
    value:"3",
    checked:false
  },
  {
    name:"管理员",
    value:"admin",
    checked:false
  }];

  public user:UserModel;
  public userId:string;


  constructor(private route: ActivatedRoute, private authService:AuthService,  private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id")
    this.authService.getByUserName(this.userId).then(x=>{
      this.user = x;
      this.roles.forEach(role=>{
        var hasRole = this.user.roles.includes(role.value);
        if(hasRole)
        {
          role.checked = true;
        }
      })
    });
  }
  update()
  {
    this.user.roles = []; //reset
    this.roles.forEach(role=>{
      
      if(role.checked)
      {        
        if(!this.user.roles.includes(role.value))
        {
          this.user.roles.push(role.value);
        }
      }
     
    })
    this.authService.updateUserData(this.user);

    //back to the list
    this.router.navigate(['/user/list']);
  }
}
