import { commentTemplate, commentUserTemplate } from "./TemplatesFail.js";
import { mergeSort, merge } from "../js/MergeSort.js";
import { Template } from "../js/Template2.js";
import { timePassed } from "../js/TimeHandler.js";

export const user = [
  {
    image: {
      png: "../../images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  {},
];

export const comments = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "November 13, 2022 14:37:49",
    score: 12,
    user: {
      image: {
        png: "../../images/avatars/image-amyrobson.png",
        webp: "../../images/avatars/image-amyrobson.webp",
      },
      username: "amyrobson",
    },
    replies: [],
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "March 7, 2023 05:12:30",
    score: 5,
    user: {
      image: {
        png: "../../images/avatars/image-maxblagun.png",
        webp: "../../images/avatars/image-maxblagun.webp",
      },
      username: "maxblagun",
    },
    replies: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "August 19, 2023 23:15:30",
        score: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "../../images/avatars/image-ramsesmiron.png",
            webp: "../../images/avatars/image-ramsesmiron.webp",
          },
          username: "ramsesmiron",
        },
      },
      {
        id: 4,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "June 15, 2023 18:24:52",
        score: 2,
        replyingTo: "ramsesmiron",
        user: {
          image: {
            png: "../../images/avatars/image-juliusomo.png",
            webp: "../../images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
      },
    ],
  },
];
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
export const inputCommentContainer = document.querySelector(".comment--input");

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
