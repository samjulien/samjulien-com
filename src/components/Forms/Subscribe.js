import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import theme from '../../../config/theme'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM
const API_KEY = process.env.CONVERTKIT_PUBLIC_KEY

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = () => {
  return (
    <div>
      <Message
        title={`Great! One last thing...`}
        body={`I just sent you an email with the confirmation link.
          **Please check your inbox!**`}
      />
    </div>
  )
}

class SignUp extends React.Component {
  state = {
    submitted: false,
    success: false,
    errorMessage: null,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true })
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
        this.setState({
          submitted: true,
          success: true,
          errorMessage: null,
        })
      }
    } catch (error) {
      this.setState({
        submitted: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  render() {
    const { success, errorMessage } = this.state

    return (
      <div>
        {!success && (
          <h2
            css={css`
              margin-bottom: ${rhythm(1)};
              margin-top: 0;
            `}
          >
            I send emails about tech stuff and being better.
          </h2>
        )}

        <Formik
          initialValues={{
            email: '',
            first_name: '',
          }}
          validationSchema={SubscribeSchema}
          onSubmit={values => this.handleSubmit(values)}
          render={({ isSubmitting }) => (
            <>
              {!success && (
                <Form
                  css={css`
                    display: flex;
                    align-items: flex-end;
                    button {
                      margin-left: 10px;
                    }
                    .field-error {
                      display: block;
                      color: ${theme.colors.red};
                      font-size: 80%;
                    }
                    input,
                    label {
                      width: 100%;
                    }
                    ${bpMaxSM} {
                      flex-direction: column;
                      align-items: flex-start;
                      width: auto;
                      label,
                      input {
                        margin: 5px 0 0 0 !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      button {
                        margin: 20px 0 0 0;
                      }
                    }
                  `}
                >
                  <label htmlFor="first_name">
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      First Name
                      <ErrorMessage
                        name="first_name"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="your first name"
                      aria-required="false"
                      name="first_name"
                      placeholder="Jane"
                      type="text"
                    />
                  </label>
                  <label htmlFor="email">
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      Email
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                    />
                  </label>
                  <button
                    data-element="submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting && 'Submit'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {success && <PostSubmissionMessage />}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default SignUp
