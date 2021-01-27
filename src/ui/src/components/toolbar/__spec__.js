import React from "react";
import Enzyme, { shallow, mount, configure } from "enzyme";
// import Textbox from "../textbox";
import ToolBar from "./toolbar";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Toolbar", () => {
//   describe("general look", () => {
//     let wrapper;
//     let setApiData = {};

//     beforeEach(() => {
//       wrapper = shallow(<ToolBar setData={setApiData}/>);
//     });

//     it("it have to display all buttons and textboxes", () => {
//       expect(wrapper).toMatchSnapshot();
//   });
// });
  describe("fetch data", () => {
    it("it should filter by a search term (link)", () => {
      // actual test
    });
  });

  describe("clear table", () => {
    it("it clears a filled table", () => {
      // actual test
    });
  });
  describe("submit button", () => {
    it("it should filter by a search term (link)", () => {
      // actual test
    });
  });
});
