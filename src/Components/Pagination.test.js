import {screen,render,fireEvent} from "@testing-library/react"
import App from "../App"
import { Pagination } from "./Pagination"
import PageCell from "./PageCell"


describe("Testing Pagination components", ()=> {


    it("should render app properly", ()=> {
        render(<App></App>)
    })

    it("should have two button prev and next",()=> {
        render(<Pagination></Pagination>)
        const prev = screen.getByTestId("prev-btn")
        const next = screen.getByTestId("next-btn")
        expect(prev).toBeInTheDocument()
        expect(next).toBeInTheDocument()
    })

    it("should change page when click on next button",()=> {
        
    })

   
})