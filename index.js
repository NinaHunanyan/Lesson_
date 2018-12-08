// var os = require("os");
// var message = "The platform is ";


// function main(){
//     console.log(message + os.platform());
// }

// main();


// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("Hello world");
// });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000")

// });

 
// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");
//  });
//  app.get("/name/:name", function(req, res){
//     var name = req.params.name;
//     res.send("<h1>Hello " + name +"</h1>");
//  });
//  app.listen(3000, function(){
//     console.log("Example is running on port 3000");
//  });

// var express = require("express");
//  var app = express();


// app.get("/google", function(req, res){
//     res.redirect('http://google.com');
//  });

//  app.get("/google/:search", function(req, res){
//     var search = req.params.search;
//     res.redirect('http://google.com/search?q=' + search);
//  });
//   app.listen(3000, function(){
//     console.log("Example is running on port 3000");
//  });

// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();



// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();
