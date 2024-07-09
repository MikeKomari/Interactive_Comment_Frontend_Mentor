export class Template {
  constructor({
    id,
    content,
    createdAt,
    score,
    image,
    username,
    replyingTo = null,
  }) {
    this.id = id;
    this.createdAt = createdAt;
    this.score = score;
    this.image = image;
    this.username = username;
    this.content = content;
    this.replyingTo = replyingTo;
  }

  fromUser() {
    return `<div class="commentContainer" data-id="${this.id}" data-vote="${this.score}">
    <div class="commentContent">
      <!-- Counter -->
      <div class="counterWrapper">
        <button data-id="${this.id}" class="counterButton counter--increment">
          <h2 class="incrementText">+</h2>
        </button>
        <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
        <button data-id="${this.id}" class="counterButton counter--decrement">
          <h2 class="incrementText">-</h2>
        </button>
      </div>
      <!-- Content -->
      <div class="commentContentWrapper">
        <div class="user--details">
          <div class="content--user">
            <img
              class="userIcon"
              src="${this.image}"
              alt=""
            />
            <p class="text--secondary">${this.username}</p>
             <p class="content--current_user">you</p>
            <p class="text--neutral">${this.createdAt}</p>
          </div>
          <div class="comment--features">
        <div class="comment--delete" data-id="${this.id}">
          <img src="images/icon-delete.svg" alt="" />
          <p class="text--primary text--delete ">Delete</p>
        </div>
        <div class="comment--edit" data-id="${this.id}">
          <img src="images/icon-edit.svg" alt="" />
          <p class="text--primary">Edit</p>
        </div>
      </div>
        </div>
        <p class="text--neutral comment--content">
          ${this.content}
        </p>
        <div class="inputUpdateContent hidden">
  <input
        class="comment--input edit"
        type="text"
        placeholder="Add a comment..."
      />
      <button class="button-primary update--button">Update</button>
</div>
      </div>

      <div class="counterFeatureContainerResponsive">

            <!-- Counter Responsive -->
            <div class="counterWrapper counterResponsive">
            <button data-id="${this.id}" class="counterButton counter--increment">
             <h2 class="incrementText">+</h2>
            </button>
            <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
            <button data-id="${this.id}" class="counterButton counter--decrement">
              <h2 class="incrementText">-</h2>
            </button>
          </div>

          <!-- Comment Feature Responsive -->
          <div class="comment--features">
        <div class="comment--delete" data-id="${this.id} delete--responsive">
          <img src="images/icon-delete.svg" alt="" />
          <p class="text--primary text--delete">Delete</p>
        </div>
        <div class="comment--edit" data-id="${this.id}">
          <img src="images/icon-edit.svg" alt="" />
          <p class="text--primary">Edit</p>
        </div>
      </div>
        </div>
    </div>
  </div>`;
  }

  fromOther() {
    return `<div class="commentContainer" data-id="${this.id}" data-vote="${this.score}">
    <div class="commentContent">
      <!-- Counter -->
      <div class="counterWrapper">
        <button data-id="${this.id}" class="counterButton counter--increment">
          <h2 class="incrementText">+</h2>
        </button>
        <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
        <button data-id="${this.id}" class="counterButton counter--decrement">
          <h2 class="incrementText">-</h2>
        </button>
      </div>
      <!-- Content -->
      <div class="commentContentWrapper">
        <div class="user--details">
          <div class="content--user">
            <img
              class="userIcon"
              src="${this.image}"
              alt=""
            />
            <p class="text--secondary">${this.username}</p>
            <p class="text--neutral">${this.createdAt}</p>
          </div>
          <div class="comment--reply" data-id="${this.id}">
            <img src="images/icon-reply.svg" alt="" />
            <p class="text--primary">Reply</p>
          </div>
        </div>
        <p class="text--neutral">
          ${this.content}
        </p>
      </div>

      <div class="counterFeatureContainerResponsive">

            <!-- Counter Responsive -->
            <div class="counterWrapper counterResponsive">
            <button data-id="${this.id}" class="counterButton counter--increment">
             <h2 class="incrementText">+</h2>
            </button>
            <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
            <button data-id="${this.id}" class="counterButton counter--decrement">
              <h2 class="incrementText">-</h2>
            </button>
          </div>

          <!-- Comment Feature Responsive -->
          <div class="comment--reply replyResponsive" data-id="${this.id}">
            <img src="images/icon-reply.svg" alt="" />
            <p class="text--primary">Reply</p>
          </div>
        </div>
    </div>
  </div>`;
  }

  replyUser() {
    return `<div class="replyContainer">
      <div class="replyBreak"></div>
      <div class="commentContainer repliedTo"  data-id="${this.id}" data-vote="${this.score}">
    <div class="commentContent">
      <!-- Counter -->
      <div class="counterWrapper">
        <button data-id="${this.id}" class="counterButton counter--increment">
          <h2 class="incrementText">+</h2>
        </button>
        <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
        <button data-id="${this.id}" class="counterButton counter--decrement">
          <h2 class="incrementText">-</h2>
        </button>
      </div>
      <!-- Content -->
      <div class="commentContentWrapper">
        <div class="user--details">
          <div class="content--user">
            <img
              class="userIcon"
              src="${this.image}"
              alt=""
            />
            <p class="text--secondary">${this.username}</p>
             <p class="content--current_user">you</p>
            <p class="text--neutral">${this.createdAt}</p>
          </div>
          <div class="comment--features">
        <div class="comment--delete" data-id="${this.id}">
          <img src="images/icon-delete.svg" alt="" />
          <p class="text--primary text--delete">Delete</p>
        </div>
        <div class=" comment--edit" data-id="${this.id}">
          <img src="images/icon-edit.svg" alt="" />
          <p class="text--primary">Edit</p>
        </div>
      </div>
        </div>
        <p class="text--neutral comment--content">
          <span class="text--primary">@${this.replyingTo}</span> ${this.content}
        </p>
        <div class="inputUpdateContent hidden">
  <input
        class="comment--input edit"
        type="text"
        placeholder="Add a comment..."
      />
      <button class="button-primary update--button">Update</button>
</div>
      </div>
      <div class="counterFeatureContainerResponsive">

            <!-- Counter Responsive -->
            <div class="counterWrapper counterResponsive">
            <button data-id="${this.id}" class="counterButton counter--increment">
             <h2 class="incrementText">+</h2>
            </button>
            <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
            <button data-id="${this.id}" class="counterButton counter--decrement">
              <h2 class="incrementText">-</h2>
            </button>
          </div>

          <!-- Comment Feature Responsive -->
          <div class="comment--reply replyResponsive" data-id="${this.id}">
            <img src="images/icon-reply.svg" alt="" />
            <p class="text--primary">Reply</p>
          </div>
        </div>
    </div>
  </div>
  </div>`;
  }

  replyOther() {
    return `<div class="replyContainer">
      <div class="replyBreak"></div>
      <div class="commentContainer repliedTo data-id="${this.id}" data-vote="${this.score}">
      <div class="commentContent">
        <!-- Counter -->
        <div class="counterWrapper">
          <button data-id="${this.id}" class="counterButton counter--increment">
            <h2 class="incrementText">+</h2>
          </button>
          <p class="counter--score text--primary" data-votes="12">${this.score}</p>
          <button data-id="${this.id}" class="counterButton counter--decrement">
            <h2 class="incrementText">-</h2>
          </button>
        </div>
        <!-- Content -->
        <div class="commentContentWrapper">
          <div class="user--details">
            <div class="content--user">
              <img
                class="userIcon"
                src="${this.image}"
                alt=""
              />
              <p class="text--secondary">${this.username}</p>
              <p class="text--neutral">${this.createdAt}</p>
            </div>
            <div class="comment--reply" data-id="${this.id}">
              <img src="images/icon-reply.svg" alt="" />
              <p class="text--primary">Reply</p>
            </div>
          </div>
          <p class="text--neutral">
           <span class="text--primary">@${this.replyingTo}</span> ${this.content}
          </p>
          
        </div>
        <div class="counterFeatureContainerResponsive">

            <!-- Counter Responsive -->
            <div class="counterWrapper counterResponsive">
            <button data-id="${this.id}" class="counterButton counter--increment">
             <h2 class="incrementText">+</h2>
            </button>
            <p class="counter--score text--primary" data-votes="${this.score}">${this.score}</p>
            <button data-id="${this.id}" class="counterButton counter--decrement">
              <h2 class="incrementText">-</h2>
            </button>
          </div>

          <!-- Comment Feature Responsive -->
          <div class="comment--reply replyResponsive">
            <img src="images/icon-reply.svg" alt="" />
            <p class="text--primary">Reply</p>
          </div>
        </div>
      </div>
    </div>
    </div>`;
  }
}

export const replyInputContainer = `<div class="replyContainer replyInputContainer">
    <div class="replyBreak"></div>
  <div class="addCommentWrapper replyingTo">
      <img
        class="userIcon"
        src="image/avatars/image-juliusomo.png"
        alt=""
      />
      <input
        class="comment--input reply"
        type="text"
        placeholder="Add a comment..."
      />
      <button class="button-primary reply--button">Reply</button>
    </div>
    </div>`;
