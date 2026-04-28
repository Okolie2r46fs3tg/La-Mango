/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Instagram, Clock, MapPin, 
  Utensils, Droplets, Mic2, Star, TreePine, 
  ChevronRight, CheckCircle2, Send, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-3xl font-serif font-bold text-mango-gold tracking-tight">
          La Mango
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-mango-gold transition-colors text-mango-cream/90"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="bg-mango-gold text-mango-dark px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-mango-gold" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-mango-dark z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif text-mango-gold font-bold">La Mango</span>
              <button onClick={() => setIsOpen(false)} className="text-mango-gold">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif hover:text-mango-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservations" 
                onClick={() => setIsOpen(false)}
                className="bg-mango-gold text-mango-dark text-center py-4 rounded-lg font-bold text-lg mt-4"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mango-dark/80 via-mango-dark/40 to-mango-dark/90" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
          Where Lagos Comes to <span className="text-mango-gold italic">Eat, Drink & Celebrate</span>
        </h1>
        <p className="text-lg md:text-xl text-mango-cream/80 mb-10 font-light tracking-wide">
          Garden Terrace · Rooftop · Pool · Karaoke · Late Night Dining
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#reservations" 
            className="w-full md:w-auto bg-mango-gold text-mango-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all flex items-center justify-center gap-2"
          >
            Reserve a Table
          </a>
          <a 
            href="#menu" 
            className="w-full md:w-auto border-2 border-mango-gold text-mango-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-mango-gold hover:text-mango-dark transition-all flex items-center justify-center gap-2"
          >
            View Our Menu
          </a>
        </div>
      </motion.div>

      {/* Floating particles simplified effect */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-mango-gold to-transparent opacity-50" />
      </div>
    </section>
  );
};

