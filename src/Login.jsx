import { useState } from "react";
import Button from "@mui/material/Button";
import { registerUser, loginUser, loginWithGoogle } from "./access";

const darkButton = { color: "var(--color-charcoal)", borderColor: "var(--color-charcoal)" };

function Login() {
  // one useState for each thing the user can type or change
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNew, setIsNew] = useState(false); // false = login, true = register
  const [oops, setOops] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // stop the page from refreshing
    setOops("");

    try {
      if (isNew) {
        await registerUser(email, password);
      } else {
        await loginUser(email, password);
      }
      // nothing else to do, App is listening and will switch the page by itself
    } catch (err) {
      console.log(err);
      setOops(err.message);
    }
  }

  async function handleGoogle() {
    setOops("");
    try {
      await loginWithGoogle();
    } catch (err) {
      console.log(err);
      setOops(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {}
      <div className="card w-full max-w-sm">
        <div className="card-body">
          <h1 className="h3 mb-1">EarthShake</h1>
          <p className="mb-4">{isNew ? "Make an account" : "Login to see the earthquakes"}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              {}
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            {/* only show the error box if there is a error */}
            {oops && (
              <p className="p-2 mb-3 rounded border-2 border-turq text-sm">{oops}</p>
            )}

            <Button type="submit" variant="contained" fullWidth>
              {isNew ? "Register" : "Login"}
            </Button>
          </form>

          <div className="my-3">
            <Button variant="outlined" fullWidth onClick={handleGoogle} sx={darkButton}>
              Continue with Google
            </Button>
          </div>

          <Button variant="text" fullWidth onClick={() => setIsNew(!isNew)} sx={darkButton}>
            {isNew ? "Already have account? Login" : "No account? Register"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
