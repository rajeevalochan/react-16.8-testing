import commentsReduer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles action of type SAVE_COMMENT", () => {
  //create dummy action
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  //Insert the dummy action into the reducer
  const newState = commentsReduer([], action);

  //check to be ["New Comment"]
  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknown type", () => {
  //Insert the dummy action-type into the reducer
  const newState = commentsReduer([], { type: "sdsadsad" });

  //check to be []
  expect(newState).toEqual([]);
});
