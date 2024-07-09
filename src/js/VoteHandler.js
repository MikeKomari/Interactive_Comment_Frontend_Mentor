import { updateUI, findCommentById } from "../js/main.js";
import { comments } from "./user.js";
import { initDelete } from "../js/DeleteComment.js";
import { initReply } from "../js/ReplyComment.js";
import { initEdit } from "../js/EditComment.js";

export function initVote() {
  const voteIncrement = document.querySelectorAll(".counter--increment");
  const voteDecrement = document.querySelectorAll(".counter--decrement");

  voteIncrement.forEach((click) => {
    click.addEventListener("click", function (e) {
      e.preventDefault();
      const currentTargetId = parseInt(click.dataset.id, 10);
      const accountTemp = findCommentById(comments, currentTargetId);
      if (accountTemp) {
        accountTemp.score++;
        updateUI(comments); // Update the UI after incrementing the score
        initEdit();
        initDelete();
        initReply();
        initVote(); // Re-attach event listeners after updating the UI
      } else {
        console.log("not found");
      }
    });
  });

  voteDecrement.forEach((click) => {
    click.addEventListener("click", function (e) {
      e.preventDefault();
      const currentTargetId = parseInt(click.dataset.id, 10);
      const accountTemp = findCommentById(comments, currentTargetId);
      if (accountTemp) {
        if (accountTemp.score) {
          accountTemp.score--;
        } else {
          accountTemp.score = 0;
        }
        updateUI(comments); // Update the UI after decrementing the score
        initEdit();
        initDelete();
        initReply();
        initVote(); // Re-attach event listeners after updating the UI
      } else {
      }
    });
  });
}

initVote();
