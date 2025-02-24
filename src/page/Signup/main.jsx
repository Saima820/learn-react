import { useFormik } from "formik";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-slate-300 h-screen flex flex-col items-center justify-center gap-10 p-6">
      <div className="text-center w-full max-w-lg">
        <h1 className="text-4xl text-black font-bold">Sign up</h1>
        <p className="text-black">Dont have an account? Sign up please.</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="grid gap-6 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <div className="grid gap-2">
          <label htmlFor="username" className="text-black font-semibold">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={formik.handleChange}
            className="bg-gray-200 text-black p-2 rounded border border-gray-400"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-black font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            className="bg-gray-200 text-black p-2 rounded border border-gray-400"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="password" className="text-black font-semibold">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            className="bg-gray-200 text-black p-2 rounded border border-gray-400"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="confirmpassword" className="text-black font-semibold">Confirm Password</label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Retype your password"
            onChange={formik.handleChange}
            className="bg-gray-200 text-black p-2 rounded border border-gray-400"
          />
        </div>

        <button type="submit" className="px-4 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300 mx-auto w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
