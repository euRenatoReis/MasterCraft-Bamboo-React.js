import React, { createContext, useState, useContext } from 'react';

// Crie o contexto
const TelaContext = createContext();

// Crie um provedor (provider) para o contexto
export const TelaProvider = ({ children }) => {
  const [telaAberta, setTelaAberta] = useState(false);

  const abrirTela = () => {
    setTelaAberta(true);
  };

  const fecharTela = () => {
    setTelaAberta(false);
  };

  return (
    <TelaContext.Provider value={{ telaAberta, abrirTela, fecharTela }}>
      {children}
    </TelaContext.Provider>
  );
};

// Crie um hook personalizado para acessar o contexto
export const useTela = () => {
  const context = useContext(TelaContext);
  if (!context) {
    throw new Error('useTela deve ser usado dentro de um TelaProvider');
  }
  return context;
};





