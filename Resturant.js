function calculateTotal() {

    // Get selected values
    const bagger = document.querySelector('input[name="bagger"]:checked').value;
    const pizza = document.querySelector('input[name="pizza"]:checked').value; 
    const drink = document.querySelector('input[name="drink"]:checked').value;
    
    
    // Lookup prices
    let baggerPrice;
    if (bagger === "regular") {
      baggerPrice = 2;
    } else if (bagger === "cheese") {
      baggerPrice = 5; 
    } else if (bagger === "deluxe") {
      baggerPrice = 7;
    }
    
    let pizzaPrice;
    if (pizza === "small") {
      pizzaPrice = 5;
    } else if (pizza === "medium") {
      pizzaPrice = 7;
    } else if (pizza === "large") {
      pizzaPrice = 8;
    }
    
    let drinkPrice;
    if (drink === "water") {
      drinkPrice = 1;
    } else if (drink === "soda") {
      drinkPrice = 2;
    }
    
    // Calculate total
    const total = baggerPrice + pizzaPrice + drinkPrice;
    
    // Display receipt
    document.getElementById("baggerText").textContent = `Bagger: ${bagger}`;
    document.getElementById("pizzaText").textContent = `Pizza: ${pizza}`;
    document.getElementById("drinkText").textContent = `Drink: ${drink}`;  
    document.getElementById("totalText").textContent = `Total: $${total}`;
    
    }
    