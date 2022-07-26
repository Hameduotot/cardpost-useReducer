import React, { useContext } from "react";
import { Context } from "../../hooks/postContex";

export const ListPost = () => {
  const posts = useContext(Context);
  return (
    <>
      {posts.map((post) => (
        <h1>{post.id}</h1>
      ))}
    </>
  );
};
