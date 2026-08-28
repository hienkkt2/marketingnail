import { ServiceItem, ComboPackage, CaseStudy, Testimonial, FAQItem } from '../types';

export const BRAND_INFO = {
  name: 'Đình Hiển Digital',
  tagline: 'Marketing đơn giản hơn. Khách hàng nhiều hơn.',
  subtagline: 'Digital Marketing & Website Services chuyên biệt cho Nail Salon, Spa & Beauty Business',
  phone: '+1 (832) 555-0198', // Representative direct WhatsApp/Hotline for international clients
  email: 'contact@dinhhiendigital.com',
  zaloPhone: '+84 988 123 456',
  workingHours: '8:00 AM - 9:00 PM (EST / CST / PST Support)',
  targetMarkets: ['Mỹ (USA)', 'Canada', 'Australia (Úc)', 'United Kingdom (UK)', 'Châu Âu'],
  serviceSectors: ['Nail Salon', 'Nail Spa', 'Beauty Salon', 'Day Spa & Medical Spa', 'Lash Studio', 'Brow Studio', 'PMU Studio']
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    code: 'SERVICE 01',
    title: 'FACEBOOK & INSTAGRAM',
    subtitle: '30–60 bài đăng/tháng',
    tagline: 'Duy trì hình ảnh fanpage & Instagram chỉn chu, thu hút khách hàng nữ tại địa phương',
    priceDisplay: 'Từ $50',
    priceNote: 'Gói cơ bản $50/tháng (30 bài) hoặc $99/tháng (60 bài)',
    period: '/tháng',
    description: 'Giúp Facebook và Instagram của bạn luôn hoạt động chuyên nghiệp với nội dung đều đặn, hình ảnh thiết kế đẹp mắt và nội dung phù hợp với khách hàng của salon.',
    inclusions: [
      '30–60 bài đăng hoàn chỉnh / tháng',
      'Đăng đồng bộ cả Facebook & Instagram',
      'Viết Caption tiếng Anh chuẩn ngành Beauty',
      'Thiết kế hình ảnh mẫu nail, không gian spa sang trọng',
      'Nội dung giới thiệu dịch vụ & bảng giá',
      'Nội dung chương trình khuyến mãi & ngày lễ (Holiday Promos)',
      'Bộ Hashtag chuẩn tối ưu tìm kiếm địa phương (Local Hashtags)',
      'Lên lịch tự động đăng bài vào khung giờ vàng'
    ],
    ctaText: 'XEM CHI TIẾT',
    popular: false,
    options: [
      { name: 'Gói Tiêu Chuẩn (30 bài đăng/tháng)', price: '$50/tháng' },
      { name: 'Gói Cao Cấp (60 bài đăng/tháng + Stories)', price: '$99/tháng' }
    ],
    qaBreakdown: {
      problem: 'Salon quá bận rộn làm khách, 2-3 tuần mới đăng 1 bài, hình ảnh chụp vội vàng không chỉnh sửa khiến khách hàng địa phương cảm giác salon vắng vẻ hoặc ngừng hoạt động.',
      solution: 'Đình Hiển Digital xây dựng lịch đăng bài cố định mỗi ngày, thiết kế template nhận diện thương hiệu đồng bộ, viết caption tiếng Anh chỉn chu và gắn hashtag khu vực.',
      benefit: 'Trang mạng xã hội luôn sống động, tăng độ tin cậy khi khách vãng lai ghé thăm, duy trì tương tác với khách quen và nhắc nhở họ đặt lịch hẹn làm móng/spa định kỳ.',
      cost: 'Từ $50 - $99/tháng. Chỉ bằng chi phí của 1-2 bộ móng full-set nhưng salon có cả một đội ngũ thiết kế và đăng bài suốt 30 ngày.',
      whyHireUs: 'Tự làm thì mất thời gian và dễ bỏ dở; thuê thợ part-time tại Mỹ tốn $800-$1500/tháng; thuê agency chung chung thì họ không hiểu thuật ngữ nail, pedicures, dip powder hay lash mapping.'
    }
  },
  {
    id: 'google-ads-maps',
    code: 'SERVICE 02',
    title: 'GOOGLE ADS + GOOGLE MAPS',
    subtitle: 'Quản lý quảng cáo tìm kiếm & Local Map',
    tagline: 'Tiếp cận ngay lập tức khách hàng đang chủ động gõ tìm salon làm đẹp gần họ',
    priceDisplay: '$249',
    priceNote: 'Phí quản lý & tối ưu chuyên nghiệp. Ngân sách quảng cáo nạp trực tiếp cho Google.',
    period: '/tháng',
    description: 'Giúp doanh nghiệp tiếp cận khách hàng đang tìm kiếm Nail Salon, Spa và Beauty Services tại khu vực thành phố hoặc bán kính 5-15 dặm xung quanh salon của bạn.',
    inclusions: [
      'Thiết lập chiến dịch Google Search Ads chuẩn',
      'Quảng cáo hiển thị nổi bật trên Google Maps (Local Campaigns)',
      'Nghiên cứu bộ từ khóa làm đẹp có tỷ lệ đặt lịch cao nhất',
      'Viết mẫu quảng cáo Ad Copy hấp dẫn, chuẩn ngữ pháp tiếng Anh',
      'Loại trừ từ khóa phủ định (Negative Keywords) để tránh lãng phí ngân sách',
      'Khoanh vùng vị trí chính xác (Geo-targeting bán kính theo dặm/zipcode)',
      'Tối ưu chiến dịch hàng tuần để giảm giá mỗi lượt nhấp chuột (CPC)',
      'Cài đặt theo dõi lượt gọi điện thoại & lượt bấm nhận chỉ đường (Conversion Tracking)',
      'Báo cáo minh bạch số liệu hiệu quả mỗi tháng'
    ],
    ctaText: 'XEM CHI TIẾT',
    popular: true,
    qaBreakdown: {
      problem: 'Khách hàng mới chuyển đến khu vực hoặc muốn đổi tiệm nail thường gõ "best nail salon near me" trên Google. Nếu bạn không chạy quảng cáo, khách sẽ vào ngay tiệm đối thủ ở đầu trang.',
      solution: 'Chúng tôi thiết lập chiến dịch Google Search & Maps nhắm chuẩn xác khu vực quanh salon, chỉ xuất hiện khi khách hàng tìm kiếm dịch vụ bạn cung cấp.',
      benefit: 'Có khách gọi điện hỏi lịch và chỉ đường ngay trong tuần đầu tiên triển khai. Kiểm soát chính xác ngân sách chi tiêu hàng ngày.',
      cost: '$249/tháng phí quản lý chuyên sâu. Bạn tự quyết định ngân sách chạy quảng cáo trả riêng cho Google (khuyên dùng từ $300 - $800/tháng tùy thành phố).',
      whyHireUs: 'Tự bấm chạy Google Ads không đúng kỹ thuật sẽ bị Google trừ tiền rất nhanh cho những từ khóa rác không đem lại khách hàng. Chúng tôi có kinh nghiệm tối ưu ngân sách tối đa cho ngành salon.'
    }
  },
  {
    id: 'website-design',
    code: 'SERVICE 03',
    title: 'THIẾT KẾ WEBSITE',
    subtitle: 'Website salon chuẩn SEO & Mobile-First',
    tagline: 'Bộ mặt thương hiệu online đẳng cấp, tích hợp đầy đủ menu giá, hình ảnh và nút đặt lịch hẹn',
    priceDisplay: '$349',
    priceNote: 'Trọn gói năm đầu tiên (Đã bao gồm tên miền, hosting bảo mật SSL tốc độ cao & bảo trì)',
    period: '/năm',
    description: 'Website chuyên nghiệp giúp khách hàng tìm hiểu dịch vụ, xem bảng giá minh bạch, xem hình ảnh salon/mẫu móng thực tế, chỉ đường Google Maps và bấm đặt lịch hẹn cực kỳ dễ dàng.',
    inclusions: [
      'Giao diện cao cấp thiết kế riêng cho ngành Nail & Spa',
      'Tương thích hoàn hảo 100% trên điện thoại (Mobile-First)',
      'Đầy đủ các trang: Trang chủ (Home), Giới thiệu (About), Dịch vụ & Giá (Services/Menu), Thư viện ảnh (Gallery), Liên hệ (Contact)',
      'Tích hợp bản đồ chỉ đường Google Maps trực quan',
      'Tích hợp nút Đặt Lịch Hẹn (Booking Button qua Square, Fresha, Vagaro, Boulevard, Mangomint hoặc Form tùy chọn)',
      'Liên kết trực tiếp Facebook, Instagram, TikTok & Google Reviews',
      'Tối ưu chuẩn kỹ thuật SEO cơ bản (Meta, Speed 95+, OpenGraph)',
      'Đã bao gồm dịch vụ Lưu trữ Hosting tốc độ cao & Chứng chỉ bảo mật SSL',
      'Hỗ trợ cập nhật chỉnh sửa menu giá & hình ảnh trong suốt năm'
    ],
    ctaText: 'XEM CHI TIẾT',
    popular: false,
    qaBreakdown: {
      problem: 'Salon dùng website cũ kỹ tải chậm, font chữ lỗi trên iPhone, không có menu giá rõ ràng hoặc chỉ dùng fanpage khiến khách hàng cảm giác tiệm thiếu chuyên nghiệp.',
      solution: 'Chúng tôi xây dựng website hiện đại, hình ảnh sang trọng, hiển thị mượt mà trên iPhone/Android, tải trang dưới 1.5 giây và có nút Booking đặt ngay.',
      benefit: 'Tăng 30-50% uy tín thương hiệu, khách hàng chủ động xem giá dịch vụ trước khi gọi, dễ dàng chạy quảng cáo và tăng thứ hạng trên Google.',
      cost: '$349/năm. Không có chi phí ẩn phát sinh, đã bao gồm server hosting, bảo mật SSL và hỗ trợ kỹ thuật suốt 365 ngày.',
      whyHireUs: 'Agency tại Mỹ thường báo giá website từ $1,500 - $3,500 + phí duy trì $50-$100/tháng. Đình Hiển Digital đem đến chất lượng tương đương với mức giá chỉ $349/năm.'
    }
  },
  {
    id: 'local-seo',
    code: 'SERVICE 04',
    title: 'SEO WEBSITE – LOCAL SEO',
    subtitle: 'Tối ưu vị trí tự nhiên trên Google khu vực',
    tagline: 'Đưa website và từ khóa dịch vụ của salon lên top tìm kiếm tự nhiên bền vững',
    priceDisplay: '$199',
    priceNote: 'Cam kết bằng hành động: Không đạt mục tiêu thống nhất → tiếp tục làm không thu phí quản lý',
    period: '/tháng',
    description: 'Tối ưu website và tín hiệu doanh nghiệp để tăng khả năng xuất hiện trong top tìm kiếm khi khách hàng gõ các dịch vụ làm đẹp tại thành phố của bạn trên Google.',
    inclusions: [
      'Nghiên cứu bộ từ khóa ngách địa phương (Local Keyword Research)',
      'Tối ưu On-page SEO toàn diện cho từng trang dịch vụ',
      'Tối ưu Local SEO kết nối mạnh mẽ với Google Business Profile',
      'Tối ưu hóa nội dung chuẩn chuyên gia làm đẹp (Content Optimization)',
      'Chuẩn hóa Title, Meta Description, Thẻ Alt hình ảnh & Heading H1-H3',
      'Xây dựng liên kết nội bộ (Internal Linking) tăng sức mạnh website',
      'Phân tích đối thủ cạnh tranh trực tiếp trong bán kính 10 dặm',
      'Theo dõi bảng xếp hạng từ khóa hàng tuần',
      'Báo cáo tiến độ và sự tăng trưởng thứ hạng chi tiết mỗi tháng',
      'Chính sách cam kết kết quả rõ ràng theo hợp đồng'
    ],
    ctaText: 'BẮT ĐẦU SEO',
    popular: true,
    qaBreakdown: {
      problem: 'Quảng cáo Google Ads ngưng nạp tiền là ngưng có khách. Website nếu không làm SEO sẽ chìm nghỉm ở trang 2, trang 3 của Google, nơi khách hàng không bao giờ bấm tới.',
      solution: 'Đình Hiển Digital tối ưu cấu trúc kỹ thuật website, từ khóa địa phương, thẻ meta, tốc độ và bài viết dịch vụ để Google đánh giá website của bạn là nguồn uy tín nhất tại khu vực.',
      benefit: 'Dòng khách hàng tự nhiên ổn định và bền vững tháng này qua tháng khác mà không tốn tiền trả cho từng cú nhấp chuột của quảng cáo.',
      cost: '$199/tháng. Mức phí quản trị SEO tối ưu cho doanh nghiệp vừa và nhỏ.',
      whyHireUs: 'Cam kết minh bạch: Nếu sau thời gian quy định không đạt mục tiêu từ khóa đã thống nhất, chúng tôi tiếp tục thực hiện mà không thu thêm phí quản lý cho đến khi đạt mục tiêu theo điều khoản hợp đồng.'
    }
  },
  {
    id: 'entity-seo',
    code: 'SERVICE 05',
    title: 'ENTITY SEO',
    subtitle: 'Xác thực thực thể thương hiệu trên Internet',
    tagline: 'Định danh salon của bạn là một doanh nghiệp thật, có thật và uy tín trong mắt Google AI',
    priceDisplay: '$99',
    priceNote: 'Gói khởi điểm 100 Entity ($99), 300 Entity ($199) hoặc 500 Entity ($299)',
    period: '/lần',
    description: 'Xây dựng và củng cố hệ thống thông tin thương hiệu, hồ sơ doanh nghiệp và các tín hiệu đồng nhất trực tuyến giúp thuật toán Google hiểu rõ salon của bạn là ai, ở đâu và làm gì.',
    inclusions: [
      'Nghiên cứu cấu trúc thực thể thương hiệu (Entity Research)',
      'Đồng bộ 100% chuẩn NAP (Name, Address, Phone) trên các trang danh bạ lớn',
      'Tạo lập và xác thực 100 – 500 hồ sơ vệ tinh mạng xã hội & danh bạ địa phương uy tín',
      'Tạo tín hiệu liên kết thương hiệu đa tầng (Brand Signals)',
      'Tối ưu hóa Entity Schema Markup cho website salon',
      'Tăng sức mạnh và độ tin cậy (Trust Rank) cho Google Maps & Website',
      'Bàn giao file báo cáo danh sách link Entity hoàn chỉnh'
    ],
    ctaText: 'XÂY DỰNG ENTITY',
    popular: false,
    options: [
      { name: '100 Entity Thương Hiệu', price: '$99 (Một lần)' },
      { name: '300 Entity Thương Hiệu', price: '$199 (Một lần)' },
      { name: '500 Entity Thương Hiệu Toàn Diện', price: '$299 (Một lần)' }
    ],
    qaBreakdown: {
      problem: 'Google không chắc chắn salon của bạn có thật hay không vì thông tin tên, địa chỉ, số điện thoại bị phân mảnh hoặc thiếu hồ sơ xác thực trên internet, khiến Google Maps khó lên Top.',
      solution: 'Chúng tôi tạo và chuẩn hóa 100 - 500 hồ sơ danh bạ kinh doanh, mạng xã hội, diễn đàn uy tín với thông tin đồng nhất 100% trỏ về salon của bạn.',
      benefit: 'Google nhận diện salon của bạn là một "Thực thể có thật và uy tín cao" (Entity Authority), từ đó giúp Google Maps và Website lên top nhanh và trụ hạng vững vàng hơn.',
      cost: '$99 / 100 Entity (Thực hiện 1 lần duy nhất, kết quả tồn tại vĩnh viễn).',
      whyHireUs: 'Tự tay đăng ký hàng trăm trang web mất hàng tuần làm thủ công. Chúng tôi có quy trình chuẩn, chọn lọc danh bạ uy tín chất lượng cao (High DA/PA) không bị spam.'
    }
  }
];

