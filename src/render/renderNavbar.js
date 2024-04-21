import CreateNavbar from "../create/createNavbar";
import HandleNavbar from "../handle/handleNavbar";
/**
 * Renders the navbar
 */


class RenderNavbar {
    constructor() {
        this.sidebar = document.querySelector(".sidebar");
        this.createNavbar = new CreateNavbar('Joel');
    }

    render() {
        //clear and reprint navbar. 
        this.sidebar.innerHTML = ``;
        this.sidebar.innerHTML = this.createNavbar.getNavbar();
        // activate handling
        const handlNavbar = new HandleNavbar();
        // add more rendering logic or state updates. 
    }
}

export default RenderNavbar;

