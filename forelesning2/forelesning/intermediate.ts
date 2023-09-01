/* 
    ----- VELKOMMEN TIL TYPESCRIPT-KURS! -----

    CHEATSHEET FOR INTERMEDIATE

    Nå som vi har litt erfaring med TypeScript, er det på tide å lære litt mer avanserte ting.
    I denne filen skal vi gå gjennom noen ting som er litt vanskeligere enn det vi har gjort til nå, samtidig som
    det viker enda mer vekk fra JavaScript. Her er det mye å lære, så ikke bli overveldet om du ikke forstår alt med en gang.
    Det viktigste er at du forstår konseptene, og at du vet at de finnes. Da kan du alltids slå opp i dokumentasjonen eller
    spørre noen som kan bedre enn deg. DET ER ALDRI FEIL Å SPØRRE OM HJELP!

    Vi skal gå gjennom følgende:
    - Union- og intersection-typer
    - Egendefinerte typer / interfaces
    - Funksjoner
    - Klasser
    - Arv    
*/

/* ---- Union- og intersection-typer ----

    I TypeScript kan vi lage union- og intersection-typer. Disse er veldig nyttige når vi skal lage typer som kan være flere ting,
    eller som kan ha flere egenskaper. Vi kan også bruke union- og intersection-typer til å lage egne typer, som vi skal se på senere.

    En union-type er en type som kan være flere ting. Vi kan lage en union-type ved å bruke '|' mellom typene vi vil ha.
    Under ser du et eksempel på hvordan vi kan lage en union-type.
*/

type NumberOrString = number | string;

/* 
    Her har vi laget en union-type som kan være enten et tall eller en tekststreng. Vi kan nå bruke denne union-typen
    som en vanlig type, og vi kan gi variabler, funksjoner og objekter denne typen. En ting man må passe på er at det 
    ikke er alltid man vet hvilken av typene som brukes i unionen som er gjeldende, og man vi da kun ha tilgang til
    egenskaper som er felles for alle typene i unionen. Under ser du et eksempel på dette.
*/

let myNumberOrString: NumberOrString = 5;
//myNumberOrString.charAt(0) // Dette vil gi en feilmelding, fordi vi ikke vet om myNumberOrString er en tekststreng eller et tall
myNumberOrString = "TypeScript er lættis!";
//myNumberOrString.charAt(0) // Nå vet vi at myNumberOrString er en tekststreng, så dette vil ikke gi en feilmelding
myNumberOrString.toString(); // Dette vil ikke gi en feilmelding, fordi både tall og tekststrenger har en toString()-funksjon

/*
    Vi kan også lage arrays med union-typer. Da kan vi ha arrays som kan inneholde flere typer. Under ser du et eksempel på dette.
    Igjen, her må man være veldig forsiktig med typene, ettersom det kan utløse errorer dersom man ikke er forsiktig. 
    Dersom man vet hvordan arrayen kommer til å se ut på forhånd, så anbefales det å bruke en 'tuple'.
*/

let myNumberOrStringArray: NumberOrString[] = [5, "TypeScript er lættis!"];

/*
    Intersection-typer er en type som har alle egenskapene til alle typene i intersectionen. Vi kan lage en intersection-type
    ved å bruke '&' mellom typene vi vil ha. Under ser du et eksempel på hvordan vi kan lage en intersection-type.
*/

type Car = {
  brand: string;
  model: string;
  amountOfWheels: number;
};

type Information = {
  brand: string;
  size: string;
  color: string;
};

type CarInformation = Car & Information;

/*
    Her har vi laget en intersection-type som har alle egenskapene til både Car og Information. Vi kan nå bruke denne intersection-typen
    som en vanlig type, og vi kan gi variabler, funksjoner og objekter denne typen. Under ser du et eksempel på dette.
*/

const myCarClothes: CarInformation = {
  brand: "Volvo", // Ikke error selv om  selv om begge typene har denne egenskapen
  model: "XC90",
  amountOfWheels: 4,
  size: "XL",
  color: "Black",
};

/*
    ----- EGENDEFINERTE TYPER / INTERFACES -----

    I TypeScript kan vi lage egne typer, som vi kan bruke til å definere hvordan et objekt skal se ut.
    Dette kan enten gjøres med 'interfaces' eller med 'typer'. I praksis, så er det ikke så stor forskjell på disse to,
    og de brukes for det meste om hverandre. Vi kommer tilbake til forskjellene senere.

    Under ser du et eksempel på hvordan vi kan lage en type for et objekt som representerer et dyr.
*/

