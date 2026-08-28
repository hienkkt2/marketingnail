import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Plus, Calculator, ShieldCheck } from 'lucide-react';
import { COMBO_PACKAGES } from '../data/marketingData';

interface ComboSectionProps {
  onSelectCombo: (comboName: string) => void;
  onOpenConsultation: (customNote?: string) => void;
}

export const ComboSection: React.FC<ComboSectionProps> = ({
  onSelectCombo,
  onOpenConsultation
}) => {
  // Custom Combo Builder state
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    social: true,
    google: true,
    website: false,
    seo: false,
    entity: false
  });

  const availableAddons = [
    { id: 'social', name: 'Social Media (30 bài FB & IG)', price: 50, period: '/tháng', type: 'monthly' },
    { id: 'google', name: 'Google Ads + Google Maps Ads', price: 249, period: '/tháng', type: 'monthly' },
    { id: 'website', name: 'Thiết kế Website Salon Chuyên Nghiệp', price: 349, period: '/năm', type: 'annual' },
    { id: 'seo', name: 'Local SEO & SEO Website', price: 199, period: '/tháng', type: 'monthly' },
    { id: 'entity', name: '100 Entity Xác Thực Thương Hiệu', price: 99, period: '/lần', type: 'one-time' },
  ];

  const toggleAddon = (id: string) => {
    setSelectedServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateTotal = () => {
    let monthly = 0;
    let annualOrOneTime = 0;

    availableAddons.forEach(item => {
      if (selectedServices[item.id]) {
        if (item.type === 'monthly') {
          monthly += item.price;
        } else {
          annualOrOneTime += item.price;
        }
      }
    });

    return { monthly, annualOrOneTime };
  };

  const { monthly, annualOrOneTime } = calculateTotal();

  const handleCustomBundleSubmit = () => {
    const selectedNames = availableAddons
      .filter(a => selectedServices[a.id])
      .map(a => a.name)
      .join(', ');
    onOpenConsultation(`Combo tùy chỉnh tự chọn: ${selectedNames} (Tổng ước tính: $${monthly}/tháng + $${annualOrOneTime})`);
  };

  return (
    <section id="combos" className="py-16 lg:py-24 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Tiết kiệm ngân sách • Tối đa hiệu quả</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            KẾT HỢP DỊCH VỤ ĐỂ TIẾT KIỆM HƠN
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Lựa chọn các gói combo được tối ưu sẵn hoặc tự tạo gói dịch vụ phù hợp với quy mô và mục tiêu phát triển của salon bạn.
          </p>
        </div>

        {/* 4 Combo Packages Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {COMBO_PACKAGES.map((combo) => {
            const isHighlighted = combo.isPopular;

            return (
              <div
                key={combo.id}
                className={`rounded-2xl transition-all duration-200 flex flex-col justify-between p-6 bg-white border ${
                  isHighlighted
                    ? 'border-slate-900 shadow-xl ring-2 ring-slate-900/10'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Badge & Title */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-2 py-0.5 rounded">
                      {combo.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 pt-1 font-display">
                      {combo.title}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-2 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900 font-display">
                        {combo.priceDisplay}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {combo.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {combo.suitableFor}
                    </p>
                  </div>

                  {/* Services Included */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Bao gồm:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {combo.services.map((srv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {combo.description}
                  </p>

                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectCombo(combo.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                      isHighlighted
                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{combo.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Custom Bundle Builder / Estimator */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>CÔNG CỤ TÍNH DỰ TOÁN TÙY CHỌN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                Tự Thiết Kế Gói Dịch Vụ Theo Nhu Cầu Tiệm Bạn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Bật/tắt các dịch vụ bạn quan tâm để xem ước tính chi phí đầu tư hàng tháng:
              </p>
            </div>

            {/* Total Estimated Box */}
            <div className="bg-slate-950 text-white rounded-xl p-4 sm:p-5 w-full lg:w-auto text-center sm:text-right shrink-0">
              <div className="text-[11px] text-slate-400 font-medium">Chi phí duy trì dự kiến:</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
                ${monthly} <span className="text-xs text-slate-300 font-normal">/tháng</span>
              </div>
              {annualOrOneTime > 0 && (
                <div className="text-[11px] text-slate-400 mt-0.5">
                  + ${annualOrOneTime} (Website năm / Entity 1 lần)
                </div>
              )}
            </div>
          </div>

          {/* Addon Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6">
            {availableAddons.map((addon) => {
              const isChecked = selectedServices[addon.id];
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isChecked
                      ? 'border-slate-900 bg-slate-900/5 ring-1 ring-slate-900/10'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      isChecked ? 'bg-slate-900 border-slate-900 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900">{addon.name}</div>
                      <div className="text-[11px] text-slate-500 font-semibold">${addon.price}{addon.period}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Builder Action */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 flex items-center gap-1.5 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Chưa cần thanh toán. Đội ngũ sẽ tư vấn chi tiết và gửi lộ trình thực hiện trước.</span>
            </span>

            <button
              onClick={handleCustomBundleSubmit}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GỬI YÊU CẦU CHO COMBO NÀY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
