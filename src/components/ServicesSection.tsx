import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  Flame, 
  Globe2, 
  Search, 
  Layers, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/marketingData';

interface ServicesSectionProps {
  onOpenDetailModal: (service: ServiceItem) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenDetailModal,
  onSelectService
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'social-media':
        return Share2;
      case 'google-ads-maps':
        return Flame;
      case 'website-design':
        return Globe2;
      case 'local-seo':
        return Search;
      case 'entity-seo':
        return Layers;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Giải pháp thực chiến cho Salon</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            DỊCH VỤ CỦA ĐÌNH HIỂN DIGITAL
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Những dịch vụ thiết yếu giúp Nail Salon, Spa và Beauty Business xây dựng và phát triển sự hiện diện online, tiếp cận khách hàng địa phương và tăng cơ hội đặt lịch.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            const isHighlight = service.id === 'google-ads-maps' || service.id === 'website-design';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`rounded-2xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden bg-white border ${
                  isHighlight 
                    ? 'border-slate-900 shadow-lg ring-1 ring-slate-900/10' 
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Top Badge */}
                {service.popular && (
                  <div className="bg-slate-900 text-amber-300 text-[11px] font-bold py-1 px-3 text-center tracking-wider uppercase">
                    ★ Khách hàng chọn nhiều nhất
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col">
                  
                  {/* Service Code & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                        {service.code}
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight font-display">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-700">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-slate-900 font-display">
                        {service.priceDisplay}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {service.period}
                      </span>
                    </div>
                    {service.priceNote && (
                      <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                        {service.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 flex-1">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      Bao gồm:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.inclusions.slice(0, 5).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </li>
                      ))}
                      {service.inclusions.length > 5 && (
                        <li className="text-[11px] text-slate-500 pl-5">
                          + và {service.inclusions.length - 5} hạng mục khác...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* SLA / Specific Service Guarantees */}
                  {service.id === 'local-seo' && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800">
                      <strong>Cam kết:</strong> Không đạt mục tiêu đã thống nhất → tiếp tục làm không thu thêm phí quản lý.
                    </div>
                  )}

                  {service.id === 'google-ads-maps' && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                      <strong>Lưu ý:</strong> Ngân sách quảng cáo trả riêng cho Google theo nhu cầu của salon.
                    </div>
                  )}

                </div>

                {/* Actions */}
                <div className="p-6 pt-0 space-y-2.5 bg-white">
                  <button
                    onClick={() => onOpenDetailModal(service)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-900 bg-slate-50 hover:bg-white text-slate-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-600" />
                    <span>{service.ctaText}</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                      isHighlight
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>TƯ VẤN DỊCH VỤ NÀY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
