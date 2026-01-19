import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Creator",
    price: "Free",
    period: "during beta",
    description: "For solo creators getting started",
    features: [
      "Track clips across TikTok, Reels, and Shorts",
      "Live performance updates",
      "Basic notifications",
      "30-day clip history",
      "Community support via Discord",
    ],
  },
  {
    name: "Creator+",
    price: "Launching soon",
    period: "",
    description: "For creators posting daily or managing multiple pages",
    features: [
      "Unlimited platform tracking",
      "Deeper performance breakdowns",
      "Priority alerts when clips spike",
      "Unlimited clip history",
      "Priority support",
      "Exportable reports",
    ],
    popular: true,
  },
  {
    name: "Teams",
    price: "Custom",
    period: "",
    description: "For agencies and clip networks",
    features: [
      "Everything in Creator+",
      "Multiple creator workspaces",
      "Custom integrations",
      "API access",
      "SLA options",
      "White-label support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No complicated plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-gray-900 border ${
                tier.popular
                  ? "border-purple-500"
                  : "border-gray-800"
              } rounded-lg p-8 ${
                tier.popular ? "relative mt-2" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Best for most creators
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-500 text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  tier.popular
                    ? "bg-purple-600 text-white hover:bg-purple-500"
                    : "bg-gray-800 border border-gray-700 hover:bg-gray-700"
                }`}
              >
                {tier.price === "Free"
                  ? "Start tracking clips"
                  : tier.price === "Custom"
                  ? "Contact us"
                  : "Join the waitlist"}
              </button>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Talk to us
            </h3>

            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />

              <select className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-purple-500">
                <option>What best describes you?</option>
                <option>Solo creator</option>
                <option>Small team</option>
                <option>Agency</option>
                <option>Enterprise</option>
              </select>

              <textarea
                placeholder="Tell us what you're trying to track"
                rows={4}
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-500 transition-colors font-medium"
              >
                Send message
              </button>

              <p className="text-center text-gray-500 text-sm">
                Or just DM us on{" "}
                <a
                  href="https://discord.gg/kZqMTg79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Discord
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
