import React, { useState } from 'react';

const EngagementList = () => {
    // État local pour les engagements (données fictives)
    const [engagements, setEngagements] = useState([
        { id: 1, title: 'Engagement 1', description: 'Description 1' },
        { id: 2, title: 'Engagement 2', description: 'Description 2' },
        { id: 3, title: 'Engagement 3', description: 'Description 3' },
    ]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Fiche d'Engagement</h1>
            <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border-b border-gray-300">ID</th>
                        <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border-b border-gray-300">Titre</th>
                        <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border-b border-gray-300">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {engagements.map((engagement) => (
                        <tr key={engagement.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b border-gray-300">{engagement.id}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{engagement.title}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{engagement.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EngagementList;
