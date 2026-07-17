import React, { useState, useEffect } from 'react'
import { 
  Shield, 
  Activity, 
  Heart, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Globe, 
  Award, 
  Info, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  Flame,
  FileCheck,
  ChevronLeft,
  ChevronDown,
  Check
} from 'lucide-react'

function Reveal({ children, className = "", delay = 0, effect = "reveal-fade-up" }) {
  const ref = React.useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${effect} ${visible ? 'active' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('vi')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMechanism, setActiveMechanism] = useState(0)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [activeProductImage, setActiveProductImage] = useState('/images/product2.jpg')



  const productImages = [
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
    '/images/product5.jpg',
    '/images/product6.jpg',
  ]

  const mechanisms = [
    {
      title: lang === 'vi' ? "Phục hồi 1 (Patch the Breach)" : "Recovery 1 (Patch the Breach)",
      tag: lang === 'vi' ? "2 Phục Hồi" : "2 Recovery",
      desc: lang === 'vi' 
        ? "Giảm tiêu hao chất nhầy niêm mạc, củng cố hàng rào ruột, ngăn chặn sự xâm nhập của các chất gây hại."
        : "Reduces mucosal layer depletion, reinforces the intestinal barrier, and blocks harmful substance invasion.",
      icon: Shield,
    },
    {
      title: lang === 'vi' ? "Phục hồi 2 (Strengthen the Barrier)" : "Recovery 2 (Strengthen the Barrier)",
      tag: lang === 'vi' ? "2 Phục Hồi" : "2 Recovery",
      desc: lang === 'vi'
        ? "Tăng cường các liên kết chặt chẽ (tight junctions) của biểu mô ruột, thúc đẩy sự phục hồi nhanh chóng sau các tổn thương."
        : "Strengthens epithelial tight junctions, promoting rapid recovery from intestinal damage.",
      icon: Activity,
    },
    {
      title: lang === 'vi' ? "Bảo vệ 1 (Clear Harmful Pathogens)" : "Protection 1 (Clear Harmful Pathogens)",
      tag: lang === 'vi' ? "3 Bảo Vệ" : "3 Protection",
      desc: lang === 'vi'
        ? "Hoạt động như 'mồi nhử sinh học' (decoy receptors) để bám dính lấy mầm bệnh và đào thải chúng ra ngoài một cách tự nhiên."
        : "Acts as decoy receptors to bind pathogens and naturally eliminate them from the body.",
      icon: Sparkles,
    },
    {
      title: lang === 'vi' ? "Bảo vệ 2 (Block Pathogen Adhesion)" : "Protection 2 (Block Pathogen Adhesion)",
      tag: lang === 'vi' ? "3 Bảo Vệ" : "3 Protection",
      desc: lang === 'vi'
        ? "Bắt chước cấu trúc glycan của tế bào ruột để ngăn chặn hiệu quả mầm bệnh bám dính vào thành ruột của trẻ."
        : "Mimics glycan structures on intestinal cells to block pathogen adhesion to the child's gut wall.",
      icon: X,
    },
    {
      title: lang === 'vi' ? "Bảo vệ 3 (Support Healthy Microbiome)" : "Protection 3 (Support Healthy Microbiome)",
      tag: lang === 'vi' ? "3 Bảo Vệ" : "3 Protection",
      desc: lang === 'vi'
        ? "Kích thích chọn lọc sự phát triển của lợi khuẩn Bifidobacterium giúp cân bằng hệ vi sinh đường ruột khỏe mạnh."
        : "Selectively stimulates Bifidobacterium growth to foster a balanced and healthy gut microbiome.",
      icon: Heart,
    },
  ]

  const clinicalTimeline = [
    {
      time: lang === 'vi' ? "Ngày 7" : "Day 7",
      title: lang === 'vi' ? "Cân Bằng Đầu Tiên" : "First Balance",
      desc: lang === 'vi'
        ? "Tăng cường mạnh mẽ lợi khuẩn đường ruột và giảm thiểu nguy cơ nhiễm trùng từ các vi khuẩn cơ hội."
        : "Substantially boosts beneficial gut flora while reducing infection risk from opportunistic bacteria."
    },
    {
      time: lang === 'vi' ? "Ngày 15" : "Day 15",
      title: lang === 'vi' ? "Củng Cố Hàng Rào" : "Barrier Reinforcement",
      desc: lang === 'vi'
        ? "Tiêu hóa cải thiện rõ rệt, giảm táo bón, phân mềm và tạo thành khuôn ổn định hơn."
        : "Visibly improves digestion, reducing constipation, with softer and well-formed stools."
    },
    {
      time: lang === 'vi' ? "Tuần 16" : "Week 16",
      title: lang === 'vi' ? "Bảo Vệ Toàn Diện" : "Complete Protection",
      desc: lang === 'vi'
        ? "Giảm tỷ lệ mắc các bệnh nhiễm trùng đường hô hấp, đồng thời giảm mức độ nghiêm trọng khi nhiễm virus RSV."
        : "Reduces incidence of respiratory infections and mitigates the severity of RSV virus infections."
    }
  ]

  const scienceTimeline = [
    {
      time: lang === 'vi' ? "Cuối Thế Kỷ 19" : "Late 19th Century",
      title: lang === 'vi' ? "Phân Lập Carbohydrate Sữa Mẹ Đầu Tiên" : "First Human Milk Carbohydrates Isolated",
      desc: lang === 'vi'
        ? "Các carbohydrate đặc trưng trong sữa mẹ lần đầu tiên được phân lập thành công. Phát hiện ra \"yếu tố bifidus\" (bifidus factor) - tạo nền móng vững chắc cho các nghiên cứu về HMOs sau này."
        : "Specific carbohydrates in human milk were successfully isolated for the first time. Discovery of the 'bifidus factor' laid the groundwork for future HMO research.",
    },
    {
      time: lang === 'vi' ? "Năm 1954" : "1954",
      title: lang === 'vi' ? "Xác Định Bản Chất HMOs" : "Defining the Nature of HMOs",
      desc: lang === 'vi'
        ? "Xác định thành công yếu tố kích thích lợi khuẩn Bifidobacterium trong sữa mẹ chính là các oligosaccharide cấu trúc phức tạp (HMOs)."
        : "Confirmed that the Bifidobacterium growth-promoting factor in human milk consists of complex oligosaccharides (HMOs).",
    },
    {
      time: lang === 'vi' ? "Năm 2000" : "2000",
      title: lang === 'vi' ? "Khám Phá Hơn 200 Cấu Trúc HMOs" : "Over 200 HMO Structures Discovered",
      desc: lang === 'vi'
        ? "Phân lập và xác định cấu trúc hóa học thành công của hơn 200 loại HMOs khác nhau từ sữa mẹ, mở ra thời kỳ nghiên cứu ứng dụng lâm sàng thực tiễn."
        : "Successfully isolated and mapped the structures of over 200 distinct HMOs from breast milk, paving the way for clinical applications.",
    },
    {
      time: lang === 'vi' ? "Năm 2015" : "2015",
      title: lang === 'vi' ? "Kiểm Chứng Lâm Sàng Cho Trẻ Sơ Sinh" : "Clinical Validation in Infants",
      desc: lang === 'vi'
        ? "Các bằng chứng y khoa lâm sàng bắt đầu chứng minh và xác nhận tính an toàn tuyệt đối cùng hiệu quả vượt trội của HMOs đối với sự phát triển của trẻ nhỏ."
        : "Clinical evidence began validating the absolute safety and remarkable efficacy of HMOs on infant development.",
    },
    {
      time: lang === 'vi' ? "Năm 2016" : "2016",
      title: lang === 'vi' ? "Thành Lập HereMOM Singapore & Launch 2'-FL" : "HereMOM Singapore & 2'-FL Launch",
      desc: lang === 'vi'
        ? "HereMOM thành lập tại Singapore đúng vào năm thế giới ra mắt 2'-FL HMO mô phỏng nguồn bảo vệ trong sữa mẹ. Hãng phát triển thành công 2'-FL như một HMO cốt lõi."
        : "HereMOM was founded in Singapore, matching the global release of 2'-FL HMO mimicking the maternal immune shield, establishing 2'-FL as its core ingredient.",
    },
    {
      time: lang === 'vi' ? "Năm 2023" : "2023",
      title: lang === 'vi' ? "Đột Phá Công Thức 6-HMOs Shield Powder" : "6-HMOs Shield Powder Formula Breakthrough",
      desc: lang === 'vi'
        ? "Hoàn thiện công thức tối ưu tích hợp 6 loại HMOs tinh khiết (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) giúp trẻ xây dựng hệ tiêu hóa khỏe mạnh và miễn dịch kiên cố."
        : "Perfected the optimal formulation blending 6 pure HMOs (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) to build robust digestive health and fortified immunity.",
    },
  ]

  const certifications = [
    { name: "ISO 22000:2018", detail: lang === 'vi' ? "Hệ thống quản lý an toàn thực phẩm" : "Food safety management system" },
    { name: "SFA Approved", detail: lang === 'vi' ? "Cơ quan Thực phẩm Singapore cấp phép" : "Singapore Food Agency approved" },
    { name: lang === 'vi' ? "TÜV SÜD (Đức)" : "TÜV SÜD (Germany)", detail: lang === 'vi' ? "Chứng nhận chất lượng & an toàn toàn cầu" : "Global quality & safety certification" },
    { name: lang === 'vi' ? "Chứng nhận HALAL" : "HALAL Certified", detail: lang === 'vi' ? "Đạt chuẩn Halal quốc tế" : "International Halal certified" },
    { name: lang === 'vi' ? "FDA (Mỹ) Approved" : "FDA (USA) Approved", detail: lang === 'vi' ? "Thành phần HMOs được FDA chấp thuận an toàn" : "HMO ingredients FDA GRAS approved" },
    { name: lang === 'vi' ? "EFSA (Châu Âu) Approved" : "EFSA (Europe) Approved", detail: lang === 'vi' ? "Cơ quan An toàn Thực phẩm Châu Âu chứng nhận" : "European Food Safety Authority certified" },
  ]

  const partnerLogos = [
    { name: "Motherswork", subtitle: "Singapore & Vietnam" },
    { name: "Hatched", subtitle: "Confinement Oasis" }
  ]

  const changeProductImage = (dir) => {
    const idx = productImages.indexOf(activeProductImage)
    if (dir === 'next') {
      const nextIdx = (idx + 1) % productImages.length
      setActiveProductImage(productImages[nextIdx])
    } else {
      const prevIdx = (idx - 1 + productImages.length) % productImages.length
      setActiveProductImage(productImages[prevIdx])
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans antialiased selection:bg-secondary/20 selection:text-secondary">
      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/75 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
              alt="HereMOM Logo" 
            />
            {/* <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-secondary">
              HereMOM<span className="text-xs align-super font-sans">®</span>
            </span> */}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              {lang === 'vi' ? 'Câu chuyện' : 'Story'}
            </a>
            <a href="#science" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              {lang === 'vi' ? 'Khoa học 6HMOs' : '6HMOs Science'}
            </a>
            <a href="#product" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              {lang === 'vi' ? 'Sản phẩm' : 'Products'}
            </a>
            <a href="#awards" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              {lang === 'vi' ? 'Giải thưởng & Chứng nhận' : 'Awards & Certifications'}
            </a>
            <a href="#contact" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">
              {lang === 'vi' ? 'Liên hệ' : 'Contact'}
            </a>
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
                className="flex items-center gap-2 p-1 px-3 rounded-full border border-outline-variant/30 hover:bg-surface-variant/40 active:scale-95 transition-all shadow-sm bg-white/50 group"
                title={lang === 'vi' ? 'Chọn ngôn ngữ' : 'Select language'}
              >
                <img 
                  src={lang === 'vi' ? '/images/vietnam.png' : '/images/english.png'} 
                  alt={lang === 'vi' ? 'Vietnamese' : 'English'} 
                  className="w-7 h-7 object-contain rounded-full border border-outline/10 transition-transform group-hover:scale-105" 
                />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {lang === 'vi' ? 'VI' : 'EN'}
                </span>
                <ChevronDown size={14} className={`text-secondary transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <>
                  {/* Backdrop to close dropdown on click outside */}
                  <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)}></div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-44 bg-surface border border-outline-variant/30 rounded-2xl shadow-lg z-20 py-2 animate-fade-in-up">
                    <button
                      onClick={() => {
                        setLang('vi');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-primary-container/40 transition-colors ${lang === 'vi' ? 'font-semibold text-secondary' : 'text-on-surface-variant'}`}
                    >
                      <img src="/images/vietnam.png" alt="Tiếng Việt" className="w-6 h-6 rounded-full object-contain border border-outline/10" />
                      <span>Tiếng Việt</span>
                      {lang === 'vi' && <Check size={14} className="ml-auto text-secondary" />}
                    </button>
                    <button
                      onClick={() => {
                        setLang('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-primary-container/40 transition-colors ${lang === 'en' ? 'font-semibold text-secondary' : 'text-on-surface-variant'}`}
                    >
                      <img src="/images/english.png" alt="English" className="w-6 h-6 rounded-full object-contain border border-outline/10" />
                      <span>English</span>
                      {lang === 'en' && <Check size={14} className="ml-auto text-secondary" />}
                    </button>
                  </div>
                </>
              )}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-secondary text-on-secondary text-xs font-semibold tracking-wider uppercase shadow-sm hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-300"
            >
              {lang === 'vi' ? 'Tìm hiểu thêm' : 'Learn More'}
            </a>
          </div>

          {/* Mobile Right Side Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
                className="flex items-center gap-2 p-1 px-2.5 rounded-full border border-outline-variant/30 hover:bg-surface-variant/40 active:scale-95 transition-all shadow-sm bg-white/50 group"
                title={lang === 'vi' ? 'Chọn ngôn ngữ' : 'Select language'}
              >
                <img 
                  src={lang === 'vi' ? '/images/vietnam.png' : '/images/english.png'} 
                  alt={lang === 'vi' ? 'Vietnamese' : 'English'} 
                  className="w-7 h-7 object-contain rounded-full border border-outline/10" 
                />
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  {lang === 'vi' ? 'VI' : 'EN'}
                </span>
                <ChevronDown size={12} className={`text-secondary transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <>
                  {/* Backdrop to close dropdown on click outside */}
                  <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)}></div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-40 bg-surface border border-outline-variant/30 rounded-2xl shadow-lg z-20 py-2 animate-fade-in-up">
                    <button
                      onClick={() => {
                        setLang('vi');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left text-xs sm:text-sm hover:bg-primary-container/40 transition-colors ${lang === 'vi' ? 'font-semibold text-secondary' : 'text-on-surface-variant'}`}
                    >
                      <img src="/images/vietnam.png" alt="Tiếng Việt" className="w-5 h-5 rounded-full object-contain border border-outline/10" />
                      <span>Tiếng Việt</span>
                      {lang === 'vi' && <Check size={12} className="ml-auto text-secondary" />}
                    </button>
                    <button
                      onClick={() => {
                        setLang('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left text-xs sm:text-sm hover:bg-primary-container/40 transition-colors ${lang === 'en' ? 'font-semibold text-secondary' : 'text-on-surface-variant'}`}
                    >
                      <img src="/images/english.png" alt="English" className="w-5 h-5 rounded-full object-contain border border-outline/10" />
                      <span>English</span>
                      {lang === 'en' && <Check size={12} className="ml-auto text-secondary" />}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-secondary hover:bg-secondary-container/20 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-b border-outline-variant/30 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              {lang === 'vi' ? 'Câu chuyện thương hiệu' : 'Brand Story'}
            </a>
            <a 
              href="#science" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              {lang === 'vi' ? 'Khoa học 6HMOs' : '6HMOs Science'}
            </a>
            <a 
              href="#product" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              {lang === 'vi' ? 'Sản phẩm Stage 3' : 'Stage 3 Product'}
            </a>
            <a 
              href="#awards" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              {lang === 'vi' ? 'Giải thưởng & Chứng nhận' : 'Awards & Certifications'}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              {lang === 'vi' ? 'Liên hệ' : 'Contact'}
            </a>
            <div className="pt-2">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center inline-block px-5 py-3 rounded-full bg-secondary text-on-secondary font-semibold text-sm hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              >
                {lang === 'vi' ? 'Liên hệ hợp tác' : 'B2B Collaboration'}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* 2. HERO BANNER */}
        <section className="relative overflow-hidden gold-gradient-bg min-h-[90vh] flex items-center py-16 md:py-24">
          {/* Subtle background overlay patterns */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-8 text-on-secondary-fixed">
              <Reveal effect="reveal-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wider text-secondary">HereMOM® Singapore</span>
                </div>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-on-secondary-fixed">
                  Original Nutrition Built to Protect
                </h1>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={200}>
                <p className="text-xl sm:text-2xl font-serif text-on-secondary-fixed-variant italic">
                  {lang === 'vi' ? 'Bảo vệ hệ miễn dịch nguyên bản của bé' : "Protect baby's original immune system"}
                </p>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={300}>
                <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-on-secondary-fixed/90 font-light">
                  {lang === 'vi'
                    ? 'Thương hiệu dinh dưỡng cao cấp đến từ Singapore, tiên phong cung cấp giải pháp bảo vệ hệ miễn dịch và tiêu hóa cho trẻ với sức mạnh từ 6 loại HMOs tinh khiết.'
                    : 'A premium nutrition brand from Singapore, pioneering in providing immune and digestive protection solutions for children with the power of 6 pure HMOs.'}
                </p>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={400}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#science" 
                    className="px-8 py-4 rounded-full bg-surface text-secondary font-semibold text-sm shadow-md hover:bg-surface-variant hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                  >
                    {lang === 'vi' ? 'Tìm hiểu khoa học' : 'Learn the Science'} <ChevronRight size={16} />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-semibold text-sm shadow-md hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    {lang === 'vi' ? 'Mua ngay' : 'Buy Now'}
                  </a>
                </div>
              </Reveal>
            </div>
 
            <div className="lg:col-span-5 flex justify-center">
              <Reveal effect="reveal-zoom-in" delay={300} className="w-full max-w-md">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-organic border-4 border-white/50 group">
                  <img 
                    src="/images/product.jpg" 
                    alt="HereMOM Product Package" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">{lang === 'vi' ? 'Hộp 28 gói bột HMOs 6-HMOs Shield Powder' : 'Box of 28 sachets of 6-HMOs Shield Powder'}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
 
        {/* 3. BRAND STORY */}
        <section id="story" className="py-20 md:py-28 bg-primary-container/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal effect="reveal-fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                  {lang === 'vi' ? 'Câu Chuyện Thương Hiệu & Sứ Mệnh' : 'Brand Story & Mission'}
                </h2>
                <div className="h-1 w-20 bg-secondary/30 mx-auto rounded-full"></div>
                <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
                  {lang === 'vi'
                    ? 'Nối dài tự nhiên sự bảo vệ dịu êm của mẹ, giúp lấp đầy khoảng trống miễn dịch trong quá trình khôn lớn của con trẻ.'
                    : "Naturally extending a mother's gentle protection to bridge the immunity gap in children's growth journey."}
                </p>
              </div>
            </Reveal>
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6 space-y-6">
                <Reveal effect="reveal-fade-right">
                  <div className="bg-surface/80 p-8 rounded-2xl border border-outline-variant/20 shadow-organic space-y-4">
                    <h3 className="text-xl font-bold text-secondary">{lang === 'vi' ? 'Lý do HereMOM ra đời' : 'Why HereMOM was Born'}</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      {lang === 'vi'
                        ? 'Trong môi trường sống hiện đại đầy biến động, thói quen sinh hoạt và chế độ dinh dưỡng không điều độ đôi khi khiến sữa mẹ không đáp ứng đủ dưỡng chất miễn dịch tối ưu cho bé.'
                        : 'In modern lifestyles, changing habits and irregular diets sometimes prevent breast milk from meeting a child\'s optimal immune requirements.'}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed font-light font-medium italic text-secondary">
                      {lang === 'vi'
                        ? '"HereMOM ra đời như một sự tiếp nối tự nhiên từ nguồn bảo vệ nguyên bản của mẹ, bổ sung dưỡng chất HMOs tinh khiết giúp tăng cường hàng rào miễn dịch của trẻ."'
                        : '"HereMOM was born as a natural continuation of a mother\'s original protection, supplementing pure HMOs to reinforce the child\'s immune barrier."'}
                    </p>
                  </div>
                </Reveal>
                
                <Reveal effect="reveal-fade-right" delay={150}>
                  <div className="bg-surface/80 p-8 rounded-2xl border border-outline-variant/20 shadow-organic space-y-4">
                    <h3 className="text-xl font-bold text-secondary">{lang === 'vi' ? 'Nguồn gốc & Công nghệ' : 'Origin & Technology'}</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      {lang === 'vi'
                        ? 'Sản phẩm được nghiên cứu chuyên sâu tại các phòng Lab hiện đại ở Trung Quốc, ứng dụng công nghệ sinh học lên men vi sinh tiên tiến từ đường tự nhiên để tạo ra cấu trúc 6 HMOs tinh khiết tuyệt đối, an toàn và hoàn toàn không biến đổi gen (Non-GMO).'
                        : 'Developed in advanced labs in China, utilizing state-of-the-art bio-fermentation from natural sugars to produce 100% pure, safe, and Non-GMO 6-HMO structures.'}
                    </p>
                  </div>
                </Reveal>

                {/* Product lifestyle images — 2×2 staggered grid */}
                <Reveal effect="reveal-fade-right" delay={300}>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Col 1 — top-aligned */}
                    <div className="flex flex-col gap-3">
                      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-organic">
                        <img
                          src="/images/product4.png"
                          alt="HereMOM product lifestyle"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-organic">
                        <img
                          src="/images/product5b.jpg"
                          alt="HereMOM mom and baby lifestyle"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                    {/* Col 2 — offset down for stagger effect */}
                    <div className="flex flex-col gap-3 mt-6">
                      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-organic">
                        <img
                          src="/images/product5.png"
                          alt="HereMOM 6HMOs product box"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-organic">
                        <img
                          src="/images/product1b.jpg"
                          alt="HereMOM 6HMOs boxes with lamp"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Timeline layout */}
              <div className="lg:col-span-6 space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-secondary/20">
                {scienceTimeline.map((item, idx) => (
                  <Reveal key={idx} effect="reveal-fade-left" delay={idx * 100} className="relative pl-12 group">
                    <div className="absolute left-[19px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary border-4 border-background group-hover:scale-150 transition-transform duration-300"></div>
                    
                    {/* Connecting Arrow */}
                    {idx < scienceTimeline.length - 1 && (
                      <div className="absolute left-[18px] -bottom-6 z-10 text-secondary/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                      </div>
                    )}

                    <div className="bg-surface p-6 rounded-xl border border-outline-variant/20 shadow-sm group-hover:shadow-md transition-shadow">
                      <span className="text-2xl font-bold text-secondary block font-serif mb-1">{item.time}</span>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Markets bar */}
            <div className="border-t border-outline-variant/30 pt-10 text-center">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant/70 font-semibold mb-6">
                {lang === 'vi' ? 'Thị Trường Hoạt Động' : 'Active Markets'}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-secondary font-medium tracking-wide">
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">🇸🇬 Singapore</span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">
                  {lang === 'vi' ? '🇻🇳 Việt Nam' : '🇻🇳 Vietnam'}
                </span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">
                  {lang === 'vi' ? '🇨🇳 Trung Quốc' : '🇨🇳 China'}
                </span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">
                  {lang === 'vi' ? '🇲🇾 Malaysia (Sắp ra mắt)' : '🇲🇾 Malaysia (Coming Soon)'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SCIENCE OF 6HMOs */}
        <section id="science" className="py-20 md:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal effect="reveal-fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary-container/30 px-3 py-1 rounded-full">Science & Tech</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                  {lang === 'vi' ? 'Khoa Học Về 6HMOs - Giải Đáp Chuyên Sâu' : '6HMOs Science - In-depth Q&A'}
                </h2>
                <p className="text-base text-on-surface-variant font-light max-w-2xl mx-auto">
                  {lang === 'vi'
                    ? 'HMOs (Human Milk Oligosaccharides) là nhóm dưỡng chất sinh học dồi dào thứ 3 trong sữa mẹ (chỉ sau Lactose và chất béo), chứa hàm lượng cao gấp 100 - 300 lần so với sữa bò hoặc sữa dê.'
                    : 'HMOs (Human Milk Oligosaccharides) are the 3rd most abundant bioactive component in human milk (after Lactose and lipids), with concentrations 100 to 300 times higher than cow or goat milk.'}
                </p>
              </div>
            </Reveal>

            {/* In-depth Q&A layout (no story.png, centered) */}
            <div className="max-w-4xl mx-auto mb-24 space-y-6">
              <Reveal effect="reveal-fade-up">
                <div className="space-y-2 text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-on-surface">
                    {lang === 'vi' ? <>Cơ Chế <span className="text-secondary">"2 Phục Hồi + 3 Bảo Vệ"</span></> : <>Mechanism <span className="text-secondary">"2 Recovery + 3 Protection"</span></>}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light">
                    {lang === 'vi'
                      ? 'Sự khác biệt đột phá của công thức 6-HMOs Shield Powder của HereMOM giúp xây dựng hệ tiêu hóa và miễn dịch kiên cố:'
                      : "The breakthrough formula of HereMOM's 6-HMOs Shield Powder builds a fortified digestive and immune system:"}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-4">
                {mechanisms.map((mech, idx) => {
                  const MechIcon = mech.icon
                  const isActive = activeMechanism === idx
                  const isPhucHoi = mech.tag.includes('Phục Hồi') || mech.tag.includes('Recovery')
                  return (
                    <Reveal key={idx} effect="reveal-fade-up" delay={idx * 100} className="w-full">
                      <div 
                        onClick={() => setActiveMechanism(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? isPhucHoi 
                              ? 'bg-amber-50/80 border-amber-500/50 shadow-md scale-[1.01]' 
                              : 'bg-emerald-50/80 border-emerald-500/50 shadow-md scale-[1.01]'
                            : 'bg-surface border-outline-variant/30 hover:border-secondary/30 hover:bg-primary-container/10'
                        }`}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={`p-2.5 rounded-xl transition-all ${
                            isActive 
                              ? isPhucHoi 
                                ? 'bg-amber-600 text-white shadow-sm' 
                                : 'bg-emerald-600 text-white shadow-sm' 
                              : isPhucHoi 
                                ? 'bg-amber-50/80 text-amber-700 border border-amber-100' 
                                : 'bg-emerald-50/80 text-emerald-700 border border-emerald-100'
                          }`}>
                            <MechIcon size={20} className="w-5 h-5 flex-shrink-0" />
                          </div>
                          <div className="flex-1 space-y-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 w-full">
                              <h4 className="font-semibold text-sm sm:text-base text-on-surface leading-snug">{mech.title}</h4>
                              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full w-fit whitespace-nowrap self-start sm:self-center transition-colors ${
                                isPhucHoi ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                              }`}>
                                {mech.tag}
                              </span>
                            </div>
                            {isActive && (
                              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-2 font-light animate-fade-in-up">
                                {mech.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            {/* Clinical timeline */}
            <Reveal effect="reveal-fade-up">
              <div className="bg-primary-container/40 rounded-3xl p-8 md:p-12 border border-outline-variant/30">
                <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
                  <h3 className="font-serif text-2xl font-bold">
                    {lang === 'vi' ? 'Hiệu Quả Lâm Sàng Được Chứng Minh' : 'Clinically Proven Efficacy'}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light">
                    {lang === 'vi'
                      ? 'Lộ trình thay đổi sinh học đáng kinh ngạc của trẻ được chứng minh lâm sàng:'
                      : 'The clinically proven biological transition of children over time:'}
                  </p>
                </div>

                {/* Responsive Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {clinicalTimeline.map((item, idx) => {
                    const isActive = activeTimeline === idx
                    return (
                      <Reveal key={idx} effect="reveal-fade-up" delay={idx * 100}>
                        <div 
                          onClick={() => setActiveTimeline(idx)}
                          className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center md:text-left h-full ${
                            isActive 
                              ? 'bg-surface border-secondary shadow-md scale-105' 
                              : 'bg-surface/50 border-outline-variant/20 hover:bg-surface'
                          }`}
                        >
                          <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{item.time}</span>
                          <h4 className="font-bold text-base text-on-surface mb-2">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. PRODUCT DETAIL - HEREMOM STAGE 3 */}
        <section id="product" className="py-20 md:py-28 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-8">
                <Reveal effect="reveal-fade-up">
                  <div className="space-y-4">
                    <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                      {lang === 'vi' ? 'Sản Phẩm Độc Quyền Việt Nam' : 'Exclusive Product in Vietnam'}
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                      HereMOM® Stage 3
                    </h2>
                    <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                      {lang === 'vi' ? (
                        <>
                          Mặc dù HereMOM có 3 dòng (Stage 1, 2, 3), nhưng thị trường Việt Nam tập trung cung cấp dòng <strong>Stage 3</strong> cao cấp dành riêng cho trẻ từ <strong>36 tháng tuổi trở lên</strong> nhằm đồng hành bảo vệ trẻ trong giai đoạn tiếp xúc môi trường bên ngoài nhiều nhất.
                        </>
                      ) : (
                        <>
                          Although HereMOM has 3 stages (Stage 1, 2, 3), the Vietnamese market focuses on providing the premium <strong>Stage 3</strong> specifically formulated for children from <strong>36 months and older</strong> to accompany them during their active exploration phase.
                        </>
                      )}
                    </p>
                  </div>
                </Reveal>

                {/* Pure Table Details */}
                <Reveal effect="reveal-fade-up" delay={100}>
                  <div className="bg-surface rounded-2xl p-6 border border-outline-variant/30 space-y-4 shadow-sm">
                    <h3 className="font-semibold text-base text-secondary flex items-center gap-2">
                      <Info size={16} /> {lang === 'vi' ? 'Bảng thành phần tinh khiết "100% HMOs"' : 'Pure "100% HMOs" Ingredient List'}
                    </h3>
                    <div className="h-px bg-outline-variant/20"></div>
                    <ul className="space-y-3 text-xs sm:text-sm font-light text-on-surface-variant">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span>
                          {lang === 'vi' ? (
                            <><strong>Hàm lượng cao cực đại:</strong> 2000mg HMOs nguyên chất trong mỗi gói nhỏ (2g).</>
                          ) : (
                            <><strong>Maximal Concentration:</strong> 2000mg pure HMOs inside every single sachet (2g).</>
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span>
                          {lang === 'vi' ? (
                            <><strong>Công thức hiệp đồng:</strong> Phối hợp tối ưu 6 loại HMOs tinh khiết (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) đem lại hiệu quả "1+1 &gt; 2".</>
                          ) : (
                            <><strong>Synergistic Formula:</strong> Optimally combining 6 pure HMOs (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) for a "1+1 &gt; 2" clinical effect.</>
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span>
                          {lang === 'vi' ? (
                            <><strong>Cam kết 4 KHÔNG:</strong> Không phụ gia, Không đường ngọt, Không hương liệu tổng hợp, Không chất bảo quản.</>
                          ) : (
                            <><strong>4-FREE Guarantee:</strong> Free from additives, sugar sweeteners, artificial flavors, and preservatives.</>
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </Reveal>

                {/* 4 Main Benefits Grid */}
                <Reveal effect="reveal-fade-up" delay={200}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Shield className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{lang === 'vi' ? 'Miễn dịch tự nhiên' : 'Natural Immunity'}</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">
                          {lang === 'vi' ? 'Tăng sức đề kháng tối đa cho trẻ.' : 'Maximizing resistance for children.'}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Activity className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{lang === 'vi' ? 'Tiêu hóa khỏe mạnh' : 'Healthy Digestion'}</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">
                          {lang === 'vi' ? 'Cân bằng hệ vi sinh đường ruột.' : 'Balancing gut microbiome.'}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Sparkles className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{lang === 'vi' ? 'Hấp thu dinh dưỡng' : 'Nutrient Absorption'}</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">
                          {lang === 'vi' ? 'Giúp trẻ tăng trưởng cân đối.' : 'Supporting balanced growth.'}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Brain className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">{lang === 'vi' ? 'Phát triển trí não' : 'Brain Development'}</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">
                          {lang === 'vi' ? 'Hỗ trợ tư duy nhạy bén vượt trội.' : 'Supporting exceptional cognitive growth.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Usage Note */}
                <Reveal effect="reveal-fade-up" delay={300}>
                  <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/50 flex gap-3">
                    <Info className="text-amber-800 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h5 className="font-semibold text-xs sm:text-sm text-amber-900 uppercase tracking-wide">
                        {lang === 'vi' ? 'Hướng Dẫn Sử Dụng' : 'Usage Instructions'}
                      </h5>
                      <p className="text-xs text-amber-800/90 font-light mt-1 leading-relaxed">
                        {lang === 'vi' ? (
                          <>Sử dụng 1 - 2 gói/ngày. Hòa tan hoàn toàn với nước ấm hoặc sữa công thức, nước ép trái cây, cháo hoặc bột ăn dặm của trẻ. <strong>Lưu ý:</strong> Nhiệt độ chất lỏng dưới 45°C để bảo vệ cấu trúc hoạt tính của các HMOs.</>
                        ) : (
                          <>Use 1 - 2 sachets per day. Completely dissolve in warm water, infant formula, fruit juice, porridge, or weaning food. <strong>Note:</strong> Ensure liquid temperature is below 45°C to preserve the bio-active structure of the HMOs.</>
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Product Gallery */}
              <Reveal effect="reveal-zoom-in" delay={200} className="lg:col-span-6 space-y-6">
                {/* Main Image View */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-organic border border-outline-variant/30 bg-white p-6 flex items-center justify-center group">
                  <img 
                    src={activeProductImage} 
                    alt="HereMOM Stage 3 Detail View" 
                    className="max-h-[90%] max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Arrows */}
                  <button 
                    onClick={() => changeProductImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-surface/80 hover:bg-secondary hover:text-on-secondary rounded-full shadow-md transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => changeProductImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-surface/80 hover:bg-secondary hover:text-on-secondary rounded-full shadow-md transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Thumbnails Row */}
                <div className="flex justify-center gap-3 overflow-x-auto py-2">
                  {productImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveProductImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-xl bg-white border-2 transition-all flex items-center justify-center shadow-sm flex-shrink-0 ${
                        activeProductImage === img 
                          ? 'border-secondary scale-105 shadow-md' 
                          : 'border-outline-variant/20 hover:border-secondary/40'
                      }`}
                    >
                      <img src={img} className="max-h-full max-w-full object-contain" alt={`Thumbnail ${idx + 2}`} />
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. TRUST, CERTIFICATIONS & AWARDS */}
        <section id="awards" className="py-20 md:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal effect="reveal-fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary-container/30 px-3 py-1 rounded-full">Awards & Standards</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                  {lang === 'vi' ? 'Giải Thưởng & Chứng Nhận Quốc Tế' : 'International Awards & Certifications'}
                </h2>
                <div className="h-1 w-20 bg-secondary/30 mx-auto rounded-full"></div>
                <p className="text-base text-on-surface-variant font-light max-w-xl mx-auto">
                  {lang === 'vi'
                    ? 'Sản phẩm đạt các kiểm định chất lượng y tế nghiêm ngặt nhất tại Singapore và toàn cầu, đảm bảo sự an toàn tuyệt đối cho trẻ nhỏ.'
                    : 'Products meet the most stringent medical quality inspections in Singapore and globally, ensuring absolute safety for young children.'}
                </p>
              </div>
            </Reveal>

            {/* AWARDS IMAGES RENDER (CRITICAL REQUIREMENT) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Award Image 1 */}
              <Reveal effect="reveal-fade-right" className="h-full">
                <div className="bg-primary-container/20 rounded-3xl p-6 border border-outline-variant/20 flex flex-col items-center shadow-sm group h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 border border-outline-variant/10 shadow-inner flex items-center justify-center">
                    <img 
                      src="/images/award.png" 
                      alt="SIFST Food Product Awards 2026-2028 Certificate" 
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h4 className="mt-5 text-lg font-serif font-bold text-secondary text-center">SIFST Food Product Awards 2026-2028</h4>
                  <p className="text-xs text-on-surface-variant font-light text-center mt-1">
                    {lang === 'vi'
                      ? "Đạt giải thưởng vinh dự (Judges' Special Commendation) tại Singapore trao bởi Hiệp hội Khoa học và Công nghệ Thực phẩm Singapore."
                      : 'Won the prestigious Judges\' Special Commendation award in Singapore presented by the Singapore Institute of Food Science and Technology.'}
                  </p>
                </div>
              </Reveal>

              {/* Award Image 2 */}
              <Reveal effect="reveal-fade-left" className="h-full">
                <div className="bg-primary-container/20 rounded-3xl p-6 border border-outline-variant/20 flex flex-col items-center shadow-sm group h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 border border-outline-variant/10 shadow-inner flex items-center justify-center">
                    <img 
                      src="/images/award2.png" 
                      alt="HereMOM Award Certificate 2" 
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h4 className="mt-5 text-lg font-serif font-bold text-secondary text-center">
                    {lang === 'vi' ? 'Giải Thưởng Sáng Tạo Y Tế & Thực Phẩm' : 'Medical & Food Innovation Award'}
                  </h4>
                  <p className="text-xs text-on-surface-variant font-light text-center mt-1">
                    {lang === 'vi'
                      ? 'Ghi nhận sáng chế đột phá ứng dụng 6-HMOs Shield Powder trong dinh dưỡng bảo vệ hệ tiêu hóa sơ sinh.'
                      : 'Recognizing the breakthrough invention of utilizing 6-HMOs Shield Powder in infant digestive health.'}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Certifications Badges */}
            <Reveal effect="reveal-fade-up">
              <div className="bg-primary-container/30 border border-outline-variant/30 rounded-3xl p-8 sm:p-10 mb-16">
                <h4 className="text-center font-bold text-sm uppercase tracking-widest text-secondary mb-8">
                  {lang === 'vi' ? 'Tiêu chuẩn An toàn & Chứng nhận Quốc tế' : 'Safety Standards & International Certifications'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, idx) => (
                    <Reveal key={idx} effect="reveal-fade-up" delay={idx * 100}>
                      <div className="bg-surface p-5 rounded-2xl border border-outline-variant/25 shadow-sm flex items-start gap-3 h-full">
                        <img 
                          src="/images/award-icon.svg" 
                          alt={lang === 'vi' ? 'Icon chứng nhận' : 'Certification icon'} 
                          className="w-6 h-6 flex-shrink-0 object-contain mt-0.5" 
                        />
                        <div>
                          <h5 className="font-bold text-sm text-on-surface">{cert.name}</h5>
                          <p className="text-xs text-on-surface-variant font-light mt-0.5 leading-relaxed">{cert.detail}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Trusted partners */}
            <Reveal effect="reveal-fade-up">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/70 font-semibold mb-8">
                  {lang === 'vi' ? 'Đối Tác Phân Phối Chiến Lược' : 'Strategic Distribution Partners'}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {/* Motherwork Singapore */}
                  <a 
                    href="https://motherswork.com.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-10 py-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[360px] h-[180px] gap-4"
                  >
                    <img src="/images/mother-work.png" alt="Motherswork Singapore" className="h-24 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-xs text-on-surface-variant/75 uppercase tracking-wider font-semibold">Singapore</span>
                  </a>

                  {/* Motherwork Vietnam */}
                  <a 
                    href="https://www.motherswork.com.vn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-10 py-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[360px] h-[180px] gap-4"
                  >
                    <img src="/images/mother-work.png" alt="Motherswork Vietnam" className="h-24 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-xs text-on-surface-variant/75 uppercase tracking-wider font-semibold">Vietnam</span>
                  </a>

                  {/* Hatched Confinement Oasis */}
                  <a 
                    href="https://www.hatched.com.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-10 py-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[360px] h-[180px] gap-4"
                  >
                    <img src="/images/hatched.png" alt="Hatched Confinement Oasis" className="h-24 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-xs text-on-surface-variant/75 uppercase tracking-wider font-semibold">Hatched Oasis SG</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. CLOSING CTA */}
        <section className="gold-gradient py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5 opacity-10 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 text-on-secondary-fixed">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {lang === 'vi' ? 'Đồng Hành Bảo Vệ Sức Khỏe Con Yêu Ngay Hôm Nay' : 'Accompanying to Protect Your Child\'s Health Today'}
            </h2>
            <p className="text-base sm:text-lg text-on-secondary-fixed-variant max-w-xl mx-auto font-light leading-relaxed">
              {lang === 'vi'
                ? 'Trở thành đối tác chiến lược hoặc mua lẻ sản phẩm HereMOM® chính hãng trực tiếp từ đại diện Singapore.'
                : 'Become a strategic partner or buy genuine HereMOM® products directly from the Singapore representative.'}
            </p>
            <div className="pt-4">
              <a 
                href="mailto:lily.toh@innovita.health" 
                className="inline-block px-10 py-4 bg-surface text-secondary font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:bg-surface-variant hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {lang === 'vi' ? 'Kết nối với chúng tôi' : 'Connect with Us'}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER / CONTACT */}
      <footer id="contact" className="bg-inverse-surface text-surface-variant pt-20 pb-10 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-outline-variant/10">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                className="h-16 w-auto object-contain brightness-0 invert" 
                alt="HereMOM Logo" 
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-surface-variant/80">
              {lang === 'vi'
                ? 'Công thức 6-HMOs Shield Powder bảo vệ toàn diện hệ tiêu hóa và hệ miễn dịch sơ sinh, dựa trên 130 năm khoa học HMOs được tin tưởng trên toàn thế giới.'
                : 'The 6-HMOs Shield Powder formula offers comprehensive protection for infant digestive and immune systems, built on 130 years of trusted HMO science worldwide.'}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577221150582#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-105 overflow-hidden"
              >
                <img src="/images/facebook.webp" alt="Facebook" className="w-full h-full rounded-full object-cover" />
              </a>
              <a 
                href="https://www.instagram.com/heremom_global/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-105 overflow-hidden"
              >
                <img src="/images/instagram.webp" alt="Instagram" className="w-full h-full rounded-full object-cover" />
              </a>
              <a 
                href="https://www.tiktok.com/@heremom_global" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-105 overflow-hidden"
              >
                <img src="/images/tiktok.webp" alt="TikTok" className="w-full h-full rounded-full object-cover" />
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{lang === 'vi' ? 'Khám phá' : 'Explore'}</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#story" className="hover:text-secondary-fixed transition-colors">{lang === 'vi' ? 'Câu chuyện thương hiệu' : 'Brand Story'}</a></li>
              <li><a href="#science" className="hover:text-secondary-fixed transition-colors">{lang === 'vi' ? 'Khoa học 6-HMOs' : '6-HMOs Science'}</a></li>
              <li><a href="#product" className="hover:text-secondary-fixed transition-colors">{lang === 'vi' ? 'Chi tiết sản phẩm' : 'Product Details'}</a></li>
              <li><a href="#awards" className="hover:text-secondary-fixed transition-colors">{lang === 'vi' ? 'Giải thưởng quốc tế' : 'International Awards'}</a></li>
            </ul>
          </div>

          {/* B2B Contacts (CRITICAL INFOMATION FROM FILE) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              {lang === 'vi' ? 'Thông tin liên hệ & Hợp tác' : 'Contact & Collaboration Info'}
            </h4>

            {/* 2-column layout */}
            <div className="grid grid-cols-2 gap-x-4 text-sm font-light">

              {/* Singapore Contact */}
              <div className="space-y-2.5 pr-4 border-r border-surface-variant/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-fixed/80 flex items-center gap-1.5">
                  <span>🇸🇬</span> Singapore
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-secondary-fixed mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white leading-snug">Lily Toh</p>
                    <p className="text-xs text-surface-variant/70">Innovita Health Singapore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-secondary-fixed flex-shrink-0" />
                  <a href="tel:+6589745957" className="hover:text-secondary-fixed transition-colors">+65 8974 5957</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-secondary-fixed flex-shrink-0" />
                  <a href="mailto:lily.toh@innovita.health" className="hover:text-secondary-fixed transition-colors break-all">lily.toh@innovita.health</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-secondary-fixed flex-shrink-0" />
                  <a
                    href="https://heremom.vip/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-fixed transition-colors inline-flex items-center gap-1"
                  >
                    heremom.vip/en/ <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Vietnam Contact */}
              <div className="space-y-2.5 pl-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-fixed/80 flex items-center gap-1.5">
                  <span>🇻🇳</span> {lang === 'vi' ? 'Việt Nam' : 'Vietnam'}
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-secondary-fixed mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white leading-snug">Ivy Nguyen</p>
                    <p className="text-xs text-surface-variant/70">{lang === 'vi' ? 'Trợ lý Giám đốc' : 'Asst. General Manager'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-secondary-fixed flex-shrink-0" />
                  <a href="tel:+84785208468" className="hover:text-secondary-fixed transition-colors">+84 785 208 468</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-secondary-fixed flex-shrink-0" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.27 9.72 20.27 11.92C20.27 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.37 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"/>
                  </svg>
                  <span>Zalo: <a href="tel:+84785208468" className="hover:text-secondary-fixed transition-colors">+84 785 208 468</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-secondary-fixed flex-shrink-0" />
                  <a href="mailto:marketing2@mylearth.com.sg" className="hover:text-secondary-fixed transition-colors break-all">marketing2@mylearth.com.sg</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Legal and copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-surface-variant/60">
          <p>© 2026 HereMOM® Singapore. Nurturing with clinical sophistication.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Scientific Standards</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
