import { motion } from "motion/react";
import { ArrowRight, BookOpen, Code, FileText, GraduationCap, Phone, Mail, MessageCircle, Menu, X, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { AIGeneratedImage } from "./AIGeneratedImage";

export function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', details: '' });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\nProject Details:\n${formData.details}`);
    window.location.href = `mailto:somvisuala@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-slate-900 tracking-tight">
                Somvisual <span className="text-primary-600">Solution</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Testimonials</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Contact</a>
              <a href="https://somvisualprogress.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-xl">
                View Progress
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass border-t border-slate-200/50 absolute top-20 left-0 right-0 p-4 flex flex-col gap-4 shadow-2xl"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100/50 text-slate-700 font-medium">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100/50 text-slate-700 font-medium">Services</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100/50 text-slate-700 font-medium">How it Works</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100/50 text-slate-700 font-medium">Testimonials</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100/50 text-slate-700 font-medium">Contact</a>
            <a href="https://somvisualprogress.netlify.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl bg-primary-600 text-white font-medium text-center mt-2">View Progress</a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Professional Academic Support
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                We Help Students Build Their <span className="text-gradient">Thesis & System Projects</span> Easily
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Struggling with your final year project? We provide professional development and writing services to help you graduate with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-0.5">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://somvisualprogress.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  View Student Progress
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-indigo-200 rounded-[3rem] blur-3xl opacity-50 -z-10 transform rotate-6"></div>
              <AIGeneratedImage 
                prompt="A modern, clean, futuristic, and minimal 3D illustration of students working on computers, coding, and studying. The primary color should be #425af5 (a vibrant blue). Tech startup style, glassmorphism elements, bright and optimistic. High quality, 4k."
                alt="Students working on projects"
                className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/50 object-cover aspect-[4/3]"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">100%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-primary-100 rounded-[2rem] transform -rotate-3 -z-10"></div>
                <AIGeneratedImage 
                  prompt="A modern, clean, futuristic, and minimal 3D illustration of a thesis book and a computer screen showing a system project. The primary color should be #425af5. Tech startup style, glassmorphism elements, bright and optimistic. High quality, 4k."
                  alt="Thesis and System Project Illustration"
                  className="w-full rounded-[2rem] shadow-xl border border-white/50 aspect-square object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Why Choose Our Service?
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We understand that the final year of university can be overwhelming. Our service is specifically designed to help students who cannot:
                </p>
                <ul className="space-y-6">
                  {[
                    { title: "Write a Professional Thesis", desc: "We craft well-researched, properly formatted, and academically sound thesis books." },
                    { title: "Build Complex System Projects", desc: "From web apps to mobile applications, we develop robust systems tailored to your requirements." },
                    { title: "Organize Project Documentation", desc: "We structure and write comprehensive documentation that meets university standards." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Our Core Services</h2>
              <p className="text-lg text-slate-600">Comprehensive support for every aspect of your final year academic requirements.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: "Thesis Book Writing", desc: "Complete thesis writing from abstract to conclusion with proper citations." },
                { icon: Code, title: "System Project Development", desc: "Custom software development using modern tech stacks." },
                { icon: FileText, title: "Project Documentation", desc: "Detailed technical documentation, UML diagrams, and manuals." },
                { icon: GraduationCap, title: "Final Year Project Support", desc: "End-to-end guidance to ensure your project gets approved." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                    <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/40 via-slate-900 to-slate-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-lg text-slate-400">A simple, transparent process to get your project done.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
              
              {[
                { step: "01", title: "Contact Us", desc: "Reach out via WhatsApp, phone, or email." },
                { step: "02", title: "Explain Project", desc: "Share your requirements and university guidelines." },
                { step: "03", title: "We Build", desc: "Our experts develop the system and write the thesis." },
                { step: "04", title: "You Receive", desc: "Get the complete, ready-to-submit project." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-2xl font-display font-bold text-primary-400 mb-6 shadow-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Student Success Stories</h2>
              <p className="text-lg text-slate-600">Hear from students who successfully graduated with our help.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Mohamed Abdirisaaq Omer", text: "They built my entire university management system perfectly. The code was clean and the documentation was exactly what my supervisor wanted." },
                { name: "Ayaan Mohamed Ali", text: "I was struggling with my thesis chapters. Their writing team helped me structure and complete my book in record time. Highly recommended!" },
                { name: "Mumtaas Naasir Daahir", text: "The communication was excellent. I could track my project's progress easily, and the final delivery exceeded my expectations." },
                { name: "Noradin Mohamed Hassan", text: "Professional, fast, and reliable. They handled both my mobile app project and the accompanying thesis book flawlessly." },
                { name: "Khalid Guled Ali", text: "I didn't know how to start my final year project. They guided me from topic selection to the final presentation." },
                { name: "Hibo Mohamed Abdirahman", text: "The quality of the system they developed was outstanding. My professors were very impressed with the final result." }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-indigo-100 flex items-center justify-center text-primary-700 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">Graduated Student</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Progress CTA */}
        <section id="progress" className="py-20 bg-primary-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Already a Client?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Track the real-time progress of your thesis and system project development through our dedicated student portal.
            </p>
            <a href="https://somvisualprogress.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              View Student Project Progress <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Ready to start your project? Contact us today for a free consultation and quote.
                </p>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-lg text-slate-600">0637271922</p>
                      <p className="text-sm text-slate-500">Sakariye Ahmed Hussain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-lg text-slate-600">somvisuala@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0637271922" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <a href="https://wa.me/252637271922" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white" 
                      placeholder="063..." 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white resize-none" 
                      placeholder="Tell us about your thesis or system project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-display font-bold text-white tracking-tight">
                  Somvisual <span className="text-primary-500">Solution</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Professional thesis writing and system project development services for university students.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Our Services</a></li>
                <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                <li><a href="https://somvisualprogress.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Track Progress</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>Sakariye Ahmed Hussain</li>
                <li>Phone: 0637271922</li>
                <li>Email: somvisuala@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Somvisual Solution. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
