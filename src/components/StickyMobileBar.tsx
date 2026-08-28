import React from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/marketingData';

interface StickyMobileBarProps {
  onOpenConsultation: () => void;
  onOpenAudit: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenConsultation,
  onOpenAudit
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2">
        
        {/* Quick Audit Button */}
        <button
          onClick={onOpenAudit}
          className="flex-1 py-2.5 px-3 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Audit Score</span>
        </button>

        {/* Main CTA Button */}
        <button
          id="sticky-mobile-cta-btn"
          onClick={onOpenConsultation}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-black text-xs tracking-wide shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <span>NHẬN TƯ VẤN MIỄN PHÍ</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
