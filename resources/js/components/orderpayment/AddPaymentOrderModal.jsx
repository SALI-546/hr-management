// AddPaymentOrderModal.jsx
import React from 'react';

const AddPaymentOrderModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-2xl font-bold mb-4">ORDRE DE PAIEMENT</h2>
                {/* Formulaire avec les champs mis à jour */}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nom du projet</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full px-4 py-2"
                            placeholder="SWEDD"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">COMPTE</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full px-4 py-2"
                            placeholder="ONG GBEWA PIB SWEDD"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">INTITULE</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full px-4 py-2"
                            placeholder="003712170137"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">N° Facture</label>
                        <div className="relative">
                            {/* Remplacement par un input de type date */}
                            <input
                                type="date"
                                className="border border-gray-300 rounded-lg w-full px-4 py-2"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">N° BL</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full px-4 py-2"
                            placeholder="106/MOOV/24"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            onClick={onClose}
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2">
                            Annuler
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPaymentOrderModal;
