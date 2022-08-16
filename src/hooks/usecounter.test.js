import { screen, render, fireEvent } from "@testing-library/react";
import { useCounter } from "./useCounter";
import App from "../App";

describe("Testing with custom hooks", () => {
  it("should render app properly", () => {
    render(<App></App>);
  });

  it("should have initial vlaue as 10 in count ", () => {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");
    expect(h2).toHaveTextContent("10");
  });

  it("should increment by 1 by default", () => {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");

    const btn = screen.getByTestId("inc");
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("11");
  });

  it("should increment by 3 on click increment 3 button", () => {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");
    const btn = screen.getByTestId("inc3");
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("13");
  });

  it("should decrement by 1 by default", () => {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");
    const btn = screen.getByTestId("dec");
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("8");
  });

  it("shoulddecrement by 4 on click decrement 4 button", () => {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");
    const btn = screen.getByTestId("dec4");
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("6");
  })

  it("should not decrement if count have minimum value", ()=> {
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");
    const btn = screen.getByTestId("dec4");
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("2");
  })


  it("should not increase in count is geater than or equal to max value",()=>{
    render(<App></App>);
    const h2 = screen.getByText("Value: 10");

    const btn = screen.getByTestId("inc");
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(h2).toHaveTextContent("15");
  })
  
});
