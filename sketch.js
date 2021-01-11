


function setup() {

  createCanvas(700, 600);

  database=firebase.database();


  nameinput=createInput();
  nameinput.position(280,133);
  
  occupationinput=createInput();
  occupationinput.position(280,333);

  dobinput=createInput();
  dobinput.position(280,233);
  
  religioninput=createInput();
  religioninput.position(280,283);

  stateinput=createInput();
  stateinput.position(280,383);
  
  cityinput=createInput();
  cityinput.position(280,433);
  
  streetinput=createInput();
  streetinput.position(330,483);
  
  pincodeinput=createInput();
  pincodeinput.position(280,533);

  malebutton=createButton("Male");
  malebutton.position(310,185);
  malebutton.mousePressed(maleentry);

  femalebutton=createButton("Female");
  femalebutton.position(380,185);
  femalebutton.mousePressed(femaleentry);

  submitbutton=createButton("SUBMIT");
  submitbutton.position(700,600);
  submitbutton.mousePressed(submitinfo);
  
}






function draw() {  

 background(0);
 fill(255);
 textSize(26);
 text("Sample Form" , 300 , 30);

 textSize(20);
 text("Full Name : " , 20 , 100);
 text("Gender : " , 47 , 150);
 text("D.O.B. : " , 60 , 200);
 text("Religion : " , 40 , 250);
 text("Occupation : " , 15 , 300);
 text("State : " , 67 , 350);
 text("City/Town : " , 26 , 400);
 text("Street/Landmark : " , 10 , 450);
 text("Pincode : " , 40 , 500);


}

function submitinfo(){

  database.ref("Name").on("value" , function(data){
    nameref = nameinput.value();
  })
  database.ref("DateofBirth").on("value" , function(data){
    dobref = dobinput.value();
  })
  database.ref("City").on("value" , function(data){
    cityref = cityinput.value();
  })
  database.ref("Occupation").on("value" , function(data){
    occupationref = occupationinput.value();
  })
  database.ref("Religion").on("value" , function(data){
    religionref = religioninput.value();
  })
  database.ref("State").on("value" , function(data){
    stateref = stateinput.value();
  })
  database.ref("Street").on("value" , function(data){
    streetref = streetinput.value();
  })
  database.ref("Pincode").on("value" , function(data){
    pincoderef = pincodeinput.value();
  })
  database.ref('/').update({
    Name : nameref,
    DateofBirth : dobref,
    City:cityref,
    Occupation:occupationref,
    Pincode:pincoderef,
    Religion:religionref,
    State:stateref,
    Street:streetref      
  });
  femalebutton.show();
  malebutton.show();
}

function maleentry(){
  database.ref("Gender").on("value" , function(data){
    maleref = "Male";
  })
database.ref('/').update({
  Gender:maleref
})
femalebutton.hide();


}

function femaleentry(){
  database.ref("Gender").on("value" , function(data){
    femaleref ="Female";
  })
  database.ref('/').update({
    Gender:femaleref
  })
  malebutton.hide();

}