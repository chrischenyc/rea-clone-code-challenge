import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const FormSchema = Yup.object().shape({
  keyword: Yup.string().required('please enter search keyword'),
});

function PropertySearchForm({ onSearch }) {
  return (
    <div>
      <Formik initialValues={{ keyword: '' }} validationSchema={FormSchema} onSubmit={onSearch}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field type="text" name="keyword" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
            {errors.keyword && touched.keyword ? <div>{errors.keyword}</div> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

PropertySearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default PropertySearchForm;
