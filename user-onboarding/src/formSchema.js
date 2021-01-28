import * as yup from 'yup';

export default yup.object().shape({
     first_name: yup
     .string()
     .required('First name required')
     .min(2, 'Not long enough'),
     last_name: yup
     .string()
     .required('Last name required')
     .min(2, 'Not long enough'),
     email: yup
     .string()
     .email('must provide a valid email address')
     .required('email is required'),
     password: yup
     .string()
     .required('password required')
     .min(8, 'Not long enough'),
     tos: yup.boolean().required()

})