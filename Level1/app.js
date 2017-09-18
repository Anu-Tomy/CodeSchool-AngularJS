//Creating a Store Module
    //Create a Module named gemStore
    //Attach the gemStore module to our HTML page with a Directive.
    //In index.html, create a simple Expression to display a friendly "Hello, Angular!" message.
    
var app = angular.module('gemStore',[]);
    
    //First Controller
        //Add a controller named StoreController to our gemStore application.
        //Attach the StoreController to the <body> tag. Be sure to alias it as store.
        //In app.js, we've added a gem object to represent one of the products in our gemStore. 
        //Assign it to the product property of StoreController so we can use them in the page.
        //Display the name of the product inside the <h3> tag.
        //Display the price of the product inside the <em> tag.
        
(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  app.controller('StoreController',function(){
    this.product=gem;
  });
})();
        
    