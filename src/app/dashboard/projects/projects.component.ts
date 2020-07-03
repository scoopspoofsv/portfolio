import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  //   function isScrolledIntoView(elem) {
  //     var docViewTop = $(window).scrollTop();
  //     var docViewBottom = docViewTop + $(window).height();

  //     var elemTop = $(elem).offset().top;
  //     var elemBottom = elemTop + $(elem).height();

  //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }

  // $(window).scroll(function () {
  //     $('li').each(function () {
  //         if (isScrolledIntoView(this) === true) {
  //             $(this).addClass('visible');
  //         }
  //     });

  // });

  $(window).scroll(function(){
    inViewport();
  });

  $(window).resize(function(){
    inViewport();
  });

  function inViewport(){
    $('li').each(function(){
      var divPos = $(this).offset().top,
              topOfWindow = $(window).scrollTop();

      if( divPos < topOfWindow+400 ){
        $(this).addClass('show');
      }
    });
    $('.box').each(function(){
      var divPos = $(this).offset().top,
              topOfWindow = $(window).scrollTop();

      if( divPos < topOfWindow+400 ){
        $(this).addClass('visible');
      }
    });
  }
  }


}


