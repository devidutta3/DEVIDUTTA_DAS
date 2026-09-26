import React from 'react';
import { X, Download, Printer, Mail, Github, Linkedin, MapPin, Award, CheckCircle2, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const areasOfInterest = [
    "Machine Learning and Artificial Intelligence",
    "Data Science and Predictive Modeling",
    "ML Model Deployment and APIs",
    "Computer Vision and Remote Sensing",
    "AI/ML Engineering"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080B18]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl bg-[#10152A] border border-[#293056] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-[#141A32] border-b border-[#293056] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#06B6D4]"></span>
            <h3 className="text-base font-bold text-white font-mono">Resume Preview — Devidutta Das</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#10152A] text-[#A5B4FC] hover:text-white border border-[#293056] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4 text-[#06B6D4]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#10152A] text-[#A5B4FC] hover:text-white border border-[#293056] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Pane */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-xs sm:text-sm text-[#F8FAFC]">
          
          {/* Resume Header */}
          <div className="border-b border-[#293056] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Devidutta Das</h1>
                <p className="text-xs sm:text-sm font-semibold text-[#06B6D4] mt-0.5">
                  AI/ML Engineer Intern Aspirant | Python | Machine Learning | Data Science
                </p>
              </div>

              <div className="text-xs text-[#A5B4FC] space-y-1 font-mono shrink-0">
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#7C3AED]" /> +91-9692165425</p>
                <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#06B6D4]" /> {PERSONAL_INFO.email}</p>
                <p className="flex items-center gap-1.5"><Github className="w-3.5 h-3.5 text-[#EC4899]" /> github.com/devidutta3</p>
                <p className="flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5 text-[#2563EB]" /> linkedin.com/in/devidutta-das-07a15b358</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141A32] border border-[#293056] space-y-1 text-xs text-[#A5B4FC] leading-relaxed">
              <span className="font-bold text-white font-mono uppercase text-[10px] block">Profile Summary</span>
              <p>{PERSONAL_INFO.bio}</p>
            </div>
          </div>

          {/* Education & Academic Metrics */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#06B6D4] border-b border-[#293056] pb-1">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3.5 rounded-xl bg-[#141A32] border border-[#293056]">
              <div>
                <h3 className="font-bold text-white">GITA Autonomous College</h3>
                <p className="text-xs text-[#A5B4FC]">B.Tech – Computer Science & Engineering (AI/ML)</p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-[#A5B4FC] block">2024 – Present</span>
                <span className="text-[#22C55E] font-bold">Overall CGPA: 8.5 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase text-[#2563EB] border-b border-[#293056] pb-1">
              Projects & Repositories
            </h2>

            <div className="space-y-3">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm">{p.title}</h3>
                      {p.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#080B18]">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#06B6D4] hover:underline flex items-center gap-1"
                    >
                      <span>{p.githubUrl.replace('https://github.com/', '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-[#A5B4FC]">{p.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B18] text-[#A5B4FC] border border-[#293056]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#7C3AED] border-b border-[#293056] pb-1">
              Technical Skillset
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#141A32] border border-[#293056] space-y-1">
                  <span className="font-bold text-white block">{cat.title}</span>
                  <p className="text-[#A5B4FC] font-mono text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase text-[#EC4899] border-b border-[#293056] pb-1">
              Positions of Responsibility
            </h2>

            <div className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white">Founder, CodeUdaan</h3>
                <span className="text-xs font-mono text-[#A5B4FC]">2025 – Present</span>
              </div>
              <ul className="text-xs text-[#A5B4FC] space-y-1 list-disc list-inside">
                <li>Founded and lead a student technology community focused on programming, Machine Learning, software development, and project-based learning.</li>
                <li>Coordinate technical activities, guide student developers, organize learning sessions, and promote collaborative development using GitHub.</li>
              </ul>
            </div>
          </div>

          {/* Achievements & Areas of Interest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-sm font-mono font-bold uppercase text-[#22C55E] border-b border-[#293056] pb-1">
                Achievements
              </h2>
              <div className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-2 text-xs text-[#A5B4FC]">
                <p>• <strong className="text-white">8.5 CGPA</strong>, B.Tech academic performance (2024 – Present)</p>
                <p>• <strong className="text-white">ISRO Bharatiya Antariksh Hackathon 2026</strong>, Worked on AI-driven crop type and moisture stress detection (2026)</p>
                <p>• <strong className="text-white">Founder</strong>, CodeUdaan student technology community (2025 – Present)</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-mono font-bold uppercase text-[#F97316] border-b border-[#293056] pb-1">
                Areas of Interest
              </h2>
              <div className="p-4 rounded-xl bg-[#141A32] border border-[#293056] space-y-1.5 text-xs text-[#A5B4FC]">
                {areasOfInterest.map((interest, i) => (
                  <p key={i}>• {interest}</p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141A32] border-t border-[#293056] flex justify-between items-center text-xs font-mono text-[#A5B4FC] shrink-0">
          <span>Devidutta Das • B.Tech AI/ML Resume</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white flex items-center gap-1.5 shadow-md hover:opacity-90 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
