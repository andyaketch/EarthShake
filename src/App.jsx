
import { useState } from "react";

import {
  FirebaseUIProvider,
  SignInAuthScreen,
  SignUpAuthScreen
} from "@firebase-oss/ui-react";

import { earthShakeUI } from "./firebaseUI";


export default function App() {
  const [accessMode, setAccessMode] = useState("signin");

  return (
    <FirebaseUIProvider ui={earthShakeUI}>
      <main style={{
        maxWidth: "440px",
        margin: "80px auto",
        padding: "24px"
      }}>

        <h1>EarthShake</h1>
        <p>Your gateway to EarthShake.</p>

        {accessMode === "signin" ? (
          <>
            <SignInAuthScreen />

            <p>
              New here?{" "}
              <button onClick={() => setAccessMode("signup")}>
                Create an account
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpAuthScreen />

            <p>
              Already a member?{" "}
              <button onClick={() => setAccessMode("signin")}>
                Sign in
              </button>
            </p>
          </>
        )}

      </main>
    </FirebaseUIProvider>
  );
}
