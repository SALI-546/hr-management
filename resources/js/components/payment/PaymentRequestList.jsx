import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import PaymentRequestForm from './PaymentRequestForm'; // Form component
import PaymentRequestDetails from './PaymentRequestDetails'; // Details component

const PaymentRequestList = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showForm, setShowForm] = useState(false); // State for showing the form
    const [showDetails, setShowDetails] = useState(false); // State for showing details view
    const [selectedRequest, setSelectedRequest] = useState(null); // Data for details or edit

    const paymentRequests = [
        { designation: 'SWEDD', orderNumber: '001', date: '09/10/2024 00:00', operation: 'Frais de communication', beneficiary: 'MOOV BENIN', invoice: 'EM100234-23 du 12/10/2024', budgetLine: 'A0.12', quality: 'Chargé de la Logistique', phone: '99224008', email: 'daniel.sinsin@onggbewa.org' },
        { designation: 'SWEDD', orderNumber: '001', date: '09/10/2024 00:00', operation: 'Frais de communication', beneficiary: 'MOOV BENIN', invoice: 'EM100234-23 du 12/10/2024', budgetLine: 'A0.12', quality: 'Chargé de la Logistique', phone: '99224008', email: 'daniel.sinsin@onggbewa.org' },
        { designation: 'SWEDD', orderNumber: '001', date: '09/10/2024 00:00', operation: 'Frais de communication', beneficiary: 'MOOV BENIN', invoice: 'EM100234-23 du 12/10/2024', budgetLine: 'A0.12', quality: 'Chargé de la Logistique', phone: '99224008', email: 'daniel.sinsin@onggbewa.org' },
        { designation: 'SWEDD', orderNumber: '001', date: '09/10/2024 00:00', operation: 'Frais de communication', beneficiary: 'MOOV BENIN', invoice: 'EM100234-23 du 12/10/2024', budgetLine: 'A0.12', quality: 'Chargé de la Logistique', phone: '99224008', email: 'daniel.sinsin@onggbewa.org' },
        { designation: 'SWEDD', orderNumber: '001', date: '09/10/2024 00:00', operation: 'Frais de communication', beneficiary: 'MOOV BENIN', invoice: 'EM100234-23 du 12/10/2024', budgetLine: 'A0.12', quality: 'Chargé de la Logistique', phone: '99224008', email: 'daniel.sinsin@onggbewa.org' },
        // Add more payment requests as needed
    ];

    const handleAddClick = () => {
        setSelectedRequest(null); // Reset to null for adding a new request
        setShowForm(true); // Show the form modal
    };

    const handleEditClick = (request) => {
        setSelectedRequest(request); // Pass existing data for editing
        setShowForm(true); // Show the form modal
    };

    const handleViewClick = (request) => {
        setSelectedRequest(request); // Set selected request data for viewing
        setShowDetails(true); // Show the details view
    };

    const closeForm = () => {
        setShowForm(false); // Close the form modal
    };

    const closeDetails = () => {
        setShowDetails(false); // Close the details view
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {!showDetails && (
                <>
                    {/* Titre et le conteneur pour la sélection des dates et le bouton ajouter */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">DEMANDE DE PAIEMENT</h1>

                        {/* Conteneur pour la sélection des dates */}
                        <div className="bg-white border border-gray-300 rounded-lg flex items-center space-x-4 p-2">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border border-gray-300 rounded-lg text-lg px-4 py-2"
                                placeholder="Date de début"
                            />
                            <span>-</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border border-gray-300 rounded-lg text-lg px-4 py-2"
                                placeholder="Date de fin"
                            />
                        </div>

                        {/* Bouton Ajouter */}
                        <button
                            onClick={handleAddClick}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md"
                        >
                            <span className="mr-2">Ajouter</span>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>

                    {/* Affichage du formulaire si showForm est true */}
                    {showForm && <PaymentRequestForm onClose={closeForm} editData={selectedRequest} />}

                    {/* Tableau des demandes de paiement */}
                    <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Désignation</th>
                                <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">N° d'Ordre</th>
                                <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentRequests.map((request, index) => (
                                <tr key={index} className="text-center border-t border-gray-300 hover:bg-gray-50">
                                    <td className="py-2 px-4 border border-gray-300 text-gray-800">{request.designation}</td>
                                    <td className="py-2 px-4 border border-gray-300 text-gray-800">{request.orderNumber}</td>
                                    <td className="py-2 px-4 border border-gray-300 flex justify-center space-x-4">
                                        <button
                                            onClick={() => handleViewClick(request)}
                                            className="text-gray-600 hover:text-black focus:outline-none"
                                        >
                                            <FaEye size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleEditClick(request)}
                                            className="text-gray-600 hover:text-black focus:outline-none"
                                        >
                                            <FaEdit size={18} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800 focus:outline-none">
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {/* Show Payment Request Details if showDetails is true */}
            {showDetails && <PaymentRequestDetails request={selectedRequest} onClose={closeDetails} />}
        </div>
    );
};

export default PaymentRequestList;
