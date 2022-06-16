export class Cards {

    //Componentes
    static cards = document.querySelectorAll(".card");

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
    static button_cursor = "pointer";


    //Métodos

    static applyStyleArticleTag = () => {
        for (let tarjeta of Cards.cards) {
            tarjeta.style.backgroundColor = Cards.article_backgroundColor;
            tarjeta.style.height = Cards.article_height;
            tarjeta.style.width = Cards.article_width;
            tarjeta.style.display = Cards.article_display;
            tarjeta.style.flexDirection = Cards.article_flexDirection;
            tarjeta.style.alignItems = Cards.article_alignItems;
            tarjeta.style.justifyContent = Cards.article_justifyContent;
            tarjeta.style.border = Cards.article_border;
            tarjeta.style.borderRadius = Cards.article_borderRadius;
        }
    }

    static applyStyleImgTag = () => {

        for (let j = 0; j < Cards.cards.length; j++) {
            let tagArray = Cards.cards[j].getElementsByTagName("img");
            for (let i = 0; i < tagArray.length; i++) {
                tagArray[i].style.height = Cards.img_height;
                tagArray[i].style.width = Cards.img_width;
            }
        }
    }

    static applyStyleInputTag = () => {
        for (let j = 0; j < Cards.cards.length; j++) {
            let tagArray = Cards.cards[j].getElementsByTagName("input");
            for (let i = 0; i < tagArray.length; i++) {
                tagArray[i].style.width = Cards.input_width;
                tagArray[i].style.height = Cards.input_height;
                tagArray[i].style.paddingLeft = Cards.input_paddingLeft;
                tagArray[i].style.fontSize = Cards.input_fontSize;
                tagArray[i].style.borderRadius = Cards.input_borderRadius;
            }
        }
    }

    static applyStyleh2Tag = () => {
        Cards.cards.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("h2");

            for (let tag of tagArray) {
                tag.style.color = Cards.h2_color;
                tag.style.fontSize = Cards.h2_fontSize;
            }

        });
    }

    static applyStyleSpanTag = () => {
        Cards.cards.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("span");

            for (let tag of tagArray) {
                tag.style.color = Cards.span_color;
                tag.style.fontSize = Cards.span_fontSize;
            }

        });
    }

    static applyStyleButtonTag = () => {
        Cards.cards.forEach(tarjeta => {
            let tagArray = tarjeta.getElementsByTagName("button");

            for (let tag of tagArray) {
                tag.style.height = Cards.button_height;
                tag.style.backgroundColor = Cards.button_backgroundColor;
                tag.style.color = Cards.button_color;
                tag.style.width = Cards.button_width;
                tag.style.borderRadius = Cards.button_borderRadius;
                tag.style.borderBottom = Cards.button_borderBottom;
                tag.style.borderLeft = Cards.button_borderLeft;
                tag.style.borderRight = Cards.button_borderRight;
                tag.style.borderTop = Cards.button_borderTop;
                tag.style.fontSize = Cards.button_fontSize;
                tag.style.cursor = Cards.button_cursor;

            }

        });
    }
}

export default Cards;

