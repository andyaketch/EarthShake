import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { monitorAuthState, logoutUser } from "./access";
import Login from "./Login";
import Quakes from "./Quakes";

// react basic 1: a component is just a function that return jsx (html looking stuff)
function App() {
  // react basic 2: useState = a variable that react watch. change it and screen update
  const [me, setMe] = useState(null); // null means nobody is logged in
  const [checking, setChecking] = useState(true);

  // react basic 3: useEffect runs after the screen shows. the [] means only one time
  useEffect(() => {
    const stopListening = monitorAuthState((user) => {
      setMe(user);
      setChecking(false);
    });

    // cleanup, runs when app go away
    return () => stopListening();
  }, []);

  // firebase still thinking
  if (checking) {
    return <p className="p-6">Checking who you are...</p>;
  }

  // no user? show login page
  if (!me) {
    return <Login />;
  }

  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between gap-4 p-4 border-b-4 border-turq">
        <div>
          <h1 className="text-3xl font-bold text-turq m-0">EarthShake</h1>
          <p className="m-0 text-sm">Understanding earthquakes. Staying prepared.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm">{me.email}</span>
          <Button variant="contained" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </header>

      <Quakes />
    </main>
  );
}

export default App;