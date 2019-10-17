import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import "./App.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
  await sleep(500); // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2));
};

const required = value => (value ? undefined : "Required");

// the subscription thing is NOT THAT important for smaller forms
// 200 fields...then yeah maybe...
// by default, it subscribes to all the changes...

const App = () => (
  <div>
    <h1>React Final Form</h1>
    <Form
      onSubmit={showResults}
      subscription={{ values: true, submitting: true }}
    >
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            placeholder="First Name"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>First Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="lastName"
            placeholder="Last Name"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="email"
            placeholder="Email"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>{JSON.stringify(values, undefined, 2)}</pre>}
          </FormSpy>
        </form>
      )}
    </Form>
    <h2>Hola, React Alicante!</h2>
    <h3>final-form.org @finalformjs</h3>
  </div>
);

export default App;
