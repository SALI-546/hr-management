import React, { useState, useEffect } from 'react';

const PaymentRequestForm = ({ onClose, editData }) => {
    const [projectName, setProjectName] = useState('');
    const [operationTitle, setOperationTitle] = useState('');
    const [beneficiary, setBeneficiary] = useState('');
    const [invoiceDetails, setInvoiceDetails] = useState('');
    const [budgetLine, setBudgetLine] = useState('');
    const [followedBy, setFollowedBy] = useState('');
    const [quality, setQuality] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Load edit data if available
    useEffect(() => {
        if (editData) {
            setProjectName(editData.designation);
            // Populate other fields if `editData` has more info
        }
    }, [editData]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                    {editData ? 'Modifier Demande de Paiement' : 'Ajouter Demande de Paiement'}
                </h2>

                {/* Formulaire */}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Nom du projet</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="SWEDD"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Intitulé de l'opération</label>
                        <input
                            type="text"
                            value={operationTitle}
                            onChange={(e) => setOperationTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="Frais de communication"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Bénéficiaire</label>
                        <input
                            type="text"
                            value={beneficiary}
                            onChange={(e) => setBeneficiary(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="MOOV BENIN"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Numéro et date de la facture</label>
                        <input
                            type="text"
                            value={invoiceDetails}
                            onChange={(e) => setInvoiceDetails(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="EM100234-23 du 12/10/2024"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Ligne Budgétaire</label>
                        <input
                            type="text"
                            value={budgetLine}
                            onChange={(e) => setBudgetLine(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="Dotation en communication staff projet, Octobre 2024"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Affaire suivie par</label>
                        <input
                            type="text"
                            value={followedBy}
                            onChange={(e) => setFollowedBy(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="A0.12"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Qualité</label>
                        <input
                            type="text"
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="SINSIN Daniel"
                        />
                    </div>
                    {/* Nouveaux champs : Téléphone et Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="99224008"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            placeholder="daniel.sinsin@onggbewa.org"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                        >
                            Valider
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentRequestForm;
