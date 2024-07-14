import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white max-w-6xl mx-auto">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Information Collection and Use
          </h2>
          <p className="text-gray-700 mt-2">
            We collect various types of information for various purposes to
            provide and improve our service to you.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Types of Data Collected
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Personal Data:</strong> While using our Service, we may
              ask you to provide us with certain personally identifiable
              information that can be used to contact or identify you ("Personal
              Data").
            </li>
            <li>
              <strong>Usage Data:</strong> We may also collect information how
              the Service is accessed and used ("Usage Data").
            </li>
            <li>
              <strong>Tracking & Cookies Data:</strong> We use cookies and
              similar tracking technologies to track the activity on our Service
              and hold certain information.
            </li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Use of Data</h2>
          <div className="text-gray-700">
            <p>InstaTracker uses the collected data for various purposes:</p>
            <ul className="list-disc pl-5">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Transfer of Data</h2>
          <p className="text-gray-700">
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ than those from your jurisdiction.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Disclosure of Data</h2>
          <div>
            <p className="text-gray-700">
              We may disclose your Personal Data in the good faith belief that
              such action is necessary to:
            </p>
            <ul className="list-disc pl-5">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of InstaTracker</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Security of Data</h2>
          <p className="text-gray-700">
            The security of your data is important to us, but remember that no
            method of transmission over the Internet,
          </p>
        </section>
      </div>
    </div>
  );
}
