import Cards from "./Cards.js";
import Container from "./Container.js";
import Result from "./Result.js";

//Main container styles are applied
Container.applyStyleContainerBlock();

//Styles are applied over the result block
Result.applyStyleResultBlock();
Result.applyStyleInnerFlexBlocks();
Result.applyStyleSpanTag();
Result.applyStyleH3Tag();
Result.applyStyleCircleBlock();

//Styles are applied over cards
Cards.applyStyleSpanTag();
Cards.applyStyleArticleTag();
Cards.applyStyleInputTag();
Cards.applyStyleImgTag();
Cards.applyStyleh2Tag();
Cards.applyStyleButtonTag();

