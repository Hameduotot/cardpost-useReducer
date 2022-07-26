const fetchPost = async () => {
  return await fetch("https://course-api.com/react-tours-project").then(
    (posts) => posts.json()
  );
};

export default fetchPost;
