'use client'

import { BookOpen, Brain, Target, TrendingUp, Award, Clock } from 'lucide-react'
import Link from 'next/link'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight px-4">
              Master English<br />
              Proficiency
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto px-4 leading-relaxed">
              Practice with <span className="text-white font-semibold">600 AI-generated questions</span>, 
              get instant feedback, and ace your graduate admission exams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4">
              <Link href="/quiz">
                <button className="group px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Start Quiz Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <a href="#contact">
                <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-14 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-800 mb-8 sm:mb-10 text-xl sm:text-2xl px-4 font-semibold">
            Everything you need to ace your English proficiency exam
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-emerald-500">
              <div className="flex justify-center mb-5">
                <div className="bg-emerald-100 p-4 rounded-xl">
                  <Brain className="w-8 h-8 text-emerald-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                All syllabus topics covered: Parallelism, Cohesion, Stylistic Variation, Concord, Mechanics, and Vocabulary
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-600">
              <div className="flex justify-center mb-5">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Target className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Exam-Standard Questions</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Questions designed to match real graduate admission exam standards and difficulty levels
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-indigo-600 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-5">
                <div className="bg-indigo-100 p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-indigo-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Track Your Progress</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Instant feedback and performance ratings from "Highly Proficient" to identify your level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Overview */}
      <section className="py-10 sm:py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900">
            What You'll Master
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg px-4">
            Six essential areas for English proficiency excellence
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-600 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>Parallelism</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Concept, nature and manifestations of parallel structures</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>Cohesion & Coherence</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Sentence and idea connection for effective communication</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-emerald-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>Stylistic Variation</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Word choice, lexical variants and expression of ideas</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-amber-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">4</span>
                <span>Concord</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Subject-verb agreement, rule of proximity, and anomalies</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-rose-600 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-rose-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">5</span>
                <span>Mechanics</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Spelling, capitalization, and punctuation mastery</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-violet-600 hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-900">
                <span className="bg-violet-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0">6</span>
                <span>Vocabulary & Tenses</span>
              </h3>
              <p className="text-gray-600 ml-11 leading-relaxed">Collocations, sense relations, registers, and technical language</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 sm:py-14 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg px-4">
            Simple, fast, and effective—get started in seconds
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-700" />
              </div>
              <h3 className="font-bold mb-2 text-base text-gray-900">60 Minutes</h3>
              <p className="text-gray-600 text-sm px-2 leading-relaxed">Complete 50 questions within the time limit</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-bold mb-2 text-base text-gray-900">600 Question Bank</h3>
              <p className="text-gray-600 text-sm px-2 leading-relaxed">50 randomly selected from 600 questions each time</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="font-bold mb-2 text-base text-gray-900">Instant Results</h3>
              <p className="text-gray-600 text-sm px-2 leading-relaxed">Get your score and detailed breakdown</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-bold mb-2 text-base text-gray-900">Performance Rating</h3>
              <p className="text-gray-600 text-sm px-2 leading-relaxed">See your proficiency level (0-100%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Ratings */}
      <section className="py-10 sm:py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900">
            Proficiency Ratings
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg px-4">
            See how your score translates to proficiency levels
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-1 text-gray-900">Highly Proficient: 85-100%</h3>
              <p className="text-gray-600 leading-relaxed">Excellent command of English grammar and vocabulary</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-1 text-gray-900">Proficient: 70-84%</h3>
              <p className="text-gray-600 leading-relaxed">Good understanding with minor areas for improvement</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-1 text-gray-900">Fairly Proficient: 60-69%</h3>
              <p className="text-gray-600 leading-relaxed">Adequate skills, requires practice in specific areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600 hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-1 text-gray-900">Scarcely Proficient: 50-59%</h3>
              <p className="text-gray-600 leading-relaxed">Basic understanding, significant improvement needed</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-rose-600 hover:shadow-md transition sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg mb-1 text-gray-900">Below 50%</h3>
              <p className="text-gray-600 leading-relaxed">Needs extensive practice and review of fundamentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 px-4 bg-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-gray-900">Ready to Test Your Skills?</h2>
          <p className="text-lg sm:text-xl mb-8 px-4 text-gray-700">
            Take the mock exam now and see where you stand. Practice makes perfect!
          </p>
          <Link href="/quiz" className="inline-block px-4">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md whitespace-nowrap">
              Start Your Mock Exam
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-14 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900">
            Contact Developer
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg px-4">
            Have questions, feedback, or suggestions? Get in touch
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-slate-700 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <p className="mb-2 text-base font-medium text-gray-200">English Proficiency Test Mock Exam Platform</p>
          <p className="text-gray-400 text-sm px-4">
            Designed to help students prepare for graduate admission exams
          </p>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-gray-500 text-xs px-4 max-w-3xl mx-auto leading-relaxed">
              <span className="inline-flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-gray-500 inline" />
                <span className="font-medium">Practice Tool:</span>
              </span> This platform contains 600 AI-generated questions for educational practice only. 
              Questions are randomly selected (50 per quiz) with automatic marking. Not affiliated with official testing bodies.
            </p>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            © 2025 All rights reserved - <a href="https://practicode.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Practicode</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
