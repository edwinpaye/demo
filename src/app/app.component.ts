import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // sidebar
  menus = [
    { 
      name: 'Menu 1',
      items: [
        { name: 'Item 1', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3', 'Sub-Item 4']},
        { name: 'Item 2', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
        { name: 'Item 3', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3']},
        { name: 'Item 4', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
      ] 
    },
    { 
      name: 'Menu 2',
      items: [
        { name: 'Item 1', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3', 'Sub-Item 4']},
        { name: 'Item 2', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
        { name: 'Item 3', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3']},
      ] 
    },
    { 
      name: 'Menu 3',
      items: [
        { name: 'Item 1', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3', 'Sub-Item 4']},
        { name: 'Item 2', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
        { name: 'Item 3', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3']},
      ] 
    },
    { 
      name: 'Menu 4',
      items: [
        { name: 'Item 1', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3', 'Sub-Item 4']},
        { name: 'Item 2', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
      ] 
    },
  ]
  menu = this.menus[0];
  items = [
    { name: 'Item 1', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3', 'Sub-Item 4']},
    { name: 'Item 2', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
    { name: 'Item 3', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2', 'Sub-Item 3']},
    { name: 'Item 4', subMenuOpen: false, subMenu: ['Sub-Item 1', 'Sub-Item 2']},
  ];
  searchTerm: string = '';

  search() {
    // Implement search functionality here
    console.log('Searching for: ', this.searchTerm);
  }

  toggleSubMenu(item: any) {
    item.subMenuOpen = !item.subMenuOpen;
  }

  // header
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // modal
  menuModal: any;

  openModal(): void {
    this.menuModal.style.display = 'block';
  }

  closeModal(): void {
    this.menuModal.style.display = 'none';
  }

  setMenu(menu: any){
    this.menu = menu;
    this.closeModal();
  }

  ngOnInit(){
    this.menuModal = document.querySelector('.menu-modal');
  }
}