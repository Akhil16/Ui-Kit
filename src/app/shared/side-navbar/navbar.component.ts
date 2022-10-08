import { Component, OnInit, ElementRef, Input } from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class SideNavbarComponent implements OnInit {
  @Input() navList = [
    { id: "buttons", name: "Buttons" },
    { id: "links", name: "Links" },
    { id: "inputs", name: "Inputs" },
    { id: "inputs", name: "Checkboxes" },
    { id: "inputs", name: "Radio Buttons" },
    { id: "inputs", name: "Toggle Buttons" },
    { id: "inputs", name: "Sliders" },
    { id: "menu", name: "Menu" },
    { id: "navbar", name: "Navigation" },
    { id: "progress", name: "Progress Bar" },
    { id: "progress", name: "Pagination" },
    { id: "navtab", name: "Navigation tabs" },
    { id: "navtab", name: "Labels" },
    { id: "Notification", name: "Notification" },
    { id: "Typography", name: "Typography" },
    { id: "images", name: "Images" },
    { id: "modals", name: "Modal" },
    { id: "modals", name: "Popovers" },
    { id: "modals", name: "Datepicker" },
    { id: "modals", name: "Tooltips" },
    { id: "carousel", name: "carousel" },
  ];
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    public location: Location,
    private element: ElementRef,
    public router: Router
  ) {
    this.sidebarVisible = true;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);
    html.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    html.classList.remove("nav-open");
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  scrollTo(el) {
    if (this.router.url !== "home") {
      this.router.navigateByUrl("/home").then(() => {
        document.getElementById(el).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      });
      return 0;
    }
    document.getElementById(el).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
}
