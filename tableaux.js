// const MyArray=['banane','pomme','cerise','poire',4];
// console.log(MyArray,"mon tableau");
// console.log(MyArray.lenght,"la langueur");
// console.log(MyArray.toString(),"afficher les élément en chaines de caractère");
// console.log(MyArray.join("/"));

// const cars=new Array("BMW","citroan","cady");
// console.log(cars,"Mesvoitures");

//  let voiture=cars.pop();//pop supprim le dernier élément du tableau
//  console.log(voiture);//element supprimé
//  console.log(cars);//le reste du tableau

//  let fruit=MyArray.push("kiwi");//ajouter a la liste
//  console.log(fruit);
//  console.log(MyArray);
//  console.log(MyArray[1]);//Le 2émé element de la liste
//  MyArray[0]="papaye";//écrasé la valeur banane
//  console.log(MyArray);

 

//  const boys=["samy","djawed","adem"];
//  const girls=["naila","houda","nour"];
//  const myChildrens=boys.Concat(girls);
//  console.log(myChildren,"myChildren");

//splice

// const fruit=["banane","fraise"]
//  const fr=fruit.splice(3,2);
//  console.log(fr);
//  console.log(fruits);
 //slice
 const fruits2=["banane","orange","citron","pomme"];
 const slicefruit=fruits2.slice(2);
 console.log(slicefruit);

 const fruits3=["banane","orange","citron","pomme"];
 const slicefruit3=fruits3.slice(1,3);
 console.log(slicefruit3);

 //exercice
 const nombres=[1,2,3,4,5,6,7];
 const slicenombre=nombres.slice(0,6);
 console.log(slicenombre);
//exercice
 const nombres1=[1,2,3,4,5,6,7];
 const slicenombre1=nombres1.splice(2,4);
 console.log(slicenombre1);