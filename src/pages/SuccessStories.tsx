import { Heart, Star, Baby, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote: "After three years of trying, we had almost given up hope. The team at Iatros gave us not just medical treatment, but emotional support every step of the way. Our twin girls are now 6 months old, and we couldn't be more grateful.",
    name: "Sarah & Michael T.",
    treatment: "IVF with PGT-A",
    outcome: "Twin girls",
    year: "2024",
  },
  {
    quote: "The professionalism and care we received was outstanding. Dr. Johnson took time to explain every detail and adjusted our treatment plan based on our unique situation. We now have a beautiful baby boy.",
    name: "Jennifer L.",
    treatment: "IUI Treatment",
    outcome: "Healthy baby boy",
    year: "2024",
  },
  {
    quote: "I was 38 and worried about my age. The team never made me feel rushed or hopeless. They were realistic but optimistic. After our second cycle, we got pregnant. Our daughter just turned one.",
    name: "Amanda & David R.",
    treatment: "IVF Treatment",
    outcome: "Baby girl",
    year: "2023",
  },
  {
    quote: "As a single woman, I was nervous about starting this journey alone. The staff made me feel supported and respected. My son is the light of my life, and I'm so thankful for their expertise and kindness.",
    name: "Rachel M.",
    treatment: "Donor Sperm IUI",
    outcome: "Healthy baby boy",
    year: "2023",
  },
  {
    quote: "We struggled with male factor infertility. Dr. Williams and the team created a treatment plan that addressed our specific needs. The ICSI procedure was successful on our first attempt. We now have twins!",
    name: "Lisa & James K.",
    treatment: "ICSI Procedure",
    outcome: "Twin boys",
    year: "2024",
  },
  {
    quote: "After two miscarriages, we were heartbroken. The genetic screening they recommended gave us peace of mind, and we now have a healthy pregnancy at 24 weeks. We finally feel hopeful again.",
    name: "Emma & Chris W.",
    treatment: "IVF with Genetic Screening",
    outcome: "Ongoing pregnancy",
    year: "2025",
  },
];

const statistics = [
  { value: '5,000+', label: 'Families Helped', icon: Heart },
  { value: '65%', label: 'Success Rate', icon: TrendingUp },
  { value: '15+', label: 'Years of Excellence', icon: Star },
  { value: '3,200+', label: 'Babies Born', icon: Baby },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Happy family with baby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 via-blue-900/90 to-blue-800/85"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="text-teal-100">INSPIRING JOURNEYS</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">Success Stories</h1>
          <p className="text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Real families, real joy. Read about the journeys of those who found hope and happiness with Iatros
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <Icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-gray-600">
              Stories of hope, perseverance, and the joy of parenthood
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-8 h-8 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.treatment} • {testimonial.year}</div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Baby className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-medium text-blue-900">
                      Outcome: {testimonial.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Rates</h2>
            <p className="text-lg text-gray-600">
              Transparent data showing our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-700 mb-2">68%</div>
              <p className="text-gray-600 mb-2">Success Rate</p>
              <p className="text-sm text-gray-500">Women under 35</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-700 mb-2">58%</div>
              <p className="text-gray-600 mb-2">Success Rate</p>
              <p className="text-sm text-gray-500">Women 35-40</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl font-bold text-blue-700 mb-2">45%</div>
              <p className="text-gray-600 mb-2">Success Rate</p>
              <p className="text-sm text-gray-500">Women over 40</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Our Success Rates High?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Personalized Treatment Plans</h4>
                  <p className="text-gray-600 text-sm">Every patient receives a customized protocol based on their unique medical history and needs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced Laboratory Technology</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art equipment including time-lapse imaging and optimal culture conditions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Embryologists</h4>
                  <p className="text-gray-600 text-sm">Highly trained specialists with decades of combined experience in embryo development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Support</h4>
                  <p className="text-gray-600 text-sm">Psychological counseling, nutritional guidance, and wellness programs throughout treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-12 h-12 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Share Your Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your success story could inspire others on their fertility journey. If you've had a positive
                  experience with Iatros and would like to share your story, we'd love to hear from you. Your
                  privacy and comfort are our top priorities.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-4">
                <strong>Note on Privacy:</strong> All testimonials are shared with explicit consent. Names may be
                changed or abbreviated to protect patient confidentiality. Photos are never published without written
                permission.
              </p>
              <a
                href="mailto:stories@iatros.com"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Contact Us to Share
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have found hope and happiness at Iatros Specialist Hospital
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
