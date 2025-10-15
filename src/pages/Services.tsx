import {
  Microscope, Heart, Snowflake, Users, TestTube, Baby,
  Dna, Shield, Clock, CheckCircle2, DollarSign, FileText,
  Calendar, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'ivf',
    icon: Microscope,
    title: 'In Vitro Fertilization (IVF)',
    description: 'Advanced IVF treatments with personalized protocols',
    longDescription: 'Our IVF program utilizes the latest reproductive technologies to maximize your chances of success. We offer customized treatment protocols based on your unique medical history, age, and fertility factors.',
    features: [
      'Personalized stimulation protocols',
      'State-of-the-art embryology lab',
      'Time-lapse embryo monitoring',
      'Blastocyst culture and transfer',
      'Preimplantation genetic testing (PGT)',
      'Fresh and frozen embryo transfers'
    ],
    successRate: '68% for women under 35',
    duration: '4-6 weeks per cycle',
    priceRange: '$12,000 - $15,000 per cycle'
  },
  {
    id: 'iui',
    icon: Heart,
    title: 'Intrauterine Insemination (IUI)',
    description: 'Less invasive fertility treatment option',
    longDescription: 'IUI is a fertility treatment that involves placing sperm directly into the uterus during ovulation. This procedure is less invasive and more affordable than IVF, making it an excellent first-line treatment option.',
    features: [
      'Ovulation induction and monitoring',
      'Sperm preparation and washing',
      'Timed insemination procedure',
      'Natural or medicated cycles',
      'Single or multiple attempts',
      'Comprehensive fertility evaluation'
    ],
    successRate: '15-20% per cycle',
    duration: '2 weeks per cycle',
    priceRange: '$500 - $1,500 per cycle'
  },
  {
    id: 'egg-freezing',
    icon: Snowflake,
    title: 'Egg Freezing',
    description: 'Preserve your fertility for the future',
    longDescription: 'Egg freezing (oocyte cryopreservation) allows you to preserve your fertility by freezing and storing your eggs for future use. This option is ideal for women who want to delay childbearing for personal or medical reasons.',
    features: [
      'Comprehensive fertility assessment',
      'Ovarian stimulation protocol',
      'Egg retrieval procedure',
      'Vitrification (flash-freezing) technology',
      'Long-term secure storage',
      'Future thaw and fertilization services'
    ],
    successRate: '85-95% egg survival rate',
    duration: '2-3 weeks for egg retrieval',
    priceRange: '$8,000 - $12,000 + storage fees'
  },
  {
    id: 'donor-programs',
    icon: Users,
    title: 'Donor Programs',
    description: 'Egg, sperm, and embryo donation services',
    longDescription: 'Our comprehensive donor programs provide access to thoroughly screened egg donors, sperm donors, and embryo donors. We maintain the highest standards of screening and matching to help you build your family.',
    features: [
      'Extensive donor database',
      'Thorough medical and genetic screening',
      'Psychological evaluation of donors',
      'Comprehensive donor profiles',
      'Anonymous and known donation options',
      'Legal support and guidance'
    ],
    successRate: '55-65% per transfer',
    duration: 'Varies by program',
    priceRange: '$25,000 - $40,000 (including donor compensation)'
  },
  {
    id: 'genetic-testing',
    icon: Dna,
    title: 'Genetic Testing',
    description: 'Comprehensive genetic screening services',
    longDescription: 'We offer advanced genetic testing to identify chromosomal abnormalities and genetic disorders before embryo transfer. This helps increase pregnancy success rates and reduces the risk of miscarriage.',
    features: [
      'Preimplantation Genetic Testing (PGT-A)',
      'PGT for monogenic disorders (PGT-M)',
      'Carrier screening for both partners',
      'Karyotype analysis',
      'Recurrent pregnancy loss testing',
      'Genetic counseling services'
    ],
    successRate: 'Reduces miscarriage risk by 50%',
    duration: '1-2 weeks for results',
    priceRange: '$3,000 - $7,000'
  },
  {
    id: 'fertility-testing',
    icon: TestTube,
    title: 'Comprehensive Fertility Testing',
    description: 'Complete diagnostic evaluation for both partners',
    longDescription: 'Our comprehensive fertility testing helps identify the root causes of infertility. We evaluate both partners to develop the most effective treatment plan tailored to your specific needs.',
    features: [
      'Hormone level testing (FSH, LH, AMH, Estradiol)',
      'Ovarian reserve assessment',
      'Semen analysis',
      'Ultrasound examination',
      'Hysterosalpingography (HSG)',
      'Saline sonohysterogram'
    ],
    successRate: '95% diagnostic accuracy',
    duration: '2-4 weeks for complete workup',
    priceRange: '$2,000 - $4,000'
  },
  {
    id: 'male-fertility',
    icon: Shield,
    title: 'Male Fertility Treatment',
    description: 'Specialized care for male factor infertility',
    longDescription: 'Our male fertility specialists provide comprehensive evaluation and treatment for male factor infertility, including low sperm count, poor motility, and other reproductive issues.',
    features: [
      'Detailed semen analysis',
      'Hormonal evaluation',
      'Testicular sperm extraction (TESE)',
      'Varicocele treatment',
      'Lifestyle and nutritional counseling',
      'ICSI for severe male factor'
    ],
    successRate: '70% improvement rate',
    duration: 'Varies by treatment',
    priceRange: '$1,500 - $8,000'
  },
  {
    id: 'embryo-freezing',
    icon: Baby,
    title: 'Embryo Freezing',
    description: 'Preserve embryos for future family planning',
    longDescription: 'Embryo cryopreservation allows you to preserve high-quality embryos from your IVF cycle for future pregnancies. This provides additional opportunities for pregnancy without undergoing another full IVF cycle.',
    features: [
      'Vitrification freezing technology',
      'Secure long-term storage',
      'Annual storage management',
      'Future thaw and transfer services',
      'Embryo grading and selection',
      'Compassionate disposition options'
    ],
    successRate: '95% embryo survival rate',
    duration: 'Storage available indefinitely',
    priceRange: '$1,500 - $3,000 + annual storage'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Meet with our fertility specialists to discuss your medical history, goals, and treatment options.'
  },
  {
    step: 2,
    title: 'Diagnostic Testing',
    description: 'Comprehensive fertility evaluation to identify any underlying issues affecting conception.'
  },
  {
    step: 3,
    title: 'Treatment Plan',
    description: 'Personalized protocol developed specifically for your unique situation and needs.'
  },
  {
    step: 4,
    title: 'Treatment Cycle',
    description: 'Begin your treatment with close monitoring and support from our experienced team.'
  },
  {
    step: 5,
    title: 'Pregnancy Test',
    description: 'Follow-up testing and early pregnancy monitoring to confirm and support your success.'
  }
];

