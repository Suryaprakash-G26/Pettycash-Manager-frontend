import * as yup from 'yup';

export const Editexpenses = yup.object({
    title: yup.string().required("Please enter Title"),
    category: yup.string().required("Please enter Category"),
    price: yup.number().required("Please enter Price").min(1,"price less than 1 is considered free and it cant be considered as expense"),
    quantity: yup.number().required("Please enter Quantity").min(1, "Quantity must be at least 1"),
    type: yup.string(),
    date: yup
        .string()
        .required("Please enter Date"),
    userId: yup.string(),
});
