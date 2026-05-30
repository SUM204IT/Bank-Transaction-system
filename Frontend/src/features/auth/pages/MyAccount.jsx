import LoadingScreen from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";

export default function MyAccount() {
  const { account, loading, balance } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <main>
        <LoadingScreen />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
  <div>
    <p className="text-indigo-400 uppercase tracking-[0.3em] text-xs">
      Banking Dashboard
    </p>

    <h1 className="text-5xl font-bold mt-2">
      My Account
    </h1>

    <p className="text-gray-400 mt-3">
      Manage your banking profile and account information.
    </p>
  </div>

  <button
    onClick={() => navigate("/")}
    className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-2xl font-medium transition"
  >
    Back Home
  </button>
</div>

        {/* Balance Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 to-violet-600 p-8 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-indigo-100 text-sm uppercase tracking-widest">
              Available Balance
            </p>

            <h2 className="text-6xl lg:text-7xl font-bold mt-4 tracking-tight">
              {`₹ ${balance}`}
            </h2>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                Currency: {account?.currency}
              </span>

              <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">
                {account?.status}
              </span>

            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-[#111827] border border-white/10 rounded-[32px] p-8">

          <h3 className="text-2xl font-semibold mb-6">
            Account Information
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <InfoCard
              title="Account ID"
              value={account?._id}
            />

            <InfoCard
              title="User ID"
              value={account?.user}
            />

            <InfoCard
              title="Currency"
              value={account?.currency}
            />

            <InfoCard
              title="Status"
              value={account?.status}
            />

            <InfoCard
              title="Created At"
              value={
                account?.createdAt
                  ? new Date(account.createdAt).toLocaleString()
                  : "-"
              }
            />

            <InfoCard
              title="Updated At"
              value={
                account?.updatedAt
                  ? new Date(account.updatedAt).toLocaleString()
                  : "-"
              }
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#111827] border border-white/10 rounded-[32px] p-8">

          <h3 className="text-2xl font-semibold mb-6">
            Quick Actions
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">

            <button className="bg-[#1e293b] hover:bg-indigo-600 transition rounded-2xl py-4 font-medium" onClick={() => {
                navigate("/transfer-money")
            }}>
              Transfer Money
            </button>

            <button className="bg-[#1e293b] hover:bg-emerald-600 transition rounded-2xl py-4 font-medium" onClick={() =>{
                navigate("/deposit-money")
            }}>
              Deposit
            </button>

            <button className="bg-[#1e293b] hover:bg-rose-600 transition rounded-2xl py-4 font-medium" onClick={() => {
                navigate("/withdraw-money")
            }}>
              Withdraw
            </button>

          </div>
          <div className="grid sm:grid-cols-3 gap-4 py-5">
            <button className="bg-[#1e293b] hover:bg-indigo-600 transition rounded-2xl py-4 font-medium" onClick={() => {navigate("/")} }>
                Home
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-5 border border-white/5">
      <p className="text-gray-400 text-sm mb-2">
        {title}
      </p>

      <p className="font-medium break-all text-gray-100">
        {value}
      </p>
    </div>
  );
}