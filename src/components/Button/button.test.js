import "jest-dom/extend-expect";
import React from "react";
import {render , cleanup } from "@testing-library/react" 
import ReactDOM from "react-dom";
import Button from '../Button/button'

afterEach(cleanup);

it("renderizar sem crashar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("renderizar o botão corretamente", () => {
    const {getByTestId} = render(<Button label="aperte aqui"></Button>)
    expect(getByTestId('Button')).toHaveTextContent("aperte aqui")
})

it("renderizou o botão corretamente" , () => {
    const {getByTestId} = render(<Button label="save" />)
    expect(getByTestId("Button")).toHaveTextContent("save")
})

it("cria um snapshot (.snap)", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})