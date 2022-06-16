export class Result {

    //Componentes
    static result = document.querySelector(".resultados");
    static circle = document.querySelector(".circulo");
    static results = document.querySelectorAll(".resultados");
    static innerFlex = document.querySelectorAll(".total, .cantidad, .color");

    //Estilos

    //Result Block Styles
    static result_marginLeft = "50px";

    //Results inner three (total, cantidad y color)
    static innerFlex_display = "flex";

    //Results span
    static span_marginTop = "50px";
    static span_marginLeft = "10px";
    static span_fontSize = "50px";

    //Results h3
    static h3_fontSize = "50px";

    //Results circle
    static circle_marginLeft = "10px";
    static circle_marginTop = "50px";
    static circle_height = "50px";
    static circle_width = "50px";
    static circle_backgroundColor = "#FFF";
    static circle_borderRadius = "50px";
    static circle_border = "1px solid black";


    static applyStyleResultBlock = () => {
       Result.result.style.marginLeft = Result.result_marginLeft;
    }

    static applyStyleInnerFlexBlocks = () => {
        Result.innerFlex.forEach(element => {
            element.style.display = Result.innerFlex_display;
        });
    }

    static applyStyleSpanTag = () => {
        Result.results.forEach(element => {
            let tagArray = element.getElementsByTagName("span");
            for (let tag of tagArray) {
                tag.style.marginTop = Result.span_marginTop;
                tag.style.marginLeft = Result.span_marginLeft;
                tag.style.fontSize = Result.span_fontSize;
            }
        });
    }

    static applyStyleH3Tag = () => {
        Result.results.forEach(element => {
            let tagArray = element.getElementsByTagName("h3");
            for (let tag of tagArray) {
                tag.style.fontSize = Result.h3_fontSize;
            }
        });
    }

    static applyStyleCircleBlock = () => {
        Result.circle.style.marginLeft = Result.circle_marginLeft;
        Result.circle.style.marginTop = Result.circle_marginTop;
        Result.circle.style.height = Result.circle_height;
        Result.circle.style.width = Result.circle_width;
        Result.circle.style.backgroundColor = Result.circle_backgroundColor;
        Result.circle.style.borderRadius = Result.circle_borderRadius;
        Result.circle.style.border = Result.circle_border;
    }


}

export default Result;