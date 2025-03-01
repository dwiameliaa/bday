import { useState } from "react";

const Wish = () => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (name.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fcf6f6] to-[#feddc2] p-6 overflow-hidden">
      <img src="flower.png" alt="loading" className="absolute top-0 left-0 w-[400px] h-[400px]" />
      
      {!isLoggedIn ? (
        // Halaman Login
        <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/50 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Masukkan Nama Anda</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="mt-4 p-2 w-full border rounded-lg text-center focus:border-[#fa812a] hover:border-[#fa812a] focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="mt-4 px-6 py-2 bg-[#f79863] text-white rounded-lg hover:bg-[#fa812a]"
          >
            OK
          </button>
        </div>
      ) : (
        // Halaman Heyyoo setelah login
        <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/50 text-center">
          <h1 className="text-2xl font-bold mt-4 text-slate-900">Heyyoo:3</h1>
          <p className="text-gray-700 font-normal">
            Selamat ulang tahun, <strong>{name}</strong>! Semoga bertambahnya usia membawa kebahagiaan dan keberkahan untukmu.
            Semoga panjang umur, sehat selalu. Pokoknya Wish you all the best dehh buat kamu.
            Terimakasih sudah berjuang hingga saat ini, kamu keren banget dan mari kita terus berjuang bersama-sama untuk kedepannya😊😆
          </p>
        </div>
      )}
    </div>
  );
};

export default Wish;