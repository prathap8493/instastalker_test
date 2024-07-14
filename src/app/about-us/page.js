import Head from "next/head";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          InstaTracker is a tool designed to help you discover and analyze
          Instagram data effectively. We aim to provide insightful analytics
          that empower users to understand public profiles and trends.
        </p>
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to deliver precise and up-to-date information that
            helps marketers, researchers, and enthusiasts explore Instagram
            content in a privacy-respecting manner.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <p className="text-gray-600">
            Our team is made up of passionate developers, designers, and data
            analysts dedicated to creating the best user experience and reliable
            data output.
          </p>
        </div>
      </div>
    </div>
  );
}
