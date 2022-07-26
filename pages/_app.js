import { createContext, useEffect, useReducer } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PostContex from "../hooks/postContex";
import postReducer from "../hooks/postReducer";
import fetchPost from "../hooks/useFetch";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dipatch] = useReducer(postReducer, {
    post: [],
  });
  useEffect(async () => {
    const posts = await fetchPost();
    dipatch({ type: "setPost", posts });
  }, []);

  return (
    <>
      <PostContex value={{ state, dipatch }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PostContex>
    </>
  );
}

export default MyApp;
