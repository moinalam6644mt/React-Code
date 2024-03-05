import React from "react";
import { useFormik } from 'formik';
import Validator from './Validator';

const Validation1 = () => {

  const formik = useFormik({
    initialValues: {
      nm: '',
      ag: '',
      email: '',
      loc: "",
      gen: "",
      edu: [],
      multiple: ''
    },

    validationSchema: Validator,
    onsubmit: (data, action) => {
      console.log(data);
      action.resetForm();
    },

  })
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        ENTER NAME:
        <input type="text" name="nm" onChange={formik.handleChange} value={formik.values.nm} />
        <span style={{ color: 'red' }}>
          {formik.errors.nm && formik.touched.nm ? formik.errors.nm : null}
        </span>
        <br /><br />

        ENTER AGE:
        <input type="text" name="ag" onChange={formik.handleChange} value={formik.values.ag} />
        <span style={{ color: 'red' }}>
          {formik.errors.ag && formik.touched.ag ? formik.errors.ag : null}
        </span>
        <br /><br />



        ENTER EMAIL:
        <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <span style={{ color: 'red' }}>
          {formik.errors.email && formik.touched.email ? formik.errors.email : null}
        </span>
        <br /><br />

        SELECT LOCATION:
        <select name="loc" onChange={formik.handleChange} value={formik.values.loc}>
          <option value="">Choose Location</option>
          <option value="shumla">shimla</option>
          <option value="kolkata">kolkata</option>
          <option value="patna">patna</option>
          <option value="ranchi">ranchi</option>
        </select>
        <span style={{ color: 'red' }}>
          {formik.errors.loc && formik.touched.loc ? formik.errors.loc : null}
        </span>
        <br /><br />

        ENTER GENDER:
        <input type="radio" name="gen" value="MALE" onChange={formik.handleChange} />M
        <input type="radio" name="gen" value="FEMALE" onChange={formik.handleChange} />F
        <input type="radio" name="gen" value="OTHER" onChange={formik.handleChange} />OTHER
        <span style={{ color: 'red' }}>
          {formik.errors.gen && formik.touched.gen ? formik.errors.gen : null}
        </span>
        <br /><br />

        ENTER EDUCATION:
        <input type="checkbox" name="edu" value="graduate" onChange={formik.handleChange} />graduate
        <input type="checkbox" name="edu" value="Postgraduate" onChange={formik.handleChange} />Postgraduate
        <input type="checkbox" name="edu" value="Undergraduate" onChange={formik.handleChange} />Undergraduate
        <input type="checkbox" name="edu" value="BCA" onChange={formik.handleChange} />BCA
        <span style={{ color: 'red' }}>
          {formik.errors.edu && formik.touched.edu ? formik.errors.edu : null}
        </span>
        <br /><br />
        SELECT MULTIPLE VALUES :
        <select
          name="multiple"
          onChange={formik.handleChange}
          value={formik.values.multiple}
          multiple
        >
          <option value="">Choose Multiple Values</option>
          <option value="Goa">Goa</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Banglore">Banglore</option>
        </select>
        <span style={{ color: 'red' }}>
          {formik.errors.multiple && formik.touched.multiple ? formik.errors.multiple : null}
        </span>
        <br /><br />
        <input type="submit" value="register" />
        <input type="button" value="reset" onClick={formik.handleReset} />
        <br /><br />
      </form>
    </>
  )
}

export default Validation1;