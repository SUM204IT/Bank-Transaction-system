import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-14 py-5 border-b border-white/5 bg-white/[0.02] backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/20">
            B
          </div>

          <div>
            <h1 className="font-semibold text-lg tracking-wide">
              Bankify
            </h1>

            <p className="text-xs text-gray-400">
              Smart Banking
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-sm font-medium transition shadow-lg shadow-indigo-500/20"
          >
            Get Started
          </button>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
            Modern Secure Banking Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-100">

            Banking made
            <span className="block text-indigo-400">
              beautifully simple.
            </span>

          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            Experience secure transactions, real-time balance tracking,
            and modern financial management in one elegant platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => navigate("/register")}
              className="px-7 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-medium shadow-xl shadow-indigo-500/20"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition font-medium text-gray-300"
            >
              Login
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-16">

            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-5">
              <h2 className="text-2xl font-bold text-indigo-400">
                99.9%
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                Secure Transactions
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-5">
              <h2 className="text-2xl font-bold text-indigo-400">
                24/7
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                Real-time Access
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-5">
              <h2 className="text-2xl font-bold text-indigo-400">
                Fast
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                Money Transfers
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Card */}
        <div className="relative">

          <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-7 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-indigo-100 text-sm">
                    Current Balance
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ₹84,250
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  💳
                </div>

              </div>

              <div className="mt-10 flex items-center justify-between text-sm text-indigo-100">

                <span>**** 4589</span>

                <span>09/28</span>

              </div>

            </div>

            {/* Transactions */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div>
                  <h3 className="font-medium">
                    Spotify Premium
                  </h3>

                  <p className="text-sm text-gray-400">
                    Subscription
                  </p>
                </div>

                <span className="text-red-400">
                  - ₹199
                </span>

              </div>

              <div className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div>
                  <h3 className="font-medium">
                    Salary Credit
                  </h3>

                  <p className="text-sm text-gray-400">
                    Monthly Payment
                  </p>
                </div>

                <span className="text-emerald-400">
                  + ₹45,000
                </span>

              </div>

              <div className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div>
                  <h3 className="font-medium">
                    Electricity Bill
                  </h3>

                  <p className="text-sm text-gray-400">
                    Utility Payment
                  </p>
                </div>

                <span className="text-red-400">
                  - ₹1,240
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}