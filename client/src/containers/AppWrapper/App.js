import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../../store';
import './App.css';
import AppRoute from '../../routes/AppRoute';


const App = () => (
  
    <Provider store={store}>
    <div>
      <AppRoute />
      <ToastContainer autoClose={8000} />
    </div>
    </Provider>

 
);
export default App;

