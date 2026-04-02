"use client";
import { useState } from 'react';

const basePath = '/haha-1775102761453';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const products = [{ n: 'Product 1', d: 'da: Our flagship product, designed to provide a seamless user experience and unparalleled performance.', icon: 'domain' }, { n: 'Product 2', d: 'da: A cutting-edge solution that combines style, functionality, and sustainability, perfect for the modern user.', icon: 'architecture' }, { n: 'Product 3', d: 'da: A revolutionary product that challenges conventional norms and sets new standards in its category.', icon: 'chair' }, { n: 'Product 4', d: 'da: A high-quality product that offers exceptional value, durability, and reliability, making it a top choice among customers.', icon: 'eco' }, { n: 'Product 5', d: 'da: A game-changing product that integrates the latest technology and innovative design to create a unique user experience.', icon: 'precision_manufacturing' }];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-black text-primary font-headline">haha</span>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button key={item} onClick={() => scroll(item.toLowerCase())} className="font-bold text-sm uppercase text-on-surface/70 hover:text-primary">{item}</button>
            ))}
          </div>
          <a href={`https://wa.me/`} target="_blank" className="bg-primary text-white px-6 py-2 rounded-md font-bold text-sm">WhatsApp</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-primary">
        <div className="text-center text-white px-8">
          <span className="uppercase tracking-widest text-accent text-sm font-bold">Welcome to</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold mt-4 mb-6">haha</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">dad</p>
          <a href={`https://wa.me/`} target="_blank" className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-5 rounded-md font-bold text-lg">Contact Us</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">About Us</span>
          <h2 className="font-headline text-4xl font-extrabold mt-2 mb-8">haha</h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mb-12">At haha, we\'re a team of innovators driven by a passion for creativity and excellence, led by our founder\'s motto: dad.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h4 className="font-bold text-primary">Vision</h4><p className="text-sm text-on-surface-variant">To become the leading brand in our industry, known for our unique approach and commitment to quality.</p></div>
            <div><h4 className="font-bold text-primary">Mission</h4><p className="text-sm text-on-surface-variant">To deliver exceptional products and services that exceed our customers\' expectations, while fostering a culture of innovation and teamwork.</p></div>
            <div><h4 className="font-bold text-primary">da</h4><p className="text-sm text-on-surface-variant">Customer-centricity: We prioritize our customers\' needs and strive to build long-lasting relationships with them.</p></div>
            <div><h4 className="font-bold text-primary">da</h4><p className="text-sm text-on-surface-variant">Innovation: We encourage creativity, experimentation, and continuous learning to stay ahead of the curve.</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Services</span>
            <h2 className="font-headline text-4xl font-extrabold mt-2">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{p.icon}</span>
                <h3 className="font-bold text-lg mb-2">{p.n}</h3>
                <p className="text-sm text-on-surface-variant">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-primary text-white rounded-2xl p-12">
            <h2 className="font-headline text-3xl font-extrabold mb-8">Get in Touch</h2>
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
                <input type="email" required placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
              </div>
              <textarea required rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder:text-white/40" />
              <button type="submit" className="w-full bg-accent text-primary py-4 rounded font-bold">Send via WhatsApp</button>
            </form>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-white/80 text-sm">
              <div><strong className="text-white">Address</strong><p>123 Main St</p></div>
              <div><strong className="text-white">Email</strong><p>da</p></div>
              <div><strong className="text-white">Phone</strong><p>da</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold">haha</div>
          <div className="flex gap-6"><a href={`https://wa.me/`} target="_blank" className="text-white/60 hover:text-white text-sm">WhatsApp</a></div>
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} haha</p>
        </div>
      </footer>
    </div>
  );
}
