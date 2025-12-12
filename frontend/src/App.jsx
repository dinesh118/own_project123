//import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert } from 'react-native';


// const API_URL = 'http://<your-backend-host>:8000'; // replace with actual host or tunnel


// export default function App() {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [token, setToken] = useState(null);


// const login = async () => {
// try {
// const res = await fetch(`${API_URL}/login`, {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify({ email, password }),
// });
// if (!res.ok) throw new Error('Login failed');
// const data = await res.json();
// setToken(data.access_token);
// Alert.alert('Logged in', `Token: ${data.access_token.slice(0,20)}...`);
// } catch (err) {
// Alert.alert('Error', err.message);
// }
// };


// const register = async () => {
// try {
// const res = await fetch(`${API_URL}/register`, {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify({ email, password }),
// });
// if (!res.ok) throw new Error('Registration failed');
// Alert.alert('Registered', 'You can now login');
// } catch (err) {
// Alert.alert('Error', err.message);
// }
// };


// return (
// <View style={{ padding: 20, marginTop:50 }}>
// <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={{height:40,borderWidth:1,marginBottom:10,padding:8}} />
// <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{height:40,borderWidth:1,marginBottom:10,padding:8}} />
// <Button title="Register" onPress={register} />
// <View style={{height:10}} />
// <Button title="Login" onPress={login} />
// {token && <Text style={{marginTop:20}}>Token (truncated): {token.slice(0,40)}...</Text>}
// </View>
// );
// }

import { useState } from "react";
import { login, register } from "./api";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setToken(data.access_token);
      alert("Logged in!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert("Registered! Now login.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
      <h1>Login Demo</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <button onClick={handleRegister} style={{ width: "100%", padding: 10 }}>
        Register
      </button>

      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      >
        Login
      </button>

      {token && (
        <div style={{ marginTop: 20 }}>
          <strong>Token:</strong>
          <p>{token.slice(0, 50)}...</p>
        </div>
      )}
    </div>
  );
}
