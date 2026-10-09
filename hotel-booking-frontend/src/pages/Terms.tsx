import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const Terms = () => {
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
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Terms & Conditions
              </h1>
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
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use the website. Continued use of the website constitutes your acceptance of these terms and any modifications thereto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">2</span>
              User Responsibility for Data Accuracy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You are solely responsible for the accuracy, completeness, and legality of all data and information you provide through the website. This includes but is not limited to your personal details, booking information, and any other data submitted during registration or usage of the platform. The website assumes no liability for incorrect or misleading information provided by users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">3</span>
              Account Security and Password Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
              <li>Keep your account credentials secure and confidential at all times.</li>
              <li>Not share your account with any other person or entity.</li>
              <li>Immediately notify the website administration of any unauthorized use of your account or any other breach of security.</li>
              <li>You will be held responsible for all activities that occur under your account, whether authorized or unauthorized.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">4</span>
              Strong Password Recommendation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              It is strongly recommended that you use a strong, unique password that has not been used on any other website or online service. Reusing passwords across multiple platforms may expose your other accounts to significant risk in the event of a data breach at any external service. Consider using a password manager to generate and store unique passwords for each account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">5</span>
              Prohibition on Account Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sharing your account credentials with any third party is strictly prohibited. Each account is intended for use by a single individual only. Violation of this policy may result in immediate suspension or permanent deletion of your account without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">6</span>
              Prohibited Activities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You agree not to engage in any of the following activities:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-2">
              <li>Attempting to exploit, test, or probe for vulnerabilities in the website or its infrastructure.</li>
              <li>Interfering with or disrupting the website's services, servers, or networks.</li>
              <li>Gaining unauthorized access to any part of the website, its systems, or other users' accounts.</li>
              <li>Using automated tools, bots, or scripts to interact with the website in ways not intended by the platform.</li>
              <li>Any activity that violates applicable laws or regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">7</span>
              Account Suspension and Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The website reserves the right to suspend, restrict, or permanently delete any user account that violates these Terms & Conditions, at its sole discretion and without prior notice. This includes but is not limited to accounts involved in fraudulent activity, terms violations, or any behavior deemed harmful to the platform or its users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">8</span>
              Service Availability and Security Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The website provides its services on an "as is" and "as available" basis. While we implement reasonable security measures to protect user data and platform integrity, we cannot guarantee absolute protection against all forms of cyberattacks, data breaches, or system failures. Users acknowledge that no security measure is infallible and accept the inherent risks of using online services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">9</span>
              Security Incident Response
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In the event of a detected security incident, the website will take appropriate measures to mitigate potential damages and contain the breach. Users will be notified if such notification is required by applicable law or regulation. The website will cooperate with relevant authorities as necessary to address the incident.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">10</span>
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The use of this website is governed by the laws of the jurisdiction in which the website operates. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in that jurisdiction. By using this website, you consent to such jurisdiction and agree that any legal proceedings shall be conducted accordingly.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-primary-50 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:support@HolidayHotel.com" className="text-primary-600 hover:text-primary-700 font-medium">
                support@HolidayHotel.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
