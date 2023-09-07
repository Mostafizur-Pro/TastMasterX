import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import login from "../../../assete/LoginSignin/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

function LoginPage() {
  const [loginError, setLoginError] = useState("");
  const { signIn, createGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    // console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // setLoginUserEmail(user.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = (event) => {
    console.log(event);
    event.preventDefault();
    createGoogle();
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col  lg:flex-row">
            <div className="card hidden sm:flex flex-shrink-0 h-4/6 w-full max-w-sm shadow-2xl bg-base-100">
              <img
                alt=""
                src={login}
                className="max-w-sm h-max rounded-lg shadow-2xl"
              />
            </div>
            <div className="card flex-shrink-0 h-4/6 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="  m-5">
                <div className="w-6/12">
                  <Link to="/">{/* <Logo></Logo> */} Tast MasterX</Link>
                </div>
              </div>
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {" "}
                    <span className="label">Forget Password?</span>
                  </label>
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  {loginError && <p className="text-red-600">{loginError}</p>}
                </div>
                <p>
                  New to Doctors Portal{" "}
                  <Link className="text-primary" to="/signup">
                    Create new Account
                  </Link>
                </p>
                <div className="divider">OR</div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full mb-12"
                >
                  CONTINUE WITH GOOGLE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
