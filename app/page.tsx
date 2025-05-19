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
      <iframe frameBorder="0" scrolling="no" src="https://www.strava.com/clubs/1340612/latest-rides/056d2933201cdcd87e82865880bd121216851565?show_rides=false"></iframe>
    </main>
  );
}