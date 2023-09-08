// Oppgave 1
console.log("\n----- Oppgave 1 -----");

interface Student {
  name: string;
  age: number;
  grade: string;
}

const students: Student[] = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
];

const logStudentDetails = (student: Student) => {
  console.log(
    `${student.name} er ${student.age} gammel. Karakter: ${student.grade}`
  );
};

students.forEach(logStudentDetails);

// Oppgave 2
console.log("\n----- Oppgave 2 -----");

type Triangle = { type: "triangle"; width: number; height: number };
type Rectangle = { type: "rectangle"; width: number; height: number };
type Shape = Triangle | Rectangle;

const shapes: Shape[] = [
  { type: "triangle", width: 5, height: 8 },
  { type: "rectangle", width: 4, height: 6 },
];

const calculateTotalArea = (shapes: Shape[]): number => {
  return shapes.reduce((total: number, shape: Shape) => {
    if (shape.type === "triangle") {
      return total + 0.5 * shape.width * shape.height;
    } else {
      return total + shape.width * shape.height;
    }
  }, 0);
};

console.log("Total area:", calculateTotalArea(shapes));

// Oppgave 3
console.log("\n----- Oppgave 3 -----");

enum ButtonType {
  Primary = "Primary",
  Secondary = "Secondary",
  Danger = "Danger",
}

type ButtonFunction = (type: ButtonType, label: string) => string;

const createButton: ButtonFunction = (type, label) => {
  return `<button class="${type.toLowerCase()}">${label}</button>`;
};

console.log(createButton(ButtonType.Primary, "Click me"));

// Oppgave 4
console.log("\n----- Oppgave 4 -----");

const calculateArea = (shape: string, ...args: number[]): number => {
  if (shape === "rectangle") {
    const [width, height] = args;
    return width * height;
  } else if (shape === "circle") {
    const [radius] = args;
    return Math.PI * Math.pow(radius, 2);
  }
  throw new Error("Invalid shape");
};

console.log("Rectangle area:", calculateArea("rectangle", 4, 6));
console.log("Circle area:", calculateArea("circle", 5));

// Oppgave 5
console.log("\n----- Oppgave 5 -----");

type MyResponse =
  | { status: 200; data: string | number }
  | { status: 400; data: string | number }
  | { status: 500; data: string | number };

// type MyResponse = {
//     status: number;
//     data: string | number;
// }

// type MyResponse = {
//   status: 200 | 400 | 500;
//   data: string | number;
// };

// Del 1
const handleResponse = (response: MyResponse) => {
  if (response.status === 200) {
    console.log("Success:", response.data);
  } else {
    console.log("Error:", response.data);
  }
};

const successResponse: MyResponse = {
  status: 200,
  data: "Data fetched successfully",
};
const errorResponse: MyResponse = { status: 400, data: 432233 };

handleResponse(successResponse);
handleResponse(errorResponse);

// Del 2
// const handleActualResponse = async (response: Response) => {
//   if (response.status === 200) {
//     console.log("Success:", await response.json());
//   } else {
//     console.log("Error:", await response.json());
//   }
// };

// const getAndLogResponse = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   handleActualResponse(response);
// };

// getAndLogResponse();
