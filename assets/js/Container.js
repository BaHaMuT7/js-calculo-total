export class Container {

    //Componentes
    static container = document.querySelector(".container");

    //Estilos
    static container_display = "flex";
    static container_alignItems = "center";

    static applyStyleContainerBlock = () => {
        Container.container.style.display = Container.container_display;
        Container.container.style.alignItems = Container.container_alignItems;
    }

}

export default Container;