import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/marketingData';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Giải đáp thắc mắc thường gặp</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            CÂU HỎI THƯỜNG GẶP (FAQ)
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Những câu trả lời thẳng thắn, rõ ràng và minh bạch giúp bạn nắm rõ quy trình trước khi quyết định hợp tác.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-slate-900 bg-slate-50/70 shadow-xs' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 bg-[#FAFAF8] rounded-2xl p-6 border border-slate-200 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Bạn có câu hỏi riêng về vị trí salon hoặc ngân sách cụ thể của mình?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>TRAO ĐỔI TRỰC TIẾP VỚI ĐÌNH HIỂN DIGITAL</span>
          </button>
        </div>

      </div>
    </section>
  );
};
