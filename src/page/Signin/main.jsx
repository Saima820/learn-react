import { useFormik } from "formik";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "Mim",
      lastname: "Rahman",
      email: "mim77@gmail.com",
      phone: 17284732843,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div>Contact Us Form</div>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <br/>
            <input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
          />
          </div>
          <br/>

          <div>
            <label htmlFor="lastname">Last Name</label>
            <br/>
            <input
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
          />
          </div>
          <br/>

          <div>
            <label htmlFor="email">Email Address</label>
            <br/>
            <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
          />
          </div>
          <br/>
          <div>
            <label htmlFor="email">Phone</label>
            <br/>
            <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
          />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Signin;
