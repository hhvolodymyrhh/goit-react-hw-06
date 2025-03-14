import css from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { validationSchema } from './validationSchema';

import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialContact = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));

    actions.resetForm();
  };
console.log(addContact());

  return (
    <Formik
      initialValues={initialContact}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const nameId = nanoid();
        const numberId = nanoid();

        return (
          <Form className={css.form}>
            <Field className={css.field} type="text" name="name" id={nameId} placeholder='Your name'/>
            {errors.name && touched.name ? (
              <div className={css.errors}>{errors.name}</div>
            ) : null}
            <Field
              className={css.field}
              type="number"
              name="number"
              id={numberId}
              placeholder='Your number'
            />
            {errors.number && touched.number ? (
              <div className={css.errors}>{errors.number}</div>
            ) : null}

            <button className={css.formButton} type="submit">
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;