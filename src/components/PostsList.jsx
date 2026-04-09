import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Yinka" body="Mine Mine" />
        <Post author="Max" body="Mine you" />
      </ul>
    </>
  );
}

export default PostsList;
