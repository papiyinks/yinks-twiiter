import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enterBody, setEnterBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event) {
    setEnterBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnterAuthor(event.target.value);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={changeBodyHandler}
  //         onAuthorChange={changeAuthorHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enterBody} />
        <Post author="Max" body="Mine you" />
      </ul>
    </>
  );
}

export default PostsList;