export const COMBO_PACKAGES: ComboPackage[] = [
  {
    id: 'social-starter',
    title: 'SOCIAL STARTER',
    priceDisplay: '$50 – $99',
    period: '/tháng',
    badge: 'Khởi đầu hoàn hảo',
    services: [
      'Facebook & Instagram Content',
      '30–60 bài đăng thiết kế chỉn chu',
      'Caption tiếng Anh chuẩn ngành Beauty',
      'Hashtag & Khung giờ vàng'
    ],
    description: 'Phù hợp cho salon mới mở hoặc salon muốn duy trì hình ảnh fanpage/Instagram đẹp mắt, uy tín mà không tốn nhiều chi phí.',
    suitableFor: 'Salon cần xây dựng hình ảnh chuyên nghiệp trên mạng xã hội',
    ctaText: 'CHỌN GÓI NÀY'
  },
  {
    id: 'google-growth',
    title: 'GOOGLE GROWTH',
    priceDisplay: '$249',
    period: '/tháng',
    badge: 'Tăng khách nhanh nhất',
    isPopular: true,
    services: [
      'Google Search Ads',
      'Google Maps Ads & Local Targeting',
      'Nghiên cứu từ khóa & Ad copy',
      'Báo cáo & Tối ưu chuyển đổi'
    ],
    description: 'Giải pháp thu hút khách hàng có nhu cầu làm đẹp ngay lập tức tại khu vực xung quanh salon của bạn.',
    suitableFor: 'Salon muốn có thêm cuộc gọi và khách đặt hẹn ngay lập tức',
    ctaText: 'CHỌN GÓI NÀY'
  },
  {
    id: 'online-growth',
    title: 'ONLINE GROWTH',
    priceDisplay: '$448',
    period: '/tháng',
    badge: 'Toàn diện & Bền vững',
    services: [
      'Google Ads + Maps ($249)',
      'Local SEO & Website SEO ($199)',
      'Kết hợp vừa có khách nhanh vừa lên top tự nhiên lâu dài',
      'Tiết kiệm thời gian quản lý cho chủ tiệm'
    ],
    description: 'Chiến lược kép mạnh mẽ: Google Ads mang lại khách ngay hôm nay, trong khi SEO xây dựng nền tảng vững chắc cho tương lai.',
    suitableFor: 'Salon muốn bứt phá doanh thu và dẫn đầu khu vực kinh doanh',
    ctaText: 'CHỌN GÓI NÀY'
  },
  {
    id: 'full-digital',
    title: 'FULL DIGITAL',
    priceDisplay: 'Tùy nhu cầu',
    period: 'Tùy chỉnh',
    badge: 'Giải pháp trọn gói',
    services: [
      'Social Media (FB & IG)',
      'Google Ads & Google Maps',
      'Thiết kế Website Salon',
      'SEO Website & Local SEO',
      'Entity SEO 300 - 500 hồ sơ'
    ],
    description: 'Đội ngũ marketing riêng cho salon của bạn. Xử lý toàn bộ từ website, mạng xã hội, quảng cáo đến công cụ tìm kiếm.',
    suitableFor: 'Hệ thống chuỗi salon hoặc chủ tiệm muốn bàn giao 100% khâu marketing online',
    ctaText: 'NHẬN BÁO GIÁ RIÊNG'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'beauty-focus',
    number: '01',
    title: 'CHUYÊN VỀ BEAUTY BUSINESS',
    description: 'Chúng tôi chỉ tập trung vào Nail Salon, Spa, Lash, Brow & PMU. Chúng tôi hiểu rõ khách hàng Mỹ/Canada/Úc thích gì, mùa nào đông khách, dịch vụ nào mang lại lợi nhuận cao nhất cho salon.',
    icon: 'Sparkles'
  },
  {
    id: 'affordable-pricing',
    number: '02',
    title: 'GIÁ DỄ TIẾP CẬN',
    description: 'Các gói dịch vụ được thiết kế linh hoạt với mức giá chỉ từ $50/tháng, phù hợp ngân sách của mọi tiệm nail/spa nhỏ và vừa mà không cần ký hợp đồng ràng buộc phức tạp.',
    icon: 'DollarSign'
  },
  {
    id: 'transparency',
    number: '03',
    title: 'MINH BẠCH 100%',
    description: 'Biết rõ bạn đang thuê dịch vụ gì, hạng mục gồm những gì và chi phí bao nhiêu. Không có chi phí ẩn, ngân sách quảng cáo nạp trực tiếp cho Google.',
    icon: 'ShieldCheck'
  },
  {
    id: 'business-focus',
    number: '04',
    title: 'TẬP TRUNG VÀO MỤC TIÊU KINH DOANH',
    description: 'Không làm marketing cho đẹp mắt hình thức. Mọi hoạt động từ hình ảnh, từ khóa, quảng cáo đều hướng tới mục tiêu tối thượng: Tăng lượt gọi điện, chỉ đường và đặt lịch hẹn (Booking).',
    icon: 'TrendingUp'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'BƯỚC 1',
    title: 'LIÊN HỆ',
    desc: 'Bạn gửi thông tin về tiệm salon, vị trí khu vực và mục tiêu kinh doanh hiện tại.',
    icon: 'MessageSquare'
  },
  {
    step: 'BƯỚC 2',
    title: 'PHÂN TÍCH',
    desc: 'Chúng tôi rà soát miễn phí tình trạng Website, Google Maps, Facebook và Instagram của bạn.',
    icon: 'Search'
  },
  {
    step: 'BƯỚC 3',
    title: 'ĐỀ XUẤT',
    desc: 'Bạn nhận được kế hoạch giải pháp phù hợp nhất với nhu cầu thực tế và ngân sách của tiệm.',
    icon: 'FileText'
  },
  {
    step: 'BƯỚC 4',
    title: 'TRIỂN KHAI',
    desc: 'Đình Hiển Digital bắt đầu thực hiện bài đăng, dựng website hoặc tối ưu chiến dịch quảng cáo.',
    icon: 'Rocket'
  },
  {
    step: 'BƯỚC 5',
    title: 'THEO DÕI & TỐI ƯU',
    desc: 'Đo lường kết quả thực tế, gửi báo cáo định kỳ và tối ưu liên tục để đạt hiệu quả cao nhất.',
    icon: 'BarChart3'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    salonName: 'Luxe Nail Spa & Lounge',
    category: 'Nail Salon',
    location: 'Houston, Texas, USA',
    countryFlag: '🇺🇸',
    servicesUsed: ['Google Ads + Maps', 'Social Media 60 bài', 'Thiết kế Website'],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    challenge: 'Salon mở được 2 năm nhưng lượng khách vãng lai không đều, Google Maps nằm ở vị trí số 14 tại khu vực Westheimer Rd, trang Facebook 1 tháng chỉ đăng 1-2 bài.',
    solution: 'Thiết kế lại website tốc độ cao tích hợp Square Booking, chạy chiến dịch Google Search "Nail salon near me" và tối ưu Entity Map.',
    metrics: [
      { label: 'Google Maps Rank', value: 'Top 3', sublabel: 'Từ vị trí #14 lên Top 3' },
      { label: 'Cuộc gọi trực tiếp', value: '+142/tháng', sublabel: 'Tăng trưởng qua Google Profile' },
      { label: 'Booking Online mới', value: '+35%', sublabel: 'Trong 60 ngày triển khai' }
    ],
    duration: '3 tháng triển khai'
  },
  {
    id: 'case-2',
    salonName: 'Zen Organic Beauty Spa',
    category: 'Beauty Spa',
    location: 'Toronto, Ontario, Canada',
    countryFlag: '🇨🇦',
    servicesUsed: ['Local SEO', 'Entity SEO 300', 'Website $349/năm'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    challenge: 'Cạnh tranh gắt gao với các chuỗi spa lớn tại downtown Toronto, chi phí chạy ads đắt đỏ trong khi website cũ không có mặt trên trang 1 Google.',
    solution: 'Triển khai Local SEO tập trung vào từ khóa ngách "organic facial treatment", "deep tissue massage for women" và 300 Entity xác thực.',
    metrics: [
      { label: 'Từ khóa lên Trang 1', value: '18 từ khóa', sublabel: 'Tìm kiếm địa phương có ý định mua cao' },
      { label: 'Traffic tự nhiên', value: '+210%', sublabel: 'Khách hàng organic đều đặn' },
      { label: 'Chi phí / Khách hàng', value: 'Tiết kiệm 45%', sublabel: 'So với chỉ chạy Ads đơn thuần' }
    ],
    duration: '4 tháng triển khai'
  },
  {
    id: 'case-3',
    salonName: 'Pure Glow Lash & PMU Art',
    category: 'Lash & Brow',
    location: 'Melbourne, Victoria, Australia',
    countryFlag: '🇦🇺',
    servicesUsed: ['Social Media $50/tháng', 'Google Ads $249/tháng'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    challenge: 'Studio nối mi & phun xăm thẩm mỹ chuyên nghiệp nhưng ít người biết đến, hình ảnh trên Instagram chưa đồng bộ tone màu sang trọng.',
    solution: 'Cải tổ giao diện Instagram với feed thẩm mỹ pastel, đăng 30 bài/tháng kèm bảng giá rõ ràng và chạy Google Local Ads nhắm bán kính 8km.',
    metrics: [
      { label: 'Lượt tương tác IG', value: '+320%', sublabel: 'Nhiều khách nhắn tin hỏi giá' },
      { label: 'Lịch hẹn làm Full Set', value: 'Đầy lịch 3 tuần', sublabel: 'Lịch trống giảm rõ rệt' },
      { label: 'ROI Quảng Cáo', value: '4.8x', sublabel: 'Doanh thu thu về trên mỗi đô la chi tiêu' }
    ],
    duration: '2 tháng triển khai'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Chị Jenny Nguyễn',
    role: 'Chủ tiệm Luxe Nails',
    salonName: 'Luxe Nails & Lounge',
    location: 'Dallas, TX',
    countryFlag: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    serviceUsed: 'Google Ads & Website',
    quote: 'Trước đây tiệm mình tự chạy ads tốn tiền mà toàn khách hỏi lung tung không tới. Từ ngày giao cho Đình Hiển Digital quản lý, điện thoại tiệm reo liên tục, khách đặt hẹn làm dip và bột rất đều. Rất đáng đồng tiền.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Anh Minh Trần',
    role: 'Quản lý Salon',
    salonName: 'Ocean Spa & Nails',
    location: 'Orange County, CA',
    countryFlag: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    serviceUsed: 'Social Media 60 bài & Local SEO',
    quote: 'Tiệm mình bận làm khách suốt ngày không có thời gian đăng Facebook. Gói $99/tháng của Hiển làm việc quá chuyên nghiệp, hình ảnh móng tay thiết kế đẹp, caption tiếng Mỹ chuẩn, khách vào xem ai cũng khen tiệm sang.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Chị Sarah Lê',
    role: 'Chủ Studio',
    salonName: 'Glow Brow & Lash',
    location: 'Sydney, NSW',
    countryFlag: '🇦🇺',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    serviceUsed: 'Website $349/năm & Google Maps',
    quote: 'Làm website bên Úc họ đòi hơn $2,000 AUD mà còn phải chờ cả tháng. Bên Đình Hiển làm chỉ trong 4 ngày là xong web đẹp lung linh, gắn sẵn nút book lịch Fresha mượt mà. Support cực kỳ nhiệt tình và đúng giờ.',
    rating: 5
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Giá dịch vụ đã bao gồm ngân sách quảng cáo Google chưa?',
    answer: 'Không. Phí $249/tháng là phí quản lý và tối ưu chuyên sâu của Đình Hiển Digital. Ngân sách quảng cáo (Ad Spend) do bạn trực tiếp thanh toán cho Google bằng thẻ tín dụng của salon. Bạn hoàn toàn chủ động điều chỉnh ngân sách (ví dụ $10, $20 hay $50/ngày) bất kỳ lúc nào.',
    category: 'pricing'
  },
  {
    question: 'Tôi có thể chỉ thuê Social Media không?',
    answer: 'Có. Bạn hoàn toàn có thể chỉ chọn gói Social Media (Facebook & Instagram từ $50 - $99/tháng) để chăm sóc fanpage mà không bắt buộc phải mua kèm các dịch vụ khác.',
    category: 'service'
  },
  {
    question: 'Tôi có thể chỉ thuê Google Ads không?',
    answer: 'Có. Nếu salon của bạn đã có website hoặc chỉ muốn tập trung tối đa vào việc kéo khách gọi điện ngay lập tức, bạn có thể thuê riêng gói Google Ads & Google Maps ($249/tháng).',
    category: 'service'
  },
  {
    question: 'Website $349 là trả một lần hay hàng năm?',
    answer: 'Gói thiết kế website chuyên nghiệp có giá $349/năm. Mức giá này đã bao gồm toàn bộ công thiết kế giao diện theo yêu cầu, hệ thống Hosting server tốc độ cao, chứng chỉ bảo mật SSL, bảo trì kỹ thuật và hỗ trợ cập nhật thay đổi menu/giá suốt cả năm.',
    category: 'pricing'
  },
  {
    question: 'SEO có cam kết lên top không?',
    answer: 'Có cam kết theo mục tiêu từ khóa và khu vực đã thống nhất trong hợp đồng dịch vụ. Nếu hết thời hạn chiến dịch cam kết mà chưa đạt mục tiêu đã thỏa thuận, Đình Hiển Digital sẽ tiếp tục tối ưu mà KHÔNG thu thêm bất kỳ chi phí quản lý nào cho đến khi đạt mục tiêu.',
    category: 'guarantee'
  },
  {
    question: 'Entity SEO là gì?',
    answer: 'Nói một cách đơn giản, Entity SEO là việc đăng ký và đồng bộ thông tin của salon (Tên tiệm, Địa chỉ, Số điện thoại, Dịch vụ) lên hàng trăm trang danh bạ và mạng xã hội uy tín. Việc này giúp "chứng minh" với Google rằng salon của bạn là một doanh nghiệp thật, có tiếng tăm tại địa phương, từ đó giúp Google Maps và website dễ dàng lên Top hơn.',
    category: 'technical'
  },
  {
    question: 'Tôi có thể kết hợp nhiều dịch vụ không?',
    answer: 'Có. Bạn có thể tự do lựa chọn các dịch vụ riêng lẻ hoặc kết hợp thành các gói Combo (ví dụ: Google Ads + Local SEO $448/tháng) để nhận được sự đồng bộ tối đa và tiết kiệm chi phí.',
    category: 'service'
  },
  {
    question: 'Tôi ở Mỹ/Canada/Úc thì thanh toán và trao đổi bằng cách nào?',
    answer: 'Chúng tôi hỗ trợ các hình thức thanh toán quốc tế cực kỳ thuận tiện qua Zelle, Venmo, Wire Transfer ngân hàng Mỹ, PayPal, Credit Card qua Stripe, hoặc Chuyển khoản ngân hàng Úc/Canada/Việt Nam. Toàn bộ quá trình trao đổi, duyệt mẫu thiết kế và gửi báo cáo diễn ra trực tiếp qua Zalo, WhatsApp, iMessage hoặc Email.',
    category: 'pricing'
  }
];
