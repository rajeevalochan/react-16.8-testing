import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommontBox";
import CommentList from "components/CommentList";

//call's when each test-case started to run
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("Shows a comment box", () => {
  /*const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  //check whether it contains following Components in it
   expect(div.innerHTML).toContain("Comment Box");

  //clean up the Component for the test performnace
  ReactDOM.unmountComponentAtNode(div);*/

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("Shows CommentList Component", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
