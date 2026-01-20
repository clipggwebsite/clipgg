import { Activity, Film, Shield, Wallet } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Connect your accounts",
    description:
      "Link your social accounts once so Sniply can track your clips automatically — no manual checking."
  },
  {
    icon: Activity,
    title: "See what’s working",
    description:
      "Watch your clips update in real time and spot which ones are gaining traction."
  },
  {
    icon: Film,
    title: "Manage clips in one place",
    description:
      "Submit, organize, and track clips across platforms without bouncing between apps."
  },
  {
    icon: Wallet,
    title: "Track payouts",
    description:
      "Keep an eye on earnings tied to clip performance so nothing slips through."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built for creators
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Sniply focuses on the parts that actually matter when you’re posting clips.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
