import { ChangeDetectorRef, Component, OnInit, ViewChild, signal } from '@angular/core';
import { LogSignService } from '../../servicies/log-sign-service';
import { CommonModule } from '@angular/common';
import { Registrazione } from '../registrazione';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login{

  user!: Registrazione
  message:string = '' //messaggio di login



  constructor(private logSignService:LogSignService, private cdr: ChangeDetectorRef){
  }


  onSubmitLog(form:NgForm){ //accesso 

    let userDati = form.value
    console.log(userDati)

    this.logSignService.logIn().subscribe(users => {
      let user = users.find(user=>
        user.email === userDati.email &&  user.password === userDati.password
      )
   
    if(user){
          
          console.log(user)
          this.message = `Ciao ${user.name}!`
          this.cdr.detectChanges()

          this.logSignService.setLogin(user) //JSON STRINGIFY per inserire local!!!!--> app.ts
        } else {
          console.log("email o password errati")
          this.message = "Email o password errati"
          this.cdr.detectChanges()
        }
        
      })
      
       
    }

}
