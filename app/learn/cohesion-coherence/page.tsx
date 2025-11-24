'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CohesionCoherencePage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Select the sentence that best maintains cohesion:",
      instruction: "Choose the option that uses appropriate transitional devices to connect ideas smoothly.",
      options: [
        "The project failed. The team worked hard.",
        "The project failed. However, the team worked hard.",
        "The project failed but the team worked hard.",
        "The project failed. The team worked hard though."
      ],
      correct: 1,
      explanation: "'However' is the most effective transitional word to show contrast between two independent clauses, creating better cohesion."
    },
    {
      id: 2,
      question: "Which sentence demonstrates proper coherence?",
      instruction: "Identify the option where ideas flow logically from one to the next.",
      options: [
        "She studied medicine. Her father was a teacher. She became a doctor.",
        "She studied medicine for years. Consequently, she became a qualified doctor.",
        "She became a doctor. She studied medicine. Her father was a teacher.",
        "Her father was a teacher. She studied medicine. She became a doctor."
      ],
      correct: 1,
      explanation: "This option shows clear cause-and-effect relationship with 'Consequently', making the logical progression obvious."
    },
    {
      id: 3,
      question: "Choose the most cohesive paragraph arrangement:",
      instruction: "Select the option where reference words and transitions create the strongest connections.",
      options: [
        "The report was late. It contained errors. The manager rejected it.",
        "The report was late. Moreover, it contained errors. As a result, the manager rejected it.",
        "The manager rejected the report. It was late. It had errors.",
        "It was late. The report contained errors. The manager rejected it."
      ],
      correct: 1,
      explanation: "'Moreover' adds information and 'As a result' shows consequence, creating clear cohesive links between sentences."
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-indigo-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">🔗</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Cohesion & Coherence</h1>
              <p className="text-indigo-100 text-lg mt-2">Sentence and idea connection for effective communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Cohesion & Coherence</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Cohesion and coherence are essential principles that transform disconnected sentences into unified, flowing text. While cohesion refers to the grammatical and lexical links between sentences, coherence concerns the logical flow and organization of ideas that make a text meaningful and easy to follow.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of cohesion as the glue holding sentences together and coherence as the blueprint ensuring your ideas build upon each other logically. Together, they create writing that readers can follow effortlessly from beginning to end.
          </p>
        </section>

        {/* Cohesion Devices */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cohesive Devices</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Reference Words</h3>
              <p className="text-gray-700 mb-3">
                Pronouns and demonstratives that refer back (or forward) to other words in the text.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
                <p className="text-gray-700 mb-2">"<strong>John</strong> went to the store. <strong>He</strong> bought milk."</p>
                <p className="text-gray-700">"The company launched a new product. <strong>This</strong> innovation changed the market."</p>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">
                Common reference words: he, she, it, they, this, that, these, those, such, the former, the latter
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Transitional Expressions</h3>
              <p className="text-gray-700 mb-3">
                Words and phrases that signal relationships between ideas.
              </p>
              <div className="bg-blue-50 p-4 rounded space-y-2">
                <div>
                  <p className="font-semibold text-blue-900">Addition:</p>
                  <p className="text-sm text-gray-700">furthermore, moreover, additionally, in addition, also, besides</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Contrast:</p>
                  <p className="text-sm text-gray-700">however, nevertheless, nonetheless, conversely, on the other hand, in contrast</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Cause/Effect:</p>
                  <p className="text-sm text-gray-700">therefore, thus, consequently, as a result, hence, accordingly</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Sequence:</p>
                  <p className="text-sm text-gray-700">first, second, then, next, finally, subsequently, meanwhile</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Example:</p>
                  <p className="text-sm text-gray-700">for instance, for example, specifically, namely, such as</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Lexical Cohesion</h3>
              <p className="text-gray-700 mb-3">
                Using related words, synonyms, or word families to create connections.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded space-y-2">
                <div>
                  <p className="font-semibold text-purple-900">Repetition:</p>
                  <p className="text-sm text-gray-700">"The <em>study</em> revealed surprising results. The <em>study</em> also highlighted gaps in research."</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-900">Synonymy:</p>
                  <p className="text-sm text-gray-700">"The <em>researcher</em> conducted experiments. The <em>scientist</em> published findings."</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-900">Word Families:</p>
                  <p className="text-sm text-gray-700">"The company <em>invested</em> heavily. This <em>investment</em> paid off."</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Conjunctions</h3>
              <p className="text-gray-700 mb-3">
                Words that link clauses and sentences within or between sentences.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                <p className="text-gray-700">"The weather was terrible, <strong>yet</strong> they continued hiking."</p>
                <p className="text-gray-700 mt-2">"She studied hard <strong>and</strong> passed the exam."</p>
                <p className="text-gray-700 mt-2">"He was tired <strong>because</strong> he worked all night."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coherence Principles */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Principles of Coherence</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Logical Organization</h3>
              <p className="text-gray-700 mb-3">
                Ideas should follow a clear, logical sequence that readers can anticipate and understand.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Common Organizational Patterns:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Chronological:</strong> Events in time order</li>
                  <li><strong>Spatial:</strong> Descriptions by location or position</li>
                  <li><strong>Problem-Solution:</strong> Issue followed by resolution</li>
                  <li><strong>Cause-Effect:</strong> Reasons leading to consequences</li>
                  <li><strong>General-Specific:</strong> Broad concept to detailed examples</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Topic Consistency</h3>
              <p className="text-gray-700 mb-3">
                Each paragraph should focus on one main idea, with sentences supporting that central point.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incoherent:</p>
                <p className="text-sm text-gray-700">"Exercise improves health. My car needs repairs. Walking is beneficial."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Coherent:</p>
                <p className="text-sm text-gray-700">"Exercise improves health. Walking strengthens the heart. Moreover, it reduces stress."</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Appropriate Development</h3>
              <p className="text-gray-700">
                Ideas need adequate explanation, examples, and support. Each sentence should advance understanding and connect to surrounding content.
              </p>
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
                Overusing Transitions
              </h3>
              <p className="text-gray-700 mb-2">Too many transitional words can make writing feel forced and awkward.</p>
              <p className="text-sm text-gray-600">Awkward: "However, I went to the store. Furthermore, I bought milk. Subsequently, I returned home."</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Unclear Reference
              </h3>
              <p className="text-gray-700 mb-2">Pronouns should clearly refer to a specific noun.</p>
              <p className="text-sm text-gray-600">Unclear: "John told Mark that he was late." (Who was late?)</p>
              <p className="text-sm text-gray-600">Clear: "John told Mark, 'You are late.'"</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Abrupt Topic Shifts
              </h3>
              <p className="text-gray-700 mb-2">Jumping to new ideas without proper transitions breaks coherence.</p>
              <p className="text-sm text-gray-600">Poor: "The economy is growing. Pizza is delicious."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your understanding of cohesion and coherence:</p>

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
                  ? "Perfect! You've mastered cohesion and coherence! 🎉"
                  : calculateScore() >= 2
                  ? "Good job! Review the explanations to improve further."
                  : "Keep practicing! Review the cohesive devices above."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
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
