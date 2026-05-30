import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import LoadingScreen from "../../auth/components/Loading";

export default function CreateAccount() {

  const navigate = useNavigate();
  const { loading, handleCreateAccount} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitt = async (e) => {
    e.preventDefault();

    const success = await handleCreateAccount();

    if (success) {
      console.log("Account creation successfull");
      navigate("/my-account");
    }
  };

  if (loading) {
    return (
      <main>
        <LoadingScreen />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-5xl bg-[#111827] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-between bg-[#0f172a] p-12 relative overflow-hidden border-r border-white/5">

          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-8">
              Create Account
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-gray-100">
              Join our <br /> secure banking.
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-md text-sm">
              Create your account to start managing transactions,
              balances, and financial activities securely.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Secure account creation & authentication.
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#111827]">

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-100">
              Create Account
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Get started in a few seconds.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmitt}>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="john@example.com"
                className="w-full bg-[#1e293b] border border-white/5 text-gray-100 placeholder:text-gray-500 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#1e293b] border border-white/5 text-gray-100 placeholder:text-gray-500 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 transition"
              />
            </div>

            <button
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-2xl font-medium transition duration-300 shadow-lg shadow-indigo-500/20"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-400 font-medium cursor-pointer hover:text-indigo-300 transition"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}