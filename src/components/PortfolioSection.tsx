import React, { useState } from 'react';
import { MapPin, TrendingUp, ArrowRight, ExternalLink, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/marketingData';
import { CaseStudy } from '../types';

interface PortfolioSectionProps {
  onOpenConsultation: (note?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Nail Salon', 'Beauty Spa', 'Lash & Brow'];

  const filteredCases = selectedFilter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === selectedFilter);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Kết quả thực tế từ khách hàng hải ngoại</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            DỰ ÁN ĐÃ TRIỂN KHAI
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Xem cách các Nail Salon, Spa và Lash & Brow Studio tại Mỹ, Canada và Úc gia tăng lượng khách gọi điện và đặt lịch thông qua các giải pháp của chúng tôi.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex items-center justify-center gap-2 flex-wrap text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'Tất cả dự án' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#FAFAF8] rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Tag Overlay */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.salonName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Location & Flag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-xs">
                  <span>{cs.countryFlag}</span>
                  <span>{cs.location}</span>
                </div>

                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-1 rounded-md">
                  {cs.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-extrabold text-base sm:text-lg leading-tight drop-shadow font-display">
                    {cs.salonName}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Services Used Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.servicesUsed.map((srv, i) => (
                    <span key={i} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    <strong className="text-slate-900">Vấn đề:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="text-slate-900">Giải pháp:</strong> {cs.solution}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="bg-white rounded-xl p-3 border border-slate-200/90 grid grid-cols-3 gap-2 text-center">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-[10px] text-slate-500 line-clamp-1">{m.label}</div>
                      <div className="text-sm font-black text-slate-900 font-display">{m.value}</div>
                      {m.sublabel && (
                        <div className="text-[9px] text-emerald-700 font-semibold line-clamp-1">{m.sublabel}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(`Tôi quan tâm tới mô hình tăng trưởng giống như ${cs.salonName} (${cs.location})`)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Tư vấn mô hình tương tự cho tiệm tôi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Case Studies */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenConsultation('Yêu cầu xem thêm case study theo thành phố của tiệm')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 underline underline-offset-4 cursor-pointer"
          >
            <span>XEM TẤT CẢ DỰ ÁN & ĐỀ XUẤT CHO KHU VỰC CỦA BẠN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
