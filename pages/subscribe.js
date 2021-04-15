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
        <div className="w-50">
          <button class="btn btn-primary mt-4 rounded-pill btn-block">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
