import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram } from 'lucide-react';
export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'siraajsaabir@gmail.com', link: 'mailto:siraajsaabir@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+94 78 516 5418', link: 'tel:+94785165418' },
    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', link: 'https://maps.app.goo.gl/SmK89h8AY4cWMNcCA' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/ssaabir' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/siraaj-saabir-502866263' },
    { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/siraaj.saabir/' }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-900 to-black"
      style={{
        background: 'linear-gradient(135deg, #2D2A2A 0%, #1A1A1A 100%)'
      }}
    >
      {/* Subtle background elements with brand colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, #FF8E3C, #FFA066)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          style={{
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block px-6 py-3 text-white text-sm font-semibold rounded-full shadow-sm mb-6 border"
            style={{
              background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)',
              borderColor: '#6366F1'
            }}
          >
            Let's connect
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-neutral-100 leading-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-300">
            <div className="relative">
              <div 
                className="absolute -inset-1 rounded-xl blur opacity-25"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                }}
              ></div>
              <div 
                className="relative backdrop-blur-sm border rounded-xl p-8 shadow-lg"
                style={{
                  backgroundColor: '#F5F5DC',
                  borderColor: '#6366F1'
                }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2D2A2A' }}>
                  Send me a message
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#2D2A2A' }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{
                          backgroundColor: 'white',
                          borderColor: '#D1D5DB',
                          focusRingColor: '#FF6B35'
                        }}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#2D2A2A' }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                        style={{
                          backgroundColor: 'white',
                          borderColor: '#D1D5DB'
                        }}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D2A2A' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{
                        backgroundColor: 'white',
                        borderColor: '#D1D5DB'
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D2A2A' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{
                        backgroundColor: 'white',
                        borderColor: '#D1D5DB'
                      }}
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D2A2A' }}>
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                      style={{
                        backgroundColor: 'white',
                        borderColor: '#D1D5DB'
                      }}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => console.log('Form would be submitted')}
                    className="group w-full inline-flex items-center justify-center px-8 py-4 text-white text-lg font-bold rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                    }}
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in animation-delay-1000">
            {/* Contact Details */}
            <div className="relative">
              <div 
                className="absolute -inset-1 rounded-xl blur opacity-25"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                }}
              ></div>
              <div 
                className="relative backdrop-blur-sm border rounded-xl p-8 shadow-lg"
                style={{
                  backgroundColor: '#F5F5DC',
                  borderColor: '#6366F1'
                }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2D2A2A' }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="group flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      style={{
                        backgroundColor: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFF7ED'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                        }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">{item.label}</p>
                        <p 
                          className="font-medium group-hover:transition-colors duration-300"
                          style={{ 
                            color: '#2D2A2A'
                          }}
                        >{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div 
                className="absolute -inset-1 rounded-xl blur opacity-25"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                }}
              ></div>
              <div 
                className="relative backdrop-blur-sm border rounded-xl p-8 shadow-lg"
                style={{
                  backgroundColor: '#F5F5DC',
                  borderColor: '#6366F1'
                }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#2D2A2A' }}>
                  Follow Me
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center p-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                      style={{
                        backgroundColor: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFF7ED'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #FF6B35, #FF8E3C)'
                        }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <span 
                        className="text-sm group-hover:transition-colors duration-300"
                        style={{ color: '#6B7280' }}
                      >{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}