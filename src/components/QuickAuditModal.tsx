import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

interface QuickAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAuditResult: (summary: string) => void;
}

export const QuickAuditModal: React.FC<QuickAuditModalProps> = ({
  isOpen,
  onClose,
  onSelectAuditResult
}) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    businessType: 'Nail Salon',
    fbStatus: 'hiếm khi đăng',
    hasWebsite: 'chưa có',
    googleMapsStatus: 'có nhưng ít review',
    googleAdsStatus: 'chưa từng chạy'
  });
  const [score, setScore] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCalculate = () => {
    let calculated = 40;
    if (answers.fbStatus === 'hàng ngày') calculated += 15;
    else if (answers.fbStatus === '1-2 bài/tuần') calculated += 8;

    if (answers.hasWebsite === 'website đẹp, có booking') calculated += 20;
    else if (answers.hasWebsite === 'website cũ') calculated += 8;

    if (answers.googleMapsStatus === 'Top 3, nhiều review') calculated += 20;
    else if (answers.googleMapsStatus === 'có nhưng ít review') calculated += 8;

    if (answers.googleAdsStatus === 'đang chạy hiệu quả') calculated += 10;

    setScore(Math.min(calculated, 95));
    setStep(2);
  };

  const resetAudit = () => {
    setStep(1);
    setScore(null);
  };

  const getRecommendations = () => {
    const list: string[] = [];
    if (answers.fbStatus !== 'hàng ngày') {
      list.push('Duy trì gói Social Media $50/tháng (30 bài) để fanpage & IG luôn có bài mới mỗi ngày.');
    }
    if (answers.hasWebsite !== 'website đẹp, có booking') {
      list.push('Thiết kế Website chuẩn Mobile $349/năm để khách hàng xem menu giá và bấm book lịch trực tiếp.');
    }
    if (answers.googleMapsStatus !== 'Top 3, nhiều review' || answers.googleAdsStatus === 'chưa từng chạy') {
      list.push('Khai thác Google Ads + Maps ($249/tháng) để tiếp cận ngay khách hàng mới chuyển tới khu vực.');
    }
    list.push('Triển khai Entity SEO ($99) để xác thực độ uy tín thương hiệu trên Google.');
    return list;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Công cụ miễn phí 30 giây</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
            Kiểm Tra Mức Độ Hiện Diện Online Của Salon
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Đánh giá nhanh tiềm năng tăng trưởng khách hàng địa phương cho tiệm của bạn.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {step === 1 ? (
            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* Question 1: Business Type */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-900 block">
                  1. Loại hình kinh doanh của bạn:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Nail Salon', 'Nail Spa', 'Beauty Spa', 'Lash & Brow / PMU'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAnswers({ ...answers, businessType: item })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        answers.businessType === item
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Facebook / Instagram */}
              <div className="space-y-1.5 pt-2">
                <label className="font-bold text-slate-900 block">
                  2. Tần suất đăng bài Fanpage / Instagram hiện tại:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'hiếm khi đăng', label: 'Ít khi đăng (1-2 bài/tháng)' },
                    { id: '1-2 bài/tuần', label: 'Thỉnh thoảng (1-2 bài/tuần)' },
                    { id: 'hàng ngày', label: 'Đều đặn mỗi ngày' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, fbStatus: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        answers.fbStatus === opt.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Website */}
              <div className="space-y-1.5 pt-2">
                <label className="font-bold text-slate-900 block">
                  3. Tình trạng Website của salon:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'chưa có', label: 'Chưa có website riêng' },
                    { id: 'website cũ', label: 'Có web cũ, chưa chuẩn mobile' },
                    { id: 'website đẹp, có booking', label: 'Có web đẹp & nút book' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, hasWebsite: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        answers.hasWebsite === opt.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Google Maps */}
              <div className="space-y-1.5 pt-2">
                <label className="font-bold text-slate-900 block">
                  4. Vị trí hiển thị trên Google Maps khu vực:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'chưa rõ / không tìm thấy', label: 'Không thấy hoặc ở xa Top 10' },
                    { id: 'có nhưng ít review', label: 'Có hồ sơ nhưng ít khách gọi' },
                    { id: 'Top 3, nhiều review', label: 'Luôn nằm trong Top 3' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, googleMapsStatus: opt.id })}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        answers.googleMapsStatus === opt.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>XEM KẾT QUẢ ĐÁNH GIÁ & ĐỀ XUẤT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Results Step */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Score Box */}
              <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-slate-200 text-center space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Điểm Hiển Thị Online Của Tiệm
                </span>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="text-5xl font-black text-slate-900 font-display">
                    {score}<span className="text-2xl text-slate-400 font-normal">/100</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-amber-700">
                  {score && score < 60 
                    ? '⚠️ Tiệm đang bỏ lỡ khoảng 40-60% lượng khách hàng tiềm năng quanh khu vực.' 
                    : '⚡ Tiệm có nền tảng cơ bản, nhưng cần tối ưu đồng bộ để bứt phá dẫn đầu.'}
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Giải pháp đề xuất từ chuyên gia Đình Hiển Digital:</span>
                </h4>

                <div className="space-y-2">
                  {getRecommendations().map((rec, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={resetAudit}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Đánh giá lại</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const summary = `Kết quả tự đánh giá: ${score}/100 điểm. Loại hình: ${answers.businessType}, FB: ${answers.fbStatus}, Web: ${answers.hasWebsite}, Maps: ${answers.googleMapsStatus}`;
                    onSelectAuditResult(summary);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>NHẬN TƯ VẤN CẢI THIỆN CHI TIẾT (MIỄN PHÍ)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
