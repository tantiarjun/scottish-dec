import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MantraList = () => {
    const [data, setData] = useState([]);
    const [selectAll, setSelectAll] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/mantra');
                let mantraData = response.data;

                // Month order array to use for sorting
                const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                // Sort the mantraData array by the month
                mantraData = mantraData.sort((a, b) => {
                    const monthA = monthOrder.indexOf(a.month);  // assuming month is stored as a string like 'January'
                    const monthB = monthOrder.indexOf(b.month);
                    return monthA - monthB;
                });

                // Set the data after sorting
                setData(mantraData);

                // Set the checkboxes based on isChecked values
                const isCheckedArray = mantraData.map(item => item.isChecked);
                setCheckedItems(isCheckedArray);

                // Set the selectAll checkbox based on whether all items are checked
                setSelectAll(isCheckedArray.every(isChecked => isChecked));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const handleSelectAll = async () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCheckedItems(new Array(data.length).fill(newSelectAll));

        // Update the backend with the new checkbox state for all items
        try {
            await Promise.all(
                data.map(item =>
                    axios.post('http://localhost:5000/api/update-checkbox-state', {
                        month: item.month,
                        isChecked: newSelectAll
                    })
                )
            );
        } catch (error) {
            console.error('Error updating checkbox state:', error);
        }
    };

    const handleCheckboxChange = async (item, index) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);

        // Update the selectAll state based on the new checkboxes
        setSelectAll(updatedCheckedItems.every(item => item));

        // Update the backend with the new checkbox state
        try {
            await axios.post('http://localhost:5000/api/update-checkbox-state', {
                month: item.month,
                isChecked: updatedCheckedItems[index]
            });
        } catch (error) {
            console.error('Error updating checkbox state:', error);
        }

        console.log(data);
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className='bg-[#D9D9D9]'>
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-center flex items-center">
                                <input
                                    type="checkbox"
                                    className='mr-3 h-4 w-4'
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                                Month
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Text</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-200 px-4 py-2">
                                    <div className='flex items-center text-sm'>
                                        <input
                                            type="checkbox"
                                            className='mr-3 h-4 w-4'
                                            checked={checkedItems[index] || false}
                                            onChange={() => handleCheckboxChange(item, index)}
                                        />
                                        {item.month}
                                    </div>
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-sm">{item.textContent}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <img className='h-12 w-14 rounded-md' src={item.photoUrl} alt="image" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MantraList;
