function temptemp() {
  addComment.insertAdjacentHTML("beforebegin", tempComment);
}

const tempComment = ` <div class="commentContainer data-id="1" data-vote="12">
          <div class="commentContent">
            <!-- Counter -->
            <div class="counterWrapper">
              <button class="counterButton counter--increment">
                <img
                  class="counterImage"
                  src="../../images/icon-plus.svg"
                  alt=""
                />
              </button>
              <p class="counter--score text--primary" data-votes="12">12</p>
              <button class="counterButton counter--decrement">
                <img
                  class="counterImage"
                  src="../../images/icon-minus.svg"
                  alt=""
                />
              </button>
            </div>
            <!-- Content -->
            <div class="commentContentWrapper">
              <div class="user--details">
                <div class="content--user">
                  <img
                    class="userIcon"
                    src="../../images/avatars/image-juliusomo.png"
                    alt=""
                  />
                  <p class="text--secondary">amyrobson</p>
                  <p class="text--neutral">1 month ago</p>
                </div>
                <div class="comment--reply">
                  <img src="../../images/icon-reply.svg" alt="" />
                  <p class="text--primary">Reply</p>
                </div>
              </div>
              <p class="text--neutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                odio, dolorum delectus voluptatibus veritatis exercitationem,
                itaque repellendus incidunt at, illum blanditiis. Error, quae
                omnis laborum fugiat assumenda asperiores officiis est?
              </p>
            </div>
          </div>
        </div>`;

const printComments = (
  containerClass,
  id,
  content,
  createdTime,
  voteScore,
  image,
  username
) => {
  // Determine the appropriate comment template based on the user and insert it
  const commentTemp =
    username === currentUser.username
      ? commentUserTemplate(
          id,
          content,
          createdTime,
          voteScore,
          image,
          username
        )
      : commentTemplate(id, content, createdTime, voteScore, image, username);

  // Insert the comment HTML before the 'addComment' element
  containerClass.insertAdjacentHTML("beforebegin", commentTemp);
};
