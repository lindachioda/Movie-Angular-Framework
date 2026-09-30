
import { Component, signal, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { Highlight } from '../shared/direttive/highlight';


@Component({
  selector: 'app-home',
  imports: [Highlight],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(){}

  
  ngOnInit(): void {
    //this.postServices.getPosts().subscribe(post => this.posts = post)
   // console.log(this.posts)
  }


}
