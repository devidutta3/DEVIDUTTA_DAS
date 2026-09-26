import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, Filter, ArrowRight, Award, Database, Cpu, Eye, Calendar, Clock, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterCategories = [
    'All',
    'Machine Learning',
    'Data Science',
    'AI',
    'API',
    'Remote Sensing'
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.filterCategories.includes(selectedFilter);
  });

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#293056]/50 bg-[#080B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A32] border border-[#2563EB]/40 text-xs font-mono text-[#06B6D4]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRACTICAL IMPLEMENTATIONS & CHRONOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#EC4899] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5B4FC] max-w-2xl">
            Practical machine learning models, REST APIs, cybersecurity classifiers, and multi-spectral remote sensing workflows documenting my technical evolution as an AI Engineer.
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#EC4899]"></div>
        </div>

        {/* AI Engineer Growth Progression Timeline Bar */}
        <div className="glass-panel p-6 rounded-2xl border border-[#293056] bg-[#10152A]/80 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-[#293056]/80 pb-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white uppercase font-mono">
              <TrendingUp className="w-4 h-4 text-[#06B6D4]" />
              <span>AI Engineering Growth Timeline</span>
            </div>
            <span className="text-[11px] font-mono text-[#A5B4FC] hidden sm:inline">
              Late 2025 — Mid 2026 Progression
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            {PROJECTS.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="p-3.5 rounded-xl bg-[#080B18]/80 border border-[#293056] hover:border-[#06B6D4] transition-all cursor-pointer group space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#7C3AED]/20 text-[#A5B4FC] border border-[#7C3AED]/30">
                    {p.dateCompleted}
                  </span>
                  <span className="text-[10px] font-mono text-[#06B6D4] font-bold">
                    Phase {idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-[#06B6D4] transition-colors truncate">
                  {p.title}
                </h4>
                <p className="text-[11px] text-[#A5B4FC]/80 line-clamp-1 font-mono">
                  {p.timeline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-[#7C3AED]/25 scale-105'
                    : 'bg-[#10152A] text-[#A5B4FC] border border-[#293056] hover:border-[#7C3AED] hover:text-white'
                }`}
              >
                <span>{cat}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-[#293056] hover:border-[#06B6D4]/50 overflow-hidden relative group flex flex-col justify-between transition-all duration-300"
            >
              {/* Gradient Header Banner */}
              <div className={`p-6 bg-gradient-to-r ${project.theme.gradient} relative text-white opacity-95 space-y-2`}>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#080B18]/60 text-white backdrop-blur-md border border-white/20">
                    {project.category}
                  </span>
                  
                  {/* Date completed badge */}
                  {project.dateCompleted && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#080B18]/70 text-white backdrop-blur-md border border-white/30 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#06B6D4]" />
                      <span>Completed: {project.dateCompleted}</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-[#080B18] shadow-md flex items-center gap-1 shrink-0">
                      <Award className="w-3 h-3 text-[#22C55E]" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Timeline progression bar */}
                {project.timeline && (
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-white/90 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] border border-white/20 backdrop-blur-sm">
                      {project.timeline}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5B4FC] leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Grid if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-[#080B18] border border-[#293056]">
                    {project.metrics.slice(1, 5).map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="text-[9px] font-mono uppercase text-[#A5B4FC] block">{m.label}</span>
                        <span className="text-xs font-bold text-[#06B6D4] font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 pt-2 border-t border-[#293056]">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#F8FAFC]/80 block mb-2">
                    Key Features & Pipeline:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#A5B4FC]">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <span className="text-[#06B6D4] font-bold">•</span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#10152A] text-[#06B6D4] border border-[#293056]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 border-t border-[#293056] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#10152A] text-[#A5B4FC] hover:text-white hover:bg-[#141A32] border border-[#293056] hover:border-[#7C3AED] transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#10152A] text-[#A5B4FC] hover:text-white hover:bg-[#141A32] border border-[#293056] hover:border-[#06B6D4] transition-all"
                        title="Live Repository"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#141A32] border border-[#293056] hover:border-[#06B6D4] hover:bg-[#1A2242] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>View Details & Tester</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#06B6D4] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
