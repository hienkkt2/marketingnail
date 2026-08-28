import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

type CurrencyCode = 'USD' | 'CAD' | 'AUD' | 'GBP' | 'VND';

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Rates relative to USD
  const rates: Record<CurrencyCode, { symbol: string; rate: number; label: string }> = {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    CAD: { symbol: 'CA$', rate: 1.38, label: 'CAD (Canada)' },
    AUD: { symbol: 'AU$', rate: 1.54, label: 'AUD (Úc)' },
    GBP: { symbol: '£', rate: 0.79, label: 'GBP (UK)' },
    VND: { symbol: '₫', rate: 25400, label: 'VND (Việt Nam)' },
  };

  const formatPrice = (usdAmount: number) => {
    const cur = rates[currency];
    const converted = usdAmount * cur.rate;
    if (currency === 'VND') {
      return `${(converted / 1000).toLocaleString('vi-VN')}k ₫`;
    }
    return `${cur.symbol}${Math.round(converted)}`;
  };

  const pricingCards = [
    {
      id: 'social',
      title: 'SOCIAL MEDIA',
      subtitle: 'Facebook & Instagram',
      price: '$50 – $99',
      usdValue: 50,
      usdValueMax: 99,
      period: '/tháng',
      highlight: '30–60 bài đăng',
      badge: 'Dễ tiếp cận',
      inclusions: [
        '30 bài ($50) hoặc 60 bài ($99) mỗi tháng',
        'Đăng đồng thời Facebook + Instagram',
        'Thiết kế hình ảnh mẫu nail, không gian tiệm',
        'Caption tiếng Anh chuẩn ngành Beauty',
        'Bộ hashtag tìm kiếm địa phương',
        'Lên lịch đăng bài tự động'
      ]
    },
    {
      id: 'google-ads',
      title: 'GOOGLE ADS + MAPS',
      subtitle: 'Tìm kiếm & Local Maps',
      price: '$249',
      usdValue: 249,
      period: '/tháng',
      highlight: 'Quản lý quảng cáo chuyên sâu',
      badge: 'Khách gọi ngay',
      isPopular: true,
      inclusions: [
        'Google Search Ads + Local Maps Ads',
        'Nghiên cứu từ khóa làm đẹp bán kính tiệm',
        'Viết Ad Copy tiếng Anh tối ưu click',
        'Tối ưu chuyển đổi cuộc gọi & chỉ đường',
        'Báo cáo minh bạch hàng tháng',
        'Ngân sách quảng cáo nạp riêng cho Google'
      ]
    },
    {
      id: 'website',
      title: 'WEBSITE',
      subtitle: 'Chuẩn SEO & Mobile-First',
      price: '$349',
      usdValue: 349,
      period: '/năm',
      highlight: 'Website chuyên nghiệp',
      badge: 'Trọn gói 1 năm',
      inclusions: [
        'Thiết kế giao diện độc quyền cho Salon',
        'Đầy đủ: Home, Menu giá, Gallery, Booking',
        'Tích hợp nút Đặt lịch & Bản đồ Google Maps',
        'Đã bao gồm Server Hosting + Bảo mật SSL',
        'Chuẩn SEO cơ bản & Tốc độ tải trang 95+',
        'Hỗ trợ chỉnh sửa menu giá suốt năm'
      ]
    },
    {
      id: 'local-seo',
      title: 'LOCAL SEO',
      subtitle: 'Tối ưu vị trí tự nhiên',
      price: '$199',
      usdValue: 199,
      period: '/tháng',
      highlight: 'SEO Website + Local SEO',
      badge: 'Cam kết hợp đồng',
      inclusions: [
        'Nghiên cứu bộ từ khóa địa phương',
        'Tối ưu On-page & Nội dung chuyên sâu',
        'Kết nối sức mạnh Google Business Profile',
        'Theo dõi bảng xếp hạng hàng tuần',
        'Cam kết không đạt mục tiêu tiếp tục làm miễn phí',
        'Báo cáo thứ hạng chi tiết mỗi tháng'
      ]
    },
    {
      id: 'entity-seo',
      title: 'ENTITY SEO',
      subtitle: 'Định danh thương hiệu Google',
      price: '$99',
      usdValue: 99,
      period: '/100 Entity',
      highlight: 'Có gói 300 ($199) & 500 ($299)',
      badge: 'Thực hiện 1 lần',
      inclusions: [
        '100 Entity nền tảng uy tín cao ($99)',
        'Gói 300 Entity thương hiệu ($199)',
        'Gói 500 Entity toàn diện ($299)',
        'Đồng bộ 100% NAP (Tên, Địa chỉ, SĐT)',
        'Tăng độ tin cậy giúp Maps lên Top nhanh',
        'Bàn giao toàn bộ danh sách liên kết'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
            <span>Không chi phí ẩn • Không ràng buộc</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            BẢNG GIÁ MINH BẠCH
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Biết chính xác số tiền bạn đầu tư và những hạng mục nhận được. Không phát sinh chi phí phụ vô lý.
          </p>

          {/* Currency Switcher */}
          <div className="pt-3 flex items-center justify-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-medium">Đơn vị tiền tệ:</span>
            {(['USD', 'CAD', 'AUD', 'GBP', 'VND'] as CurrencyCode[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  currency === c
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {rates[c].label}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Service Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {pricingCards.map((card) => {
            const isHighlighted = card.isPopular;

            return (
              <div
                key={card.id}
                className={`rounded-2xl transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 bg-white border ${
                  isHighlighted
                    ? 'border-slate-900 shadow-lg ring-1 ring-slate-900/10'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Title */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                        {card.subtitle}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isHighlighted ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 font-display">
                      {card.title}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-1 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                        {currency === 'USD' 
                          ? card.price 
                          : card.usdValueMax 
                            ? `${formatPrice(card.usdValue)} - ${formatPrice(card.usdValueMax)}`
                            : formatPrice(card.usdValue)
                        }
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {card.period}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-amber-700 mt-1">
                      {card.highlight}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <ul className="space-y-2 text-xs text-slate-600">
                    {card.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(card.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>CHỌN DỊCH VỤ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note banner */}
        <div className="mt-10 bg-[#FAFAF8] rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Mọi khoản phí đều minh bạch. Hỗ trợ thanh toán nhanh qua Zelle, Venmo, Credit Card hoặc Bank Transfer.</span>
          </div>
          <button
            onClick={onOpenConsultation}
            className="text-slate-900 font-bold underline hover:text-amber-700 shrink-0 cursor-pointer"
          >
            Cần bảng báo giá tùy chỉnh?
          </button>
        </div>

      </div>
    </section>
  );
};
