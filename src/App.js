import { Provider } from "react-redux";

import appStore from "./utils/store";
import Body from "./components/Body";

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
