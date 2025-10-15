import { Award, Clock, Users, Shield, CheckCircle2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Fertility Specialist & Medical Director',
    credentials: 'MD, FRCOG, PhD Reproductive Medicine',
    experience: '18 years',
    specialization: 'IVF, ICSI, Reproductive Endocrinology',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Senior Embryologist',
    credentials: 'PhD Clinical Embryology, HCLD',
    experience: '15 years',
    specialization: 'Embryo Development, Genetic Screening',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Reproductive Endocrinologist',
    credentials: 'MD, Board Certified REI',
    experience: '12 years',
    specialization: 'PCOS, Endometriosis, Fertility Preservation',
  },
  {
    name: 'Dr. James Williams',
    role: 'Andrologist & Male Fertility Specialist',
    credentials: 'MD, FEBU, Andrology Fellowship',
    experience: '14 years',
    specialization: 'Male Factor Infertility, Sperm Analysis',
  },
  {
    name: 'Dr. Aisha Okafor',
    role: 'Fertility Counselor & Psychologist',
    credentials: 'PhD Clinical Psychology, LMFT',
    experience: '10 years',
    specialization: 'Fertility Counseling, Emotional Support',
  },
  {
    name: 'Dr. David Thompson',
    role: 'Reproductive Surgeon',
    credentials: 'MD, FACOG, Minimally Invasive Surgery',
    experience: '16 years',
    specialization: 'Laparoscopy, Hysteroscopy, Fibroid Removal',
  },
];

const certifications = [
  'Joint Commission International (JCI) Accredited',
  'American Society for Reproductive Medicine (ASRM) Member',
  'European Society of Human Reproduction (ESHRE) Certified',
  'College of American Pathologists (CAP) Accredited Lab',
  'ISO 9001:2015 Quality Management Certified',
];

const facilities = [
  'State-of-the-art IVF Laboratory with Time-Lapse Imaging',
  'Advanced Cryopreservation & Storage Facility',
  'Modern Operating Theaters for Reproductive Surgery',
  'Dedicated Genetic Testing & PGT Laboratory',
  'Private Consultation Rooms & Recovery Suites',
  'On-site Pharmacy & Blood Draw Station',
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Medical team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-blue-800/85"></div>
          <div className="absolute inset-0" style={{ backdropFilter: 'blur(3px)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="text-blue-100">WORLD-CLASS SPECIALISTS</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">Meet Our Expert Team</h1>
          <p className="text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            World-class fertility specialists dedicated to helping you achieve your dream of parenthood
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <p className="text-gray-600">Medical Specialists</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Award className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">65%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
              <p className="text-gray-600">Families Helped</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
            <p className="text-lg text-gray-600">
              Internationally trained specialists with extensive experience in reproductive medicine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{member.experience} of experience</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{member.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Accreditations & Certifications</h2>
            <p className="text-xl text-blue-100">
              Recognized by leading international healthcare organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 bg-blue-800 bg-opacity-50 rounded-xl p-6">
                <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-lg">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600">
              Equipped with the latest technology for optimal treatment outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="rounded-3xl h-96 overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IVF Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {facilities.slice(0, 3).map((facility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-2">
              {facilities.slice(3).map((facility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
            <div className="md:order-1">
              <div className="rounded-3xl h-96 overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Consultation Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Iatros Specialist Hospital, we understand that your fertility journey is deeply personal.
            Our team combines clinical excellence with compassionate care, ensuring you receive the highest
            standard of treatment in a supportive, respectful environment. We stay at the forefront of
            reproductive medicine through continuous education, research, and investment in advanced
            technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every member of our team is dedicated to making your dream of parenthood a reality. We provide
            personalized treatment plans, transparent communication, and unwavering support throughout your
            entire journey with us.
          </p>
        </div>
      </section>
    </div>
  );
}
