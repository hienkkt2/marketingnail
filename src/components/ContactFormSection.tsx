import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck,
  Building,
  User,
  Globe
} from 'lucide-react';
import { BRAND_INFO } from '../data/marketingData';
import { ConsultationFormData } from '../types';

interface ContactFormSectionProps {
  preselectedService?: string;
  customNote?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  preselectedService,
  customNote
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    salonName: '',
    email: '',
    phone: '',
    location: '',
    websiteUrl: '',
    selectedService: 'Facebook & Instagram',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        selectedService: preselectedService
      }));
    }
    if (customNote) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${customNote}` : customNote
      }));
    }
  }, [preselectedService, customNote]);

  const serviceOptions = [
    'Facebook & Instagram',
    'Google Ads + Maps',
    'Website',
    'SEO Website',
    'Entity SEO',
    'Nhiều dịch vụ',
    'Chưa biết, cần tư vấn'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean, fast submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      salonName: '',
      email: '',
      phone: '',
      location: '',
      websiteUrl: '',
      selectedService: 'Facebook & Instagram',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Tư vấn trực tiếp 1:1</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              NHẬN TƯ VẤN MIỄN PHÍ
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Điền thông tin cơ bản về salon của bạn. Đình Hiển Digital sẽ phân tích nhanh hiện trạng và liên hệ lại trong vòng <strong>2-4 giờ làm việc</strong> kèm giải pháp đề xuất tối ưu nhất.
            </p>

            {/* Quick Contact Points */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Hotline / WhatsApp / Zalo</div>
                  <div className="text-slate-600 font-medium">{BRAND_INFO.phone} / {BRAND_INFO.zaloPhone}</div>
                  <div className="text-[11px] text-slate-400">Hỗ trợ nhanh cho chủ tiệm tại US/CA/AU</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email liên hệ</div>
                  <div className="text-slate-600 font-medium">{BRAND_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Thời gian làm việc</div>
                  <div className="text-slate-600 font-medium">{BRAND_INFO.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Privacy & Trust Badge */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thông tin salon của bạn được bảo mật tuyệt đối 100%. Không spam cuộc gọi hay bán dữ liệu.</span>
            </div>

          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                      Yêu Cầu Của Bạn Đã Được Gửi Thành Công!
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Cảm ơn <strong>{formData.fullName}</strong>. Chúng tôi đã nhận được thông tin về salon <strong>{formData.salonName || 'của bạn'}</strong>. Đội ngũ Đình Hiển Digital sẽ rà soát và phản hồi sớm nhất qua Phone/Zalo/Email.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Gửi thêm thông tin khác
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900 flex items-center gap-1">
                        <span>Họ và tên</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="VD: David Nguyen / Jenny Tran"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                        />
                      </div>
                    </div>

                    {/* Salon Name */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900 flex items-center gap-1">
                        <span>Tên Salon / Spa</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="VD: Luxe Nail Spa & Lounge"
                        value={formData.salonName}
                        onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900 flex items-center gap-1">
                        <span>Email</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="VD: salon@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900 flex items-center gap-1">
                        <span>Số điện thoại (Zalo / WhatsApp)</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="VD: +1 (832) 555-0198"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City & Country */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900">
                        Thành phố / Tiểu bang / Quốc gia
                      </label>
                      <input
                        type="text"
                        placeholder="VD: Houston, Texas, USA"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                      />
                    </div>

                    {/* Current Website */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900">
                        Website hoặc Fanpage hiện tại
                      </label>
                      <input
                        type="text"
                        placeholder="VD: luxenails.com hoặc link Facebook"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                      />
                    </div>
                  </div>

                  {/* Selected Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-900">
                      Hãy cho chúng tôi biết mục tiêu hiện tại của doanh nghiệp bạn:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="VD: Tiệm mới mở muốn kéo khách địa phương, muốn chạy Google Ads và làm lại website có nút book lịch..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 text-slate-900 text-xs sm:text-sm bg-[#FAFAF8]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>ĐANG GỬI THÔNG TIN...</span>
                      ) : (
                        <>
                          <span>GỬI YÊU CẦU</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
