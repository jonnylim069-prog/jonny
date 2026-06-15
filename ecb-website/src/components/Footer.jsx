import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ecb-darkblue text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">European Central Bank</h3>
            <p className="text-gray-300 text-sm">
              The central bank of the 20 European Union countries that have adopted the euro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">About ECB</a></li>
              <li><a href="#" className="hover:text-white transition">Monetary Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Publications</a></li>
              <li><a href="#" className="hover:text-white transition">Statistics</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Sonnemannstraße 20, 60314 Frankfurt am Main, Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+49 69 1344 0</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@ecb.europa.eu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; 2024 European Central Bank. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ecb-gold transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-ecb-gold transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
