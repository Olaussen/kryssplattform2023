/* 
    ----- VELKOMMEN TIL TYPESCRIPT-KURS! -----

    CHEATSHEET FOR BASICS

    Typescript er et superset av JavaScript. Dette betyr at all JavaScript er gyldig Typescript.
    Typescript er et strengt typet språk, dette betyr at variabler må ha en type.
    Variabler kan ikke endre type etter de er definert. 

    Som i mange andre språk finnes det mange forskjellige typer i Typescript. Nedenfor ser du eksempler på alle de
    typene man får gratis med Typescript. Det er viktig å lære seg disse, ettersom du vil få bruk for de i alle
    prosjekter du jobber med.
*/

/* ---- TALL ---- 
    Det finnes flere måter å skrive tall på i Typescript, men alle tall er av typen 'number'.
    Mange språk, som Java, har flere forskjellige typer tall, som 'int' og 'float'. Dette er ikke tilfellet i Typescript.
    Du kan derfor bruke tall til å representere alle typer tall, noe som kan gjøre det litt vanskelig å vite hva slags
    tall du har med å gjøre. Det er dermed opp til deg å passe på at du ikke bruker feil type tall.

    Du kommer for det meste kun til å bruke heltall og desimaltall. Disse kalles henholdsvis 'integers' og 'floats' når 
    man snakker om programmering. 
*/

let integer: number = 1; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
let float: number = 1.1; // 1.1, 1.2, 1.3, 1.4, 1.5, 1.6
let scientific: number = 1e6; // 1e6 = 1 * 10^6 = 1000000
let hex: number = 0xf00d; // 0x = hex, f00d = 61453
let binary: number = 0b1010; // 0b = binary, 1010 = 10
let octal: number = 0o744; // 0o = octal, 744 = 484

// Kun i ES2020 og nyere
// let foo: bigint = BigInt(100); // the BigInt function
// let bar: bigint = 100n; // a BigInt literal

/* ---- STRENGER ----
    Strenger er en samling av tegn. Tegnene kan være bokstaver, tall, symboler eller mellomrom.
    Strenger er omringet av enten enkle eller doble anførselstegn, eller backticks om man skal bruke template literals.
    Template literals er en måte å skrive strenger på som gjør det enklere å sette inn variabler i strengen.
    Denne typen er en av de mest brukte typene i programmering, og er noe alle har vært borti før.
*/

let singleQuote: string = "Hello, world!";
let doubleQuote: string = "Hello, world!";

// Template literals
let myName: string = "Hauk";
let backtick: string = `Hello, ${myName}!`; // Hello, Hauk!

/* ---- BOOLEANS ----
    Booleans er en datatype som kun kan ha to verdier: true eller false.
    JavaScript (og dermed Typescript) omfatter et konsept som kalles 'truthy' og 'falsy'.
    Dette betyr at alle verdier kan evalueres til true eller false selv om de ikke er en boolean (true/false).
    Dette gjør at vi kan bruke alle typer til å sjekke om noe er sant eller usant, noe som gjør koden vår mer fleksibel, 
    men også mer komplisert - med fare for spaghetti-kode.
*/

let isTrue: boolean = true;
let isFalse: boolean = false;

// Truthy/falsy
let isNonEmptyStringTruthy: boolean = Boolean("Hello, world!"); // true
let isZeroTruthy: boolean = Boolean(0); // false
let isOneTruthy: boolean = Boolean(1); // true
let isNegativeOneTruthy: boolean = Boolean(-1); // true
let isNullTruthy: boolean = Boolean(null); // false
let isUndefinedTruthy: boolean = Boolean(undefined); // false
let isNanTruthy: boolean = Boolean(NaN); // false
let isEmptyArrayTruthy: boolean = Boolean([]); // true

// Du kan også bruke en shortcut for å finne ut om noe er truthy eller falsy - nemlig '!!' (not not)
let isNonEmptyStringTruthyShortcut: boolean = !!"Hello, world!"; // true
let isZeroTruthyShortcut: boolean = !!0; // false

