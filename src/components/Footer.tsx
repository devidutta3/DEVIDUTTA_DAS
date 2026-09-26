import React from 'react';
import { ArrowUp, Heart, Sparkles, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaKaggle, FaEnvelope } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialPlatforms = [
    {
      name: 'GitHub',
      handle: '@devidutta3',
      url: PERSONAL_INFO.github,
      icon: FaGithub,
      color: '#7C3AED',
      badgeBg: 'bg-[#7C3AED]/10 text-[#A5B4FC] border-[#7C3AED]/30 hover:border-[#7C3AED] hover:text-white',
      glow: 'hover:shadow-[#7C3AED]/20',
    },
    {
      name: 'LinkedIn',
      handle: 'Devidutta Das',
      url: PERSONAL_INFO.linkedin,
      icon: FaLinkedinIn,
      color: '#2563EB',
      badgeBg: 'bg-[#2563EB]/10 text-[#93C5FD] border-[#2563EB]/30 hover:border-[#2563EB] hover:text-white',
      glow: 'hover:shadow-[#2563EB]/20',
    },
    {
      name: 'Kaggle',
      handle: '@deviduttadas03',
      url: PERSONAL_INFO.kaggle,
      icon: FaKaggle,
      color: '#20BEFF',
      badgeBg: 'bg-[#20BEFF]/10 text-[#60A5FA] border-[#20BEFF]/30 hover:border-[#20BEFF] hover:text-white',
      glow: 'hover:shadow-[#20BEFF]/20',
    },
    {
      name: 'Email',
      handle: PERSONAL_INFO.email,
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: FaEnvelope,
      color: '#06B6D4',
      badgeBg: 'bg-[#06B6D4]/10 text-[#67E8F9] border-[#06B6D4]/30 hover:border-[#06B6D4] hover:text-white',
      glow: 'hover:shadow-[#06B6D4]/20',
    },
  ];

  return (
    <footer className="py-12 relative z-10 border-t border-[#293056] bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Dedicated Social Media Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#293056] bg-[#10152A]/60 backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#293056]/60 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/15 text-[#A5B4FC] text-xs font-mono border border-[#7C3AED]/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>SOCIAL MEDIA & PLATFORMS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Connect Across The Web
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B4FC] mt-1">
                Follow code repositories, ML benchmarks, kaggle kernels, and engineering updates.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#141A32] text-[#A5B4FC] hover:text-white border border-[#293056] hover:border-[#06B6D4] transition-all cursor-pointer flex items-center gap-2 text-xs font-mono font-semibold shrink-0"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#06B6D4]" />
            </button>
          </div>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon as any;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target={platform.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl bg-[#080B18]/70 border transition-all duration-300 flex flex-col items-center text-center gap-2.5 ${platform.badgeBg} ${platform.glow}`}
                >
                  <div className="p-3 rounded-xl bg-[#141A32] border border-[#293056] group-hover:scale-110 group-hover:bg-[#1A2242] transition-transform">
                    <Icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white group-hover:text-[#06B6D4] transition-colors">
                      {platform.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#A5B4FC]/80 block truncate max-w-[140px]">
                      {platform.handle}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Brand & Copyright Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5B4FC]/80 font-mono gap-4 pt-4 text-center sm:text-left">
          <div className="space-y-1">
            <a href="#hero" className="text-base font-extrabold text-white tracking-tight inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
              Devidutta<span className="text-[#06B6D4]">.Das</span>
            </a>
            <p className="text-[11px] text-[#A5B4FC]">
              B.Tech AI/ML Student • Building practical intelligent systems.
            </p>
          </div>

          <p>© 2026 Devidutta Das. Designed & Built with passion.</p>
        </div>

      </div>
    </footer>
  );
};