type Animal = {
  name: string;
  age: number;
  hasFur: boolean;
  amountOfLegs: number;
};

/*
    Her har vi laget en type som heter 'Animal'. Denne typen har fire egenskaper:
    - name: en tekststreng
    - age: et tall
    - hasFur: en boolsk verdi
    - amountOfLegs: et tall

    Vi kan nå bruke denne typen til å definere hvordan et objekt skal se ut. Objektet er da tvunget til å ha de samme egenskapene
    som typen har. Dette gjør det enklere å vite hva slags data vi har med å gjøre, og det gjør det enklere å bruke objektet.
*/

const myDog: Animal = {
  name: "Fido",
  age: 5,
  hasFur: true,
  amountOfLegs: 4,
};

/*
    Her har vi laget et objekt som representerer en hund. Vi har gitt objektet alle egenskapene som typen krever, og vi har
    gitt egenskapene riktig type. Dette gjør at TypeScript ikke vil klage på objektet, og vi kan bruke det som vi vil.

    Det finnes derimot ting som er ulikt for ulike dyr, som gjør at vi kanskje har lyst til å lage en egen type som er mer
    spesifik for ulike dyr, men fortsatt har de samme egenskapene som Animal. Som vi så over, så kan vi bruke union- og intersection-typer
    til å lage egne typer. Under ser du et eksempel på hvordan vi kan lage en type for objekter som representerer hunder og katter.
*/

type Dog = Animal & {
  breed: string;
  isGoodBoy: boolean;
};

const luna: Dog = {
  name: "Luna",
  age: 3,
  hasFur: true,
  amountOfLegs: 4,
  breed: "Golden Retriever",
  isGoodBoy: true,
};

type Cat = Animal & {
  isEvil: boolean; // true
  hasBeans: boolean;
};

const mittens: Cat = {
  name: "Mittens",
  age: 2,
  hasFur: true,
  amountOfLegs: 4,
  isEvil: true,
  hasBeans: true,
};

/* 
    Dette ser jo mistenkelig ut som arv i JavaScript, og det er det også (ish). Vi kommer senere til å se at vi også kan bruke
    klasser til å lage objekter, på samme måte som vi er vandt til i andre programmeringsspråk. Det er derimot ikke alltid
    vi har lyst til å bruke klasser, ettersom det er mye jobb. I slike cases, så kan vi bruke interfaces og typer til å lage
    objekter som har de egenskapene vi vil ha - som er betydelig enklere

    La oss nå se på optional parametre. Dette er noe som er veldig nyttig, og som vi kommer til å bruke mye.
    Optional parametre er parametre som ikke trenger å være med når vi kaller på en funksjon. Dette gjør at vi kan
    lage funksjoner som kan ta imot flere typer data, uten at vi trenger å lage flere funksjoner. Under ser du et eksempel på dette.
*/

type Person = {
  name: string;
  age: number;
  currentAnimal?: Animal; // Optional parameter som ikke trenger å være med
};

const personWithoutAnimal: Person = {
  name: "Ola Nordmann",
  age: 30,
}; // Dette er lov, fordi currentAnimal ikke er med. currentAnimal vil da bli 'undefined'

const personWithAnimal: Person = {
  name: "Kari Nordmann",
  age: 25,
  currentAnimal: mittens,
}; // Dette er lov, fordi currentAnimal er med, og Cat en subtype av Animal

/*
    Her har vi laget en type som heter 'Person'. Denne typen har tre egenskaper:
    - name: en tekststreng
    - age: et tall
    - currentAnimal: enten et Animal-objekt, eller undefined

    Dersom vi prøver å aksessere currentAnimal på objektet som ikke har med currentAnimal, så får vi lov til det,
    ettersom undefined er en helt lovlig verdi. MEN, dersom vi prøver å hente ut informasjon fra currentAnimal uten å 
    sjekke om det er undefined, så vil vi få en feilmelding. Dette er fordi TypeScript ikke vet om currentAnimal er
    med eller ikke, og derfor kan det være undefined. 
*/
console.log(personWithoutAnimal.currentAnimal); // Helt lov. Vil gi 'undefined'
//console.log(personWithoutAnimal.currentAnimal.name) // Vil gi en feilmelding, fordi currentAnimal er undefined
console.log(personWithAnimal.currentAnimal); // Helt lov. Vil gi Mittens-objektet
//console.log(personWithAnimal.currentAnimal.name) // Vil gi feilmelding på samme måte som over, selv om Mittens er definert