/* ---- ANY ----
    'any' er en type som kan inneholde hva som helst. Denne typen er ikke strengt typet, og kan derfor inneholde
    hva som helst. Denne typen er ikke anbefalt å bruke, ettersom den bryter med Typescripts strenge typetilnærming.
    Å bruke 'any' på alle typer vil være det samme som å ikke bruke Typescript i det hele tatt, men kun JavaScript.
    Da mister man fordelene med Typescript. Det er derimot noen tilfeller hvor det er nødvendig å bruke 'any'.
    Et eksempel på dette kan være når man henter data fra eksterne kilder, som en database eller et API, hvor man ikke
    har kontroll på typene som returneres.
*/

let any: any = "Hello, world!";
any = 1;
any = true;
any = null;
any = undefined;
any = NaN;
any = [];

/* ---- ARRAYS ----
    Arrays er en samling av verdier. Disse verdiene kan være av hvilken som helst type.
    Arrays er omringet av firkantede klammer, og verdiene i arrayet er separert med komma.
    Det er viktig å huske at arrays i Typescript ikke trenger å inneholde verdier av samme type, men det er ofte sånn.
    En Array er et object på samme måte som en string, boolean eller number er et object, som betyr at den har egenskaper
    og metoder som kan brukes på den som er unike for den typen. Dette er noe vi kommer tilbake til senere.
*/

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["Hello", "World", "!"];
let booleans: boolean[] = [true, false, true, false];
let anys: any[] = [1, "Hello", true, null, undefined, NaN]; // Merk at any ikke bryr seg om hvilken type den inneholder.

/* ---- TUPLES ----
    Tupler er en type array som har en fast lengde, og hvor hver indeks har en fast type.
    Tupler er omringet av firkantede klammer, og verdiene i tuplen er separert med komma, på samme måte som en array.
    Forskjellen på en array og en tuple er at en array kan ha hvilken som helst lengde, og hvilken som helst type på hver
    indeks. En tuple derimot har en fast lengde, og en fast type på hver indeks.
    Tupler er en type som ikke finnes i JavaScript, og er derfor en av de mest unike typene i Typescript.
*/

let tuple: [number, string, boolean] = [1, "Hello", true];

/* ---- ENUMS ----
    Enums er en type som lar deg definere en liste med navngitte konstanter. Enums er omringet av krøllparenteser, 
    og verdiene i enumet er separert med komma. Enums er en type som ikke finnes i JavaScript, og er dermed enda en 
    ting som skiller Typescript fra JavaScript. De fungerer på samme måte som de gjør i mange andre språk. Enums kan gjøre
    det enklere å tilpasse koden din til forskjellige situasjoner, spesielt dersom enumen genereres automatisk fra en
    ekstern kilde.
*/

enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red; // 0
let colorName: string = Color[0]; // Red

/* ---- Object ----
    Objekter er en samling av egenskaper. Egenskapene kan være av hvilken som helst type.
    Objekter er omringet av krøllparenteser, og egenskapene i objektet er separert med komma.
    Her kommer virkelig TypeScript til nytte - objekter er en av de mest brukte typene i JavaScript, og det er her
    TypeScript virkelig kan hjelpe oss med å unngå feil. Objektene er en samling med key-value par, hvor key er en string
    og value er en hvilken som helst type. Dette betyr at vi kan bruke objekter til å representere hva som helst. 

    Ved å spesifisere hvilke typer egenskapene i objektet skal ha, kan vi unngå feil som kan oppstå når vi bruker objekter.
    Dette er en av de største fordelene med TypeScript, og er noe som kan spare deg for mye tid og frustrasjon.
*/

let haukObject: any = {
  name: "Hauk",
  age: 23,
  isAlive: true, // Så vidt
  hasEducation: true, // Så vidt
  favoriteColor: Color.Blue,
};

haukObject.age = "Dette er ingen alder"; // Ingen error ettersom objektet er av typen 'any'

/* 
    Dette er vel og bra, men la oss ta en liten snik-peak på hvordan det kan gjøres med egendefinerte typer.
    Det blir mye mer om dette senere, men egenfinerte typer er veldig gunstige, ettersom de tvinger oss til å tenke
    gjennom hvordan vi skal representere dataen vår. Dette gjør at vi kan unngå feil, og gjør koden vår mer lesbar 
    samtidig som vi minimerer bugs.
*/

type Hauk = {
  name: string;
  age: number;
  isAlive: boolean;
  hasEducation: boolean;
  favoriteColor: Color;
};

let hauk: Hauk = {
  name: "Hauk",
  age: 23,
  isAlive: true,
  hasEducation: true,
  favoriteColor: Color.Blue,
};

