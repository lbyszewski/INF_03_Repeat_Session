// strumienie wyścia 

document.writeln("hello");
console.log("hello");
let firstValue = 5;
var secondValue = 5.25;
const thirdValue = "Napis";
document.writeln("<br>");
document.writeln(" zmienna 1: " + firstValue);
document.writeln("<br>");
document.writeln(" zmienna 2: " + secondValue);
document.writeln("<br>");
document.writeln(" zmeinna 3: " + thirdValue);
alert("hello");
// strumień wejścia 

let wprowadz = parseInt(prompt("podaj jakąś wartrość liczbową: "));
document.writeln("<h1>" + wprowadz + "</h1>");

// operatory arytmetyczne
// + - * / % ** 
// operatory przyrównania
// >=, <=, <, > ==, ===
// operatory logiczne
//  && - i , || - oraz/lub , != - zaprzeczenie (negacja)  
// operatory przypisania
//  +=n - przeskok o n-element, -=n, *=n
// ikrementacja i dekrementacja 
//  i++, ++i, i--, --i 
// pętle: for, while, do-while
for(var i = 0;i<=100;i++){

}
var i = 0

while(i<100){
    i++;
}

do{
    i++;
}while(i<100);

// instrukcja warunkowa if
var a = 5;
var b = 14; 
if( a<b && a!=b ){
    // instrukcja
} else {
    // instrukcja
}


// instrukcja strująca switch-case

let variable = parseInt(prompt("podaj wartość: "));

switch(variable){
    case 1:{
        //instrukcja
    }
    case 2: {
        //instrukcja
    }
    case n: {
        //instrukcja
    }
}


// tablice 

let arrayOfelements = [5,12,3,4,6,7,12];
let anotherArray = [];
anotherArray[0] = 12;
anotherArray[1] = 15;
anotherArray[2] = 18;
anotherArray[3] = 21;
anotherArray[4] = 24;

let sum = 0;
let sumTwo = [];
for(var x = 0; x<arrayOfelements.length;x++){
    // instrukcja
    sumTwo += arrayOfelements[x]; 


}


// fukncje



// Utwórz funkcję przyjmujacą jako argument tablicę dziesięciu elementów na następnie zwróć
// sumę jej parzystych elementów, ponownie wykonaj analogiczną funkcje i podaj sumę nieparzystch elementów
// wyświetl obydwa wyniki działania w funkcji show w nagłowkach pierwszego stopnia


/* Lista kroków:
    1) stwórz funkcję o nazwie arrayElementsEven
    2) stwórz tablicę dzisięciu elementów nad funkcją
    3) podaj tablicę jako argument/parametr funkcji
    4) wewnątrz funkcji utwórz pętlę iterujaca po elementach tablicy
    5) stwórz nad funkcją zmienną pomocniczą sumEven i nadaj jej jedną z wartości 0 lub []
    6) zwróć element sumEven za pomocą słowa kluczowego return
    7) wykonaj funkcje wyświetlającą show 
    8) w ciele funkcji wypisz w strmień wyjścia
    9) w strumieniu wyjścia dokonaj procesu konkatenacji między tagiem h1 a funkcją arrayElemetsEven (poprzedź funkcje słowem kluczowym this)
    10) Pamiętaj o analogicznym wykonaniu pkt od 1 do 6 dla funkcji oddEven oraz punktu 9 do wyświetlenia jej działania




*/

