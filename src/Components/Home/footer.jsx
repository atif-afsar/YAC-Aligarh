import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#212529] text-white pt-16">
      
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold">
            Commerce<span className="text-red-500">Pro</span>
          </h3>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            CommercePro Coaching Institute empowers students with concept-based
            learning, expert mentorship, and consistent results in CA, CS,
            B.Com, and Class 11–12 Commerce.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About Us", "Courses", "Results", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* COURSES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-red-500 transition cursor-pointer">
              CA Foundation / Intermediate
            </li>
            <li className="hover:text-red-500 transition cursor-pointer">
              CS Foundation / Executive
            </li>
            <li className="hover:text-red-500 transition cursor-pointer">
              B.Com & BBA
            </li>
            <li className="hover:text-red-500 transition cursor-pointer">
              Class 11–12 Commerce
            </li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-gray-400 text-sm">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              Aligarh, Uttar Pradesh, India
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              info@commercepro.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-red-500 hover:bg-red-500 transition cursor-pointer"
              >
                <Icon size={14} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-14 py-6">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CommercePro Coaching Institute. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
