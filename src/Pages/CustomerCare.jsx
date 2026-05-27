import React from "react";

function CustomerCare() {
  return (
    <div className="min-h-screen bg-cyan-50 p-8">

      <h1 className="text-4xl font-bold text-cyan-700 mb-6">
        Customer Care
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <iframe
          title="Dialogflow Chatbot"
          width="100%"
          height="500"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/f406a6d3-37cc-4ac1-b8d1-d54f73200795"
          className="rounded-xl"
        ></iframe>

      </div>
    </div>
  );
}

export default CustomerCare;