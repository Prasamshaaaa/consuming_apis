export class MenuItems {
    routerLink: string = '';
    value: string = '';
    displayOrder: number = 0;

    constructor(routerLink: string, value: string, displayOrder: number) {
        this.routerLink = routerLink;
        this.value = value;
        this.displayOrder = displayOrder;
    }

}

export class ThisIsAClassThatGivesMenuItems {
    static getMenuItems(): Array<MenuItems> {
        const menuItems = new Array<MenuItems>();
        menuItems.push(new MenuItems('login', 'Login', 1));
        menuItems.push(new MenuItems('labtestdatalistcomponent', 'Lab Tests Data', 2));

       
        //You can sort menuItems before returning them.
        return menuItems;
    }
}