"use client";

import { useState } from "react";

export default function Home() {
  const [distance1, setDistance1] = useState<number>(10);
  const [time1, setTime1] = useState<number>(40);
  const [distance2, setDistance2] = useState<number>(42.195);
  const [result, setResult] = useState<string>("");

  /**
   * Applique la formule de Riegel :
   * T2 = T1 * (D2 / D1) ^ 1.06
   */
  const handleCalculate = () => {
    // Calcul
    const t2 = time1 * Math.pow(distance2 / distance1, 1.06);

    // Conversion en h / min / s
    const hours = Math.floor(t2 / 60);
    const minutes = Math.floor(t2 % 60);
    const seconds = Math.round((t2 - hours * 60 - minutes) * 60);

    // Format final
    const resultString = `${hours} h ${minutes} min ${seconds} s (≈ ${t2.toFixed(
      2
    )} minutes)`;
    setResult(resultString);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <iframe allowTransparency={true} frameBorder="0" height='160' scrolling='no' src='https://www.strava.com/clubs/1340612/latest-rides/056d2933201cdcd87e82865880bd121216851565?show_rides=false' width='300'></iframe>
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Calculateur de temps (Riegel)</h1>

        <div className="mb-4">
          <label htmlFor="distance1" className="block font-medium mb-1">
            Distance de référence (km)
          </label>
          <input
            type="number"
            id="distance1"
            value={distance1}
            onChange={(e) => setDistance1(parseFloat(e.target.value))}
            step="0.01"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time1" className="block font-medium mb-1">
            Temps de référence (minutes)
          </label>
          <input
            type="number"
            id="time1"
            value={time1}
            onChange={(e) => setTime1(parseFloat(e.target.value))}
            step="0.1"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="distance2" className="block font-medium mb-1">
            Nouvelle distance (km)
          </label>
          <input
            type="number"
            id="distance2"
            value={distance2}
            onChange={(e) => setDistance2(parseFloat(e.target.value))}
            step="0.01"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Calculer
        </button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded">
            <p className="font-bold">Résultat :</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}