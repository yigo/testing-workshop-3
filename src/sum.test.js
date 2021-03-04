import { sum } from "./sum";

//declara el escenario que queremos testear
test("sum should add to arguments", () => {
  //preapara ese escenario, definir variable y condiciones
  const a = 5;
  const b = 2;
  //ejecutar la prueba 
  const result = sum(a,b);
  //hacer la comparacion
  expect(result).toEqual(7);
});

test("return first argument when second argument is undefined", () => {
  //preapara ese escenario, definir variable y condiciones
  const a = 5;
  const b = undefined;
  //ejecutar la prueba 
  const result = sum(a,b);
  //hacer la comparacion
  expect(result).toEqual(5);
});

test("return second argument if first argument is undefined", () => {
  //preapara ese escenario, definir variable y condiciones
  const a = undefined;
  const b = 5;
  //ejecutar la prueba 
  const result = sum(a,b);
  //hacer la comparacion
  expect(result).toEqual(5);
});

test("return zero if first and second argunment are undefined", () => {
  //preapara ese escenario, definir variable y condiciones
  const a = undefined;
  const b = undefined;
  //ejecutar la prueba 
  const result = sum(a,b);
  //hacer la comparacion
  expect(result).toEqual(0);
});