import { Template } from "../js/Template2.js";
import { timePassed } from "../js/TimeHandler.js";
import { deleteComment } from "../js/DeleteComment.js";
import { replyComment } from "../js/ReplyComment.js";
import { addVoteEventListeners } from "../js/VoteHandler.js";
import { user, comments } from "./user.js";
import { editComment } from "../js/EditComment.js";
import { inputCommentContainer } from "./inputCommentContainer.js";

export let currentUser = user[0];

//return highest id + 1
export function findCurrentId(comments) {
  const replysID = comments
    .flatMap((comments) => comments.replies)
    .map((reply) => reply.id);

  const allID = comments.map((comments) => comments.id).concat(replysID);

  const currentID = allID.reduce((a, b) => Math.max(a, b), -Infinity);
  return currentID + 1;
}

//Printing Comments
const printComments = (details, containerClass) => {
  const props = {
    id: details.id,
    content: details.content,
    createdAt: timePassed(details.createdAt),
    score: details.score,
    image: details.user.image.png,
    username: details.user.username,
  };

  const isUser = props.username === currentUser.username;

  // Insert the comment HTML before the 'addComment' element
  containerClass.insertAdjacentHTML(
    "beforebegin",
    isUser ? new Template(props).fromUser() : new Template(props).fromOther()
  );
};

//Printing Replies
const printReplies = (details, containerClass) => {
  const props = {
    id: details.id,
    content: details.content,
    createdAt: timePassed(details.createdAt),
    score: details.score,
    image: details.user.image.png,
    username: details.user.username,
    replyingTo: details.replyingTo,
  };

  const isUser = props.username === currentUser.username;

  // Insert the comment HTML before the 'addComment' element
  containerClass.insertAdjacentHTML(
    "beforebegin",
    isUser ? new Template(props).replyUser() : new Template(props).replyOther()
  );
};

//Update UI
export const updateUI = function (comments) {
  const containerClass = document.querySelector(".addCommentWrapper");

  const commentWrapper = document.querySelectorAll(".commentContainer");
  const replyWrapper = document.querySelectorAll(".replyContainer");

  const everything = [...commentWrapper, ...replyWrapper];

  everything.forEach((element) => element.remove());

  comments
    .toSorted((a, b) => b.score - a.score)
    .forEach((comments) => {
      const replies = comments.replies;

      printComments(comments, containerClass);

      if (!replies) return;
      replies
        .toSorted((a, b) => b.score - a.score)
        .forEach((reply) => printReplies(reply, containerClass));
    });
};

updateUI(comments);

//Commenting
const inputCommentButton = document.querySelector(".comment--button");
inputCommentButton.addEventListener("click", (e) => {
  const commentSubmittedTime = new Date();
  console.log(commentSubmittedTime);
  const commentContent = inputCommentContainer.value;

  console.log(commentContent);

  const inputObject = {
    id: findCurrentId(comments),
    content: commentContent,
    createdAt: commentSubmittedTime,
    score: 0,
    user: {
      image: { png: `${currentUser.image.png}` },
      username: `${currentUser.username}`,
    },
    replies: [],
  };

  comments.push(inputObject);
  console.log(inputObject);

  updateUI(comments);
  // deleteComment();
  // replyComment();
  // addVoteEventListeners();
});

export function findCommentById(comments, id) {
  let comment = comments.find((comment) => comment.id === id);
  if (comment) return comment;

  for (let comment of comments) {
    let reply = comment.replies.find((reply) => reply.id === id);
    if (reply) return reply;
  }

  return null;
}
