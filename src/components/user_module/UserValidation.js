import * as Yup from 'yup';

export const UserValidation = Yup.object({
    userId: Yup.string().required("please enter user id"),
    firstName: Yup.string().required("please enter user id"),
    lastName: Yup.string().required("please enter user id"),
    phoneNumber: Yup.string().required("please enter user id"),
    faxNo: Yup.string().required("please enter user id"),
    companyName: Yup.string().required("please enter user id"),
    address: Yup.string().required("please enter user id"),
    city: Yup.string().required("please enter user id"),
    zipCode: Yup.string().required("please enter user id"),
    country: Yup.string().required("please enter user id"),
    email: Yup.string().email("please enter valid email").required("please enter user id"),
    email2: Yup.string().email("please enter valid email").required("please enter user id"),
    permission: Yup.string().required("please enter user id"),
    status: Yup.string().required("please enter user id"),
    referenceName: Yup.string().required("please enter user id"),
})