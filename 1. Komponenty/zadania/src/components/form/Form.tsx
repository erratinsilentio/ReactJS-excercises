import { useFormik } from "formik";

import * as yup from "yup";

const yupSchema = yup.object({
  name: yup.string().required("Pole name jest wymagane"),
  email: yup.string().email().required(),
});

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.age && formik.errors.age ? (
          <p style={{ color: "red" }}>{formik.errors.age}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
