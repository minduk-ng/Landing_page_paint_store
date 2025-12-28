import { ArrowLeft, Package, MapPin, Calendar, ChevronRight } from 'lucide-react';

interface OrderHistoryPageProps {
  onBack: () => void;
}

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-12-15',
    items: 3,
    total: 1250000,
    status: 'delivered',
    statusLabel: 'Delivered'
  },
  {
    id: 'ORD-002',
    date: '2024-12-10',
    items: 2,
    total: 890000,
    status: 'shipped',
    statusLabel: 'In Transit'
  },
  {
    id: 'ORD-003',
    date: '2024-11-28',
    items: 4,
    total: 2100000,
    status: 'delivered',
    statusLabel: 'Delivered'
  },
  {
    id: 'ORD-004',
    date: '2024-11-15',
    items: 1,
    total: 450000,
    status: 'delivered',
    statusLabel: 'Delivered'
  }
];

export default function OrderHistoryPage({ onBack }: OrderHistoryPageProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Order History</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">You haven't placed any orders yet</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.statusLabel}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                  <div>
                    <p className="text-sm text-gray-500">Items</p>
                    <p className="text-lg font-semibold text-gray-900">{order.items}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-lg font-semibold text-blue-600">{order.total.toLocaleString()}₫</p>
                  </div>
                  <div className="text-right">
                    <ChevronRight className="w-6 h-6 text-gray-400 ml-auto" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Ready for pickup or delivery</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