// Hvordan håndterer vi dette? Jo, vi kan sjekke om currentAnimal er undefined før vi prøver å hente ut informasjon fra det.
// Dette kan vi gjøre ved å sette et '?' etter objektet vi vil sjekke. Under ser du eksempler på dette.

console.log(personWithoutAnimal.currentAnimal?.name); // Vil gi 'undefined', fordi currentAnimal er undefined
console.log(personWithAnimal.currentAnimal?.name); // Vil gi 'Mittens', fordi currentAnimal er definert

// Hvis du virkelig vil si til TypeScript at currentAnimal ikke er undefined, så kan du bruke '!' etter objektet.

console.log(personWithAnimal.currentAnimal!.name); // Vil gi en feilmelding, fordi currentAnimal er undefined
// OBS! Dette er ikke anbefalt, og det er bedre å kjøre eksplisitte sjekker på om objekter er undefined eller ikke.

/*
    ----- FUNKSJONER -----

    I TypeScript kan vi lage funksjoner på samme måte som vi gjør i JavaScript. Det er derimot noen forskjeller, og 
    andre måter å gjøre ting på som gjør livet lettere for oss. I JavaScript, og dermed også i TypeScript, så er funksjoner
    first-class citizens. Dette betyr at funksjoner er en type på lik linje med andre typer, og at vi kan bruke funksjoner
    som parametre til andre funksjoner. Vi kan også bruke funksjonen som en type, og vi kan returnere funksjoner fra andre funksjoner.
    
    Det finnes flere måter å definere funksjoner på i TypeScript. Vi kan bruke 'function'-nøkkelordet, eller vi kan bruke
    'arrow'-syntaxen. Under ser du eksempler på begge deler.
*/

// Funksjon som tar inn to tall og returnerer summen av dem
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Funksjon som tar inn to tall og returnerer summen av dem
const addNumbersArrow = (a: number, b: number): number => {
  return a + b;
};

/*
    Her har vi laget to funksjoner som gjør det samme. Den eneste forskjellen er at den ene er definert med 'function'-nøkkelordet,
    mens den andre er definert med 'arrow'-syntaxen. Det er svært liten forskjell på disse to, og det er helt opp til deg hvilken du vil bruke.
    Det viktigste er at man holder seg til en av dem, og ikke blander dem. Det er også viktig å merke seg at vi har definert hvilke typer
    parametre funksjonen skal ta inn, og hvilken type funksjonen skal returnere. Dette er veldig nyttig, ettersom det gjør det lettere
    å vite hva funksjonen gjør. Dersom vi prøver å kalle på funksjonen med feil type parametre, eller dersom funksjonen returnerer feil type,
    så vil TypeScript gi oss en feilmelding. 
*/

//addNumbers("5", 5) // Vil gi en feilmelding, fordi vi prøver å sende inn en tekststreng som parameter
addNumbers(5, 5); // Helt lov, fordi vi sender inn to tall som parameter
addNumbers(5, 5).toString(); // Helt lov, fordi vi vet at funksjonen returnerer et tall

/*
    Jeg liker best å bruke 'arrow'-syntaxen, ettersom det er kortere og mer oversiktlig. Det tillater også å
    gjøre noe morsomt når vi ikke har ekstra funksjonslogikk - men kun en returverdi. Under ser du et eksempel på dette.
*/

const addNumbersArrowShort = (a: number, b: number): number => a + b;
// Merk at vi ikke trenger å skrive 'return' når vi bruker 'arrow'-syntaxen på denne måten
const subtractNumbersArrowShort = (a: number, b: number): number => a - b;

/*
    Nå som vi har sett på hvordan vi kan definere funksjoner, så skal vi se på hvordan vi kan bruke funksjoner som parametre.
    Dette er veldig nyttig, og det er noe vi kommer til å bruke mye.
*/

// Funksjon som tar inn to tall og en funksjon, og returnerer resultatet av funksjonen
const calculateNumbers = (
  a: number,
  b: number,
  func: (a: number, b: number) => number
): number => {
  return func(a, b);
};

/*
    Her har vi laget en funksjon som tar inn to tall og en funksjon som parametre. Funksjonen som blir sendt inn som parameter
    må ta inn to tall og returnere et tall. Dette er fordi vi har definert at funksjonen skal ta inn to tall og returnere et tall.
    Dersom vi prøver å sende inn en funksjon som ikke tar inn to tall og returnerer et tall, så vil TypeScript gi oss en feilmelding.
*/

