/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  User, 
  Calendar, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Share2, 
  Instagram, 
  Search, 
  ShoppingCart, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Send,
  Menu,
  X,
  Activity,
  UserCheck,
  ThumbsUp,
  LayoutGrid,
  Apple,
  Shirt,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Page = 'home' | 'classes' | 'memberships' | 'trainers' | 'shop' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Classes', value: 'classes' },
    { label: 'Memberships', value: 'memberships' },
    { label: 'Trainers', value: 'trainers' },
    { label: 'Shop', value: 'shop' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-border bg-navy-deep/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="p-2 bg-primary rounded-lg text-navy-deep">
            <Dumbbell className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-white uppercase">
            Muqdisho Shop <span className="text-primary">Plus</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              className={`text-sm font-semibold transition-colors ${
                currentPage === item.value ? 'text-primary' : 'text-slate-200 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentPage('memberships')}
            className="hidden sm:block primary-button"
          >
            Join Now
          </button>
          <div className="size-10 rounded-full border-2 border-primary/20 bg-navy-card flex items-center justify-center cursor-pointer hover:border-primary/50 transition-all">
            <User className="w-5 h-5 text-primary" />
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-card border-b border-navy-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-lg font-semibold ${
                    currentPage === item.value ? 'text-primary' : 'text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('memberships');
                  setIsMenuOpen(false);
                }}
                className="primary-button w-full mt-2"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="relative h-[85vh] min-h-[650px] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-[5]"></div>
        <img 
          alt="Hero background" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEKv63V_cwjk2VC6D4xazItLka_M3g5oSlITqbyV9NP-N5a5tWGLFPb054KVUDBmdaWvJRe6UNJ_-SqsmaH2uqS95wTd0QRu9HC5RTNLrFGvz-PWqzJ8rLXQazEOL2L4CThjpx0ngSY8AYJt8elR1DfZreS3EoZtN8ufzZUGxenbLnkFjU7pT5ib01R2XmDFf-09QbI_0xmk0ED5y2xiMJIJXiVH4Vmtj_JWBA1QIZiD61y2-wyVU_FCnU-sWKQUPw7TpSdZRa6lo"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Elite Fitness Excellence
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-[1.1]">
            TRANSFORM <br/>YOUR <span className="text-primary underline decoration-4 underline-offset-8">STRENGTH</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
            Mogadishu's premier fitness destination. Experience world-class equipment, professional trainers, and a community built on grit and growth.
          </p>
          <div className="flex flex-wrap gap-5 pt-6">
            <motion.button 
              onClick={onStart} 
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(242, 162, 13, 0.4), 0 10px 10px -5px rgba(242, 162, 13, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-navy-deep font-black rounded-xl uppercase tracking-widest shadow-xl shadow-primary/20 transition-colors"
            >
              Start Training Today
            </motion.button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest">
              View Classes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Personal Training',
      desc: 'Get a custom blueprint for your body. Our elite coaches provide dedicated one-on-one sessions tailored to your goals.',
      icon: <UserCheck className="w-10 h-10 text-primary" />
    },
    {
      title: 'Cardio Zone',
      desc: 'High-performance metabolic conditioning with the latest treadmills, rowers, and air bikes to boost your endurance.',
      icon: <Activity className="w-10 h-10 text-primary" />
    },
    {
      title: 'Weightlifting',
      desc: 'A massive selection of free weights, Olympic lifting platforms, and professional machines for all skill levels.',
      icon: <Dumbbell className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section className="py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Our Expertise</h3>
            <h2 className="text-5xl font-black text-white">Premium Services</h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg">
            Everything you need to reach your peak performance, from personalized nutrition to high-intensity functional training.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-2xl border border-slate-800 bg-navy-card/50 hover:border-primary/50 transition-all duration-500 hover:bg-navy-card"
            >
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-navy-deep transition-all">
                {s.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{s.title}</h4>
              <p className="text-slate-400 text-base leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Memberships = () => {
  const plans = [
    {
      name: 'Basic Tier',
      price: '29',
      features: ['Full Gym Access', 'Locker Room & Showers', 'Free Wi-Fi'],
      button: 'Choose Basic',
      popular: false
    },
    {
      name: 'Elite Pro',
      price: '59',
      features: ['Everything in Basic', 'Unlimited Group Classes', '1 Personal Training Session', 'Recovery Lounge Access'],
      button: 'Get Elite Pro',
      popular: true
    },
    {
      name: 'Power Team',
      price: '99',
      features: ['Access for 2 People', 'All Elite Pro Benefits', 'Monthly Progress Report'],
      button: 'Choose Team',
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-navy-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Flexible Pricing</h3>
          <h2 className="text-5xl font-black text-white">Membership Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {plans.map((p, i) => (
            <div 
              key={i}
              className={`p-10 rounded-3xl border flex flex-col shadow-2xl transition-all ${
                p.popular 
                  ? 'bg-navy-deep border-4 border-primary transform md:-translate-y-6 shadow-primary/10 relative overflow-hidden' 
                  : 'bg-navy-card border-slate-800'
              }`}
            >
              {p.popular && (
                <div className="bg-primary text-navy-deep text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full self-start mb-6">
                  Most Popular
                </div>
              )}
              <h4 className={`text-xl font-bold mb-2 ${p.popular ? 'text-white' : 'text-slate-100'}`}>{p.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-black ${p.popular ? 'text-white' : 'text-white'}`}>${p.price}</span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black transition-all uppercase text-xs tracking-[0.2em] ${
                p.popular 
                  ? 'bg-primary text-navy-deep hover:scale-[1.02]' 
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-navy-deep'
              }`}>
                {p.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: 'Ahmed Mohamed',
      role: 'Bodybuilding Expert',
      desc: '10+ years experience in strength training and contest prep. Specialized in hyper-trophy and metabolic conditioning.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoI4g0KhCU6L0JIpuGLHWfORjhsqqIcLShO3j1mwpl-1Rkj5_nfqbX1-Y392f26Ccv3K7lD2s51txqgpZ2bTw-0-B8VGE-ddynefpPnk9rZDVwQJ_JlukJbPPeKESFJMipOKv2xADwgvG0hH1v8mQLepgVmeRntBqp-5YWU209B3EUjssV6Ff8l0PofkdyjgDzO3DpD5DXwVUMZiftAlVODsqD5Loru0RPkygjJPGk9WMLre8ESR6IUmGD1KkIvPUjpG34snFanY'
    },
    {
      name: 'Fartun Ali',
      role: 'Yoga Specialist',
      desc: 'Certified vinyasa flow instructor focusing on mindfulness, flexibility, and core stability for all levels.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0zfxJ9Su0ojwNOPAPim_RXctsueksDFM2qfR5m2NWFJvRoTjPA00Aw6at6NObmuvncRrclXq1W-hY-SzIN6xpIGYFZVMeYk5VJIE7g1Y8IIdowPK4byjRnTMq0vaBrmWtEhdzlWwEEwpulxwb0VXOYjAXymAnqGbGlMYAsCFjZRT5k_SZaZBGs75YrrFlnIMdeAhtSIaPYSakn-rYawNLzq85n3CggNwfGvijXP6TDvAi-p2cJYomy9INmwzOW_i1qO8KNhLhAsI'
    },
    {
      name: 'Omar Hassan',
      role: 'Nutritionist',
      desc: 'Specializing in weight management, athletic performance, and creating sustainable meal plans for busy Mogadishu lifestyles.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdd1XGJLYqbE-oTQ5L2FVaXtBlcyqcC9RY-tHWL9SjgcGyfLmTaH7FWw8dk1P2MI_yJAL7zXMHm_FHaj0wFACM9LLC4oGlSaRS_ksOKTv66Ze9gqGKiUXvFQT9jmckyPZ0GYl2O9dgtQ6nxKP3MZdbsaWBgJAxdHtgVuKVn_n4DsXB8ABbrAM4y26h5yBBTFzVrpnFaVGQwop75CTpE8N7_Uy_KGYJRItap6AMcCTtqOSwISjQ2yB_EoeONIAIvNRcK2fiM7m4jns'
    }
  ];

  return (
    <section className="py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Meet Our <span className="text-primary">Expert</span> Trainers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Professional coaching tailored to your goals. Our elite team in Mogadishu is here to push your limits and transform your lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <div key={i} className="group bg-navy-card rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  alt={t.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={t.img}
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-slate-300 font-medium text-sm mb-3">{t.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t.desc}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-3">
                    <button className="text-primary hover:text-slate-100 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-primary hover:text-slate-100 transition-colors">
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-navy-deep px-4 py-2 rounded-lg text-xs font-bold transition-all border border-primary/20">
                    Work With Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Classes = () => {
  const classes = [
    {
      name: 'Elite Boxing',
      time: '06:00 AM - 07:30 AM',
      coach: 'Coach Ahmed',
      category: 'Strength',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2ydLnTcqkJWwrUW-0pqq2w9yYY-wKu_ITtfAMZj3H2l6BQTjltMblos5CrgQ8hgOTcUvDarL9cdka9OlY_4eYTXZJ5cLZDgE4HjaCdsLyGIBqfnfti9DIi4rgtOWk7aS3CPgbUTKfK9_fN9hD9ydD1-EbuUM_guu6UommoKfwvp13p3q50bOnRDb6h3Mef7Qyy8zKEjLLQ4vDC-o9oUw4DiQ54b_5ks_LYarOiNikKvkmDl4-jnVLj_E467dB_m6z8s9tQUXEkQ4'
    },
    {
      name: 'Morning HIIT',
      time: '08:00 AM - 09:00 AM',
      coach: 'Trainer Sumaya',
      category: 'Cardio',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD91jobQS8VAPMcDOgSeUflgzxUBtsW6iGb_GDjrutiVKeqePWeTq3TKB6umEKIk23kpaw56jHPJ9Bq8oE3_mN2qkBKiqtQ_jrwFDtiqlV_UF9QopnCOU5FCArfemrIvh-TccdS__gJnqWlx3pTbILf7Bul9m52JusD70IOpq_PAB3Iegv8Gnz2jb43dM00AgcxEzX8kbpPBx7Dl0xkbz7rpPv9zMFpvC0A68qMOynHzdP9r1PKA9zBv5HkV8lINjSQiyPubuxgS1Y'
    },
    {
      name: 'Zen Flow Yoga',
      time: '10:30 AM - 11:30 AM',
      coach: 'Master Ali',
      category: 'Flexibility',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtbMJrqRgFJpoPjsVaOapnfFmBat5WIBj4B5EezhAG8F80DuULub2jvMHBACRKzteOZiLqGmNH6bFUoJXCFHt0YMyS5UOM7OwXmgFdeN8t09yy5hxVf8JOOl7u1rt7DKsiefxJjNlhO6nApFufzJYOMmdMl3xWKjqaLHHJvMWNoHJSCq-GPz63SoupgpGLO4GlZ8MGYO51mCDWqAeRY8h7A9WhEPs5J8CwQVoETr_FTDg7OaXI1It5RKtDZseYKgfW9CTu9H8qd9k'
    }
  ];

  return (
    <section className="py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4">Class Schedule</h1>
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            Elevate your fitness journey in Mogadishu. Filter by activity or instructor to find your perfect rhythm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((c, i) => (
            <div key={i} className="flex flex-col bg-navy-card rounded-2xl overflow-hidden border border-navy-border hover:border-primary/40 transition-all duration-300 group shadow-2xl">
              <div className="h-48 relative overflow-hidden">
                <img className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" src={c.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary text-navy-deep px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {c.category}
                </div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white text-2xl font-bold">{c.name}</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold text-sm">{c.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <User className="w-4 h-4" />
                    <span className="text-xs">{c.coach}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-primary text-navy-deep font-black rounded-xl hover:bg-white transition-all uppercase tracking-tighter text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Shop = () => {
  const products = [
    {
      name: 'Whey Protein Isolate',
      price: '65.00',
      desc: 'Chocolate Fudge • 2.2kg',
      tag: 'Top Seller',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_pSjRTwJG852Hjd_axfk7YRJL1oPKmkwTUp-zf_vMNeH9wrzaH069khrxD_GMoGPjbRtxexYlpDrjTYY_PKoP0uAqGd_JcTDzABulxoBa-RqIjrcmKrFO6gZBF_DXspxzdXIRTSq0zwqsPz30gf9i_SdYdcK-Bxas5aZu-aaHMt1lMfQi5kvjfZ16BybLnw8CcZ9xGrN2EX8maNRFAl6sQXEx1kca5HyzMgyK6FUruc50o5OVa6YpMm7zdGDSIZBXtzMbluYpzs'
    },
    {
      name: 'Adjustable Dumbbells',
      price: '145.00',
      desc: 'Pair • 2.5kg to 24kg',
      tag: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCch24L7x8xAyOIi0YI7N79pwEVdtVs_niRiBPsQ3gH9_uFqS1V9zFx_4axqhj7lm-sNM2qqCIi2D6vx2xP1YIch1v472g62duVWCFAZsPTTYOIvAu2F_eSt8Kbz2YV-S5aVwTDLFEUP91Buqahlb1dBSgcjmuFuoLK_y2cwl6YFkcLvQ_EVfKHEeQkC0fR-KrAEWJ-MihaBSfig1jXvjQG9JAcGKq_0PZc1TByLlMwoy_W7_9AkXFavCaNis32PyMqPVQLwQkyp0g'
    },
    {
      name: 'Performance Tee',
      price: '32.00',
      desc: 'Breathable • Navy Blue',
      tag: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbf6mBDSbXiLWdhaCvNAM3w2vxCyH4-YyFqinohtNIFjegRYur6xlMxdMUfquUc7w8TbGPwTRMYDUSEXUqqCjhzN6g9ljaVtrpaIbEGItJdY31We5VDsOQRYAO6aEJoZRaN-Klt8giL_IrKyYL8XesQzvKRSeXwQhabTpEepBFaDDyX0wnGQeRJYksV-fQ1dEOGrbx00fQanp4MvV3XCUEAZ0STGfoJOQzouI26ej_MS-MeyYu4y_KGFAK26VK7JVxeAU27SLeKSw'
    },
    {
      name: 'Recovery Foam Roller',
      price: '24.00',
      desc: 'High-Density • 18-inch',
      tag: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC82Gdwwkt_i-Rl5r5UqK8JRlF8ZkcLo7Ic8_6xLAroHyRI9W3RAY7_5SSpRFwV68pvQXTlgtQKvIgP5OyZJKNFFLBddXHj6CmBZ0MK2ELFAHxf5aQxcizAa-vrRjoaOtTEh8gIDo0ljwMhAEad8YAX0Se-3q3h7oNQ-ojrqmmiNAFRgrWOlHIIXGegVD7qcEo-41CYCMqGzzdy2znJJGSEmAscY5S_cNJ5hUTJwqoiZL9OvEXEUcKs9k5XkZaOuEBNkDdA_KnqP9A'
    }
  ];

  return (
    <section className="py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Mogadishu's Elite <span className="text-primary">Fitness Hub</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg">Premium gym equipment, world-class supplements, and performance apparel delivered across Mogadishu.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group bg-navy-card rounded-xl overflow-hidden border border-navy-border hover:border-primary/50 transition-all">
              <div className="relative aspect-square overflow-hidden bg-navy-deep">
                <img 
                  src={p.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.tag && (
                  <div className="absolute top-3 left-3 bg-primary text-navy-deep text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {p.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-slate-100">{p.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-xl">${p.price}</span>
                  <button className="bg-primary hover:bg-primary/90 text-navy-deep p-2 rounded-lg flex items-center justify-center transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Have questions? We are here to help you reach your fitness goals in Mogadishu.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-navy-card/50 p-8 rounded-2xl border border-navy-border shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input className="w-full bg-navy-deep border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-100 py-3 px-4" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input className="w-full bg-navy-deep border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-100 py-3 px-4" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input className="w-full bg-navy-deep border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-100 py-3 px-4" placeholder="Membership Inquiry" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full bg-navy-deep border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-100 py-3 px-4" placeholder="Tell us more about how we can help..." rows={5}></textarea>
              </div>
              <button className="w-full bg-primary text-navy-deep font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="button">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-3xl font-black text-primary mb-6">Contact Information</h3>
              <p className="text-slate-400 mb-8">
                Reach out to us directly or visit our premium facility in the heart of Mogadishu. Our professional trainers and staff are ready to assist you.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-slate-400">Main Road, Waberi District, Mogadishu, Somalia</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone Numbers</h4>
                  <p className="text-slate-400">+252 61 XXX XXXX</p>
                  <p className="text-slate-400">+252 69 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Working Hours</h4>
                  <p className="text-slate-400">Sat - Thu: 6:00 AM - 10:00 PM</p>
                  <p className="text-slate-400">Friday: 2:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded text-navy-deep">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-black tracking-tight text-white uppercase">Muqdisho <span className="text-primary">Plus</span></h1>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the athletes of Mogadishu since 2018. The ultimate destination for strength, resilience, and longevity.
            </p>
            <div className="flex items-center gap-4">
              <button className="size-11 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary hover:text-navy-deep transition-all">
                <Globe className="w-5 h-5" />
              </button>
              <button className="size-11 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary hover:text-navy-deep transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="size-11 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary hover:text-navy-deep transition-all">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-primary transition-colors">Find a Class</button></li>
              <li><button className="hover:text-primary transition-colors">Our Trainers</button></li>
              <li><button className="hover:text-primary transition-colors">Membership Perks</button></li>
              <li><button className="hover:text-primary transition-colors">Success Stories</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Contact Info</h5>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-slate-300">KM4 Junction, Wadada Maka Al Mukarama<br/>Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-slate-300">+252 61 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-300">info@muqdishoshop.so</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Newsletter</h5>
            <p className="text-sm text-slate-400">Get elite training tips and weekly class schedules.</p>
            <div className="flex gap-2">
              <input className="flex-1 bg-slate-900 border border-slate-700 rounded-lg text-sm px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-white" placeholder="Email address" type="email"/>
              <button className="p-3 bg-primary text-navy-deep rounded-lg hover:bg-yellow-500 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wider">
          <p className="text-slate-500">© 2024 Muqdisho Shop Plus Gym. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onStart={() => setCurrentPage('memberships')} />
            <Services />
            <Memberships />
            <Trainers />
          </>
        );
      case 'classes':
        return <Classes />;
      case 'memberships':
        return <Memberships />;
      case 'trainers':
        return <Trainers />;
      case 'shop':
        return <Shop />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onStart={() => setCurrentPage('memberships')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
