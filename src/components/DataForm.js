import React, { useState, useEffect, useMemo } from 'react';
import { checkDate } from '../api';
import Message from './Message';
import '../styles/App.css';
// import { Audio } from 'react-loader-spinner';

const DateForm = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1); // Numeric month for backend
    const [monthText, setMonthText] = useState(''); // Text month for display
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state

    const monthNames = useMemo(() => [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ], []);

    useEffect(() => {
        setMonthText(monthNames[new Date().getMonth()]);
    }, [monthNames]);

    const handleMonthChange = (e) => {
        const monthNumber = monthNames.indexOf(e.target.value) + 1;
        setMonth(monthNumber);
        setMonthText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting the form
        const response = await checkDate(year, month);
        setMessage(response);
        setLoading(false); // Set loading to false when response is received
    };

    return (
        <div className="date-form">
            <form onSubmit={handleSubmit}>
                <div className='data'>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        disabled={loading} // Disable input while loading
                    />
                    <label htmlFor="month">Month:</label>
                    <select
                        id="month"
                        value={monthText}
                        onChange={handleMonthChange}
                        disabled={loading} // Disable select while loading
                    >
                        {monthNames.map((name, index) => (
                            <option key={index} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>Generate</button> 
                {loading && <div className="loader">
               
                </div>}
                <div>
                    Loading..
                </div>
            </form>
            {message && <Message message={message} />}
        </div>
    );
};

export default DateForm;
