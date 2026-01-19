import { Scissors } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">Sniply</span>
            </div>
            <p className="text-gray-400 text-sm">
              Track your social media clips across all platforms
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Community</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/kZqMTg79" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Discord
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Connect</h4>
            <a 
              href="https://discord.gg/kZqMTg79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-500 transition-colors text-sm"
            >
              Join Discord
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © 2024 Sniply. All rights reserved.
          </p>
          <a 
            href="https://discord.gg/kZqMTg79" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            Discord Community →
          </a>
        </div>
      </div>
    </footer>
  );
}