calculateNumbers(5, 5, addNumbersArrowShort); // Returnerer tallet 10
//calculateNumbers(5, 5, "addNumbersArrowShort") // Vil gi en feilmelding, fordi vi prøver å sende inn en tekststreng som parameter
calculateNumbers(5, 2, subtractNumbersArrowShort); // Returnerer tallet 3
//calculateNumbers(mittens, lune, calculateNumbers) // Vil gi en feilmelding, fordi vi prøver å sende inn  Animal-objekter som parametre
calculateNumbers(Number("322"), 22, addNumbersArrowShort); // Returnerer tallet 344
calculateNumbers(parseInt("Not a number"), 22, addNumbersArrowShort); // Returnerer NaN, fordi vi prøver å sende inn NaN som parameter
// Merk! NaN (not a number) er et tall, og er derfor lov å sende inn som parameter (makes sense, right?)

/*
    Funksjoner kan også ta inn optional-parametre. Dette gjør at vi kan lage funksjoner som kan ta imot flere typer data,
    uten at vi trenger å lage flere funksjoner. Det derimot viktig å sjekke om optional-parametre er med eller ikke, ettersom
    de kan være undefined. Dersom man prøver å aksessere data fra 'undefined' så vil TypeScript gi oss en feilmelding.
    Optional-parametre må være de siste parametrene i funksjonen, og de må være merket med '?'.
*/

// Funksjon som tar inn to tall og en funksjon, og returnerer resultatet av funksjonen
const calculateNumbersOptional = (
  a: number,
  b: number,
  func: (a: number, b: number) => number,
  printFunc?: (sum: number) => void
): number => {
  const sum = func(a, b);

  if (printFunc) {
    // undefined er falsy, så vi kjører printFunc kun om den er definert
    printFunc(sum);
  }

  return sum;
};

const printSum = (sum: number): void => {
  console.log(`Summen er ${sum}`);
};

calculateNumbersOptional(5, 5, addNumbersArrowShort, printSum); // Returnerer tallet 10, og printer ut 'Summen er 10'

/*
    Her har vi laget en funksjon som tar inn to tall og en funksjon som obligatosirks parametre, og en funksjon som optional
    parameter. Vi kjører kun printFunc dersom den er definert, og vi kjører den med summen som parameter. Dersom vi ikke
    sender inn printFunc som parameter, så vil den være undefined, og vi vil ikke kjøre den. 

    Hva om vi ikke vet hvor mange tall vi skal sende inn? Da kan vi bruke 'rest'-syntaxen. Dette gjør at vi kan sende inn
    et ubestemt antall parametre, og vi kan bruke dem som et array. Under ser du et eksempel på dette.
*/

// Funksjon som tar inn et ubestemt antall tall, og returnerer summen av dem
const addNumbersRest = (
  func: (a: number, b: number) => number,
  printFunc?: (sum: number) => void,
  ...numbers: number[]
): number => {
  let sum = numbers.reduce((a, b) => func(a, b), 0); // Reduce kommer gratis med Array-objektet
  
  if (printFunc) {
    printFunc(sum);
  }

  return sum;
};

addNumbersRest(addNumbersArrowShort, printSum, 1, 2, 3, 4, 5); // Returnerer tallet 15, og printer ut 'Summen er 15'
addNumbersRest(addNumbersArrowShort, undefined, 1, 2, 3, 4, 5); // Returnerer tallet 55, men printer ingenting
//addNumbersRest(subtractNumbersArrowShort, printSum, 1, 2, 3, 4, "5"); // Vil gi en feilmelding, fordi vi prøver å sende inn en tekststreng som parameter

/* 
    Merk! Her er printFunc optional, men dersom den ikke er med, så må vi sende inn et ubrukt parameter for å få med resten av tallene.
    Dette er fordi rest-parametre alltid må være de siste parametrene i funksjonen, og forventes å være parameter nr. 3 i denne funksjonen. 
    Dersom vi ikke vil kjøre printFunc, så kan vi sende inn 'undefined' som parameter. Dette er fordi 'undefined' er en lovlig verdi for
    printFunc. 
 */

/*
    Det er viktig at rest-parametre er de siste parametrene i funksjonen, og at det kun er ett rest-parameter.
    Det gir mening når du tenker på det, ettersom det ikke gir mening å ha flere rest-parametre. Det er også viktig
    å merke seg at rest-parametre alltid er et array, selv om det kun er ett tall som sendes inn. Dette er fordi
    det er et array av tall, og ikke et tall. Dersom vi prøver å sende inn et tall som ikke er et tall, så vil
    TypeScript gi oss en feilmelding.
*/

