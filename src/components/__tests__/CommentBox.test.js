import React from "react";
import { mount } from "enzyme";

import Root from "Root";

import CommentBox from "components/CommontBox";

let wrapped;
beforeEach(() => {
  /*  one way to solve the redux-store problem
    <Provider store={createStore(reducers, {})}>
      <CommentBox />
    </Provider>
  */

  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

//Runs after each test case
afterEach(() => {
  wrapped.unmount();
});

it("Has a text-area and a Button", () => {
  //Check text-area presnt in the compoennt
  expect(wrapped.find("textarea").length).toEqual(1);
  //Check Button presnt in the compoennt
  expect(wrapped.find("button").length).toEqual(1);
});

describe("Text-area", () => {
  beforeEach(() => {
    //we need to provide the original HTML-Event name not Jsx event name
    wrapped.find("textarea").simulate("change", {
      //Fake event-object
      target: { value: "new comment" }
    });

    //Re-render the compoent once the value is updated
    wrapped.update();
  });
  it("Text-area onChange functionality", () => {
    //expect the this.state.comment= "new-comment"
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("Form submitted text-area gets emptied", () => {
    //if above we dnt have the 'change' event we need to perform the above operation
    //Find the form and simlate submit-event
    wrapped.find("form").simulate("submit");

    //re-render because 'submit' event have the setState in it
    wrapped.update();

    //Check the textarea get emptied
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
