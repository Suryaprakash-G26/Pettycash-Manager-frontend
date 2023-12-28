import * as yup from 'yup';

export const AddExpense = yup.object({
    title: yup.string().required("Please enter Title"),
    category: yup.string().required("Please enter Category"),
    price: yup.number().required("Please enter Price").min(1,"price less than 1 is considered free and it cant be considered as expense"),
    quantity: yup.number().required("Please enter Quantity").min(1, "Quantity must be at least 1"),
    type: yup.string(),
    date: yup
        .string()
        .required("Please enter Date")
        .transform((originalValue) => {
            // Assuming the date format is 'DD/MM/YYYY'
            const [day, month, year] = originalValue.split('/').map(Number);

            // Validate that the date is a valid Date object
            const isValidDate = !isNaN(day) && !isNaN(month) && !isNaN(year);
            if (isValidDate) {
                // Format the date as a string in the desired format (e.g., YYYY-MM-DD)
                return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            }

            // If the date is not valid, return the original value
            return originalValue;
        }),
    userId: yup.string(),
});
