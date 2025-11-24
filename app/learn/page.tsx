'use client'

import { Home, PlayCircle, ArrowRight, Brain, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function LearnPage() {
  const topics = [
    {
      id: 'parallelism',
      number: 1,
      title: 'Parallelism',
      subtitle: 'Concept, nature and manifestations of parallel structures',
      description: 'Master the art of creating balanced, rhythmic sentences by maintaining consistent grammatical structures. Learn how parallel construction enhances clarity and elegance in writing.',
      color: 'blue',
      icon: '⚖️'
    },
    {
      id: 'cohesion-coherence',
      number: 2,
      title: 'Cohesion & Coherence',
      subtitle: 'Sentence and idea connection for effective communication',
      description: 'Discover techniques for linking ideas seamlessly using transitional devices, reference words, and logical flow to create unified, compelling text.',
      color: 'indigo',
      icon: '🔗'
    },
    {
      id: 'stylistic-variation',
      number: 3,
      title: 'Stylistic Variation',
      subtitle: 'Word choice, lexical variants and expression of ideas',
      description: 'Explore formal and informal registers, understand context-appropriate language, and learn to adapt your writing style for different audiences and purposes.',
      color: 'purple',
      icon: '🎨'
    },
    {
      id: 'concord',
      number: 4,
      title: 'Concord',
      subtitle: 'Subject-verb agreement, rule of proximity, and anomalies',
      description: 'Navigate the complexities of grammatical agreement including singular-plural matching, collective nouns, indefinite pronouns, and special cases.',
      color: 'pink',
      icon: '🤝'
    },
    {
      id: 'mechanics',
      number: 5,
      title: 'Mechanics',
      subtitle: 'Spelling, capitalization, and punctuation mastery',
      description: 'Perfect your technical writing skills with comprehensive coverage of orthography, capitalization rules, and punctuation conventions.',
      color: 'orange',
      icon: '⚙️'
    },
    {
      id: 'vocabulary',
      number: 6,
      title: 'Vocabulary & Usage',
      subtitle: 'Collocations, sense relations, registers, and technical language',
      description: 'Expand your lexical repertoire by understanding word relationships, appropriate collocations, register variations, and specialized terminology.',
      color: 'green',
      icon: '📚'
    }
  ]

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Brain className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Master English Proficiency</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides covering all essential topics for graduate admission exams. 
            Learn theory, see examples, and practice with targeted exercises.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/quiz">
              <button className="group px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Start Full Quiz
              </button>
            </Link>
            <Link href="/">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Topic</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each topic includes detailed explanations, examples, common mistakes, and practice exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/learn/${topic.id}`}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-transparent hover:border-indigo-500">
                {/* Topic Header */}
                <div className={`bg-gradient-to-br ${colorClasses[topic.color]} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-5xl">{topic.icon}</span>
                    <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                      Topic {topic.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-sm text-white/90">{topic.subtitle}</p>
                </div>

                {/* Topic Body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
          <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
            After studying these topics, challenge yourself with our comprehensive 50-question quiz
          </p>
          <Link href="/quiz">
            <button className="px-10 py-5 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2">
              <PlayCircle className="w-6 h-6" />
              Start Full Quiz Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
