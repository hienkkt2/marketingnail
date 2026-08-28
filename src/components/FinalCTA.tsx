import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenConsultation: () => void;
  onScrollToPricing: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenConsultation,
  onScrollToPricing
}) => {
  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bắt đầu nâng tầm thương hiệu ngay hôm nay</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] font-display max-w-3xl mx-auto">
          SẴN SÀNG ĐƯA DOANH NGHIỆP CỦA BẠN LÊN ONLINE CHUYÊN NGHIỆP HƠN?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Hãy để Đình Hiển Digital giúp bạn xây dựng sự hiện diện online, tiếp cận khách hàng địa phương và tạo thêm cơ hội đặt lịch.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-primary-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>NHẬN TƯ VẤN MIỄN PHÍ</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToPricing}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-base px-7 py-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>XEM BẢNG GIÁ</span>
          </button>
        </div>

        {/* Small trust badges */}
        <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center gap-6 flex-wrap text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Tư vấn miễn phí 100%
          </span>
          <span>•</span>
          <span>Không bắt buộc ký hợp đồng dài hạn</span>
          <span>•</span>
          <span>Hỗ trợ nhanh qua Zalo & WhatsApp</span>
        </div>

      </div>
    </section>
  );
};
