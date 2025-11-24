function getBasePrice(type, weight) {
    if (type === "document") {
        if (weight <= 1) return 20000;
        if (weight <= 5) return 30000;
        if (weight <= 10) return 50000;
        if (weight <= 20) return 80000;
        return 80000 + (weight - 20) * 3000; 
    }

    if (type === "luggage") {
        if (weight <= 1) return 30000;
        if (weight <= 5) return 50000;
        if (weight <= 10) return 80000;
        if (weight <= 20) return 120000;
        return 120000 + (weight - 20) * 4000;
    }

     if (type === "fragile") {
        if (weight <= 1) return 40000;
        if (weight <= 5) return 70000;
        if (weight <= 10) return 120000;
        if (weight <= 20) return 180000;
        return 180000 + (weight - 20) * 6000;
    }

    if (type === "electronic") {
        if (weight <= 1) return 50000;
        if (weight <= 5) return 90000;
        if (weight <= 10) return 150000;
        if (weight <= 20) return 220000;
        return 220000 + (weight - 20) * 7000;
    }

}

function calculate() {
    let type = document.getElementById("type").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let service = document.getElementById("service").value;

    if (!weight || weight <= 0) {
        document.getElementById("result").innerText = "Vui lòng nhập trọng lượng hợp lệ" ;
        return;
    }

    let basePrice = getBasePrice(type, weight);
    let finalPrice = service === "express" ? basePrice * 1.5 : basePrice;

    document.getElementById("result").innerText =
         finalPrice.toLocaleString("vi-VN") + "đ";

    document.querySelector("form").addEventListener("submit", function(e){
        e.preventDefault();
    })
}