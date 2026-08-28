import React from 'react';
import { Sparkles, DollarSign, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/marketingData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'beauty-focus':
        return Sparkles;
      case 'affordable-pricing':
        return DollarSign;
      case 'transparency':
        return ShieldCheck;
      case 'business-focus':
        return TrendingUp;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Đối tác đáng tin cậy của chủ Salon</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            TẠI SAO NÊN CHỌN ĐÌNH HIỂN DIGITAL?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi không phải là một agency đa ngành làm tất cả mọi thứ. Chúng tôi sinh ra để phục vụ và giải quyết bài toán tăng trưởng khách hàng cho ngành làm đẹp.
          </p>
        </div>

        {/* 4 Core Advantages Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-display">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 leading-snug font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Cam kết chất lượng thực tế</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
