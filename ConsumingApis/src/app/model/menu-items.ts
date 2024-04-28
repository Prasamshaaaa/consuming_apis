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
        // menuItems.push(new MenuItems('login', 'Login', 1));
        menuItems.push(new MenuItems('labtestdatalistcomponent', 'Lab Tests Data', 1));
        menuItems.push(new MenuItems('labspecimencomponent', 'Lab Specimen Component', 2));
        menuItems.push(new MenuItems('schemepricecategorycomponent', 'Scheme Price Category ', 3));
        menuItems.push(new MenuItems('chat', 'Chat Bot ', 4));
        menuItems.push(new MenuItems('reporttemplate', 'Report Template ', 5));
        menuItems.push(new MenuItems('patientlistforfinalreport', 'Patient List ', 6));
        menuItems.push(new MenuItems('lookups', 'Look Ups ', 7));




        //You can sort menuItems before returning them.
        return menuItems;
    }
}