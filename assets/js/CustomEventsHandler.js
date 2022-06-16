

export default function handleSummaryBlock() {
    document.querySelector("#summarize").addEventListener("click", sumUp);
}

const sumUp = () => {

    let basePrice = 400000;
    let quantity = document.querySelector("#quantity").value;
    let color = document.querySelector("#color").value;

    document.querySelector("#rTotal").innerHTML = basePrice*quantity;
    document.querySelector("#rQuantity").innerHTML = quantity;
    document.querySelector("#cCircle").style.backgroundColor = color;
}