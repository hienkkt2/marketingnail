import React from 'react';
import { MessageSquare, Search, FileText, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/marketingData';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const getIcon = (step: string) => {
    switch (step) {
      case 'BƯỚC 1':
        return MessageSquare;
      case 'BƯỚC 2':
        return Search;
      case 'BƯỚC 3':
        return FileText;
      case 'BƯỚC 4':
        return Rocket;
      case 'BƯỚC 5':
        return BarChart3;
      default:
        return Rocket;
    }
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
            <span>Đơn giản • Nhanh chóng • Không phức tạp</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            QUY TRÌNH LÀM VIỆC ĐƠN GIẢN
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Bạn không cần am hiểu công nghệ. Chúng tôi chuẩn hóa mọi công đoạn để bạn chỉ cần cung cấp thông tin cơ bản và duyệt mẫu.
          </p>
        </div>

        {/* 5 Steps Process */}
        <div className="mt-14 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, index) => {
              const Icon = getIcon(item.step);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-slate-500 tracking-wider">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Thời gian</span>
                    <span className="font-semibold text-slate-700">
                      {index === 0 ? 'Trong 2 giờ' : index === 1 ? 'Trong 24 giờ' : index === 3 ? '2-5 ngày' : 'Liên tục'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>BẮT ĐẦU VỚI BƯỚC 1: GỬI THÔNG TIN SALON</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
