import { TrendingUp } from 'lucide-react';

const stats = [
  {
    platform: 'TikTok',
    views: '128M',
    trend: '+23%'
  },
  {
    platform: 'YouTube Shorts',
    views: '94M',
    trend: '+31%'
  },
  {
    platform: 'Instagram Reels',
    views: '42M',
    trend: '+18%'
  },
  {
    platform: 'Twitter / X',
    views: '6.8M',
    trend: '+42%'
  }
];

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Platform Performance</h2>
            <p className="text-gray-400">
              Live metrics from creators using Sniply
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.platform}
                className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-sm text-gray-500 mb-2">
                  {stat.platform}
                </div>
                <div className="text-3xl font-bold mb-1">
                  {stat.views}
                </div>
                <div className="flex items-center gap-1 text-sm text-purple-400">
                  <TrendingUp className="w-4 h-4" />
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
