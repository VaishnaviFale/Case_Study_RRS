import React from "react"
import Enzyme,{shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CreateTrain from "./CreateTrain"

Enzyme.configure({adapter: new Adapter() });
describe("CreateTrain", () =>{
    it("should have form", () => {
        console.log("train created")
        const wrapper=shallow(<CreateTrain />)
        const form=wrapper.find("form")
        expect(form.length).toBe(1)
    })
});