export class Branch {
    name: string;
    slogan: string;
    description: string;
    logoURL: string;
    active: boolean = $state(false);

    constructor(name: string, slogan: string, description: string, logoURL: string) {
        this.name = name;
        this.slogan = slogan;
        this.description = description;
        this.logoURL = logoURL;
        this.active = false;
    }
}