import React from 'react';
import { ClientInterface } from './ClientInterface';

interface ClientProps {
    data: ClientInterface;
    onStatusChange: (id: string, newStatus: boolean) => void;
    onValueChange: (id: string, newValue: number) => void;
}

function Client({ data, onStatusChange, onValueChange }: ClientProps) {
    const handleStatusChange = () => {
        onStatusChange(data._id, !data.active);
    };

    const handleValueChange = () => {
        const newValue = prompt('Digite o novo valor do contrato:');
        if (newValue) {
            onValueChange(data._id, Number(newValue));
        }
    };

    return (
        <div>
            <h2>{data.name}</h2>
            <p>Responsável: {data.responsible}</p>
            <p>Contrato: {data.contractValue}</p>
            <p>Status: {data.active ? 'Ativo' : 'Inativo'}</p>
            <button onClick={handleStatusChange}>
                {data.active ? 'Desativar' : 'Ativar'}
            </button>
            <button onClick={handleValueChange}>Alterar Valor</button>
        </div>
    );
}

export default Client;
