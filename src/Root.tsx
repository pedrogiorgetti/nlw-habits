import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store";

export function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}