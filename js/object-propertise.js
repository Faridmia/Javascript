const obj_propertise = {
    fname:" John",
    lname:" Doe",
    age: 25
};

obj_propertise.nationality = "English";

let txt = "";
for( let x in  obj_propertise) {
     txt += obj_propertise[x]+"\n";
     
}



console.log(txt);


