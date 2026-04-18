export default function DietitianLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <header className="shadow-sm px-6 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full object-contain"
            />
            <h1 className="text-xl font-bold">Healthy Balance</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-slate-600">
            <a href="#about">Σχετικά</a>
            <a href="#services">Υπηρεσίες</a>
            <a href="#booking">Ραντεβού</a>
          </nav>

          <a
            href="#booking"
            className="bg-emerald-600 text-white px-5 py-2 rounded-xl hover:bg-emerald-700"
          >
            Κλείσε Ραντεβού
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Διατροφή που ταιριάζει σε εσένα
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Εξατομικευμένα προγράμματα διατροφής για απώλεια βάρους, υγεία και ευεξία.
            </p>

            <a
              href="#booking"
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-emerald-700 inline-block"
            >
              Ξεκίνα σήμερα
            </a>
          </div>

          <div className="text-center">
            <img
              src="/hero-diet.png"
              alt="Dietitian"
              className="w-80 h-80 mx-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10">Υπηρεσίες</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Διατροφικά Πλάνα",
              "Απώλεια Βάρους",
              "Αθλητική Διατροφή",
              "Διατροφικές Διαταραχές",
              "Online Συνεδρίες",
              "Παρακολούθηση Προόδου"
            ].map((item) => (
              <div
                key={item}
                className="p-6 border rounded-3xl shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Λίγα λόγια για εμένα</h3>
          <p className="text-slate-600 text-lg">
            Είμαι διαιτολόγος-διατροφολόγος και στόχος μου είναι να σε βοηθήσω
            να χτίσεις μια υγιή σχέση με το φαγητό χωρίς στερήσεις.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Κλείσε Ραντεβού</h3>

          <form className="grid gap-4 text-left">
            <input
              type="text"
              placeholder="Ονοματεπώνυμο"
              className="border p-3 rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-xl"
            />
            <textarea
              placeholder="Στόχος (π.χ. απώλεια βάρους)"
              className="border p-3 rounded-xl"
            />

            <button className="bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700">
              Αποστολή
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">
        © 2026 Healthy Balance
      </footer>
    </div>
  );
}