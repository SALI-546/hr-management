import React from 'react';
import { FaChevronLeft, FaEdit, FaSave } from 'react-icons/fa';

const PaymentRequestDetails = ({ request, onClose }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Bouton de retour avec icône */}
            <button onClick={onClose} className="text-gray-600 mb-4 hover:text-black flex items-center">
                <FaChevronLeft size={20} />
                
            </button>
            
            <h1 className="text-3xl font-bold mb-6">{request.designation}</h1>

            {/* Information Section - Four Columns */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex">
                    <div className="w-1/2">
                        <p><strong>Date et heure :</strong></p>
                        <p><strong>N° d'Ordre :</strong></p> {/* Added N° d'Ordre */}
                        <p><strong>Intitulé de l'opération :</strong></p>
                        <p><strong>Bénéficiaire :</strong></p>
                        <p><strong>Numéro et date :</strong></p>
                        <p><strong>Objet/Activité :</strong></p>
                    </div>
                    <div className="w-1/2">
                        <p>{request.date}</p>
                        <p>{request.orderNumber}</p> {/* Display N° d'Ordre */}
                        <p>{request.operation}</p>
                        <p>{request.beneficiary}</p>
                        <p>{request.invoice}</p>
                        <p>Dotation en communication staff projet, Octobre 2024</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <p><strong>Ligne Budgétaire :</strong></p>
                        <p><strong>Affaire suivie par :</strong></p>
                        <p><strong>Qualité :</strong></p>
                        <p><strong>Tél. :</strong></p>
                        <p><strong>Mail :</strong></p>
                    </div>
                    <div className="w-1/2">
                        <p>{request.budgetLine}</p>
                        <p>{request.quality}</p>
                        <p>{request.quality}</p>
                        <p>{request.phone}</p>
                        <p>{request.email}</p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-300 mb-6">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">N°</th>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Activité</th>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Montant présenté (en coût total) (A)</th>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Montant présenté (en coût total éligible) (B)</th>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Montant sollicité (A-B)</th>
                        <th className="py-2 px-4 bg-gray-100 text-center font-medium text-gray-600 border border-gray-300">Pièces Jointes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-t border-gray-300 hover:bg-gray-50">
                        <td className="py-2 px-4 border border-gray-300">01</td>
                        <td className="py-2 px-4 border border-gray-300">{request.invoice}</td>
                        <td className="py-2 px-4 border border-gray-300">250 000</td>
                        <td className="py-2 px-4 border border-gray-300">250 000</td>
                        <td className="py-2 px-4 border border-gray-300">250 000</td>
                        <td className="py-2 px-4 border border-gray-300">Bon de commande, Facture</td>
                    </tr>
                    {/* Additional rows for table example */}
                    <tr className="text-center border-t border-gray-300 hover:bg-gray-50">
                        <td className="py-2 px-4 border border-gray-300">02</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                    </tr>
                    <tr className="text-center border-t border-gray-300 hover:bg-gray-50">
                        <td className="py-2 px-4 border border-gray-300">03</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                    </tr>
                    <tr className="text-center border-t border-gray-300 hover:bg-gray-50">
                        <td className="py-2 px-4 border border-gray-300">04</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                        <td className="py-2 px-4 border border-gray-300">-</td>
                    </tr>
                    {/* Row for Total */}
                    <tr className="text-center border-t border-gray-300 hover:bg-gray-50 font-bold">
                        <td className="py-2 px-4 border border-gray-300" colSpan="2">TOTAL DEMANDE</td>
                        <td className="py-2 px-4 border border-gray-300">250 000 FCFA</td>
                        <td className="py-2 px-4 border border-gray-300">250 000 FCFA</td>
                        <td className="py-2 px-4 border border-gray-300">250 000 FCFA</td>
                        <td className="py-2 px-4 border border-gray-300"></td>
                    </tr>
                </tbody>
            </table>

            {/* Final Text */}
            <p className="mt-4 text-gray-600">
                Arrêté la présente demande de paiement à la somme totale de deux cent cinquante mille francs CFA.
                Je certifie exactes les informations mentionnées dans la présente demande de paiement.
            </p>

            {/* Additional Information and Buttons */}
            <div className="mt-6">
                <p className="text-gray-600 mb-2">Le chargé de Logistique</p>
                <p className=" text-gray-600">SINSIN Daniel</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        type="button"
                        className="border border-green-600 text-green-600 hover:bg-green-100 py-2 px-4 rounded-lg flex items-center"
                    >
                        <FaEdit className="mr-2" /> Modifier
                    </button>
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center"
                    >
                        <FaSave className="mr-2" /> Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentRequestDetails;
