// components/MainContent.tsx
export default function MainContent() {
  return (
    <main className="flex-1 p-6 space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4">
        <button className="font-semibold border-b-2 border-black pb-1">Overview</button>
        <button className="text-gray-500">Send</button>
        <button className="text-gray-500">Request</button>
      </div>

      {/* Payment Requests */}
      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Payment Requests</h2>
          <button className="text-blue-600">New Request</button>
        </div>
        <p className="text-sm text-gray-500 mt-2">No payment requests found</p>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <div className="mt-2 space-y-2">
          <ActivityRow amount="-1.23" user="@phaigo" status="Completed" note="Food" />
          <ActivityRow amount="-5" user="@patrick" status="Failed" note="Fulfilling payment..." />
        </div>
      </section>
    </main>
  );
}

interface ActivityRowProps {
  amount: string;
  user: string;
  status: string;
  note: string;
}

function ActivityRow({ amount, user, status, note }: ActivityRowProps) {
  return (
    <div className="flex justify-between bg-white p-3 rounded shadow">
      <div className="flex space-x-3">
        <p className="text-red-600">{amount}</p>
        <div>
          <p>{user}</p>
          <p className="text-sm text-gray-400">{note}</p>
        </div>
      </div>
      <span className={`px-2 py-1 text-xs rounded ${status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {status}
      </span>
    </div>
  );
}
