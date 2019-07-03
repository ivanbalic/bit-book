const createPostQueryParam = postType => {
  switch (postType) {
    case "text":
      return "TextPosts";
    case "video":
      return "VideoPosts";
    case "image":
      return "ImagePosts";
    default:
  }
};

const getRecentlyActive = users => {
  return users
    .sort((a, b) => {
      const firstUser = new Date(a.lastPostDate);
      const secondUser = new Date(b.lastPostDate);
      if (firstUser < secondUser) {
        return 1;
      }
      if (firstUser > secondUser) {
        return -1;
      }
      return 0;
    })
    .slice(0, 5);
};

const getMostCommented = posts => {
  const postsList = [...posts];
  return postsList
    .sort((a, b) => {
      const firstPost = a.commentsNum;
      const secondPost = b.commentsNum;
      return secondPost - firstPost;
    })
    .slice(0, 5);
};

export { createPostQueryParam, getRecentlyActive, getMostCommented };
