'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ParallelismPage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Select the sentence with correct parallel structure:",
      instruction: "Choose the option where all items in the series maintain the same grammatical form.",
      options: [
        "She likes reading, to swim, and hiking.",
        "She likes reading, swimming, and hiking.",
        "She likes to read, swimming, and to hike.",
        "She likes reading, to swim, and to hike."
      ],
      correct: 1,
      explanation: "All three activities should use the same form (-ing gerunds)."
    },
    {
      id: 2,
      question: "Which sentence demonstrates proper parallelism?",
      instruction: "Identify the sentence where all descriptive elements follow the same grammatical pattern.",
      options: [
        "The team is organized, efficient, and works with dedication.",
        "The team is organized, efficient, and dedicated.",
        "The team is organized, works efficiently, and with dedication.",
        "The team is being organized, efficient, and shows dedication."
      ],
      correct: 1,
      explanation: "All three descriptors should be adjectives in the same form."
    },
    {
      id: 3,
      question: "Choose the correctly structured sentence:",
      instruction: "Select the option where all elements in the list are expressed using parallel structure.",
      options: [
        "To succeed requires patience, determination, and you must work hard.",
        "To succeed requires patience, determination, and hard work.",
        "To succeed requires being patient, determination, and working hard.",
        "To succeed requires patience, to be determined, and hard work."
      ],
      correct: 1,
      explanation: "All three requirements should be nouns in parallel form."
    }
  ]

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setPracticeAnswers(prev => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    practiceQuestions.forEach(q => {
      if (practiceAnswers[q.id] === q.correct) correct++
    })
    return correct
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">⚖️</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Parallelism</h1>
              <p className="text-blue-100 text-lg mt-2">Concept, nature and manifestations of parallel structures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Parallelism?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Parallelism is a rhetorical device that requires using the same pattern of words to show that two or more ideas have the same level of importance. This grammatical balance creates rhythm and clarity in writing, making complex ideas easier to understand and more memorable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At its core, parallelism means using equivalent grammatical forms when expressing coordinate ideas. Whether you're listing items, comparing concepts, or building compound structures, maintaining parallel form ensures your writing flows smoothly and communicates effectively.
          </p>
        </section>

        {/* Key Concepts */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Principles</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Coordinate Elements</h3>
              <p className="text-gray-700 mb-3">
                Elements joined by coordinating conjunctions (and, but, or, nor, yet, so) should be in parallel form.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incorrect:</p>
                <p className="text-gray-700">"The company values <strong>innovation</strong>, <strong>teamwork</strong>, and <strong>being creative</strong>."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Correct:</p>
                <p className="text-gray-700">"The company values <strong>innovation</strong>, <strong>teamwork</strong>, and <strong>creativity</strong>." (All nouns)</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Correlative Conjunctions</h3>
              <p className="text-gray-700 mb-3">
                Pairs like either/or, neither/nor, not only/but also, both/and require parallel structures following each part.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incorrect:</p>
                <p className="text-gray-700">"She is <strong>not only</strong> intelligent <strong>but also</strong> has kindness."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Correct:</p>
                <p className="text-gray-700">"She is <strong>not only</strong> intelligent <strong>but also</strong> kind." (Both adjectives)</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Lists and Series</h3>
              <p className="text-gray-700 mb-3">
                Items in a list should maintain consistent grammatical structure throughout.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incorrect:</p>
                <p className="text-gray-700">"The job requires <strong>writing reports</strong>, <strong>to attend meetings</strong>, and <strong>client communication</strong>."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Correct:</p>
                <p className="text-gray-700">"The job requires <strong>writing reports</strong>, <strong>attending meetings</strong>, and <strong>communicating with clients</strong>." (All gerunds)</p>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Comparisons</h3>
              <p className="text-gray-700 mb-3">
                When making comparisons using "than" or "as," maintain parallel structure.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incorrect:</p>
                <p className="text-gray-700">"I prefer <strong>swimming in the ocean</strong> to <strong>a pool</strong>."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Correct:</p>
                <p className="text-gray-700">"I prefer <strong>swimming in the ocean</strong> to <strong>swimming in a pool</strong>."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Mixing Verb Forms
              </h3>
              <p className="text-gray-700 mb-2">Don't mix infinitives, gerunds, and finite verbs in the same series.</p>
              <p className="text-sm text-gray-600">Wrong: "He enjoys <em>to read</em>, <em>writing</em>, and <em>listens to music</em>."</p>
              <p className="text-sm text-gray-600">Right: "He enjoys <em>reading</em>, <em>writing</em>, and <em>listening to music</em>."</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Inconsistent Article Usage
              </h3>
              <p className="text-gray-700 mb-2">Be consistent with articles (a, an, the) across parallel elements.</p>
              <p className="text-sm text-gray-600">Wrong: "She visited <em>the museum</em>, <em>art gallery</em>, and <em>the theater</em>."</p>
              <p className="text-sm text-gray-600">Right: "She visited <em>the museum</em>, <em>the art gallery</em>, and <em>the theater</em>."</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Breaking Parallel Structure with Clauses
              </h3>
              <p className="text-gray-700 mb-2">Maintain consistency when using phrases vs. clauses.</p>
              <p className="text-sm text-gray-600">Wrong: "The manager wants <em>increased productivity</em>, <em>better quality</em>, and <em>that costs decrease</em>."</p>
              <p className="text-sm text-gray-600">Right: "The manager wants <em>increased productivity</em>, <em>better quality</em>, and <em>decreased costs</em>."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your understanding of parallelism with these questions:</p>

          <div className="space-y-6">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-indigo-100">
                <h3 className="font-bold text-gray-900 mb-2">Question {index + 1}: {q.question}</h3>
                {q.instruction && (
                  <p className="text-sm text-indigo-600 italic mb-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-400">
                    💡 {q.instruction}
                  </p>
                )}
                <div className="space-y-3">
                  {q.options.map((option, optIndex) => (
                    <label
                      key={optIndex}
                      className={`flex items-start gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        showResults
                          ? optIndex === q.correct
                            ? 'border-green-500 bg-green-50'
                            : practiceAnswers[q.id] === optIndex
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200'
                          : practiceAnswers[q.id] === optIndex
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        checked={practiceAnswers[q.id] === optIndex}
                        onChange={() => handleAnswerChange(q.id, optIndex)}
                        disabled={showResults}
                        className="mt-1"
                      />
                      <span className="text-gray-700">{option}</span>
                      {showResults && optIndex === q.correct && (
                        <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                      )}
                      {showResults && practiceAnswers[q.id] === optIndex && optIndex !== q.correct && (
                        <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                    <p className="text-gray-700">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showResults && (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(practiceAnswers).length !== practiceQuestions.length}
              className="mt-6 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-6 bg-white rounded-xl border-2 border-indigo-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Score: {calculateScore()} / {practiceQuestions.length}
              </h3>
              <p className="text-gray-700">
                {calculateScore() === practiceQuestions.length
                  ? "Perfect! You've mastered parallelism! 🎉"
                  : calculateScore() >= 2
                  ? "Good job! Review the explanations to improve further."
                  : "Keep practicing! Review the core principles above."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Practice in Full Quiz
            </button>
          </Link>
          <Link href="/learn" className="flex-1">
            <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to All Topics
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
