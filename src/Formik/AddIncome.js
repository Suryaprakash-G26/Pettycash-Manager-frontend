import * as yup from 'yup';

export const AddIncome = yup.object({
    category: yup.string().required("Please enter Category"),
    Amount: yup.number().required("Please enter Income").min(100,"income should be more than 100"),
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
