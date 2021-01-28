import React from "react";
import Enzyme, { shallow, mount, configure } from "enzyme";
// import Textbox from "../textbox";
import ToolBar from "./toolbar";
import Table from "../table";
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
Enzyme.configure({ adapter: new Adapter() });

describe("Toolbar", () => {
  describe("general look", () => {
    let wrapper;
    let setApiData = {};

    beforeEach(() => {
      wrapper = shallow(<ToolBar setData={setApiData}/>);
    });

    it("it have to display all buttons and textboxes", () => {
      expect(wrapper).toMatchSnapshot();
  });
});


  describe("fetch data", () => {
    it("it fetch the data and handover it to the table", async () => {
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
      fetch.mockResponseOnce(JSON.stringify(sampleData));
      const setDataMock = jest.fn();
      const tb = shallow(<ToolBar setData={setDataMock} />);
      await tb.instance().fetchData();

      expect(setDataMock).toHaveBeenCalledWith(sampleData);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("clearData", () => {
    it.skip("it cleans the table", () => {
      const sampleDataOld = [
        {"id":1,
          "albumId":1,
          "title":"accusamus beatae ad facilis cum similique qui sunt",
          "url":"https://via.placeholder.com/600/92c952",
          "thumbnailUrl":"https://via.placeholder.com/150/92c952",
          "created_at":"2021-01-18T16:01:41.921Z",
          "updated_at":"2021-01-18T16:01:41.921Z"
        }
      ];
      const sampleDataNew = [];
      jest.mock(<Table setData={sampleDataOld} />);
      const setDataMock = jest.fn();
      const tb = shallow(<Table setData={setDataMock} />);
      console.log(tb);

      expect(setDataMock).toHaveBeenCalledWith(sampleDataOld);
    });
  });

  describe("postData", () => {
    it.skip("it fetch the data and handover it to the table", async () => {
      const itemId = 1;
      const itemTitle = 'new title'
      const sampleDataOld = [
        {"id":1,
          "albumId":1,
          "title":"accusamus beatae ad facilis cum similique qui sunt",
          "url":"https://via.placeholder.com/600/92c952",
          "thumbnailUrl":"https://via.placeholder.com/150/92c952",
          "created_at":"2021-01-18T16:01:41.921Z",
          "updated_at":"2021-01-18T16:01:41.921Z"
        }
      ];
      const sampleDataNew = [
        {"id":1,
          "albumId":1,
          "title":"new title",
          "url":"https://via.placeholder.com/600/92c952",
          "thumbnailUrl":"https://via.placeholder.com/150/92c952",
          "created_at":"2021-01-18T16:01:41.921Z",
          "updated_at":"2021-01-18T16:01:41.921Z"
        }
      ];
      fetch.mockResponseOnce(JSON.stringify(sampleDataOld));
      const setDataMock = jest.fn();
      const tb = shallow(<ToolBar setData={setDataMock} />);
      await tb.instance().fetchData();

      expect(setDataMock).toHaveBeenCalledWith(sampleDataNew);
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });
});
