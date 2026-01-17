import React, { useState, useEffect } from 'react';

const RamadhanTracker = () => {
    // --- STATE MANAGEMENT ---
    const [tasks, setTasks] = useState(() => {
        // Cek apakah ada data tersimpan di HP/Browser
        const saved = localStorage.getItem('ramadhanTasks');
        if (saved) return JSON.parse(saved);
        return [
            { id: 1, text: 'Shalat Subuh', completed: false },
            { id: 2, text: 'Shalat Dzuhur', completed: false },
            { id: 3, text: 'Shalat Ashar', completed: false },
            { id: 4, text: 'Shalat Maghrib', completed: false },
            { id: 5, text: 'Shalat Isya', completed: false },
            { id: 6, text: 'Puasa Hari Ini', completed: false },
            { id: 7, text: 'Baca Quran / Iqra', completed: false },
            { id: 8, text: 'Bantu Orang Tua', completed: false },
        ];
    });

    const [streak, setStreak] = useState(() => {
        return parseInt(localStorage.getItem('ramadhanStreak') || '0');
    });

    // Hitung Progress (0 - 100)
    const completedCount = tasks.filter(t => t.completed).length;
    const progress = Math.round((completedCount / tasks.length) * 100);

    // --- EFFECT: SAVE KE LOCAL STORAGE ---
    useEffect(() => {
        localStorage.setItem('ramadhanTasks', JSON.stringify(tasks));
        localStorage.setItem('ramadhanStreak', streak.toString());
    }, [tasks, streak]);

    // --- LOGIC: Handle Checklist ---
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // --- LOGIC: Reset Harian (Tapi simpan streak) ---
    const resetDay = () => {
        if (progress === 100) {
            setStreak(s => s + 1);
            alert("Alhamdulillah! Satu hari penuh berkah telah selesai. Streak bertambah!");
        } else {
            alert("Hari baru dimulai! Semangat memenuhi target ya!");
        }

        setTasks(tasks.map(t => ({ ...t, completed: false })));
    };

    // --- UI: Menentukan Emoticon Tanaman ---
    const getPlantEmoji = () => {
        if (progress < 20) return '🌱'; // Benih
        if (progress < 50) return '🌿'; // Tanaman Kecil
        if (progress < 80) return '🌳'; // Pohon
        return '🌸'; // Pohon Berbunga (Finish)
    };

    const getMessage = () => {
        if (progress === 0) return "Ayo mulai siram tanamanmu dengan amal!";
        if (progress < 50) return "Terus semangat! Tanaman mulai tumbuh.";
        if (progress < 100) return "MashaAllah, sedikit lagi berbunga!";
        return "Alhamdulillah! Kebunmu indah sekali hari ini!";
    };

    return (
        <div className="min-h-screen bg-green-50 text-gray-800 font-sans pb-10">

            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white text-center rounded-b-3xl shadow-lg">
                <h1 className="text-2xl font-bold">Kebun Kebaikan 🌙</h1>
                <p className="text-emerald-100 text-sm mt-1">Edisi Ramadhan 2026</p>
            </div>

            <div className="max-w-md mx-auto px-6 mt-6">

                {/* CARD UTAMA: TANAMAN */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-emerald-100 relative overflow-hidden">
                    <div className="text-sm font-semibold text-emerald-600 mb-2 uppercase tracking-wide">
                        Status Tanamanmu
                    </div>

                    {/* Animasi Emoticon Besar */}
                    <div className="text-9xl transition-all duration-500 transform hover:scale-110 cursor-pointer animate-bounce-slow">
                        {getPlantEmoji()}
                    </div>

                    <p className="mt-4 text-gray-600 font-medium">{getMessage()}</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
                        <div
                            className="bg-emerald-500 h-4 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{progress}% Menuju Berbunga</p>
                </div>

                {/* STREAK COUNTER */}
                <div className="flex justify-center mt-4 mb-6">
                    <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                        🔥 {streak} Hari Berturut-turut
                    </div>
                </div>

                {/* LIST TUGAS */}
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`
                flex items-center p-4 rounded-xl cursor-pointer transition-all border-2
                ${task.completed
                                    ? 'bg-emerald-100 border-emerald-200 opacity-80'
                                    : 'bg-white border-transparent shadow-md hover:shadow-lg'
                                }
              `}
                        >
                            <div className={`
                w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center
                ${task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}
              `}>
                                {task.completed && <span className="text-white text-xs">✓</span>}
                            </div>
                            <span className={`font-semibold ${task.completed ? 'line-through text-emerald-700' : 'text-gray-700'}`}>
                                {task.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* TOMBOL RESET BESOK */}
                <button
                    onClick={resetDay}
                    className="w-full mt-8 bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition shadow-lg"
                >
                    Mulai Hari Baru ☀️
                </button>

                <p className="text-center text-xs text-gray-400 mt-6 mb-10">
                    Dibuat dengan ❤️ untuk Ramadhan
                </p>

            </div>

            {/* CSS Tambahan untuk animasi sederhana */}
            <style>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    );
};

export default RamadhanTracker;
