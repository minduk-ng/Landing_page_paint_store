import { ArrowLeft, Mail, Phone, MapPin, Calendar, Edit2 } from 'lucide-react';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
}

export default function ProfilePage({ user, onBack }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-500 mt-1">Customer Member</p>
            </div>

            <div className="space-y-6 border-t pt-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-500">Email Address</label>
                  <p className="text-lg text-gray-900 mt-1">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-500">Phone Number</label>
                  <p className="text-lg text-gray-900 mt-1">0901234567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <p className="text-lg text-gray-900 mt-1">123 Nguyen Hue, District 1, Ho Chi Minh City</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-500">Member Since</label>
                  <p className="text-lg text-gray-900 mt-1">December 2024</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              <Edit2 className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
