'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function StylisticVariationPage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Which sentence is most appropriate for formal academic writing?",
      instruction: "Select the option that uses formal language and avoids colloquialisms.",
      options: [
        "The research kinda shows that kids learn better with visuals.",
        "The study demonstrates that children exhibit improved learning outcomes with visual aids.",
        "The research shows kids do way better when they see pictures.",
        "It's pretty clear that children learn lots better with pictures and stuff."
      ],
      correct: 1,
      explanation: "This option uses formal academic vocabulary ('demonstrates', 'exhibit', 'outcomes') and avoids informal expressions."
    },
    {
      id: 2,
      question: "Choose the sentence with appropriate stylistic variation for a business report:",
      instruction: "Identify formal, professional language suitable for corporate communication.",
      options: [
        "We need to get our act together and fix this ASAP.",
        "The team must address the issue immediately and implement corrective measures.",
        "Everyone's gotta work harder to sort out this mess right away.",
        "We should probably try to deal with this problem soon-ish."
      ],
      correct: 1,
      explanation: "Uses professional terminology ('address', 'implement corrective measures') appropriate for business contexts."
    },
    {
      id: 3,
      question: "Select the most appropriate informal expression for a friendly email:",
      instruction: "Choose language that is casual but still respectful and clear.",
      options: [
        "I am writing to ascertain whether you are available for a social gathering.",
        "Hey! Wanna hang out sometime?",
        "Would you like to meet up for coffee this weekend?",
        "Your presence is requested for an informal social engagement."
      ],
      correct: 2,
      explanation: "Strikes the right balance—friendly and casual without being too informal or overly formal for a friendly email."
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">🎨</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Stylistic Variation</h1>
              <p className="text-purple-100 text-lg mt-2">Word choice, lexical variants and expression of ideas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Stylistic Variation?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Stylistic variation refers to the ability to adjust your language, tone, and word choice based on context, audience, and purpose. Effective writers recognize that different situations demand different levels of formality, technical precision, and emotional resonance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding register—the level of formality in language—is crucial for academic success, professional communication, and social interaction. The same message can be expressed in vastly different ways depending on whether you're writing an academic paper, business email, or text message to a friend.
          </p>
        </section>

        {/* Register Levels */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Language Registers</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Frozen/Static Register</h3>
              <p className="text-gray-700 mb-3">
                Unchanging, highly formal language used in ceremonial contexts. Rarely altered over time.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Religious texts: "Our Father, who art in heaven..."</li>
                  <li>Legal documents: "We the People of the United States..."</li>
                  <li>Wedding vows: "To have and to hold..."</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Formal Register</h3>
              <p className="text-gray-700 mb-3">
                Professional, academic language. Standard grammar, sophisticated vocabulary, no contractions.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Characteristics:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                  <li>Complete sentences and proper grammar</li>
                  <li>Technical or specialized vocabulary</li>
                  <li>No slang, idioms, or colloquialisms</li>
                  <li>Third-person perspective often preferred</li>
                </ul>
                <p className="text-sm text-gray-700">"The research indicates that socioeconomic factors significantly influence educational outcomes."</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Consultative Register</h3>
              <p className="text-gray-700 mb-3">
                Professional but conversational. Used in business settings, interviews, and professional advice.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>"I'd recommend reviewing the quarterly reports before the meeting."</li>
                  <li>"Could you clarify the project timeline for me?"</li>
                  <li>"Let's discuss the implementation strategy."</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Casual Register</h3>
              <p className="text-gray-700 mb-3">
                Relaxed language among friends and peers. Contractions, simpler vocabulary, some slang acceptable.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>"Want to grab lunch later?"</li>
                  <li>"That movie was awesome!"</li>
                  <li>"I'll catch you later."</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">5. Intimate Register</h3>
              <p className="text-gray-700 mb-3">
                Very personal language used with close family and friends. Private vocabulary, inside jokes.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-gray-700 font-semibold mb-2">Characteristics:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Nicknames and pet names</li>
                  <li>Shared references and private jokes</li>
                  <li>Incomplete sentences often understood</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lexical Choice */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lexical Variation Examples</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Same Meaning, Different Registers</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Expressing Agreement:</p>
                  <ul className="space-y-2">
                    <li className="text-sm"><span className="font-semibold text-purple-700">Formal:</span> "I concur with your assessment."</li>
                    <li className="text-sm"><span className="font-semibold text-blue-700">Consultative:</span> "I agree with your point."</li>
                    <li className="text-sm"><span className="font-semibold text-teal-700">Casual:</span> "Yeah, totally agree!"</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Requesting Information:</p>
                  <ul className="space-y-2">
                    <li className="text-sm"><span className="font-semibold text-purple-700">Formal:</span> "Could you please provide additional information regarding..."</li>
                    <li className="text-sm"><span className="font-semibold text-blue-700">Consultative:</span> "Can you give me more details about..."</li>
                    <li className="text-sm"><span className="font-semibold text-teal-700">Casual:</span> "What's the deal with..."</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Expressing Difficulty:</p>
                  <ul className="space-y-2">
                    <li className="text-sm"><span className="font-semibold text-purple-700">Formal:</span> "The task presents significant challenges."</li>
                    <li className="text-sm"><span className="font-semibold text-blue-700">Consultative:</span> "This project is quite difficult."</li>
                    <li className="text-sm"><span className="font-semibold text-teal-700">Casual:</span> "This is really tough/hard."</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formal vs Informal */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Formal vs Informal Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-purple-900 mb-4">✅ Formal Writing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Full forms: "do not" instead of "don't"</li>
                <li>✓ Passive voice when appropriate</li>
                <li>✓ Sophisticated vocabulary</li>
                <li>✓ Complete sentences</li>
                <li>✓ Third person preferred</li>
                <li>✓ No abbreviations (etc., e.g.)</li>
                <li>✓ Objective tone</li>
              </ul>
            </div>

            <div className="border-2 border-teal-200 rounded-xl p-6 bg-teal-50">
              <h3 className="text-xl font-bold text-teal-900 mb-4">✅ Informal Writing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Contractions: "don't", "can't"</li>
                <li>✓ Active voice predominantly</li>
                <li>✓ Simpler vocabulary</li>
                <li>✓ Sentence fragments acceptable</li>
                <li>✓ First/second person common</li>
                <li>✓ Abbreviations OK</li>
                <li>✓ Personal, conversational tone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Mixing Registers
              </h3>
              <p className="text-gray-700 mb-2">Don't mix formal and informal language in the same piece.</p>
              <p className="text-sm text-gray-600">Wrong: "The research methodology was rigorous, and the findings are totally awesome."</p>
              <p className="text-sm text-gray-600">Right: "The research methodology was rigorous, and the findings are significant."</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Overly Formal in Casual Contexts
              </h3>
              <p className="text-gray-700 mb-2">Being too formal can seem stiff or pretentious in casual settings.</p>
              <p className="text-sm text-gray-600">Too formal (for a friend): "I am writing to inquire whether you would like to partake in recreational activities."</p>
              <p className="text-sm text-gray-600">Better: "Want to hang out this weekend?"</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Too Casual in Professional Contexts
              </h3>
              <p className="text-gray-700 mb-2">Informal language in academic/professional writing undermines credibility.</p>
              <p className="text-sm text-gray-600">Too casual: "The data kinda shows that people don't really care about this stuff."</p>
              <p className="text-sm text-gray-600">Better: "The data suggests that this issue receives limited public attention."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your understanding of stylistic variation:</p>

          <div className="space-y-6">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-purple-100">
                <h3 className="font-bold text-gray-900 mb-2">Question {index + 1}: {q.question}</h3>
                {q.instruction && (
                  <p className="text-sm text-purple-600 italic mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
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
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
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
              className="mt-6 px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-6 bg-white rounded-xl border-2 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Score: {calculateScore()} / {practiceQuestions.length}
              </h3>
              <p className="text-gray-700">
                {calculateScore() === practiceQuestions.length
                  ? "Perfect! You've mastered stylistic variation! 🎉"
                  : calculateScore() >= 2
                  ? "Good job! Review the explanations to improve further."
                  : "Keep practicing! Review the register levels above."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Practice in Full Quiz
            </button>
          </Link>
          <Link href="/learn" className="flex-1">
            <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to All Topics
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
