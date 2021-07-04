import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { LoginService } from 'services/login.service';
import { Router } from "@angular/router";
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup ({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });


  login(){
    this.auth.loginFormToken(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      if(res.is_success==true){
        localStorage.setItem('Token', res.data.token);
        swal.fire({
            icon:'success',
            title:'Login',
            text:'You have logged In successfully',
            confirmButtonColor:'#3f51b5',
            timer:5000

        })
        this.router.navigate(['/movies']);
      }
      else if(res.is_success === false){
        swal.fire({
          icon:'error',
          title:'Login Failed',
          text:'Invalid Login credentials',
          confirmButtonColor:'#3f51b5',
          timer:5000

      })
      }
     
    
    },(error)=>{
      swal.fire({
        icon:'error',
        title:'Login Failed',
        text:'Invalid Login credentials',
        confirmButtonColor:'#3f51b5',
        timer:5000
      })
    });

  }


}
