import { Provider } from 'react-redux';
import { Serp } from './pages';
import { store } from './ducks';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Serp />
        </Provider>
    );
};

export default App;
