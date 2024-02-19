// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("No items selected for the sandwich.");
    } else {
      console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log("--------------------------");
  }
  
  order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
  order_sandwich("Ham", "Swiss");
  order_sandwich();
  