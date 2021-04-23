import styles from "../styles/Subscribe.module.css";
const subscribe = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-5 shadow p-5 mb-5 bg-white rounded">
        <h1 className="mb-3">Subscribe</h1>
        <p className="text-center">
          Subscribe to MadeThis' newsletter and receive news about blogposts
        </p>
        <form>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </form>

        <a className={styles.subscribetbtn}>Sign me up!</a>
      </div>
    </div>
  );
};

export default subscribe;
