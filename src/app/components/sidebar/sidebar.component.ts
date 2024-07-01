import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isOpen = true;
  menuItems = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      document.body.classList.toggle('sidebar-open', this.isOpen);
    }, 0);
  }

  // @HostListener('document:click', ['$event'])
  closeSidebar() {
    // if (!event.target.closest('.sidebar')) {
      this.isOpen = false;
    // }
  }
}