import "../styles/globals.css";
import { store } from "../redux/store.ts";
import { Provider } from "react-redux";
import { JssProvider } from "react-jss";

function MyApp({ Component, pageProps }) {
  return (
    <JssProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </JssProvider>
  );
}

export default MyApp;
