import {screen,render, getByTestId} from "@testing-library/react"
import App from "../App"
import { Button } from "./Button"


describe("Testing with Button Components",()=> {
    it("should render without any error", ()=> {
        render(<Button></Button>)
    })

    it("should have by default class white for colorscheme", ()=>{
        render(<Button></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("white")
    })

    it("should have by default size md ", ()=> {
        render(<Button></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("md")
    })

    it("should have by default class btn ", ()=> {
        render(<Button></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("btn")
    })

    it("should have props colorscheme ", ()=> {
        render(<Button colorScheme={"red"}></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("red")
    })

    it("should have props variant", ()=> {
        render(<Button variant={'ghost'}></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("ghost")
    })

    it("should have props for size", ()=> {
        render(<Button size="xl"></Button>)
        const btn = screen.getByTestId("cbtn")
        expect(btn).toHaveClass("xl")
    })
})