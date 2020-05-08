let express = require("express");
let app = express();



/*
ROUTES
*/

app.get("/speak/:animal",function(req,res){
    let animals = {
        pig:"Oink",
        cow:"Moo",
        dog:"Woof Woof!"
    }
        
    let response = (animals[req.params.animal]) ? "The "+req.params.animal+" says "+animals[req.params.animal]:"No such Animal";
    res.send(response);

});

app.get("/repeat/:word/:frequency",function(req,res){

    let response = "";
    let freq = req.params.frequency;
    for(let i = 1; i<= freq ; i++){
        response+= req.params.word+" ";
    }
    res.send(response);


});


app.get("/",function(req,res){

    res.send("Welcome to the app assignment!!!");
});


app.get("*",function(req,res){
    res.send("Error 404: Page not found")
})



app.listen(3000,function(req,res){
    console.log("App is started hit!");
})


