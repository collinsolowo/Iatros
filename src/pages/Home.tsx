import { Link } from 'react-router-dom';
import { Heart, Microscope, Snowflake, Users, Check, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Happy family"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <span className="text-blue-200">✨ Your Journey to Parenthood Starts Here</span>
              </div>
              <h1 className="text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
                Compassionate IVF Care for Families
              </h1>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Expert fertility treatments and support for aspiring parents, backed by world-class technology and compassionate care
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                >
                  Book a Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+2346001254567"
                  className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
                >
                  Call Us Now
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">65%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">5000+</div>
                  <div className="text-sm text-blue-100">Families Helped</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-blue-100">Years Excellence</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
              COMPREHENSIVE CARE
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer a range of fertility treatments and services tailored to your unique needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services" className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/6627946/pexels-photo-6627946.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="IVF treatment"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Microscope className="w-7 h-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">In Vitro Fertilization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Advanced IVF treatments with personalized protocols for optimal success</p>
            </Link>

            <Link to="/services" className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Fertility testing"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Fertility Testing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Complete diagnostic evaluation to identify and address fertility issues</p>
            </Link>

            <Link to="/services" className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Egg freezing"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Snowflake className="w-7 h-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Egg Freezing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Preserve your fertility for the future with cutting-edge technology</p>
            </Link>

            <Link to="/services" className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3845120/pexels-photo-3845120.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Donor programs"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Donor Programs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Comprehensive egg, sperm, and embryo donation services</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
                WHY CHOOSE IATROS
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Excellence in Fertility Care</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced & Compassionate Staff</h3>
                    <p className="text-gray-600 leading-relaxed">Our internationally trained specialists bring decades of combined experience and genuine care to every patient interaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High Success Rates & Personalized Care</h3>
                    <p className="text-gray-600 leading-relaxed">With a 65% overall success rate and customized treatment protocols, we maximize your chances of parenthood</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facilities</h3>
                    <p className="text-gray-600 leading-relaxed">JCI-accredited center with cutting-edge technology including time-lapse imaging and advanced genetic screening</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6129062/pexels-photo-6129062.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical professionals"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3,200+</div>
                    <div className="text-sm text-gray-600">Healthy Babies Born</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/90"></div>
            </div>
            <div className="relative z-10 py-20 px-8 md:px-16 text-center text-white">
              <h2 className="text-5xl font-bold mb-6">Ready to Begin Your Fertility Journey?</h2>
              <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">Book Your Consultation Today and take the first step towards your dream of parenthood</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-700 px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                >
                  Book Appointment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+2346001254567"
                  className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/20 transition-all border-2 border-white/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +234 600 125 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Newsletter"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
                NEWSLETTER
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Informed with Iatros</h2>
              <p className="text-lg text-gray-600 mb-8">Get the latest fertility news, tips, and updates delivered to your inbox</p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300 flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe</span>
                  </button>
                </div>
                <p className="text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  We respect your privacy and never share your information
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
