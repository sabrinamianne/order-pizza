//Business Logic for Pizza

// Create the constructor with the information about the Pizza
function Pizza (topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = price;
}

// Create the prototype to be able to know the price
Pizza.prototype.getprice = function () {
  if (this.size === "small") {
    this.price += 8;
  }
  else if (this.size === "medium") {
    this.price += 12;
  }
  else if (this.size === "large") {
    this.price += 15;
  }
  if (this.topping.length < 3) {
    this.price += 0
  }
  else if (this.topping.length < 6) {
    this.price += 4
  }
  else if ( this.topping.length < 9) {
    this.price += 6 ;
  }
  else if ( this.topping.length >=9) {
    this.price += 10 ;
  }
  return this.price;
};

// Business Logic for the List of PIZZA
function ListPizzas () {
  this.pizzas= [];
  this.currentId = 0;
}
// Prototype for add to an array every chocie of pizzas
ListPizzas.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

ListPizzas.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// User Interface Logic
// New instance of the ListPizzas Constructor
var listPizzas = new ListPizzas();

function displayPizzasDetails(listPizzasToDisplay) {
  var pizzaDisplayList = $("ol#olFirstList");
  var htmlForPizzasInfo = "";
  listPizzasToDisplay.pizzas.forEach(function(pizza) {
  htmlForPizzasInfo += "<li id=" + pizza.id  + ">" +"Size of the pizza:  "+ pizza.size + "Topping : " + pizza.topping + "</li>"
});
pizzaDisplayList.html(htmlForPizzasInfo);
};

$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    // Variables of the Pizza size, the price instance and an empty array for the toppings
    var choiceUserSize = $("select#size").val();
    var varPrice = 0;
    var listToppings= [];
    // function to get in my empty array all toppings chose by the user for the pizza
    $("input:checkbox[name=topping]:checked").each(function(){
       var userchoice = $(this).val()
       listToppings.push(userchoice);
     });
     // New instance of the Pizza Constructor
     var newOrder =  new Pizza (listToppings,choiceUserSize,varPrice);
     // Call my prototype to get the price of the pizzas
     var priceResult = newOrder.getprice();
     listPizzas.addPizza(newOrder);


 console.log(priceResult + "$" + listPizzas.pizzas)

  });
});
