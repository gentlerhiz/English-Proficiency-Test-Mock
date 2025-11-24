'use client'

import { BookOpen, Brain, Target, TrendingUp, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            English Proficiency Test
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Master your English skills with our comprehensive mock exam designed for graduate admissions
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/quiz">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Start Quiz Now
              </button>
            </Link>
            <a href="#contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition">
                Contact Developer
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Practice With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-green-300">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-center">
                All syllabus topics covered: Parallelism, Cohesion, Stylistic Variation, Concord, Mechanics, and Vocabulary
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-blue-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Exam-Standard Questions</h3>
              <p className="text-gray-600 text-center">
                Questions designed to match real graduate admission exam standards and difficulty levels
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-red-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Track Your Progress</h3>
              <p className="text-gray-600 text-center">
                Instant feedback and performance ratings from "Highly Proficient" to identify your level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What You'll Master
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                Parallelism
              </h3>
              <p className="text-gray-700 ml-10">Concept, nature and manifestations of parallel structures</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                Cohesion & Coherence
              </h3>
              <p className="text-gray-700 ml-10">Sentence and idea connection for effective communication</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                Stylistic Variation
              </h3>
              <p className="text-gray-700 ml-10">Word choice, lexical variants and expression of ideas</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                Concord
              </h3>
              <p className="text-gray-700 ml-10">Subject-verb agreement, rule of proximity, and anomalies</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">5</span>
                Mechanics
              </h3>
              <p className="text-gray-700 ml-10">Spelling, capitalization, and punctuation mastery</p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center">6</span>
                Vocabulary & Tenses
              </h3>
              <p className="text-gray-700 ml-10">Collocations, sense relations, registers, and technical language</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">60 Minutes</h3>
              <p className="text-gray-600 text-sm">Complete 50 questions within the time limit</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Multiple Topics</h3>
              <p className="text-gray-600 text-sm">Questions from all 6 syllabus areas</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">Get your score and detailed breakdown</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">Performance Rating</h3>
              <p className="text-gray-600 text-sm">See your proficiency level (0-100%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Ratings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Proficiency Ratings
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-1">Highly Proficient: 85-100%</h3>
              <p className="text-gray-700">Excellent command of English grammar and vocabulary</p>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-1">Proficient: 70-84%</h3>
              <p className="text-gray-700">Good understanding with minor areas for improvement</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-1">Fairly Proficient: 60-69%</h3>
              <p className="text-gray-700">Adequate skills, requires practice in specific areas</p>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-1">Scarcely Proficient: 50-59%</h3>
              <p className="text-gray-700">Basic understanding, significant improvement needed</p>
            </div>
            <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-1">Below 50%</h3>
              <p className="text-gray-700">Needs extensive practice and review of fundamentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Test Your Skills?</h2>
          <p className="text-xl mb-8">
            Take the mock exam now and see where you stand. Practice makes perfect!
          </p>
          <Link href="/quiz">
            <button className="bg-white text-purple-700 px-12 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
              Start Your Mock Exam
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Contact Developer
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-center text-gray-700 mb-6 text-lg">
              Have questions, feedback, or suggestions? Get in touch!
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  rows={5}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">English Proficiency Test - Mock Exam Platform</p>
          <p className="text-gray-400 text-sm">
            Designed to help students prepare for graduate admission exams
          </p>
          <p className="text-gray-400 text-sm mt-4">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </main>
  )
}
