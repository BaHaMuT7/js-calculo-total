export class Utilities {

    //Componentes
    static tarjetas = document.querySelectorAll(".tarjeta");

    //Styles

    //Article styles
    static article_backgroundColor = "#7BA238";
    static article_height = "971px";
    static article_width = "684px";
    static article_display= "flex";
    static article_flexDirection = "column";
    static article_alignItems = "center";
    static article_justifyContent = "space-around";
    static article_border = "3px solid #7A7A7A";
    static article_borderRadius = "10px";


    //Image styles
    static img_height = "305px";
    static img_width = "525px";

    //Input styles
    static input_width = "470px";
    static input_height = "85px";
    static input_paddingLeft = "40px";
    static input_fontSize = "50px";
    static input_borderRadius = "20px";

    //H2 Styles
    static h2_fontSize = "50px";
    static h2_color= "#FFF";

    //Span styles
    static span_color = "#FFF";
    static span_fontSize = "65px";

    //Button styles
    static button_height = "90px";
    static button_backgroundColor = "#E2A30C";
    static button_color = "#FFF";
    static button_width = "315px";
    static button_borderRadius = "20px";
    static button_borderBottom = "5px solid #000";
    static button_borderRight = "5px solid #000";
    static button_borderTop = "5px solid #7A7A7A";
    static button_borderLeft = "5px solid #7A7A7A";
    static button_fontSize = "45px";


    //Métodos

    static applyStyleArticleTag = () => {
        for (let tarjeta of Utilities.tarjetas) {
            tarjeta.style.backgroundColor = Utilities.article_backgroundColor;
            tarjeta.style.height = Utilities.article_height;
            tarjeta.style.width = Utilities.article_width;
            tarjeta.style.display = Utilities.article_display;
            tarjeta.style.flexDirection = Utilities.article_flexDirection;
            tarjeta.style.alignItems = Utilities.article_alignItems;
            tarjeta.style.justifyContent = Utilities.article_justifyContent;
            tarjeta.style.border = Utilities.article_border;
            tarjeta.style.borderRadius = Utilities.article_borderRadius;
        }
    }

    static applyStyleImgTag = () => {

        for (let j = 0; j < Utilities.tarjetas.length; j++) {
            let tagArray = Utilities.tarjetas[j].getElementsByTagName("img");
            for (let i = 0; i < tagArray.length; i++) {
                tagArray[i].style.height = Utilities.img_height;
                tagArray[i].style.width = Utilities.img_width;
            }
        }
    }

    static applyStyleInputTag = () => {
        for (let j = 0; j < Utilities.tarjetas.length; j++) {
            let tagArray = Utilities.tarjetas[j].getElementsByTagName("input");
            for (let i = 0; i < tagArray.length; i++) {
                tagArray[i].style.width = Utilities.input_width;
                tagArray[i].style.height = Utilities.input_height;
                tagArray[i].style.paddingLeft = Utilities.input_paddingLeft;
                tagArray[i].style.fontSize = Utilities.input_fontSize;
                tagArray[i].style.borderRadius = Utilities.input_borderRadius;
            }
        }
    }

    static applyStyleh2Tag = () => {
        Utilities.tarjetas.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("h2");

            for (let tag of tagArray) {
                tag.style.color = Utilities.h2_color;
                tag.style.fontSize = Utilities.h2_fontSize;
            }

        });
    }

    static applyStyleSpanTag = () => {
        Utilities.tarjetas.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("span");

            for (let tag of tagArray) {
                tag.style.color = Utilities.span_color;
                tag.style.fontSize = Utilities.span_fontSize;
            }

        });
    }

    static applyStyleButtonTag = () => {
        Utilities.tarjetas.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("button");

            for (let tag of tagArray) {
                tag.style.height = Utilities.button_height;
                tag.style.backgroundColor = Utilities.button_backgroundColor;
                tag.style.color = Utilities.button_color;
                tag.style.width = Utilities.button_width;
                tag.style.borderRadius = Utilities.button_borderRadius;
                tag.style.borderBottom = Utilities.button_borderBottom;
                tag.style.borderLeft = Utilities.button_borderLeft;
                tag.style.borderRight = Utilities.button_borderRight;
                tag.style.borderTop = Utilities.button_borderTop;
                tag.style.fontSize = Utilities.button_fontSize;

            }

        });
    }
}

export default Utilities;

