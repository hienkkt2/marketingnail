import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  PhoneCall, 
  Globe, 
  Instagram, 
  Zap, 
  Search,
  ShieldCheck
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onScrollToPricing: () => void;
  onScrollToServices: () => void;
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToPricing,
  onScrollToServices,
  onOpenAudit
}) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-white to-[#FAFAF8]">
      {/* Decorative background grid and soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dành riêng cho Nail Salon • Spa • Beauty Business</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
              GIÚP NAIL SALON & SPA CỦA BẠN <br className="hidden sm:inline" />
              <span className="relative inline-block text-slate-900">
                ĐƯỢC NHÌN THẤY NHIỀU HƠN
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-amber-200/60 -z-10 rounded-sm"></span>
              </span> TRÊN INTERNET
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Đình Hiển Digital cung cấp các giải pháp <strong>Facebook, Instagram, Google Ads, Google Maps, Website, SEO và Entity</strong> giúp doanh nghiệp làm đẹp xây dựng hình ảnh chuyên nghiệp và tiếp cận khách hàng địa phương.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giá minh bạch từ $50/tháng, không ràng buộc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thiết kế bài & caption tiếng Anh chuẩn salon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tiếp cận đúng khách hàng quanh bán kính tiệm</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hỗ trợ múi giờ US, Canada, Australia & UK</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={onOpenConsultation}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>NHẬN TƯ VẤN MIỄN PHÍ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onScrollToPricing}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base px-6 py-3.5 rounded-xl shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>XEM DỊCH VỤ & BẢNG GIÁ</span>
              </button>
            </div>

            {/* Interactive Audit Teaser */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">TX</span>
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] flex items-center justify-center font-bold">CA</span>
                  <span className="w-6 h-6 rounded-full bg-slate-700 text-white text-[10px] flex items-center justify-center font-bold">VIC</span>
                  <span className="w-6 h-6 rounded-full bg-slate-600 text-white text-[10px] flex items-center justify-center font-bold">ON</span>
                </div>
                <span>Đã phục vụ hơn 85+ Salon & Spa hải ngoại</span>
              </div>

              <button
                onClick={onOpenAudit}
                className="text-slate-900 font-semibold underline underline-offset-4 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Test điểm hiển thị của tiệm (Free Audit)</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Value Multi-Layered Beauty Salon & Digital Presence Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Card: Live Google Maps 3-Pack & Local Search Rank #1 Showcase */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 space-y-4 relative z-10 transition-transform duration-300 hover:shadow-2xl">
                
                {/* Search Bar Mockup */}
                <div className="bg-slate-100 rounded-xl px-3.5 py-2 flex items-center gap-2.5 text-xs text-slate-600 border border-slate-200">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-800">"best nail salon near me"</span>
                  <span className="ml-auto bg-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded">Local Search</span>
                </div>

                {/* Google 3-Pack Top Result Card */}
                <div className="border border-emerald-200/90 bg-emerald-50/40 rounded-xl p-3.5 relative">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">#1 TOP LOCAL</span>
                        <h4 className="font-bold text-slate-900 text-sm">Luxe Nail Spa & Lounge</h4>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-amber-500 mt-1">
                        <span className="font-bold text-slate-800">4.9</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-slate-500 text-[11px]">(348 reviews) • $$</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Nail salon • Open until 7:30 PM • 1.2 mi</p>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <span className="bg-white border border-slate-200 text-slate-800 text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-xs">
                        <Globe className="w-3 h-3 text-blue-600" /> Website
                      </span>
                      <span className="bg-emerald-600 text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-xs">
                        <PhoneCall className="w-3 h-3" /> Gọi đặt lịch
                      </span>
                    </div>
                  </div>
                </div>

                {/* Salon Aesthetics & Social Grid Mockup */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img 
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=300&q=80" 
                      alt="Nail Salon Art" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-white font-medium flex items-center gap-0.5">
                        <Instagram className="w-2.5 h-2.5" /> 30 bài/tháng
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img 
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80" 
                      alt="Spa Relax Treatment" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-white font-medium flex items-center gap-0.5">
                        <Zap className="w-2.5 h-2.5 text-amber-300" /> Ads $249
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden h-24 group">
                    <img 
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80" 
                      alt="Lash and Brow Art" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-white font-medium flex items-center gap-0.5">
                        <Globe className="w-2.5 h-2.5 text-emerald-300" /> Web $349/y
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance & Lead Notification Ticker */}
                <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Tháng này: +142 Cuộc gọi & Lịch hẹn</div>
                      <div className="text-[10px] text-slate-400">Từ Google Search, Maps & Instagram Ads</div>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +48% MoM
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Website Speed 99 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-200 p-2.5 z-20 flex items-center gap-2 hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  99
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold text-slate-900">Website Siêu Tốc</div>
                  <div className="text-slate-500">Chuẩn Mobile-First</div>
                </div>
              </div>

              {/* Floating Badge 2: Transparent Pricing Pill */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white rounded-xl shadow-xl p-3 z-20 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
                  $
                </div>
                <div className="text-left text-xs leading-tight">
                  <div className="font-bold text-white">Chỉ từ $50 / tháng</div>
                  <div className="text-slate-400 text-[10px]">Tiết kiệm 70% so với agency bản địa</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
