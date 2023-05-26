import React, { useState } from 'react';

function AddClientForm() {
    const [name, setName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [contractValue, setContractValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Aqui você fará a chamada para a API para criar um novo cliente
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Responsável" value={responsible} onChange={(e) => setResponsible(e.target.value)} />
            <input type="number" placeholder="Valor do Contrato" value={contractValue} onChange={(e) => setContractValue(e.target.value)} />
            <button type="submit">Adicionar Cliente</button>
        </form>
    );
}

export default AddClientForm;
