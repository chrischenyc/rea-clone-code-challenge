import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const FormSchema = Yup.object().shape({
  suburb: Yup.string().required('please enter suburb name to search'),
});

function PropertySearchForm({ onSearch }) {
  return (
    <div>
      <Formik initialValues={{ suburb: '' }} validationSchema={FormSchema} onSubmit={onSearch}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <span>Suburb&nbsp;</span>
            <Field type="text" name="suburb" placeholder="suburb name" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
            {errors.suburb && touched.suburb ? <div>{errors.suburb}</div> : null}
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
