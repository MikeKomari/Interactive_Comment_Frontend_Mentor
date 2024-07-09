import { updateUI } from "../js/main.js";
import { comments } from "./user.js";
import { initReply } from "../js/ReplyComment.js";
import { initVote } from "./VoteHandler.js";
import {
  initDelete,
  findCommentIndex,
  findReplyIndex,
} from "../js/DeleteComment.js";

export function initEdit() {
  const editButton = document.querySelectorAll(".comment--edit");
  const body = document.querySelector("body");

  editButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      //Find index
      const currentTargetId = Number(button.dataset.id);
      let commentTemp = findCommentIndex(comments, currentTargetId);
      let replyTemp;
      if (commentTemp === -1 || commentTemp === undefined) {
        replyTemp = findReplyIndex(comments, currentTargetId);
      }

      const commentContainer = document.querySelector(
        `.commentContainer[data-id="${currentTargetId}"]`
      );

      const originalComment =
        commentContainer.querySelector(".comment--content");
      originalComment.classList.add("hidden");

      const inputFormContent = commentContainer.querySelector(
        ".inputUpdateContent"
      );
      inputFormContent.classList.remove("hidden");

      //Updating
      const updateButton = document.querySelectorAll(".update--button");

      updateButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          //Input Value
          const inputValue = commentContainer.querySelector(
            ".comment--input.edit"
          );

          let tempAccount;

          if (commentTemp !== -1) {
            tempAccount = comments[commentTemp];

            tempAccount.content = `${inputValue.value}`;
            inputFormContent.classList.add("hidden");
            originalComment.classList.remove("hidden");
            updateUI(comments);
            initEdit();
            initDelete();
            initReply();
            initVote();
            return;
          }

          tempAccount = comments[replyTemp[0]];

          tempAccount.replies[replyTemp[1]].content = `${inputValue.value}`;
          inputFormContent.classList.add("hidden");
          originalComment.classList.remove("hidden");
          updateUI(comments);
          initEdit();
          initDelete();
          initReply();
          initVote();
        });
      });
      //Click other than the container, remove the div
      body.addEventListener(
        "click",
        function (e) {
          if (
            !inputFormContent.contains(e.target) &&
            e.target !== inputFormContent
          ) {
            inputFormContent.classList.add("hidden");
            originalComment.classList.remove("hidden");
          }
        },
        { capture: true }
      );
    });
  });
}
initEdit();
