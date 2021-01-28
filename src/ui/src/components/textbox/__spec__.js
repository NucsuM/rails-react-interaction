import React from "react";
import Enzyme, { shallow, mount, configure } from "enzyme";
import Textbox from "./Textbox";
import Adapter from 'enzyme-adapter-react-16';
import ToolBar from "../toolbar/Toolbar";

Enzyme.configure({ adapter: new Adapter() });

describe("Textbox", () => {
  let wrapper;
  const label = 'a_label';
  const text = 'typed_text';
  
  beforeEach(() => {
    wrapper = shallow(<Textbox name={label} onChange={text} />);
  });

  test("display the added text", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("it have the correct properties", () => {
    const label = wrapper.find('label')
    const input = wrapper.find('input')
    
    expect(label.props().children).toEqual('a_label:')
    expect(input.props().onChange).toEqual('typed_text')
  });
});