const insuranceProviders = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Kaiser Permanente'
];

const faqs = [
  {
    question: 'How do I know which fertility treatment is right for me?',
    answer: 'During your initial consultation, our specialists will review your medical history, perform diagnostic tests, and discuss your goals. Based on this comprehensive evaluation, we\'ll recommend the most appropriate treatment options for your specific situation.'
  },
  {
    question: 'What is the success rate of IVF at Iatros?',
    answer: 'Our overall IVF success rate is 65%, with rates varying by age: 68% for women under 35, 58% for ages 35-40, and 45% for women over 40. Success rates depend on various factors including age, diagnosis, and treatment protocol.'
  },
  {
    question: 'Does insurance cover fertility treatments?',
    answer: 'Coverage varies by insurance provider and policy. We work with most major insurance companies and our billing team will verify your benefits. We also offer financing options and payment plans for treatments not covered by insurance.'
  },
  {
    question: 'How long does an IVF cycle take?',
    answer: 'A complete IVF cycle typically takes 4-6 weeks from the start of ovarian stimulation to embryo transfer. The process includes 10-14 days of medication, egg retrieval, embryo development, and transfer.'
  },
  {
    question: 'What is the difference between IVF and IUI?',
    answer: 'IUI (Intrauterine Insemination) involves placing prepared sperm directly into the uterus during ovulation. IVF (In Vitro Fertilization) involves retrieving eggs, fertilizing them outside the body, and transferring embryos to the uterus. IVF is more invasive but typically has higher success rates.'
  },
  {
    question: 'Can I freeze my eggs if I\'m not ready to have children yet?',
    answer: 'Yes! Egg freezing is an excellent option for women who want to preserve their fertility. The ideal age for egg freezing is in your late 20s to early 30s, but we work with women up to age 40. The process takes about 2-3 weeks.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6627630/pexels-photo-6627630.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Medical technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-teal-900/80"></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(2px)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="text-blue-100">COMPREHENSIVE FERTILITY SOLUTIONS</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">Our Fertility Services</h1>
          <p className="text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fertility treatments backed by advanced technology and compassionate care
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Range of Treatments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial testing to advanced reproductive technologies, we offer every service you need on your journey to parenthood
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0'
                    }`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-10 h-10 text-blue-700" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Schedule Consultation</span>
                      </Link>
                    </div>

                    <div className={`bg-gradient-to-br from-blue-50 via-white to-gray-50 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">Success Rate</h4>
                          </div>
                          <p className="text-2xl font-bold text-blue-700">{service.successRate}</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">Treatment Duration</h4>
                          </div>
                          <p className="text-lg text-gray-700">{service.duration}</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                              <DollarSign className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">Investment</h4>
                          </div>
                          <p className="text-lg text-gray-700">{service.priceRange}</p>
                          <p className="text-sm text-gray-500 mt-2">Financing options available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Treatment Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what to expect at each stage of your fertility treatment
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8 relative">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Insurance & Financing</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that financial concerns should not stand in the way of your dream of parenthood. Our dedicated financial counselors work with you to maximize insurance benefits and explore all available payment options.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Accept Major Insurance Plans</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {insuranceProviders.map((provider, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                      <span className="text-gray-700">{provider}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">And many more regional and national providers</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Financing Options</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Flexible Payment Plans</p>
                      <p className="text-gray-600 text-sm">Interest-free options for qualified patients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Healthcare Credit Lines</p>
                      <p className="text-gray-600 text-sm">Partnership with leading medical financing companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Multi-Cycle Discounts</p>
                      <p className="text-gray-600 text-sm">Special pricing for bundled treatment packages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Military & First Responder Discounts</p>
                      <p className="text-gray-600 text-sm">Special rates for those who serve our communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 lg:p-10 text-white sticky top-24">
              <FileText className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Get Your Free Financial Consultation</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our financial counselors will review your insurance coverage, explain all costs upfront, and help you find the most affordable path to treatment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Insurance verification within 24 hours</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Transparent cost breakdowns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Personalized payment plan options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>No hidden fees or surprise charges</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-white text-blue-700 px-6 py-4 rounded-lg text-center font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <div className="mt-6 pt-6 border-t border-blue-600">
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="text-sm text-blue-100">Call us directly</p>
                    <p className="text-xl font-bold">+234 600 125 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our fertility services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Our patient coordinators are available to answer any questions you may have about our services, treatments, or the fertility journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
              <a
                href="tel:+2346001254567"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-700 border-2 border-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
