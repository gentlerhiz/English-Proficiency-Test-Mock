'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ConcordPage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Choose the sentence with correct subject-verb agreement:",
      instruction: "Identify which sentence correctly matches the collective noun with an appropriate verb form.",
      options: [
        "The team are playing well today.",
        "The team is playing well today.",
        "The team were playing well today.",
        "The teams is playing well today."
      ],
      correct: 1,
      explanation: "'Team' is a collective noun treated as singular when acting as a unit, so it takes 'is'."
    },
    {
      id: 2,
      question: "Which sentence demonstrates proper concord?",
      instruction: "Apply the rule of proximity - the verb should agree with the nearest subject in 'either...or' constructions.",
      options: [
        "Either the students or the teacher are responsible.",
        "Either the students or the teacher have been notified.",
        "Either the students or the teacher is responsible.",
        "Either the students or the teacher were notified."
      ],
      correct: 2,
      explanation: "With 'either...or', the verb agrees with the nearest subject. Since 'teacher' is singular, we use 'is'."
    },
    {
      id: 3,
      question: "Select the correct sentence:",
      instruction: "Remember that indefinite pronouns like 'everyone' always take singular verbs, regardless of intervening phrases.",
      options: [
        "Everyone in the offices are working late.",
        "Everyone in the offices have worked late.",
        "Everyone in the offices is working late.",
        "Everyone in the offices were working late."
      ],
      correct: 2,
      explanation: "'Everyone' is an indefinite pronoun that always takes a singular verb ('is'), regardless of the prepositional phrase that follows."
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-pink-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">🤝</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Concord</h1>
              <p className="text-pink-100 text-lg mt-2">Subject-verb agreement, rule of proximity, and anomalies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Concord</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Concord, also known as grammatical agreement, refers to the correspondence between different words in a sentence. The most fundamental type is subject-verb agreement, where the verb must match the subject in both number (singular or plural) and person (first, second, or third).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            While the basic principle seems straightforward, English presents numerous special cases involving collective nouns, indefinite pronouns, compound subjects, and intervening phrases that can complicate agreement. Mastering these nuances is essential for clear, grammatically correct writing.
          </p>
        </section>

        {/* Basic Rules */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Fundamental Rules</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Basic Singular-Plural Agreement</h3>
              <p className="text-gray-700 mb-3">
                Singular subjects take singular verbs; plural subjects take plural verbs.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-2">
                <p className="text-gray-700">"The <strong>student studies</strong> every day." (singular)</p>
                <p className="text-gray-700">"The <strong>students study</strong> every day." (plural)</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Intervening Phrases</h3>
              <p className="text-gray-700 mb-3">
                The verb agrees with the actual subject, not with words in intervening prepositional phrases.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-2">
                <p className="text-sm font-semibold text-red-800 mb-1">❌ Incorrect:</p>
                <p className="text-gray-700">"The box of chocolates <strong>are</strong> on the table."</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm font-semibold text-green-800 mb-1">✅ Correct:</p>
                <p className="text-gray-700">"The box of chocolates <strong>is</strong> on the table." (subject is 'box', not 'chocolates')</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Compound Subjects with "And"</h3>
              <p className="text-gray-700 mb-3">
                Two or more subjects joined by "and" typically take a plural verb.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-gray-700">"Tom and Jerry <strong>are</strong> friends."</p>
                <p className="text-gray-700 mt-2"><em>Exception:</em> When the compound subject refers to a single entity: "Bread and butter <strong>is</strong> my favorite breakfast."</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Rule of Proximity (Either/Or, Neither/Nor)</h3>
              <p className="text-gray-700 mb-3">
                When subjects are joined by correlative conjunctions, the verb agrees with the nearest subject.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-gray-700">"Either the teacher or the <strong>students are</strong> responsible."</p>
                <p className="text-gray-700">"Either the students or the <strong>teacher is</strong> responsible."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Cases & Anomalies</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Collective Nouns</h3>
              <p className="text-gray-700 mb-3">
                Collective nouns can be singular or plural depending on context:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Singular (acting as unit):</strong> "The committee <em>has</em> reached a decision."</li>
                <li><strong>Plural (acting individually):</strong> "The committee <em>are</em> arguing among themselves."</li>
                <li><strong>Common collective nouns:</strong> team, family, class, group, audience, jury, government</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Indefinite Pronouns</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">Always Singular:</p>
                  <p className="text-gray-700">each, every, either, neither, one, everyone, everybody, someone, somebody, anyone, anybody, no one, nobody</p>
                  <p className="text-sm text-gray-600 mt-1 italic">Example: "Everyone <em>is</em> welcome."</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Always Plural:</p>
                  <p className="text-gray-700">both, few, many, several</p>
                  <p className="text-sm text-gray-600 mt-1 italic">Example: "Many <em>are</em> called, but few <em>are</em> chosen."</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Depends on Context:</p>
                  <p className="text-gray-700">all, any, most, none, some</p>
                  <p className="text-sm text-gray-600 mt-1 italic">Examples: "All the cake <em>is</em> gone." / "All the guests <em>are</em> here."</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Subjects Following Verbs</h3>
              <p className="text-gray-700 mb-3">
                In inverted sentences or those beginning with "there" or "here," identify the actual subject:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">"There <strong>are</strong> three reasons for this decision." (subject: reasons)</p>
                <p className="text-gray-700">"Here <strong>comes</strong> the bus." (subject: bus)</p>
                <p className="text-gray-700">"Behind the house <strong>stand</strong> two oak trees." (subject: trees)</p>
              </div>
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
                Mistaking Prepositional Phrase Objects for Subjects
              </h3>
              <p className="text-sm text-gray-600">Wrong: "The group of students <em>are</em> studying."</p>
              <p className="text-sm text-gray-600">Right: "The group of students <em>is</em> studying." (group is the subject)</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Plural-Looking Singular Nouns
              </h3>
              <p className="text-gray-700 mb-2">Some nouns ending in -s are actually singular:</p>
              <p className="text-sm text-gray-600">"Mathematics <em>is</em> my favorite subject."</p>
              <p className="text-sm text-gray-600">"The news <em>was</em> unexpected."</p>
              <p className="text-sm text-gray-600">Others: physics, economics, politics, measles, mumps</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Quantities and Distances
              </h3>
              <p className="text-gray-700 mb-2">Treat as singular when referring to a single unit:</p>
              <p className="text-sm text-gray-600">"Five kilometers <em>is</em> a long walk."</p>
              <p className="text-sm text-gray-600">"Ten dollars <em>was</em> all I had."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your understanding of concord with these questions:</p>

          <div className="space-y-6">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-pink-100">
                <h3 className="font-bold text-gray-900 mb-2">Question {index + 1}: {q.question}</h3>
                {q.instruction && (
                  <p className="text-sm text-pink-600 italic mb-4 bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
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
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
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
              className="mt-6 px-8 py-4 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-6 bg-white rounded-xl border-2 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Score: {calculateScore()} / {practiceQuestions.length}
              </h3>
              <p className="text-gray-700">
                {calculateScore() === practiceQuestions.length
                  ? "Perfect! You've mastered concord! 🎉"
                  : calculateScore() >= 2
                  ? "Good job! Review the explanations to improve further."
                  : "Keep practicing! Review the fundamental rules above."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Practice in Full Quiz
            </button>
          </Link>
          <Link href="/learn" className="flex-1">
            <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-pink-500 hover:text-pink-600 transition-all flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to All Topics
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
