import {
  updateUI,
  findCommentById,
  findCurrentId,
  currentUser,
} from "../js/main.js";
import { comments, user } from "./user.js";
import { Template, replyInputContainer } from "../js/Template2.js";
import {
  initDelete,
  findCommentIndex,
  findReplyIndex,
} from "../js/DeleteComment.js";
import { initVote } from "../js/VoteHandler.js";

export function initReply() {
  const replyButton = document.querySelectorAll(".comment--reply");
  const body = document.querySelector("body");

  //Main Function
  replyButton.forEach((click) => {
    click.addEventListener("click", function (e) {
      //Target the comment container
      let commentContainer = event.target.closest(".commentContainer");

      //Validate if it is a comment or a reply
      const currentTargetId = Number(click.dataset.id);
      let commentTemp = findCommentIndex(comments, currentTargetId);
      let replyTemp;
      if (commentTemp === -1 || commentTemp === undefined) {
        commentContainer = event.target.closest(".replyContainer");
        replyTemp = findReplyIndex(comments, currentTargetId);
      }
      console.log(commentTemp, replyTemp);
      commentContainer.insertAdjacentHTML("afterend", replyInputContainer);

      //Add the reply
      const replyConfirmButton = document.querySelectorAll(".reply--button");

      replyConfirmButton.forEach((click) => {
        click.addEventListener("click", function (e) {
          const replyContent = document.querySelector(".comment--input.reply");

          //Removing the Input Reply Container
          const replyContainer = document.querySelector(
            ".replyContainer.replyInputContainer"
          );

          if (replyContainer) replyContainer.remove();

          //If there is no input, return the function after removing the reply container
          if (replyContent.value === "") return;

          //If there's input however, push it to the replies array
          let tempAccount;
          const commentSubmittedTime = new Date();

          //Replying to a Comment
          if (commentTemp !== -1) {
            tempAccount = comments[commentTemp];

            const props = {
              id: findCurrentId(comments),
              content: replyContent.value,
              createdAt: commentSubmittedTime,
              score: 0,
              replyingTo: `${tempAccount.user.username}`,
              user: {
                image: { png: `${currentUser.image.png}` },
                username: `${currentUser.username}`,
              },
            };

            tempAccount.replies.push(props);
            updateUI(comments);
            initDelete();
            initReply();
            initVote();
            return;
          }

          //Replying to a reply
          tempAccount = comments[replyTemp[0]];
          const props = {
            id: findCurrentId(comments),
            content: replyContent.value,
            createdAt: commentSubmittedTime,
            score: 0,
            replyingTo: `${tempAccount.replies[replyTemp[1]].user.username}`,
            user: {
              image: { png: `${currentUser.image.png}` },
              username: `${currentUser.username}`,
            },
          };
          tempAccount.replies.push(props);
          updateUI(comments);
          initDelete();
          initReply();
          initVote();
        });
      });

      //If a click is executed other than the content, it collapses
      body.addEventListener(
        "click",
        function (e) {
          if (!e.target.closest(".replyInputContainer")) {
            const replyContainer = document.querySelector(
              ".replyContainer.replyInputContainer"
            );

            if (replyContainer) {
              replyContainer.remove();
            }
          }
        },
        { capture: true }
      );
    });
  });
}

initReply();
