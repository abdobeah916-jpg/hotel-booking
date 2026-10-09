import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/10">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-primary-100 mt-2">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">1</span>
              Data We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect the following types of personal information when you use our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
              <li><strong>Full Name</strong> — for account identification and booking purposes.</li>
              <li><strong>Email Address</strong> — for communication, booking confirmations, and account recovery.</li>
              <li><strong>Phone Number</strong> — for booking verification and customer support.</li>
              <li><strong>Booking Data</strong> — including dates, room selections, payment details, and reservation history.</li>
              <li><strong>Account Information</strong> — including registration date, login history, and preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">2</span>
              Why We Collect Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Your personal data is collected and processed for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
              <li><strong>Account Management</strong> — to create and maintain your user account.</li>
              <li><strong>Booking Confirmation</strong> — to process and confirm your room reservations.</li>
              <li><strong>Customer Support</strong> — to assist you with inquiries, issues, and service requests.</li>
              <li><strong>Service Improvement</strong> — to enhance the platform experience and functionality.</li>
              <li><strong>Legal Compliance</strong> — to comply with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">3</span>
              How We Protect Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
              <li><strong>Password Encryption</strong> — all passwords are stored using secure hashing algorithms and are never stored in plain text.</li>
              <li><strong>HTTPS Encryption</strong> — all data transmitted between your browser and our servers is encrypted using TLS/SSL protocols.</li>
              <li><strong>Access Controls</strong> — strict access controls are in place to ensure only authorized personnel can access sensitive data.</li>
              <li><strong>Periodic Security Audits</strong> — we conduct regular security reviews and assessments to identify and address potential vulnerabilities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">4</span>
              No Sale of Personal Data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to external parties for commercial purposes. Your personal data will never be sold to advertising networks, data brokers, or any third-party entities for profit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">5</span>
              Data Sharing with Service Providers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your personal data may be shared with trusted third-party service providers only when necessary to operate the website and deliver our services. This includes payment gateways for processing transactions, hosting providers for maintaining server infrastructure, and email services for sending notifications. All such providers are bound by confidentiality agreements and are required to handle your data in accordance with our privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">6</span>
              Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal data for as long as necessary to provide our services and fulfill the purposes described in this policy. This includes retaining booking records for the duration required by applicable law, tax regulations, and our business needs. Once the data is no longer needed, it will be securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">7</span>
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to request access to, modification of, or deletion of your personal data in accordance with applicable laws. To exercise these rights, please contact our support team. We will respond to your request within a reasonable timeframe as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">8</span>
              Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze site usage. Cookies may include session cookies (which are deleted when you close your browser) and persistent cookies (which remain on your device for a set period). You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">9</span>
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at{" "}
              <a href="mailto:support@HolidayHotel.com" className="text-primary-600 hover:text-primary-700 font-medium">
                support@HolidayHotel.com
              </a>
              . We are committed to addressing your inquiries promptly and ensuring your privacy is respected.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-primary-50 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Privacy Inquiries</h3>
            <p className="text-gray-600 leading-relaxed">
              For all privacy-related questions or requests, please reach out to our team at{" "}
              <a href="mailto:support@HolidayHotel.com" className="text-primary-600 hover:text-primary-700 font-medium">
                support@HolidayHotel.com
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
