import FeatureRequest from "./components/pages/index";
import styles from "./App.module.scss";

import { Login } from "@microsoft/mgt-react";
import { Providers, ProviderState } from "@microsoft/mgt-element";

import SkidataLogo from "./assets/skidata-logo.png";

import { useEffect, useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState<Boolean>(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return (
    <div className={styles.app}>
      <header>
        <Login />
      </header>

      {isSignedIn ? (
        <FeatureRequest />
      ) : (
        <div className={styles.welcome__container}>
          <div className={styles.welcome__box}>
            <div className={styles.logo__container}>
              <img
                alt="skidata_logo"
                src={SkidataLogo}
                className={styles.welcomeImage}
              />
              <h1 className={styles.logo__container__title}>Feature Request</h1>
            </div>
            <Login />
            <p>Please sign in with Skidata MS account to continue.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
