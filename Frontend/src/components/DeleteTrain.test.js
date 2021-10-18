import React from "react"
import Enzyme,{shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import DeleteTrain from "./DeleteTrain"

Enzyme.configure({adapter: new Adapter() });
describe("DeleteTrain", () =>{
    it("should have button", () => {
        console.log("kaiaii")
        const wrapper=shallow(<DeleteTrain />)
        const button=wrapper.find("button")
       // nbutton.simulate("click")
        //const text=wrapper.find("div div")
        expect(button.length).toBe(0)
    })
});