import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search';
  screen_width;
  searchform:FormGroup;
  research_data=["libin","ajay","arun"];
  search_data=["libin","ajay","arun"];
  toggelesearchdata=false;
  typething='';
  select_item='';
  re_search_flag=0;
  search_flag=0;
  value='';


  ngOnInit(){
      this.screen_width=window.innerWidth;//get screen width
      /*************************search form*********************************/
      this.searchform=new FormGroup({
      search: new FormControl("",Validators.compose([
        Validators.required
      ])),
      autoSelectEnter: new FormControl("",Validators.compose([]))
    });
  }

  clickOutSide(){
    this.toggelesearchdata=!this.toggelesearchdata;
    this.toggelesearchdata=false;
    this.typething='';
    this.select_item='';
  }

  onKey(event: any) { // without type info
      if(event.target.value.length>0){
        this.toggelesearchdata=true;
        this.typething=event.target.value;
      }else{
        this.toggelesearchdata=true;
        this.typething='';
        // if(this.select_item!=''){
        //   this.typething='';
        //   this.select_item='';
        //   this.search_flag=0;
        // }
      }
  }

  searchMouseHover(serch_value,hover_item){
    this.select_item=hover_item;
    // this.searchform=new FormGroup({
    //   search: new FormControl(serch_value,Validators.compose([
    //     Validators.required
    //   ])),
    //   autoSelectEnter: new FormControl("",Validators.compose([]))
    // });
  }

  shiftFocusDown(){
    if(this.research_data.length>this.search_flag){
      this.select_item='research'+this.search_flag;
      alert(document.getElementById("research"+this.search_flag));
      // this.event_value=$("#location"+this.package_flag_val1).html();
      // this.event_value_id=$("#locationid"+this.package_flag_val1).html();
       //this.value= document.getElementById("research"+this.search_flag).value;
      this.searchform=new FormGroup({
        search: new FormControl(document.getElementById("research"+this.search_flag).nodeValue,Validators.compose([
          Validators.required
        ])),
        autoSelectEnter: new FormControl(document.getElementById("research"+this.search_flag).nodeValue,Validators.compose([]))

      });
      this.search_flag=this.search_flag+1;
    }else if(this.search_data.length>this.re_search_flag){
      this.select_item='search_data'+this.re_search_flag;
      // this.event_value=$("#package"+this.location_flag_val).html();
      // this.event_value_id=$("#packageid"+this.location_flag_val).html();
      this.searchform=new FormGroup({
        search: new FormControl(document.getElementById("search_data"+this.re_search_flag).nodeValue,Validators.compose([
          Validators.required
        ])),
        autoSelectEnter: new FormControl(document.getElementById("search_data"+this.re_search_flag).nodeValue,Validators.compose([]))
      });
      this.re_search_flag=this.re_search_flag+1;

      }else if(this.search_data.length!=0){
        this.search_flag=0;
        this.re_search_flag=0;
        this.select_item='research'+this.search_flag;
      }
  }
  
  shiftFocusUp(){
    // if(){

    // }
    if(this.research_data.length>=this.search_flag && this.search_flag!=0 && this.re_search_flag==0){
      this.search_flag=this.search_flag-1;
      this.select_item='research'+this.search_flag;

      // $(".searchautodroupdowndataequal").removeClass("searchautodroupdowndata1");
      // $(".searchautodroupdowndataequal").addClass("searchautodroupdowndata");
      // $("#location"+this.package_flag_val1).removeClass("searchautodroupdowndata");
      // $("#location"+this.package_flag_val1).addClass("searchautodroupdowndata1");
      // this.event_value=$("#location"+this.package_flag_val1).html();
      // this.event_value_id=$("#locationid"+this.package_flag_val1).html();
      // this.searchform=new FormGroup({
      //   search: new FormControl($("#location"+this.package_flag_val1).html(),Validators.compose([
      //     Validators.required
      //   ])),
      //   autoSelectEnter: new FormControl("/locationDetails/"+this.event_value_id,Validators.compose([]))
      // });
    }else if(this.search_data.length>=this.re_search_flag && this.re_search_flag!=0){
      this.re_search_flag=this.re_search_flag-1;
      this.select_item='search_data'+this.re_search_flag;
      // $(".searchautodroupdowndataequal").removeClass("searchautodroupdowndata1");
      // $(".searchautodroupdowndataequal").addClass("searchautodroupdowndata");
      // $("#package"+this.location_flag_val).removeClass("searchautodroupdowndata");
      // $("#package"+this.location_flag_val).addClass("searchautodroupdowndata1");
      // this.event_value=$("#package"+this.location_flag_val).html();
      // this.event_value_id=$("#packageid"+this.location_flag_val).html();
      // this.searchform=new FormGroup({
      //   search: new FormControl($("#package"+this.location_flag_val).html(),Validators.compose([
      //     Validators.required
      //   ])),
      //   autoSelectEnter: new FormControl("/packageDetails/"+this.event_value_id,Validators.compose([]))
      // });
    }
  }

  /**********************serach functions****************************/
  searchInfo(serch_value){
    if(serch_value.search && serch_value.autoSelectEnter){
      alert(serch_value.autoSelectEnter);
      // this.router.navigate([serch_value.autoSelectEnter], {relativeTo: this._Activatedroute});
      }else if(serch_value.search) {
        alert(serch_value.search);

      // this.data_serv.homeSearch=serch_value.search;
      // this.data_serv.homeSearchtype="user";
      // this.router.navigate(["/searchData"], {relativeTo: this._Activatedroute});
    }
  }

}
