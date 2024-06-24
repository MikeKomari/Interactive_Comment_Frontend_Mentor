export const commentTemplate = (
  id,
  content,
  createdTime,
  voteScore,
  image,
  username
) => {
  return `<div class="commentContainer" data-id="${id}" data-vote="${voteScore}">
          <div class="commentContent">
            <!-- Counter -->
            <div class="counterWrapper">
              <button class="counterButton counter--increment">
                <h2 class="incrementText">+</h2>
              </button>
              <p class="counter--score text--primary" data-votes="${voteScore}">${voteScore}</p>
              <button class="counterButton counter--decrement">
                <h2 class="incrementText">-</h2>
              </button>
            </div>
            <!-- Content -->
            <div class="commentContentWrapper">
              <div class="user--details">
                <div class="content--user">
                  <img
                    class="userIcon"
                    src="${image}"
                    alt=""
                  />
                  <p class="text--secondary">${username}</p>
                  <p class="text--neutral">${createdTime}</p>
                </div>
                <div class="comment--reply">
                  <img src="../../images/icon-reply.svg" alt="" />
                  <p class="text--primary">Reply</p>
                </div>
              </div>
              <p class="text--neutral">
                ${content}
              </p>
            </div>
          </div>
        </div>`;
};

export function commentUserTemplate(
  id,
  content,
  createdTime,
  voteScore,
  image,
  username
) {
  return `<div class="commentContainer" data-id="${id}" data-vote="${voteScore}">
          <div class="commentContent">
            <!-- Counter -->
            <div class="counterWrapper">
              <button class="counterButton counter--increment">
                <h2 class="incrementText">+</h2>
              </button>
              <p class="counter--score text--primary" data-votes="${voteScore}">${voteScore}</p>
              <button class="counterButton counter--decrement">
                <h2 class="incrementText">-</h2>
              </button>
            </div>
            <!-- Content -->
            <div class="commentContentWrapper">
              <div class="user--details">
                <div class="content--user">
                  <img
                    class="userIcon"
                    src="${image}"
                    alt=""
                  />
                  <p class="text--secondary">${username}</p>
                   <p class="content--current_user">you</p>
                  <p class="text--neutral">${createdTime}</p>
                </div>
                <div class="comment--features">
              <div class="comment--delete">
                <img src="../../images/icon-delete.svg" alt="" />
                <p class="text--primary text--delete">Delete</p>
              </div>
              <div class="comment--reply">
                <img src="../../images/icon-edit.svg" alt="" />
                <p class="text--primary">Edit</p>
              </div>
            </div>
              </div>
              <p class="text--neutral">
                ${content}
              </p>
            </div>
          </div>
        </div>`;
}
