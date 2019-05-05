import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  const initalState = {
    comments: ["comment 1", "comment 2"]
  };
  wrapped = mount(
    <Root initalState={initalState}>
      <CommentList />
    </Root>
  );
});

it("create one <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
