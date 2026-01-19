import { ArrowRight, Play, Scissors } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-40 right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-7">
          {/* Badge */}
          <div className="inline-block bg-purple-900/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300">
            Built for creators, not dashboards
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            See which clips
            <br />
            <span className="text-purple-400">actually perform</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Sniply shows how your clips perform across TikTok, Reels, and Shorts —
            without jumping between apps or guessing what’s working.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://discord.gg/kZqMTg79"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-7 py-3 rounded-lg hover:bg-purple-500 transition-colors flex items-center gap-2"
            >
              Join the Discord
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#features"
              className="border border-purple-500/40 px-7 py-3 rounded-lg hover:bg-purple-500/10 transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              See how it works
            </a>
          </div>

          {/* Honest Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <div className="text-xl font-semibold text-white">Multi-Platform</div>
              <div className="text-sm text-gray-500">TikTok · Reels · Shorts</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-white">Real-Time</div>
              <div className="text-sm text-gray-500">Live clip tracking</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-white">Early Access</div>
              <div className="text-sm text-gray-500">Growing daily</div>
            </div>
          </div>
        </div>

        {/* Right Side - Dashboard Preview */}
        <div className="relative mt-4 lg:mt-0">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/25 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">Clip Dashboard</span>
            </div>

            <div className="space-y-3">
              {[
                { name: "TikTok", change: "+12.5%" },
                { name: "Instagram", change: "+8.3%" },
                { name: "YouTube Shorts", change: "+15.7%" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.name}</span>
                    <span className="text-purple-400 text-sm">
                      {item.change}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-gray-300">
                    Views trending up
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