const SectionHeading = ({ children, subtitle, centered = true }: { children: React.ReactNode, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {subtitle && <p className="text-mango-gold font-medium tracking-[0.2em] mb-4 text-sm uppercase">{subtitle}</p>}
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-mango-cream">{children}</h2>
    <div className={`h-1 w-20 bg-mango-gold mt-6 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

const About = () => {
  const cards = [
    { icon: <Utensils className="text-mango-gold" size={40} />, title: 'Multi-Cuisine Excellence', desc: 'Nigerian, Continental, Seafood & More' },
    { icon: <TreePine className="text-mango-gold" size={40} />, title: 'Stunning Ambience', desc: 'Garden, Rooftop Terrace & Pool Setting' },
    { icon: <Star className="text-mango-gold" size={40} />, title: '4,961 Happy Reviews', desc: "Voted Among Lagos' Top Restaurants" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-mango-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-mango-green/20 border border-mango-gold/10 p-10 rounded-2xl text-center group hover:border-mango-gold/30 transition-all"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-mango-cream/70 font-light leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl font-light text-mango-cream/80 leading-relaxed italic">
            "Nestled in the heart of Ikeja GRA, La Mango is Lagos' favorite destination for unforgettable dining. 
            Whether it's a casual lunch, romantic dinner, or a full event — we deliver every time."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const dishes = [
    { emoji: '🍗', name: 'Buffalo Wings', desc: 'Crispy, spicy perfection', price: '6,000' },
    { emoji: '🐟', name: 'Catfish Peppersoup', desc: 'Rich, bold & deeply Nigerian', price: '7,500' },
    { emoji: '🥙', name: 'Shawarma', desc: 'Street-style, loaded & fresh', price: '5,500' },
    { emoji: '🐠', name: 'Grilled Catfish', desc: 'Smoky, tender, perfectly spiced', price: '8,500' },
    { emoji: '🦐', name: 'Seafood Okro Soup', desc: 'Snail, catfish, prawns & calamari', price: '9,500' },
    { emoji: '🍝', name: 'Spicy Spaghetti & Chicken', desc: 'Continental with a Lagos twist', price: '8,000' },
    { emoji: '🥗', name: 'Small Chops Platter', desc: 'Perfect for sharing & events', price: '6,500' },
    { emoji: '🍹', name: 'Signature Cocktails', desc: 'Handcrafted bar creations', price: '4,500' },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-mango-green/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Experience the Flavor">Our Most Loved Dishes</SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-mango-dark/40 border border-mango-gold/5 p-6 rounded-xl hover:border-mango-gold/40 transition-all cursor-default"
            >
              <div className="text-4xl mb-4">{dish.emoji}</div>
              <h4 className="text-xl font-bold mb-2 text-mango-cream">{dish.name}</h4>
              <p className="text-sm text-mango-cream/60 mb-6 font-light">{dish.desc}</p>
              <div className="text-mango-gold font-bold text-lg">₦{dish.price}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://chowdeck.com/store/ikeja/restaurants/la-mango" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mango-gold text-mango-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-mango-gold/90 transition-all"
          >
            See Full Menu on Chowdeck <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Ambience = () => {
  const features = [
    { icon: <TreePine size={32} />, title: 'Garden Seating', desc: 'Lush greenery and fresh air' },
    { icon: <Droplets size={32} />, title: 'Pool Area', desc: 'Cool vibes by the clear water' },
    { icon: <MapPin size={32} />, title: 'Rooftop Terrace', desc: 'Ikeja GRA skyline views' },
    { icon: <Mic2 size={32} />, title: 'Karaoke Nights', desc: 'Sing your heart out all night' },
  ];

  return (
    <section className="py-24 bg-mango-dark border-y border-mango-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-mango-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-mango-gold">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{f.title}</h4>
              <p className="text-sm text-mango-cream/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const items = [
    { text: "Best pepper soup in Ikeja GRA, hands down. The rooftop at night is just vibes!", author: "Chioma A." },
    { text: "Brought my team here for a work dinner. The seafood okro was outstanding and the service was warm.", author: "Tunde O." },
    { text: "La Mango never disappoints. The small chops + cocktails combo is unbeatable.", author: "Fatima K." },
  ];

  return (
    <section className="py-24 px-6 bg-mango-green/20">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading subtitle="What People Say">What Lagos is Saying</SectionHeading>
        
        <div className="mb-16">
          <div className="flex justify-center items-center gap-2 text-mango-gold mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} fill="#C9A84C" size={32} />)}
          </div>
          <p className="text-4xl md:text-6xl font-serif font-bold text-mango-cream">4.0 / 5</p>
          <p className="text-mango-cream/60 uppercase tracking-widest text-sm mt-2">4,961 Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-mango-dark p-10 rounded-2xl relative"
            >
              <div className="text-6xl absolute top-4 left-4 text-mango-gold/10 font-serif">"</div>
              <p className="text-lg italic text-mango-cream/80 relative z-10 mb-8 leading-relaxed">
                {r.text}
              </p>
              <footer className="font-bold text-mango-gold">— {r.author}</footer>
            </motion.div>
          ))}
        </div>

        <div className="inline-block bg-mango-gold/10 text-mango-gold border border-mango-gold/20 px-8 py-3 rounded-full font-bold text-sm">
          Voted Among Top Restaurants in Lagos 🏆
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const points = [
    'Private Event Booking', 'Catering Packages', 'Pool Access', 'AV & Sound System', 'Dedicated Event Coordinator'
  ];

  return (
    <section id="events" className="py-24 px-6 bg-mango-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="Celebrations" centered={false}>Host Your Event at La Mango</SectionHeading>
            <p className="text-lg text-mango-cream/70 mb-10 leading-relaxed font-light">
              From corporate dinners to birthday celebrations and weddings — our indoor and outdoor spaces are fully equipped for your perfect event. Pool, garden, rooftop — all yours.
            </p>
            <a 
              href="https://wa.me/2348082646670" 
              className="inline-flex items-center gap-2 bg-mango-gold text-mango-dark px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Inquire About Events <Send size={20} />
            </a>
          </div>
          <div className="bg-mango-green/10 border border-mango-gold/10 p-10 rounded-3xl">
            <h4 className="text-2xl font-serif font-bold mb-8 text-mango-gold">Every Detail Covered</h4>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-mango-cream/90">
                  <CheckCircle2 className="text-mango-gold flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-mango-green/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading subtitle="Secure Your Table">Reserve Your Experience</SectionHeading>
        
        {!submitted ? (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Full Name</label>
              <input required type="text" className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Phone Number</label>
              <input required type="tel" className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Email Address</label>
              <input required type="email" className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Number of Guests</label>
              <select className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors">
                {[1,2,3,4,5,6,7,8,10].map(n => <option key={n} value={n}>{n} {n===1 ? 'Guest' : 'Guests'}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Date</label>
              <input required type="date" className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Time</label>
              <input required type="time" className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest text-mango-gold font-bold">Special Requests</label>
              <textarea rows={4} className="w-full bg-mango-dark/50 border border-mango-gold/20 p-4 rounded-lg focus:border-mango-gold outline-none transition-colors"></textarea>
            </div>
            <button 
              type="submit" 
              className="md:col-span-2 bg-mango-gold text-mango-dark py-5 rounded-lg font-bold text-lg hover:shadow-lg transition-transform hover:-translate-y-1 block w-full"
            >
              Confirm Reservation
            </button>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-mango-dark p-12 rounded-3xl border border-mango-gold/30"
          >
            <div className="w-20 h-20 bg-mango-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-mango-dark" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4">Reservation Requested!</h3>
            <p className="text-mango-cream/70 text-lg mb-8">We have received your request. Our team will contact you shortly to confirm your booking.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-mango-gold font-bold underline"
            >
              Make another booking
            </button>
          </motion.div>
        )}
        
        <div className="text-center mt-12 text-mango-cream/60">
          Or call us directly: <a href="tel:07060816695" className="text-mango-gold font-bold hover:underline">0706 081 6695</a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { label: "Garden Terrace", color: "bg-mango-green" },
    { label: "Grilled Catfish", color: "bg-mango-gold" },
    { label: "Rooftop at Night", color: "bg-mango-dark" },
    { label: "Small Chops", color: "bg-amber-900" },
    { label: "Pool Area", color: "bg-emerald-900" },
    { label: "Karaoke Night", color: "bg-purple-900" },
    { label: "Seafood Platter", color: "bg-orange-950" },
    { label: "Cocktail Bar", color: "bg-zinc-800" },
    { label: "Private Events", color: "bg-emerald-950" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-mango-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="The Vibes">The La Mango Experience</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`aspect-square relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl ${img.color}/20 flex items-center justify-center border border-mango-gold/10`}
            >
              <div className={`absolute inset-0 opacity-40 bg-gradient-to-tr from-black/80 to-transparent`} />
              <div className="relative z-10 text-center p-6">
                <span className="text-2xl font-serif font-bold text-mango-gold mb-2 block tracking-widest">{img.label}</span>
                <span className="text-xs uppercase tracking-[0.3em] opacity-60 text-white group-hover:opacity-100 transition-opacity">View Details</span>
              </div>
              <div className="absolute inset-0 bg-mango-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactLocation = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-mango-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <SectionHeading subtitle="Find Us" centered={false}>Contact & Location</SectionHeading>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-mango-gold/10 rounded-full flex items-center justify-center text-mango-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Address</h4>
                  <p className="text-mango-cream/70 font-light leading-relaxed">
                    3A Adekunle Fajuyi Way,<br />
                    Ikeja GRA, Lagos 101233
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-mango-gold/10 rounded-full flex items-center justify-center text-mango-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone & WhatsApp</h4>
                  <p className="text-mango-cream/70 font-light leading-relaxed">
                    Main: <a href="tel:07060816695" className="hover:text-mango-gold">0706 081 6695</a><br />
                    WhatsApp: <a href="https://wa.me/2348082646670" className="hover:text-mango-gold">08082646670</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-mango-gold/10 rounded-full flex items-center justify-center text-mango-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Opening Hours</h4>
                  <p className="text-mango-cream/70 font-light leading-relaxed">
                    Opens 9:30 AM Daily<br />
                    Till Late Night
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com/lamangorestaurant" target="_blank" className="w-14 h-14 border border-mango-gold/40 rounded-full flex items-center justify-center text-mango-gold hover:bg-mango-gold hover:text-mango-dark transition-all">
                  <Instagram size={24} />
                </a>
                <a href="https://wa.me/2348082646670" className="w-14 h-14 border border-mango-gold/40 rounded-full flex items-center justify-center text-mango-gold hover:bg-mango-gold hover:text-mango-dark transition-all">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden border border-mango-gold/20 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.421575453051!2d3.354124976077395!3d6.594411122345511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923985d064cf%3A0xe6736655c65433f8!2s3A%20Adekunle%20Fajuyi%20Way%2C%20Ikeja%20GRA%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1714311168453!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-mango-dark pt-24 pb-12 px-6 border-t border-mango-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-serif font-bold text-mango-gold mb-6 tracking-tight">La Mango</h3>
            <p className="text-mango-cream/50 leading-relaxed font-light">
              Lagos' premier destination for exceptional dining and vibrant nightlife. Experience the best in Ikeja GRA.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-mango-cream">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-mango-cream/60 hover:text-mango-gold transition-colors">Home</a>
              <a href="#menu" className="text-mango-cream/60 hover:text-mango-gold transition-colors">Menu</a>
              <a href="#about" className="text-mango-cream/60 hover:text-mango-gold transition-colors">About</a>
              <a href="#events" className="text-mango-cream/60 hover:text-mango-gold transition-colors">Events</a>
              <a href="#gallery" className="text-mango-cream/60 hover:text-mango-gold transition-colors">Gallery</a>
              <a href="#reservations" className="text-mango-cream/60 hover:text-mango-gold transition-colors">Reservations</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-mango-cream">Contact Summary</h4>
            <p className="text-mango-cream/60 mb-2">3A Adekunle Fajuyi Way, Ikeja GRA</p>
            <p className="text-mango-cream/60 mb-2">Phone: 0706 081 6695</p>
            <p className="text-mango-cream/60">Email: info@lamango.com</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-mango-gold/5 text-center text-sm text-mango-cream/30">
          <p>© 2025 La Mango Restaurant and Lounge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/2348082646670" 
    target="_blank"
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform active:scale-95 group"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle size={28} />
    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark py-2 px-4 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-mango-dark/10">
      Chat with us
    </span>
  </a>
);

export default function App() {
  return (
    <main className="relative bg-mango-dark">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Ambience />
      <Reviews />
      <Events />
      <Reservations />
      <Gallery />
      <ContactLocation />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
