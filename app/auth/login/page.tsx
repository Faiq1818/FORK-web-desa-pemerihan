"use client";
import { useState } from "react";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      console.log(data.token);

      localStorage.setItem("auth", data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="border p-5 rounded-2xl border-slate-400">
          <div className="font-bold text-xl">Login</div>
          <p>Masukan akun anda</p>
          <p className="text-slate-700 mt-4">Username:</p>
          <input
            className="border rounded-xl border-slate-400  px-2"
            value={username}
            type="text"
            size={30}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-slate-700">Password:</p>
          <input
            className="border rounded-xl border-slate-400 px-2"
            value={password}
            type="text"
            size={30}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-4 flex flex-row justify-around">
            <div
              className="bg-slate-200 px-4 py-1 rounded-xl border border-slate-300 cursor-pointer hover:bg-slate-300"
              onClick={() => handleLogin()}
            >
              Login
            </div>
            <div className="bg-slate-200 px-4 py-1 rounded-xl border border-slate-300 cursor-pointer hover:bg-slate-300">
              Buat akun
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
