import React from 'react';
import ClientList from './components/ClientList';
import AddClientForm from './components/AddClientForm';

function App() {
  return (
      <div>
        <AddClientForm />
        <ClientList />
      </div>
  );
}

export default App;
