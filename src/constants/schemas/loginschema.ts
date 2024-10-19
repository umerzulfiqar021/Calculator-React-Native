import * as yup from 'yup'
export const signUp = yup.object({
    email: yup.string().email('Please enter valid email address').required('Please Enter email address'),
    // username: yup.string().required('Password required').min(4,'Username must be at least 4 character'),
    password: yup.string().required('Password required').min(8,'Password must have length 8 or more')
  })