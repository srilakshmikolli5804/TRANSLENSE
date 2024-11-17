import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import RegistrationPage from './pages/RegistrationPage';
import './index.css'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <RegistrationPage />
      </div>
    </Provider>
  );
};

export default App;
