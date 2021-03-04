import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";


describe("App name prop handling", () => {
  //declara el escenario que queremos testear
  test("should render hello {nane} when prop is provided", () => {  
    //preapara ese escenario, definir variable y condiciones
    //ejecutar la prueba 
    render(<App name="Batman" />);
    //hacer la comparacion
    expect(screen.getByText("Hello Batman")).toBeInTheDocument();
  });

  //declara el escenario que queremos testear
  test("should render hello new user when prop is not provided", () => {  
    //preapara ese escenario, definir variable y condiciones
    //ejecutar la prueba 
    render(<App />);
    //hacer la comparacion
    expect(screen.getByText("Hello new user")).toBeInTheDocument();
  });
});
//declara el escenario que queremos testear
describe("App sum inputs", () => {
  test("should show resul when user provides both values", () => {
    //preapara ese escenario, definir variable y condiciones
    render(<App />);
    
    //ejecutar la prueba 
    const inputA = screen.getByPlaceholderText("value a");
    const inputB = screen.getByPlaceholderText("value b");
    const sumBtn = screen.getByText("sum");

    fireEvent.change(inputA, { target: { value: 5 }});
    fireEvent.change(inputB, { target: { value: 7 }});
    fireEvent.click(sumBtn);
    
    //hacer la comparacion
    expect(screen.getByText(12)).toBeInTheDocument();

  });

  
});
