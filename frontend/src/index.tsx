import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import { setupStore } from './store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);


