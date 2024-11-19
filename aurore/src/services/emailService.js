export const sendEmail = async (formData) => {
    const response = await fetch('https://your-email-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
};