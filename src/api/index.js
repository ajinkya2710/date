const checkDate = async (year, month) => {
    try {
        const response = await fetch('http://localhost:4000/api/check-date', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ year, month }),
        });
        return await response.json();
    } catch (error) {
            return { success: 0, message: "Error" };
    }
};

module.exports = { checkDate };
