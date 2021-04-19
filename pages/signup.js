import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const signup = () => {
  const firstname =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  const Router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("username", capitalize(data.firstname));
    localStorage.setItem("email", data.email);
    Router.push("/");
  };
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    Router.push("/");
  };

  return (
    <>
      {firstname && (
        <div className="container">
          <h1 className="mt-5">Profile</h1>
          <h4>Logged in as: {localStorage.getItem("email")}</h4>
          <button onClick={logout} className="btn btn-danger mt-4">
            Log out
          </button>
        </div>
      )}
      {!firstname && (
        <div className="text-center container w-50">
          <main className="form-signin">
            <form onSubmit={handleSubmit(onSubmit)}>
              <img
                class="mb-4 mt-4"
                alt="Logo"
                width="90"
                height="80"
                src="data:image/png;base64,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"
              />
              <h1 class="h3 mb-3 fw-normal ">Sign in</h1>
              <div class="form-floating">
                <input
                  type="fname"
                  class="form-control"
                  id="fname"
                  placeholder="First name"
                  {...register("firstname")}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("email")}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("password")}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                class="w-100 btn btn-lg btn-primary rounded-pill"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </main>
        </div>
      )}
    </>
  );
};

export default signup;
