import React from "react"
import ReactDOM from "react-dom/client"
import App from "./containers/App";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import './themes/index.css'
import GlobalStyles  from "./themes/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyles />
      <App />
    </ReduxProvider>
 </React.StrictMode>
)
