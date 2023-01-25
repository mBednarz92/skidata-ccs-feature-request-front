import FeatureRequest from "./components/pages/index";
import styles from "./App.module.scss";

import { Login } from "@microsoft/mgt-react";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Login />
      </header>
    </div>
  );
}

export default App;
