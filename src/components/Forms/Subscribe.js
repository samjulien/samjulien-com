import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FORM_ID = process.env.GATSBY_CONVERTKIT_SIGNUP_FORM
const API_KEY = process.env.GATSBY_CONVERTKIT_PUBLIC_KEY

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  first_name: Yup.string(),
})

export default function Subscribe() {
  const [state, setState] = React.useState({
    submitted: false,
    success: false,
    errorMessage: null,
  })

  async function handleSubmit(values) {
    setState({ submitted: true })
    values.api_key = API_KEY
    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.status === 200) {
        setState({
          submitted: true,
          success: true,
          errorMessage: null,
        })
      }
    } catch (error) {
      setState({
        submitted: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  return (
    <div>
      {!state.success && (
        <>
          <h2 className="text-2xl leading-tight">
            Practical, actionable career wisdom for devs and dev advocates.
          </h2>
          <p className="text-gray-700 sm:text-xl text-base mt-4">
            I send helpful emails about leveling up your career in
            development and developer relations. No BS, no hand-waving, but with
            some fun thrown in for good measure. Beginners very welcome.
          </p>
        </>
      )}

      <Formik
        initialValues={{
          email: '',
          first_name: '',
        }}
        validationSchema={SubscribeSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ isSubmitting }) => (
          <>
            {!state.success && (
              <Form className="flex sm:flex-row flex-col sm:items-end items-center mt-8">
                <div className="flex-grow sm:w-auto w-full sm:mr-6 mr-0 sm:mb-0 mb-6">
                  <label htmlFor="first_name">
                    First Name
                    <ErrorMessage
                      name="first_name"
                      component="span"
                      className="ml-2 inline-block text-red-500"
                    />
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <Field
                      className="form-input block w-full sm:text-base sm:leading-6 focus:border-green-300 focus:shadow-outline-green"
                      aria-required="false"
                      name="first_name"
                      placeholder="Garak"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-grow sm:w-auto w-full sm:mr-6 mr-0 sm:mb-0 mb-6">
                  <label htmlFor="email">
                    Email*
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="ml-2 inline-block text-red-500"
                    />
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <Field
                      required
                      aria-required="true"
                      className="form-input block w-full sm:text-base sm:leading-6 focus:border-green-300 focus:shadow-outline-green"
                      name="email"
                      placeholder="garak@ds9.station"
                      type="email"
                    />
                  </div>
                </div>
                <button
                  className="sm:text-base sm:leading-6 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors ease-in-out duration-200"
                  data-element="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {!isSubmitting && 'Sign Up'}
                  {isSubmitting && 'Processing...'}
                </button>
              </Form>
            )}
            {state.success && (
              <div className="prose lg:prose-xl max-w-none mb-10">
                <h3>Thanks so much for signing up! There's one last step.</h3>
                <p>
                  Please check your inbox for an email that just got sent.
                  You'll need to <strong>click the confirmation link</strong> to
                  receive any further emails.
                </p>
                <p>
                  If you don't see the email after a few minutes, you might
                  check your spam folder or other filters and add
                  sam@samjulien.com to your contacts.
                </p>
                <em>Thanks!</em>
                <br />
                <em>Sam</em>
              </div>
            )}
            {state.errorMessage && <div>{state.errorMessage}</div>}
          </>
        )}
      </Formik>
    </div>
  )
}
