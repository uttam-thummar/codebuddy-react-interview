import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
        transition={Flip}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}

export default App;
