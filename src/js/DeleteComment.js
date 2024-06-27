import { findCommentById, updateUI } from "../js/main.js";
import { inputCommentContainer } from "./inputCommentContainer.js";
import { comments } from "./user.js";
import { replyComment } from "../js/ReplyComment.js";
import { addVoteEventListeners } from "./VoteHandler.js";

const deleteModal = document.querySelector(".deleteModal");

export function findCommentIndex(comments, currentTargetId) {
  let commentIndex = comments.findIndex((com) => com.id === currentTargetId);
  return commentIndex !== -1 ? commentIndex : -1;
}

export function findReplyIndex(comments, currentTargetId) {
  let replyIndex;
  for (let i = 0; i < comments.length; i++) {
    replyIndex = comments[i].replies.findIndex(
      (rep) => rep.id === currentTargetId
    );
    if (replyIndex !== -1) {
      return [i, replyIndex];
    }
  }
  return [-1, -1];
}

export function deleteComment() {
  console.log(comments);
  const deleteButton = document.querySelectorAll(".comment--delete");
  const cancelButton = document.querySelectorAll(".cancel--button");
  const confirmButton = document.querySelectorAll(".delete--button");
  deleteModal.addEventListener("click", function (e) {
    deleteModal.classList.add("hidden");
  });
  //Just in case user is inputting, cancel the input
  inputCommentContainer.value = "";
  inputCommentContainer.blur();

  //Main Function
  deleteButton.forEach((click) => {
    click.addEventListener("click", (e) => {
      e.preventDefault();
      //Open and Close Modal
      deleteModal.classList.toggle("hidden");

      //Cancel Button
      cancelButton.forEach((click) => {
        click.addEventListener("click", function (e) {
          deleteModal.classList.add("hidden");
        });
      });

      //Identifying it is a comment or a reply
      const currentTargetId = Number(click.dataset.id);
      let commentTemp = findCommentIndex(comments, currentTargetId);
      let replyTemp;
      if (commentTemp === -1) {
        replyTemp = findReplyIndex(comments, currentTargetId);
      }

      console.log(commentTemp, replyTemp);
      //Confirm Button
      confirmButton.forEach((click) => {
        click.addEventListener("click", function (e) {
          console.log(comments);
          console.log(commentTemp, replyTemp);
          if (commentTemp !== -1) {
            comments.splice(commentTemp, 1);
            return;
          }
          comments[replyTemp[0]].replies.splice(replyTemp[1], 1);
          deleteModal.classList.add("hidden");
          updateUI(comments);
          deleteComment();
          replyComment();
          addVoteEventListeners();
        });
      });
    });
  });
}

deleteComment();
