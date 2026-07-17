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
  ChevronLeft
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
      title: "Phục hồi 1 (Patch the Breach)",
      tag: "2 Phục Hồi",
      desc: "Giảm tiêu hao chất nhầy niêm mạc, củng cố hàng rào ruột, ngăn chặn sự xâm nhập của các chất gây hại.",
      icon: Shield,
    },
    {
      title: "Phục hồi 2 (Strengthen the Barrier)",
      tag: "2 Phục Hồi",
      desc: "Tăng cường các liên kết chặt chẽ (tight junctions) của biểu mô ruột, thúc đẩy sự phục hồi nhanh chóng sau các tổn thương.",
      icon: Activity,
    },
    {
      title: "Bảo vệ 1 (Clear Harmful Pathogens)",
      tag: "3 Bảo Vệ",
      desc: "Hoạt động như 'mồi nhử sinh học' (decoy receptors) để bám dính lấy mầm bệnh và đào thải chúng ra ngoài một cách tự nhiên.",
      icon: Sparkles,
    },
    {
      title: "Bảo vệ 2 (Block Pathogen Adhesion)",
      tag: "3 Bảo Vệ",
      desc: "Bắt chước cấu trúc glycan của tế bào ruột để ngăn chặn hiệu quả mầm bệnh bám dính vào thành ruột của trẻ.",
      icon: X,
    },
    {
      title: "Bảo vệ 3 (Support Healthy Microbiome)",
      tag: "3 Bảo Vệ",
      desc: "Kích thích chọn lọc sự phát triển của lợi khuẩn Bifidobacterium giúp cân bằng hệ vi sinh đường ruột khỏe mạnh.",
      icon: Heart,
    },
  ]

  const clinicalTimeline = [
    {
      time: "Ngày 7",
      title: "Cân Bằng Đầu Tiên",
      desc: "Tăng cường mạnh mẽ lợi khuẩn đường ruột và giảm thiểu nguy cơ nhiễm trùng từ các vi khuẩn cơ hội."
    },
    {
      time: "Ngày 15",
      title: "Củng Cố Hàng Rào",
      desc: "Tiêu hóa cải thiện rõ rệt, giảm táo bón, phân mềm và tạo thành khuôn ổn định hơn."
    },
    {
      time: "Tuần 16",
      title: "Bảo Vệ Toàn Diện",
      desc: "Giảm tỷ lệ mắc các bệnh nhiễm trùng đường hô hấp, đồng thời giảm mức độ nghiêm trọng khi nhiễm virus RSV."
    }
  ]

  const scienceTimeline = [
    {
      time: "Cuối Thế Kỷ 19",
      title: "Phân Lập Carbohydrate Sữa Mẹ Đầu Tiên",
      desc: "Các carbohydrate đặc trưng trong sữa mẹ lần đầu tiên được phân lập thành công. Phát hiện ra \"yếu tố bifidus\" (bifidus factor) - tạo nền móng vững chắc cho các nghiên cứu về HMOs sau này.",
    },
    {
      time: "Năm 1954",
      title: "Xác Định Bản Chất HMOs",
      desc: "Xác định thành công yếu tố kích thích lợi khuẩn Bifidobacterium trong sữa mẹ chính là các oligosaccharide cấu trúc phức tạp (HMOs).",
    },
    {
      time: "Năm 2000",
      title: "Khám Phá Hơn 200 Cấu Trúc HMOs",
      desc: "Phân lập và xác định cấu trúc hóa học thành công của hơn 200 loại HMOs khác nhau từ sữa mẹ, mở ra thời kỳ nghiên cứu ứng dụng lâm sàng thực tiễn.",
    },
    {
      time: "Năm 2015",
      title: "Kiểm Chứng Lâm Sàng Cho Trẻ Sơ Sinh",
      desc: "Các bằng chứng y khoa lâm sàng bắt đầu chứng minh và xác nhận tính an toàn tuyệt đối cùng hiệu quả vượt trội của HMOs đối với sự phát triển của trẻ nhỏ.",
    },
    {
      time: "Năm 2016",
      title: "Thành Lập HereMOM Singapore & Launch 2'-FL",
      desc: "HereMOM thành lập tại Singapore đúng vào năm thế giới ra mắt 2'-FL HMO mô phỏng nguồn bảo vệ trong sữa mẹ. Hãng phát triển thành công 2'-FL như một HMO cốt lõi.",
    },
    {
      time: "Năm 2023",
      title: "Đột Phá Công Thức 6-HMOs Shield Powder",
      desc: "Hoàn thiện công thức tối ưu tích hợp 6 loại HMOs tinh khiết (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) giúp trẻ xây dựng hệ tiêu hóa khỏe mạnh và miễn dịch kiên cố.",
    },
  ]

  const certifications = [
    { name: "ISO 22000:2018", detail: "Hệ thống quản lý an toàn thực phẩm" },
    { name: "SFA Approved", detail: "Cơ quan Thực phẩm Singapore cấp phép" },
    { name: "TÜV SÜD (Đức)", detail: "Chứng nhận chất lượng & an toàn toàn cầu" },
    { name: "Chứng nhận HALAL", detail: "Đạt chuẩn Halal quốc tế" },
    { name: "FDA (Mỹ) Approved", detail: "Thành phần HMOs được FDA chấp thuận an toàn" },
    { name: "EFSA (Châu Âu) Approved", detail: "Cơ quan An toàn Thực phẩm Châu Âu chứng nhận" },
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
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
              alt="HereMOM Logo" 
            />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-secondary">
              HereMOM<span className="text-xs align-super font-sans">®</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">Câu chuyện</a>
            <a href="#science" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">Khoa học 6HMOs</a>
            <a href="#product" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">Sản phẩm</a>
            <a href="#awards" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">Giải thưởng & Chứng nhận</a>
            <a href="#contact" className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors">Liên hệ</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-secondary text-on-secondary text-xs font-semibold tracking-wider uppercase shadow-sm hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-300"
            >
              Tìm hiểu thêm
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-secondary hover:bg-secondary-container/20 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-b border-outline-variant/30 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              Câu chuyện thương hiệu
            </a>
            <a 
              href="#science" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              Khoa học 6HMOs
            </a>
            <a 
              href="#product" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              Sản phẩm Stage 3
            </a>
            <a 
              href="#awards" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              Giải thưởng & Chứng nhận
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-on-surface-variant hover:bg-primary-container/50 hover:text-secondary"
            >
              Liên hệ
            </a>
            <div className="pt-2">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center inline-block px-5 py-3 rounded-full bg-secondary text-on-secondary font-semibold text-sm hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              >
                Liên hệ hợp tác
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">HereMOM® Singapore</span>
                </div>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-on-secondary-fixed">
                  Original Nutrition Built to Protect
                </h1>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={200}>
                <p className="text-xl sm:text-2xl font-serif text-on-secondary-fixed-variant italic">
                  Bảo vệ hệ miễn dịch nguyên bản của bé
                </p>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={300}>
                <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-on-secondary-fixed/90 font-light">
                  Thương hiệu dinh dưỡng cao cấp đến từ Singapore, tiên phong cung cấp giải pháp bảo vệ hệ miễn dịch và tiêu hóa cho trẻ với sức mạnh từ 6 loại HMOs tinh khiết.
                </p>
              </Reveal>
              <Reveal effect="reveal-fade-up" delay={400}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#science" 
                    className="px-8 py-4 rounded-full bg-surface text-secondary font-semibold text-sm shadow-md hover:bg-surface-variant hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                  >
                    Tìm hiểu khoa học <ChevronRight size={16} />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-semibold text-sm shadow-md hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Mua ngay
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
                    <p className="text-white text-sm font-medium">Hộp 28 gói bột HMOs 6-HMOs Shield Powder</p>
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
                  Câu Chuyện Thương Hiệu & Sứ Mệnh
                </h2>
                <div className="h-1 w-20 bg-secondary/30 mx-auto rounded-full"></div>
                <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
                  Nối dài tự nhiên sự bảo vệ dịu êm của mẹ, giúp lấp đầy khoảng trống miễn dịch trong quá trình khôn lớn của con trẻ.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6 space-y-6">
                <Reveal effect="reveal-fade-right">
                  <div className="bg-surface/80 p-8 rounded-2xl border border-outline-variant/20 shadow-organic space-y-4">
                    <h3 className="text-xl font-bold text-secondary">Lý do HereMOM ra đời</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      Trong môi trường sống hiện đại đầy biến động, thói quen sinh hoạt và chế độ dinh dưỡng không điều độ đôi khi khiến sữa mẹ không đáp ứng đủ dưỡng chất miễn dịch tối ưu cho bé. 
                    </p>
                    <p className="text-on-surface-variant leading-relaxed font-light font-medium italic text-secondary">
                      "HereMOM ra đời như một sự tiếp nối tự nhiên từ nguồn bảo vệ nguyên bản của mẹ, bổ sung dưỡng chất HMOs tinh khiết giúp tăng cường hàng rào miễn dịch của trẻ."
                    </p>
                  </div>
                </Reveal>
                
                <Reveal effect="reveal-fade-right" delay={150}>
                  <div className="bg-surface/80 p-8 rounded-2xl border border-outline-variant/20 shadow-organic space-y-4">
                    <h3 className="text-xl font-bold text-secondary">Nguồn gốc & Công nghệ</h3>
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      Sản phẩm được nghiên cứu chuyên sâu tại các phòng Lab hiện đại ở Trung Quốc, ứng dụng công nghệ sinh học lên men vi sinh tiên tiến từ đường tự nhiên để tạo ra cấu trúc 6 HMOs tinh khiết tuyệt đối, an toàn và hoàn toàn không biến đổi gen (Non-GMO).
                    </p>
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
              <p className="text-xs uppercase tracking-widest text-on-surface-variant/70 font-semibold mb-6">Thị Trường Hoạt Động</p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-secondary font-medium tracking-wide">
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">🇸🇬 Singapore</span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">🇻🇳 Việt Nam</span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">🇨🇳 Trung Quốc</span>
                <span className="text-secondary/30 hidden sm:inline">•</span>
                <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-outline-variant/25 shadow-sm">🇲🇾 Malaysia (Sắp ra mắt)</span>
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
                  Khoa Học Về 6HMOs - Giải Đáp Chuyên Sâu
                </h2>
                <p className="text-base text-on-surface-variant font-light max-w-2xl mx-auto">
                  HMOs (Human Milk Oligosaccharides) là nhóm dưỡng chất sinh học dồi dào thứ 3 trong sữa mẹ (chỉ sau Lactose và chất béo), chứa hàm lượng cao gấp 100 - 300 lần so với sữa bò hoặc sữa dê.
                </p>
              </div>
            </Reveal>

            {/* In-depth Q&A layout (no story.png, centered) */}
            <div className="max-w-4xl mx-auto mb-24 space-y-6">
              <Reveal effect="reveal-fade-up">
                <div className="space-y-2 text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-on-surface">
                    Cơ Chế <span className="text-secondary">"2 Phục Hồi + 3 Bảo Vệ"</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light">
                    Sự khác biệt đột phá của công thức 6-HMOs Shield Powder của HereMOM giúp xây dựng hệ tiêu hóa và miễn dịch kiên cố:
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-4">
                {mechanisms.map((mech, idx) => {
                  const MechIcon = mech.icon
                  const isActive = activeMechanism === idx
                  const isPhucHoi = mech.tag.includes('Phục Hồi')
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
                  <h3 className="font-serif text-2xl font-bold">Hiệu Quả Lâm Sàng Được Chứng Minh</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light">
                    Lộ trình thay đổi sinh học đáng kinh ngạc của trẻ được chứng minh lâm sàng:
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
                      Sản Phẩm Độc Quyền Việt Nam
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                      HereMOM® Stage 3
                    </h2>
                    <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                      Mặc dù HereMOM có 3 dòng (Stage 1, 2, 3), nhưng thị trường Việt Nam tập trung cung cấp dòng <strong>Stage 3</strong> cao cấp dành riêng cho trẻ từ <strong>12 tháng tuổi trở lên</strong> nhằm đồng hành bảo vệ trẻ trong giai đoạn tiếp xúc môi trường bên ngoài nhiều nhất.
                    </p>
                  </div>
                </Reveal>

                {/* Pure Table Details */}
                <Reveal effect="reveal-fade-up" delay={100}>
                  <div className="bg-surface rounded-2xl p-6 border border-outline-variant/30 space-y-4 shadow-sm">
                    <h3 className="font-semibold text-base text-secondary flex items-center gap-2">
                      <Info size={16} /> Bảng thành phần tinh khiết "100% HMOs"
                    </h3>
                    <div className="h-px bg-outline-variant/20"></div>
                    <ul className="space-y-3 text-xs sm:text-sm font-light text-on-surface-variant">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Hàm lượng cao cực đại:</strong> 2000mg HMOs nguyên chất trong mỗi gói nhỏ (2g).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Công thức hiệp đồng:</strong> Phối hợp tối ưu 6 loại HMOs tinh khiết (2'-FL, 3-FL, LNT, LNnT, 3'-SL, 6'-SL) đem lại hiệu quả "1+1 &gt; 2".</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Cam kết 4 KHÔNG:</strong> Không phụ gia, Không đường ngọt, Không hương liệu tổng hợp, Không chất bảo quản.</span>
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
                        <h4 className="font-semibold text-xs sm:text-sm">Miễn dịch tự nhiên</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">Tăng sức đề kháng tối đa cho trẻ.</p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Activity className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">Tiêu hóa khỏe mạnh</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">Cân bằng hệ vi sinh đường ruột.</p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Sparkles className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">Hấp thu dinh dưỡng</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">Giúp trẻ tăng trưởng cân đối.</p>
                      </div>
                    </div>
                    <div className="bg-surface/60 p-4 rounded-xl border border-outline-variant/20 flex gap-3">
                      <Brain className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">Phát triển trí não</h4>
                        <p className="text-[10px] text-on-surface-variant font-light mt-0.5">Hỗ trợ tư duy nhạy bén vượt trội.</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Usage Note */}
                <Reveal effect="reveal-fade-up" delay={300}>
                  <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/50 flex gap-3">
                    <Info className="text-amber-800 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h5 className="font-semibold text-xs sm:text-sm text-amber-900 uppercase tracking-wide">Hướng Dẫn Sử Dụng</h5>
                      <p className="text-xs text-amber-800/90 font-light mt-1 leading-relaxed">
                        Sử dụng 1 - 2 gói/ngày. Hòa tan hoàn toàn với nước ấm hoặc sữa công thức, nước ép trái cây, cháo hoặc bột ăn dặm của trẻ. <strong>Lưu ý:</strong> Nhiệt độ chất lỏng dưới 45°C để bảo vệ cấu trúc hoạt tính của các HMOs.
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
                  Giải Thưởng & Chứng Nhận Quốc Tế
                </h2>
                <div className="h-1 w-20 bg-secondary/30 mx-auto rounded-full"></div>
                <p className="text-base text-on-surface-variant font-light max-w-xl mx-auto">
                  Sản phẩm đạt các kiểm định chất lượng y tế nghiêm ngặt nhất tại Singapore và toàn cầu, đảm bảo sự an toàn tuyệt đối cho trẻ nhỏ.
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
                    Đạt giải thưởng vinh dự (Judges' Special Commendation) tại Singapore trao bởi Hiệp hội Khoa học và Công nghệ Thực phẩm Singapore.
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
                  <h4 className="mt-5 text-lg font-serif font-bold text-secondary text-center">Giải Thưởng Sáng Tạo Y Tế & Thực Phẩm</h4>
                  <p className="text-xs text-on-surface-variant font-light text-center mt-1">
                    Ghi nhận sáng chế đột phá ứng dụng 6-HMOs Shield Powder trong dinh dưỡng bảo vệ hệ tiêu hóa sơ sinh.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Certifications Badges */}
            <Reveal effect="reveal-fade-up">
              <div className="bg-primary-container/30 border border-outline-variant/30 rounded-3xl p-8 sm:p-10 mb-16">
                <h4 className="text-center font-bold text-sm uppercase tracking-widest text-secondary mb-8">Tiêu chuẩn An toàn & Chứng nhận Quốc tế</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, idx) => (
                    <Reveal key={idx} effect="reveal-fade-up" delay={idx * 100}>
                      <div className="bg-surface p-5 rounded-2xl border border-outline-variant/25 shadow-sm flex items-start gap-3 h-full">
                        <img 
                          src="/images/award-icon.svg" 
                          alt="Icon chứng nhận" 
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
                <p className="text-xs uppercase tracking-widest text-on-surface-variant/70 font-semibold mb-8">Đối Tác Phân Phối Chiến Lược</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {/* Motherwork Singapore */}
                  <a 
                    href="https://motherswork.com.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-8 py-4 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[220px] h-[100px] gap-2"
                  >
                    <img src="/images/mother-work.png" alt="Motherswork Singapore" className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-[9px] text-on-surface-variant/75 uppercase tracking-wider font-semibold">Singapore</span>
                  </a>

                  {/* Motherwork Vietnam */}
                  <a 
                    href="https://www.motherswork.com.vn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-8 py-4 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[220px] h-[100px] gap-2"
                  >
                    <img src="/images/mother-work.png" alt="Motherswork Vietnam" className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-[9px] text-on-surface-variant/75 uppercase tracking-wider font-semibold">Vietnam</span>
                  </a>

                  {/* Hatched Confinement Oasis */}
                  <a 
                    href="https://www.hatched.com.sg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-8 py-4 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center group w-[220px] h-[100px] gap-2"
                  >
                    <img src="/images/hatched.png" alt="Hatched Confinement Oasis" className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]" />
                    <span className="text-[9px] text-on-surface-variant/75 uppercase tracking-wider font-semibold">Hatched Oasis SG</span>
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
              Đồng Hành Bảo Vệ Sức Khỏe Con Yêu Ngay Hôm Nay
            </h2>
            <p className="text-base sm:text-lg text-on-secondary-fixed-variant max-w-xl mx-auto font-light leading-relaxed">
              Trở thành đối tác chiến lược hoặc mua lẻ sản phẩm HereMOM® chính hãng trực tiếp từ đại diện Singapore.
            </p>
            <div className="pt-4">
              <a 
                href="mailto:lily.toh@innovita.health" 
                className="inline-block px-10 py-4 bg-surface text-secondary font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:bg-surface-variant hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Kết nối với chúng tôi
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER / CONTACT */}
      <footer id="contact" className="bg-inverse-surface text-surface-variant pt-20 pb-10 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-outline-variant/10">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                className="h-12 w-auto object-contain" 
                alt="HereMOM Logo" 
              />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                HereMOM®
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-surface-variant/80">
              Công thức 6-HMOs Shield Powder bảo vệ toàn diện hệ tiêu hóa và hệ miễn dịch sơ sinh, dựa trên 130 năm khoa học HMOs được tin tưởng trên toàn thế giới.
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Khám phá</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#story" className="hover:text-secondary-fixed transition-colors">Câu chuyện thương hiệu</a></li>
              <li><a href="#science" className="hover:text-secondary-fixed transition-colors">Khoa học 6-HMOs</a></li>
              <li><a href="#product" className="hover:text-secondary-fixed transition-colors">Chi tiết sản phẩm</a></li>
              <li><a href="#awards" className="hover:text-secondary-fixed transition-colors">Giải thưởng quốc tế</a></li>
            </ul>
          </div>

          {/* B2B Contacts (CRITICAL INFOMATION FROM FILE) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Thông tin liên hệ & Hợp tác</h4>
            <div className="space-y-3.5 text-sm font-light">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-secondary-fixed mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Đại diện (Representative): Lily Toh</p>
                  <p className="text-xs text-surface-variant/70">Innovita Health Singapore</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-secondary-fixed flex-shrink-0" />
                <a href="tel:+6589745957" className="hover:text-secondary-fixed transition-colors">+65 8974 5957</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-secondary-fixed flex-shrink-0" />
                <a href="mailto:lily.toh@innovita.health" className="hover:text-secondary-fixed transition-colors">lily.toh@innovita.health</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-secondary-fixed flex-shrink-0" />
                <a 
                  href="https://heremom.vip/en/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary-fixed transition-colors inline-flex items-center gap-1"
                >
                  heremom.vip/en/ <ExternalLink size={12} />
                </a>
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
