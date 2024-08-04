import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full  ">
      <div className="w-full mx-auto">
        <div className="relative flex flex-col max-w-120 break-words w-full shadow-lg rounded bg-white">
          <div className="flex flex-col">
            {/* Welcome Message */}
          <div className="mb-6 px-4 bg-green-50 mt-4 rounded-lg shadow">
              <h2 className="text-green-800 px-4 text-3xl font-bold text-center">
                Welcome to the Kilimani Community
              </h2>
            </div>

            {/* Community Overview */}
            <div className="bg-white p-6 rounded-lg shadow mb-6 border border-gray-200 w-full">
              <h3 className="text-green-700 text-2xl font-semibold mb-4 text-center">
                Kilimani Area, Nairobi
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                We are bringing residents together to address key challenges in our community:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Water Shortage</li>
                <li>Blackouts</li>
                <li>Waste Management</li>
                <li>Noise Pollution</li>
              </ul>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-100 p-6 rounded-lg shadow border border-gray-200 w-full">
                <h4 className="text-green-800 text-lg font-semibold text-center">Water Shortage</h4>
                <p className="text-gray-700">Status: Ongoing</p>
                <p className="text-gray-700">Recent Actions: Boreholes being dug in key areas</p>
              </div>
              <div className="bg-green-200 p-6 rounded-lg shadow border border-gray-200 w-full">
                <h4 className="text-green-800 text-lg font-semibold text-center">Blackouts</h4>
                <p className="text-gray-700">Status: Intermittent</p>
                <p className="text-gray-700">Recent Actions: Installing generators for neighborhoods</p>
              </div>
              <div className="bg-green-300 p-6 rounded-lg shadow border border-gray-200 w-full">
                <h4 className="text-green-800 text-lg font-semibold text-center">Waste Management</h4>
                <p className="text-gray-700">Status: Improving</p>
                <p className="text-gray-700">Recent Actions: Holding government accountable for construction waste, dedicated clean-up days by members</p>
              </div>
              <div className="bg-green-400 p-6 rounded-lg shadow border border-gray-200 w-full">
                <h4 className="text-green-800 text-lg font-semibold text-center">Noise Pollution</h4>
                <p className="text-gray-700">Status: High</p>
                <p className="text-gray-700">Recent Actions: Implementing noise regulations, addressing noise from bars through community guidelines and noise control measures</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow mb-6 border border-gray-200 w-full">
              <h3 className="text-green-700 text-2xl font-semibold mb-4 text-center">
                Recent Community Activities
              </h3>
              <ul className="text-gray-600 space-y-2 text-center">
                <li>Community cleanup event held</li>
                <li>Meeting with local utility providers</li>
                <li>Waste management workshop for residents</li>
              </ul>
            </div>

            {/* Alerts and Notifications */}
            <div className="bg-green-100 p-6 rounded-lg shadow mb-6 border border-gray-200 w-full">
              <h3 className="text-green-700 text-2xl font-semibold mb-4 text-center">
                Alerts and Notifications
              </h3>
              <p className="text-gray-700 text-center">Upcoming Community Forum: Water Shortage Solutions - August 10</p>
              <p className="text-gray-700 text-center">Power Outage Alert: Scheduled maintenance on August 5</p>
            </div>

            {/* How to Get Involved */}
            <div className="bg-green-200 p-6 rounded-lg shadow border border-gray-200 w-full">
              <h3 className="text-green-700 text-2xl font-semibold mb-4 text-center">
                How to Get Involved
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Join us in making Kilimani a better place by participating in our community initiatives:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-center">
                <li>Volunteer for local events</li>
                <li>Attend community meetings</li>
                <li>Provide feedback and suggestions</li>
                <li>Support local programs and initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
