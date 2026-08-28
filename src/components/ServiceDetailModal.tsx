import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Sparkles, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded">
                {service.code}
              </span>
              {service.popular && (
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-400/15 px-2 py-0.5 rounded">
                  Phổ biến nhất
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-display">
              {service.title}
            </h3>

            <p className="text-slate-300 text-sm">
              {service.tagline}
            </p>

            <div className="pt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-amber-400">
                {service.priceDisplay}
              </span>
              <span className="text-sm text-slate-300 font-medium">{service.period}</span>
            </div>
            {service.priceNote && (
              <p className="text-xs text-slate-400">{service.priceNote}</p>
            )}
          </div>
        </div>

        {/* Modal Body: The 5 Strategic Questions */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Deliverables / Inclusions List */}
          <div className="bg-[#FAFAF8] rounded-xl p-5 border border-slate-200/90">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Hạng mục công việc bao gồm:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {service.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 Core Breakdown Cards */}
          <div className="space-y-4 text-xs sm:text-sm">
            
            {/* Q1: Problem */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-1.5 bg-white">
              <div className="flex items-center gap-2 font-bold text-red-700">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs">1</span>
                <span>Tôi đang gặp vấn đề gì?</span>
              </div>
              <p className="text-slate-600 pl-7 leading-relaxed">
                {service.qaBreakdown.problem}
              </p>
            </div>

            {/* Q2: Solution */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-1.5 bg-white">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs">2</span>
                <span>Đình Hiển Digital sẽ làm gì?</span>
              </div>
              <p className="text-slate-600 pl-7 leading-relaxed">
                {service.qaBreakdown.solution}
              </p>
            </div>

            {/* Q3: Benefit */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-1.5 bg-white">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">3</span>
                <span>Tôi nhận được lợi ích cụ thể gì?</span>
              </div>
              <p className="text-slate-600 pl-7 leading-relaxed">
                {service.qaBreakdown.benefit}
              </p>
            </div>

            {/* Q4: Cost */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-1.5 bg-white">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs">4</span>
                <span>Tôi phải trả chi phí bao nhiêu?</span>
              </div>
              <p className="text-slate-600 pl-7 leading-relaxed">
                {service.qaBreakdown.cost}
              </p>
            </div>

            {/* Q5: Why Hire Us */}
            <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs">5</span>
                <span>Tại sao tôi nên thuê Đình Hiển Digital thay vì tự làm?</span>
              </div>
              <p className="text-slate-700 pl-7 leading-relaxed">
                {service.qaBreakdown.whyHireUs}
              </p>
            </div>

          </div>

          {/* Sub-options if available */}
          {service.options && service.options.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="font-bold text-slate-900 text-xs mb-2">Các tùy chọn gói:</h5>
              <div className="space-y-1.5">
                {service.options.map((opt, i) => (
                  <div key={i} className="flex justify-between items-center text-xs text-slate-700 py-1 border-b border-slate-200/60 last:border-0">
                    <span>{opt.name}</span>
                    <span className="font-bold text-slate-900">{opt.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tư vấn 1:1 miễn phí, không ép buộc mua dịch vụ</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onSelectService(service.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>CHỌN DỊCH VỤ NÀY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
