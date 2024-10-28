import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import des icônes
import AddPaymentOrderModal from './AddPaymentOrderModal'; // Import du composant modal pour l'ajout ou l'édition
import PaymentOrderDetails from './PaymentOrderDetails'; // Import du composant pour les détails

const PaymentOrderList = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showModal, setShowModal] = useState(false); // État pour contrôler la visibilité du modal d'ajout ou édition
    const [editingOrder, setEditingOrder] = useState(null); // État pour stocker la commande en cours de modification
    const [showDetails, setShowDetails] = useState(false); // État pour contrôler la visibilité des détails
    const [selectedOrder, setSelectedOrder] = useState(null); // État pour stocker la commande à afficher dans les détails

    const paymentRequests = [
        { designation: 'SWEDD', orderNumber: '001' },
        { designation: 'SWEDD', orderNumber: '002' },
        { designation: 'SWEDD', orderNumber: '003' },
    ];

    // Fonction pour gérer l'ouverture du modal d'ajout
    const handleAddClick = () => {
        setEditingOrder(null); // Réinitialiser l'état d'édition
        setShowModal(true);
    };

    // Fonction pour ouvrir le modal en mode édition
    const handleEditClick = (order) => {
        setEditingOrder(order); // Stocker les informations de la commande à éditer
        setShowModal(true);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Fonction pour afficher les détails de la commande
    const handleViewClick = (order) => {
        setSelectedOrder(order);
        setShowDetails(true);
    };

    // Fonction pour fermer le composant de détails
    const closeDetails = () => {
        setShowDetails(false);
        setSelectedOrder(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Titre et le conteneur pour la sélection des dates et le bouton ajouter */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">ORDRE DE PAIEMENT</h1>

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

                {/* Bouton Ajouter avec l'événement de clic */}
                <button 
                    onClick={handleAddClick}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md">
                    <span className="mr-2">Ajouter</span>
                    <i className="fas fa-plus"></i>
                </button>
            </div>

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
                                {/* Icône pour Vue */}
                                <button 
                                    className="text-gray-600 hover:text-black focus:outline-none"
                                    onClick={() => handleViewClick(request)}
                                >
                                    <FaEye size={18} />
                                </button>
                                {/* Icône pour Édition */}
                                <button 
                                    className="text-gray-600 hover:text-black focus:outline-none"
                                    onClick={() => handleEditClick(request)}
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

            {/* Utilisation du Composant Modal pour Ajouter/Édition */}
            <AddPaymentOrderModal isVisible={showModal} onClose={closeModal} />

            {/* Utilisation du Composant pour les Détails */}
            <PaymentOrderDetails 
                isVisible={showDetails} 
                order={selectedOrder} 
                onClose={closeDetails} 
            />
        </div>
    );
};

export default PaymentOrderList;
