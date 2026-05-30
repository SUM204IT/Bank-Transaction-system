
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingScreen from "../components/Loading";

export default function Home() {
  const navigate = useNavigate();
  const { user, loading, handleLogout, account } = useAuth();

  async function logoutHandler() {
    const success = await handleLogout();

    if (success) {
      navigate("/login");
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

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
          {user ? (
            <button
              onClick={logoutHandler}
              className="px-5 py-2 rounded-xl text-gray-300 hover:bg-indigo-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-xl text-gray-300 hover:bg-indigo-600 transition"
            >
              Login
            </button>
          )}

          {!account && (
            <button
              onClick={() => navigate("/create-account")}
              className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/20"
            >
              Get Started
            </button>
          )}
        </div>
      </nav>

      {/* Trust Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-8">
        <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
          <span>🔒 Bank Grade Security</span>
          <span>⚡ Instant Transfers</span>
          <span>🌍 24/7 Banking</span>
          <span>💳 Smart Finance</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
            Modern Banking Platform
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            The future of
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              digital banking
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            Manage your finances, transfer money instantly,
            monitor balances, and enjoy enterprise-grade security
            from anywhere in the world.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            {account ? (
              <button
                onClick={() => navigate("/my-account")}
                className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 font-medium transition shadow-xl shadow-indigo-500/20"
              >
                My Account
              </button>
            ) : (
              <button
                onClick={() => navigate("/create-account")}
                className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 font-medium transition shadow-xl shadow-indigo-500/20"
              >
                Create Account
              </button>
            )}

            {!user && (
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Premium Card */}
        <div className="relative">

          <div className="absolute -top-6 -left-6 bg-[#111827] border border-white/10 rounded-3xl p-5">
            <p className="text-gray-400 text-sm">
              Monthly Growth
            </p>

            <h3 className="text-3xl font-bold text-emerald-400">
              +24%
            </h3>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-[#111827] border border-white/10 rounded-3xl p-5">
            <p className="text-gray-400 text-sm">
              Transactions
            </p>

            <h3 className="text-3xl font-bold text-indigo-400">
              12.4K
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-8">

              <p className="text-indigo-100 text-sm">
                Current Balance
              </p>

              <h2 className="text-5xl lg:text-6xl font-bold mt-4">
                ₹ ***
              </h2>

              <p className="mt-3 text-indigo-100">
                Available Balance
              </p>

              <div className="mt-10 flex justify-between text-indigo-100">
                <span>**** 4589</span>
                <span>09/28</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between bg-white/[0.03] rounded-2xl p-4 border border-white/5">
                <div>
                  <h3>Spotify Premium</h3>
                  <p className="text-gray-400 text-sm">
                    Subscription
                  </p>
                </div>

                <span className="text-red-400">
                  - ₹199
                </span>
              </div>

              <div className="flex justify-between bg-white/[0.03] rounded-2xl p-4 border border-white/5">
                <div>
                  <h3>Salary Credit</h3>
                  <p className="text-gray-400 text-sm">
                    Monthly Income
                  </p>
                </div>

                <span className="text-emerald-400">
                  + ₹45,000
                </span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-14 py-24">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Everything you need
          </h2>

          <p className="text-gray-400 mt-4">
            Built for modern financial management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">
            <div className="text-5xl mb-4">🔒</div>

            <h3 className="text-xl font-semibold">
              Secure Banking
            </h3>

            <p className="text-gray-400 mt-3">
              Bank-grade encryption and protection.
            </p>
          </div>

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">
            <div className="text-5xl mb-4">⚡</div>

            <h3 className="text-xl font-semibold">
              Instant Transfers
            </h3>

            <p className="text-gray-400 mt-3">
              Send money instantly and securely.
            </p>
          </div>

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">
            <div className="text-5xl mb-4">📊</div>

            <h3 className="text-xl font-semibold">
              Smart Analytics
            </h3>

            <p className="text-gray-400 mt-3">
              Track and analyze spending patterns.
            </p>
          </div>

        </div>

      </section>

      {/* Account Overview */}
      {account && (
        <section className="max-w-7xl mx-auto px-6 lg:px-14 pb-24">

          <h2 className="text-4xl font-bold mb-8">
            Account Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            <div className="bg-[#111827] p-6 rounded-3xl">
              <p className="text-gray-400">
                Balance
              </p>

              <h3 className="text-2xl font-bold text-indigo-400 mt-2">
                ₹ {account?.balance || 0}
              </h3>
            </div>

            <div className="bg-[#111827] p-6 rounded-3xl">
              <p className="text-gray-400">
                Currency
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {account?.currency}
              </h3>
            </div>

            <div className="bg-[#111827] p-6 rounded-3xl">
              <p className="text-gray-400">
                Status
              </p>

              <h3 className="text-2xl font-bold text-emerald-400 mt-2">
                {account?.status}
              </h3>
            </div>

            <div className="bg-[#111827] p-6 rounded-3xl">
              <p className="text-gray-400">
                Security
              </p>

              <h3 className="text-2xl font-bold text-cyan-400 mt-2">
                Protected
              </h3>
            </div>

          </div>

        </section>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-indigo-600 to-indigo-500 p-16 text-center">

          <h2 className="text-5xl font-bold">
            Ready to bank smarter?
          </h2>

          <p className="mt-4 text-indigo-100">
            Experience modern banking with confidence.
          </p>

          <button
            onClick={() =>
              account
                ? navigate("/my-account")
                : navigate("/create-account")
            }
            className="mt-8 px-8 py-4 rounded-2xl bg-white text-black font-semibold"
          >
            {account ? "View Account" : "Get Started"}
          </button>

        </div>

      </section>

    </div>
  );
}
