import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radius',
  templateUrl: './radius.component.html',
  styleUrls: ['./radius.component.css']
})
export class RadiusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  radius=document.getElementsByClassName("radius");
  rad1="";
  rad2="";
  rad3="";
  rad4="";
  input="";

  change(){
    
    if(this.rad1=="" ){this.rad1="0";}
    if(this.rad2=="" ){this.rad2="0";}
    if(this.rad3=="" ){this.rad3="0";}
    if(this.rad4=="" ){this.rad4="0";}

    this.input=this.rad1+"%"+" "+this.rad2+"%"+" "+this.rad3+"%"+" "+this.rad4+"%";
    
  }
  copy(){
    navigator.clipboard.writeText("border-radius:"+this.input+";").catch(() => {
      console.error("Unable to copy text");
    });
    alert("Copied");
  }

}
