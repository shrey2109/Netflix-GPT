import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/store";

function App() {
  return (
    //! Added Google Fonts here...
    <div className="font-rubic">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
