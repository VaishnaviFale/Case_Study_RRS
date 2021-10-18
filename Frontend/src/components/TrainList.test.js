import React from "react"
import Enzyme,{shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import TrainList from "./TrainList"

Enzyme.configure({adapter: new Adapter() });
describe("TrainList", () =>{
    it("should have table", () => {
        console.log("train created")
        const wrapper=shallow(<TrainList />)
        const table=wrapper.find("table")
        expect(table.length).toBe(1)
    })
});