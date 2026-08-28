import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Share2, 
  Globe2, 
  Search, 
  MapPin, 
  Flame, 
  Layers, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenConsultation: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems');

  const painPoints = [
    {
      icon: Share2,
      title: 'Facebook không đăng bài thường xuyên',
      desc: 'Bận làm khách khiến trang Facebook 2-3 tuần mới có 1 bài, khách vãng lai tưởng tiệm đã đóng cửa hoặc dịch vụ vắng khách.'
    },
    {
      icon: Sparkles,
      title: 'Instagram thiếu nội dung chuyên nghiệp',
      desc: 'Hình ảnh chụp móng và không gian thiếu ánh sáng, tone màu lộn xộn, không có video reels thu hút giới trẻ địa phương.'
    },
    {
      icon: Globe2,
      title: 'Website cũ hoặc chưa có website',
      desc: 'Khách muốn xem trước Menu giá, địa chỉ và dịch vụ nhưng không tìm thấy thông tin đầy đủ, dẫn đến chuyển sang salon đối thủ.'
    },
    {
      icon: Search,
      title: 'Khách hàng khó tìm thấy trên Google',
      desc: 'Khi người dân xung quanh gõ "nail salon near me" hay "pedicure salon", tên tiệm bạn chìm ở trang 2, trang 3.'
    },
    {
      icon: Flame,
      title: 'Chưa khai thác Google Ads',
      desc: 'Bỏ lỡ lượng khách hàng mới chuyển đến khu vực đang có nhu cầu làm đẹp ngay lập tức và sẵn sàng chi trả cao.'
    },
    {
      icon: MapPin,
      title: 'Google Maps chưa được tối ưu tốt',
      desc: 'Chưa tối ưu hóa hồ sơ Google Business, thiếu cập nhật hình ảnh dịch vụ, không xuất hiện trong Top 3 Google Local Pack.'
    },
    {
      icon: Layers,
      title: 'Website chưa được SEO',
      desc: 'Website có sẵn nhưng không có từ khóa địa phương, không có bài viết tối ưu khiến lượng truy cập tự nhiên bằng 0.'
    },
    {
      icon: AlertCircle,
      title: 'Chưa có hệ thống nhận diện online rõ ràng',
      desc: 'Thông tin tiệm trên Facebook, Google, Yelp, Instagram bị sai lệch hoặc không đồng bộ, làm giảm uy tín trong mắt khách hàng.'
    }
  ];

  return (
    <section id="problems" className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200/80 px-3 py-1 rounded-full text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Thực trạng chung của 80% Salon & Spa</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            KHÁCH HÀNG ĐANG TÌM KIẾM BẠN, <br className="hidden sm:inline" />
            NHƯNG HỌ CÓ TÌM THẤY BẠN KHÔNG?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nhiều salon có tay nghề thợ rất giỏi, không gian tiệm đẹp và dịch vụ chu đáo, nhưng vẫn gặp khó khăn trong việc thu hút khách hàng mới đều đặn vì những lý do sau:
          </p>
        </div>

        {/* 8 Pain Points Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-[#FAFAF8] hover:bg-white rounded-xl p-5 border border-slate-200/90 transition-all duration-200 hover:shadow-md hover:border-slate-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-red-100/70 text-red-700 flex items-center justify-center font-bold text-xs group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-slate-500 group-hover:text-slate-900">
                  <span>Vấn đề #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline Banner */}
        <div className="mt-12 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="text-amber-400 font-bold text-xs tracking-wider uppercase">
                Giải pháp từ Đình Hiển Digital
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight font-display">
                Bạn tập trung phục vụ khách hàng. <br className="hidden sm:inline" />
                Chúng tôi xử lý toàn bộ phần Marketing Online.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Không cần thuê nhân viên riêng tốn kém, không cần tự mày mò tốn thời gian. Chúng tôi có các gói giải pháp linh hoạt từ $50/tháng cho salon của bạn.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <span>NHẬN TƯ VẤN MIỄN PHÍ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
