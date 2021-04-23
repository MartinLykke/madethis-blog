import styles from "../styles/AddNewPost.module.css";
const AddNewPost = () => {
  return (
    <div className=" text-center">
      <a href="/createPost" className={styles.mainbtn}>
        Write new post
      </a>
    </div>
  );
};

export default AddNewPost;
