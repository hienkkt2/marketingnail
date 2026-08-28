import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/marketingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Đánh giá từ chủ Salon thực tế</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sự tin tưởng và hiệu quả thực tế của các chủ tiệm nail và spa tại hải ngoại là thước đo chất lượng hàng đầu của Đình Hiển Digital.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Xác thực
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span>{t.countryFlag}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {t.role} • {t.salonName} ({t.location})
                  </div>
                  <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
                    Gói dịch vụ: {t.serviceUsed}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Cam kết tôn trọng uy tín và thông tin kinh doanh của từng salon đối tác.</span>
        </div>

      </div>
    </section>
  );
};
