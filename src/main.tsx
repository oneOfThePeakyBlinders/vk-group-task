import {createRoot} from "react-dom/client";
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import App from "./App.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </AdaptivityProvider>
    </ConfigProvider>,
);
