import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Client from './Client';
import { ClientInterface } from './ClientInterface';

function ClientList() {
    const [clients, setClients] = useState<ClientInterface[]>([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/clients');
            setClients(response.data);
        } catch (err) {
            console.error("Erro ao buscar clientes: ", err);
        }
    };

    const handleStatusChange = async (id: string, newStatus: boolean) => {
        try {
            await axios.put(`http://localhost:3000/api/clients/${id}/status`, { active: newStatus });
            fetchClients();
        } catch (err) {
            console.error("Erro ao alterar o status do cliente: ", err);
        }
    };

    const handleValueChange = async (id: string, newValue: number) => {
        try {
            await axios.put(`http://localhost:3000/api/clients/${id}/value`, { contractValue: newValue });
            fetchClients();
        } catch (err) {
            console.error("Erro ao alterar o valor do contrato do cliente: ", err);
        }
    };

    return (
        <div>
            {clients.map(client => (
                <Client
                    key={client._id}
                    data={client}
                    onStatusChange={handleStatusChange}
                    onValueChange={handleValueChange}
                />
            ))}
        </div>
    );
}

export default ClientList;