/* 
    Det ser ut som mer kode for like mye verdi, men det er ikke tilfellet. Ved å definere en egen type for objektet
    vårt, kan vi gjenbruke denne typen flere steder i koden vår. Det gjør også at vi kan være sikre på at typene er
    riktige, og at vi ikke har noen feil i koden vår.

    Error ettersom objektet er av typen 'Hauk', som tvinger 'age' til å være av typen 'number', så vil denne koden utløse
    en error mens vi koder. Prøv å kommenter ut linjen under, og se om du får en error.
*/
//hauk.age = "Dette er ingen alder";

/* ---- VOID ----
    Void er en type som ikke har noen verdi. Denne typen brukes ofte som returtype på funksjoner som ikke returnerer noe.
    Dette er en type som ikke finnes i JavaScript. I JavaScript vil funksjoner som ikke returnerer noe returnere 'undefined'.
    I Typescript kan vi bruke 'void' for å spesifisere at funksjonen ikke skal returnere noe.
*/

function logHello(): void {
  console.log("Hello, world!");
  //return "Not void"
}

/* ---- NULL & UNDEFINED----
    typene 'null' og 'undefined' er to av de mest forvirrende typene i JavaScript. De er begge to typer som representerer
    fravær av en verdi. Forskjellen på de to er at 'null' er en verdi som vanligvis er satt av programmereren, mens 'undefined' er
    en verdi som blir satt automatisk av JavaScript. Man kan fint sette 'undefined' manuelt også, men dersom man holder seg
    til konvensjonen, så vil det være enkelere å forstå koden din når systemet blir større. Både 'null' og 'undefined' har 
    'falsy' verdi om de blir brukt i en boolsk sammenheng.
*/

let nullValue: null = null;
let undefinedValue: undefined; // er det samme som let undefinedValue: undefined = undefined;

/* ---- NEVER ----'
    'never' er en type som representerer verdier som aldri vil skje. Denne typen brukes ofte som returtype på funksjoner
    som alltid kaster en error. Denne typen er ikke en type som finnes i JavaScript, og er ikke en type du kommer til å
    bruke så ofte. Den er derimot veldig nyttig å vite om, ettersom den kan hjelpe deg med å unngå feil.
*/

function throwError(): never {
  throw new Error("This function will never return");
}

function foreverLoop(): never {
  while (true) {
    // Help
  }
}

/* ---- SYMBOL ----
    'symbol' er en type som representerer unike verdier. Denne typen kommer du nesten aldri borti, og er ikke en type du
    kommer til å bruke. 
*/

let sym2: symbol = Symbol("key");
let sym3: symbol = Symbol("key");
sym2 === sym3; // false, symboler er alltid unike

/* ---- Litt om 'let' ----
    'let' er en måte å definere variabler på. Det kom som en erstatning for 'var' i ES6 i 2015, og er den anbefalte måten å
    definere variabler på. Før 'let' så brukte man 'var' til å definere variabler. Som alt i programmering, så er 'var'
    fortsatt støttet - dog ikke preferert. Det er viktig å vite at 'let' og 'var' ikke er det samme. Det er noen forskjeller
    på de to, og det er viktig å vite hva disse forskjellene er.

    'let' er block-scoped, mens 'var' er function-scoped. Dette betyr at 'let' kun er tilgjengelig innenfor den blokken den
    er definert i, mens 'var' er definert innenfor hele funksjonen den er definert i. Dette betyr at 'let' er tryggere å bruke,
    i og med at vi ønsker å snevre inn scopet så mye som mulig for både enklere debugging og for å unngå feil som oppstår
    ved for eksempel navnekollisjoner.
*/


let letVariable: string = "Hello, world!";
var varVariable: string = "Hello, world!";

/* ---- Litt om 'const' ----
    'const' er en måte å definere konstanter på. Denne typen er en måte å definere variabler på som ikke kan endres.
    Dette er en type som er veldig nyttig å bruke, ettersom det er en måte å sikre at en verdi ikke endres. 'const' er 
    block-scoped, akkurat som 'let', og er dermed tryggere å bruke enn 'var', og er den måten å definere variabler på som
    du kommer til å bruke mest. Dersom du kan bruke 'const', så bør du bruke 'const'.
*/

const constVariable: string = "Hello, world!";
//constVariable = "Hello, world!"; // Error, ettersom 'const' ikke kan endres