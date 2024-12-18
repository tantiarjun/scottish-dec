import React from 'react';

const ConfirmationModal = ({ onClose, onConfirm, isOpen }) => {
    if (!isOpen) return null; // Render nothing if not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-lg p-10 max-w-xs md:max-w-sm w-full text-center shadow-lg">
                <p className="text-gray-800 mb-10 w-full">Are you sure you want to replace the data for the existing month?</p>
                <div className="flex justify-between">
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                        onClick={onClose}
                    >
                        No, back
                    </button>
                    <button
                        className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 transition-colors"
                        onClick={onConfirm}
                    >
                        Yes, replace
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
