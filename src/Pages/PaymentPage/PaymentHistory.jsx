import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);
// console.log(history);
    useEffect(() => {
        const fetchHistory = async () => {
            if (!user?.email) return; // Ensure email exists before fetching
            try {
                const response = await axios.get(
                    `https://server-site-six-eta.vercel.app/payment/${user.email}`
                );
                setHistory(response.data);
            } catch (error) {
                console.error("Error fetching payment history:", error);
            }
        };

        fetchHistory();
    }, [user?.email]); // Add user.email as a dependency

    return (
        <div className="overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">Payment History</h1>
            {history.length > 0 ? (
                <table className="table w-full">
                    <thead>
                        <tr className='text-sky-400 text-xl'>
                            <th>Transaction ID</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((payment, index) => (
                            <tr key={index} className='text-[17px] text-gray-700 '>
                                <td>{payment?.transactionId}</td>
                                <td>{payment?.email}</td>
                                <td>${payment?.price}</td>
                                <td>{new Date(payment.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No payment history available.</p>
            )}
        </div>
    );
};

export default PaymentHistory;
