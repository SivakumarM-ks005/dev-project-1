import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  result: any;
constructor( private http: HttpClient){}
  loginObj={
    "EmailId":"",
      "Password": ""
  };

  // http=inject(HttpClient);
  ngOnInit(): void {
      this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe( (data:any)=>{
        this.result = data;
        console.log("pring" , this.result.EmailId)
      })
}
  login(){
    debugger
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
      debugger
      if(res.result){
        
        alert("login success")
      }else{
        debugger
        alert("check the username and password")
      }
    })
  }
}
