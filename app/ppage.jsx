export default function HomePage() {
  return (
    <div>
      <h1>Mind Set Form</h1>
      <p>"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(null);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="px-6 py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Διαιτολόγος & Ευεξία
            </h1>

            <p className="text-slate-600 mb-6">
              Εξατομικευμένα προγράμματα διατροφής για υγεία, ενέργεια και ισορροπία.
            </p>

            <a
              href="#booking"
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
            >
              Κλείσε Ραντεβού
            </a>
          </motion.div>

          <motion.img
            src="/hero.png"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Υπηρεσίες</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Διατροφή",
              "Απώλεια Βάρους",
              "Αθλητική Διατροφή"
            ].map((s) => (
              <div
                key={s}
                className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Κλείσε Ραντεβού</h2>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`p-3 rounded-xl border transition ${
                  selectedDate === d
                    ? "bg-emerald-600 text-white"
                    : "bg-white hover:bg-slate-100"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mb-6 text-slate-600">
            Επιλεγμένη ημέρα:{" "}
            <span className="font-semibold text-slate-800">
              {selectedDate || "Καμία"}
            </span>
          </div>

          <button
            disabled={!selectedDate}
            className={`px-6 py-3 rounded-xl text-white transition ${
              selectedDate
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-slate-300 cursor-not-allowed"
            }`}
          >
            Επιβεβαίωση Ραντεβού
          </button>
        </div>
      </section>
    </div>
  );
}</p>
    </div>
  );
}