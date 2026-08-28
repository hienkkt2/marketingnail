import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/marketingData';

interface HeaderProps {
  onOpenConsultation: (service?: string) => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['services', 'pricing', 'combos', 'portfolio', 'why-us', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Gói Combo', href: '#combos' },
    { name: 'Dự án', href: '#portfolio' },
    { name: 'Về chúng tôi', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner for Trust & International Clients */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-medium">
              <Sparkles className="w-3 h-3" /> Chuyên biệt
            </span>
            <span className="hidden sm:inline text-slate-300">
              Agency Digital Marketing cho Nail Salon, Spa & Beauty tại Mỹ • Canada • Úc • UK
            </span>
            <span className="sm:hidden text-slate-300">
              Marketing cho Nail & Spa tại US • CA • AU • UK
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={onOpenAudit}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Kiểm tra online score của tiệm (Free)</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hỗ trợ múi giờ US/CA/AU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-slate-800 transition-colors">
              ĐH
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl font-display leading-tight">
                ĐÌNH HIỂN <span className="text-slate-600 font-light">DIGITAL</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                Marketing cho Nail Salon & Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isCurrent
                      ? 'text-slate-900 bg-slate-100/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={() => onOpenConsultation()}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <span>NHẬN TƯ VẤN MIỄN PHÍ</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Tư vấn
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-amber-300 bg-amber-50/60 text-amber-900 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Kiểm tra online score của salon</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full text-center py-3 px-4 rounded-xl bg-slate-900 text-white text-sm font-bold shadow hover:bg-slate-800"
                >
                  NHẬN TƯ VẤN MIỄN PHÍ
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
