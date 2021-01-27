import React from "react";
import Enzyme, { shallow, mount, configure } from "enzyme";
import Table from "./table";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Table", () => {
  let wrapper;
  const sampleData = [
    {"id":1,
      "albumId":1,
      "title":"accusamus beatae ad facilis cum similique qui sunt",
      "url":"https://via.placeholder.com/600/92c952",
      "thumbnailUrl":"https://via.placeholder.com/150/92c952",
      "created_at":"2021-01-18T16:01:41.921Z",
      "updated_at":"2021-01-18T16:01:41.921Z"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Table tableContent={sampleData} />);
  });

  it("it displayes the content", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("it have the correct title", () => {
    expect(
      wrapper.contains(<td>accusamus beatae ad facilis cum similique qui sunt</td>)
    ).toBe(true);
    const tds = wrapper.find('td')
    expect(tds.at(2).props().children).toEqual('accusamus beatae ad facilis cum similique qui sunt')
  });
});
