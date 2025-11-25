'use client'

import { BookOpen, Brain, Target, TrendingUp, Award, Clock } from 'lucide-react'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Award className="w-10 h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master English<br />Proficiency
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Practice with <span className="text-white font-semibold">1000+ AI-generated questions</span>, 
            get instant feedback, and ace your graduate admission exams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quiz">
              <button className="group px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Start Quiz Now
              </button>
            </Link>
            <Link href="/learn">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                <Brain className="w-5 h-5" />
                Learn Topics
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources designed to help you ace your English proficiency exam
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500">
              <div className="flex justify-center mb-5">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                All syllabus topics covered: Parallelism, Cohesion, Stylistic Variation, Concord, Mechanics, and Vocabulary
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="flex justify-center mb-5">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Exam-Standard Questions</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Questions designed to match real graduate admission exam standards and difficulty levels
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-5">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Track Your Progress</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Instant feedback and performance ratings to help you identify your proficiency level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Overview */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You'll Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Six essential areas for English proficiency excellence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/learn/parallelism">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">⚖️</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                      <h3 className="text-lg font-bold text-gray-900">Parallelism</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Concept, nature and manifestations of parallel structures</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/learn/cohesion-coherence">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">🔗</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-indigo-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                      <h3 className="text-lg font-bold text-gray-900">Cohesion & Coherence</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Sentence and idea connection for effective communication</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/learn/stylistic-variation">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">🎨</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-purple-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                      <h3 className="text-lg font-bold text-gray-900">Stylistic Variation</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Word choice, lexical variants and expression of ideas</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/learn/concord">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-pink-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">🤝</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-pink-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                      <h3 className="text-lg font-bold text-gray-900">Concord</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Subject-verb agreement, rule of proximity, and anomalies</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/learn/mechanics">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">⚙️</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-orange-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                      <h3 className="text-lg font-bold text-gray-900">Mechanics</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Spelling, capitalization, and punctuation mastery</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/learn/vocabulary">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-500">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl">📚</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-green-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                      <h3 className="text-lg font-bold text-gray-900">Vocabulary & Usage</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Collocations, sense relations, registers, and technical language</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and effective—get started in seconds
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-lg text-gray-900">30 Minutes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Complete 50 questions within the time limit</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-lg text-gray-900">1000+ Questions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">50 randomly selected from our question bank</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-lg text-gray-900">Instant Results</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Get your score and detailed breakdown</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-lg text-gray-900">Performance Rating</h3>
              <p className="text-gray-600 text-sm leading-relaxed">See your proficiency level (0-100%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Ratings */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proficiency Ratings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your score translates to proficiency levels
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border-2 border-emerald-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-lg font-bold text-sm">85-100%</div>
                <h3 className="font-bold text-lg text-gray-900">Highly Proficient</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Excellent command of English grammar and vocabulary</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-sm">70-84%</div>
                <h3 className="font-bold text-lg text-gray-900">Proficient</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Good understanding with minor areas for improvement</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-amber-600 text-white px-3 py-1 rounded-lg font-bold text-sm">60-69%</div>
                <h3 className="font-bold text-lg text-gray-900">Fairly Proficient</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Adequate skills, requires practice in specific areas</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-sm">50-59%</div>
                <h3 className="font-bold text-lg text-gray-900">Scarcely Proficient</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Basic understanding, significant improvement needed</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-2xl border-2 border-rose-300 hover:shadow-lg transition sm:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-rose-600 text-white px-3 py-1 rounded-lg font-bold text-sm">&lt;50%</div>
                <h3 className="font-bold text-lg text-gray-900">Needs Practice</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">Needs extensive practice and review of fundamentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Test Your Skills?
            </h2>
            <p className="text-lg text-indigo-100 mb-6">
              Challenge yourself with our comprehensive 50-question quiz
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/quiz">
                <button className="px-8 py-3 bg-white text-indigo-700 font-bold text-base rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Start Quiz Now
                </button>
              </Link>
              <Link href="/learn">
                <button className="px-8 py-3 border-2 border-white text-white font-semibold text-base rounded-2xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Study First
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-base text-gray-600">
              Questions or feedback? We'd love to hear from you
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="mb-2 text-base font-medium text-white">English Proficiency Test Mock Exam Platform</p>
          <p className="text-indigo-100 text-sm px-4">
            Designed to help students prepare for graduate admission exams
          </p>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-indigo-100 text-xs px-4 max-w-3xl mx-auto leading-relaxed">
              <span className="inline-flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-100 inline" />
                <span className="font-medium">Practice Tool:</span>
              </span> This platform contains 1000+ AI-generated questions for educational practice only. 
              Questions are randomly selected (50 per quiz) with automatic marking. Not affiliated with official testing bodies.
            </p>
          </div>
          <p className="text-indigo-100 text-sm mt-5">
            © 2025 All rights reserved - <a href="https://practicode.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-100 transition-colors font-medium">Practicode</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
