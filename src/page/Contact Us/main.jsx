import { useFormik } from "formik";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="bg-slate-900 h-screen w-screen flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-4 text-center w-full max-w-lg">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-3 w-screen max-w-lg pb-4">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            className="bg-white text-black p-2 rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            className="bg-white text-black p-2 rounded"
          />
        </div>
        <div className="flex flex-col gap-3 w-screen max-w-lg pb-4 mt-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="w-full rounded bg-white text-black px-1"
            rows="4"
            cols="50"
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
