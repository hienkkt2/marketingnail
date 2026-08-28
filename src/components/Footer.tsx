import React from 'react';
import { ArrowUp, Sparkles, Globe, MapPin, Mail, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/marketingData';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Gói Combo', href: '#combos' },
    { name: 'Dự án', href: '#portfolio' },
    { name: 'Giới thiệu', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Facebook & Instagram', target: 'FACEBOOK & INSTAGRAM' },
    { name: 'Google Ads', target: 'GOOGLE ADS + GOOGLE MAPS' },
    { name: 'Google Maps Marketing', target: 'GOOGLE ADS + GOOGLE MAPS' },
    { name: 'Thiết kế Website Salon', target: 'THIẾT KẾ WEBSITE' },
    { name: 'Local SEO & SEO Website', target: 'SEO WEBSITE – LOCAL SEO' },
    { name: 'Entity SEO Brand Signal', target: 'ENTITY SEO' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold text-lg tracking-wider">
                ĐH
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white tracking-tight text-lg font-display">
                  ĐÌNH HIỂN <span className="text-slate-400 font-light">DIGITAL</span>
                </span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wide uppercase">
                  Nail Salon & Spa Marketing
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {BRAND_INFO.subtagline}. Hỗ trợ thị trường Mỹ, Canada, Australia, UK và Châu Âu.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onOpenConsultation(); }}
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="Facebook"
              >
                FB
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onOpenConsultation(); }}
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="Instagram"
              >
                IG
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onOpenConsultation(); }}
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Dịch vụ Marketing
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onSelectService(item.target)}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: International Client Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Thị trường phục vụ
            </h4>
            <p className="text-slate-400 text-xs">
              Chuyên biệt cho cộng đồng chủ tiệm Nail & Spa người Việt tại:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['🇺🇸 United States', '🇨🇦 Canada', '🇦🇺 Australia', '🇬🇧 United Kingdom', '🇪🇺 Europe'].map((c, i) => (
                <span key={i} className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[11px] text-slate-300">
                  {c}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
              >
                <span>Lên đầu trang</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & SEO Keywords */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Đình Hiển Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Digital marketing for nail salons</span>
            <span>•</span>
            <span>Nail salon website & SEO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
