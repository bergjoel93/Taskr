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
        const navbarContainer = this.createNavbar.getNavbar();
        this.sidebar.appendChild(navbarContainer);
        // activate handling
        const handleNavbar = new HandleNavbar();
        
    }
}

export default RenderNavbar;

