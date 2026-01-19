import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 space-y-10">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <span className="text-5xl font-bold">Sniply</span>
        </div>

        {/* Main Text */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold">
            Start Clipping
          </h1>
          <p className="text-lg text-gray-400">
            Setting up your dashboard...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="space-y-3">
          <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-purple-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center text-sm text-gray-500">
            {progress}%
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">###</div>
            <div className="text-xs text-gray-500 mt-1">Clips</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">###K</div>
            <div className="text-xs text-gray-500 mt-1">Views</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">###</div>
            <div className="text-xs text-gray-500 mt-1">Platforms</div>
          </div>
        </div>
      </div>
    </div>
  );
}