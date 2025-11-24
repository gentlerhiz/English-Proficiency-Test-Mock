'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function MechanicsPage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Which sentence demonstrates correct capitalization?",
      instruction: "Identify proper noun capitalization and title conventions.",
      options: [
        "My Uncle works at General motors in Detroit.",
        "My uncle works at General Motors in Detroit.",
        "My Uncle works at general motors in detroit.",
        "my uncle works at General Motors in Detroit."
      ],
      correct: 1,
      explanation: "'Uncle' is lowercase (common noun), 'General Motors' is capitalized (proper noun/company name), 'Detroit' is capitalized (city name)."
    },
    {
      id: 2,
      question: "Select the correctly spelled sentence:",
      instruction: "Choose the option with proper spelling throughout.",
      options: [
        "The commitee recieved the document seperately.",
        "The committee received the document separately.",
        "The comittee recieved the document seperatly.",
        "The committee recieved the document separetely."
      ],
      correct: 1,
      explanation: "Correct spellings: 'committee' (double t, double e), 'received' (i before e except after c), 'separately' (ends in -ately)."
    },
    {
      id: 3,
      question: "Which sentence uses punctuation correctly?",
      instruction: "Pay attention to comma placement and proper use of punctuation marks.",
      options: [
        "However the results were surprising and significant.",
        "However, the results were surprising, and significant.",
        "However, the results were surprising and significant.",
        "However the results, were surprising and significant."
      ],
      correct: 2,
      explanation: "'However' needs a comma after it when starting a sentence. No comma needed before 'and' when it connects two adjectives modifying the same noun."
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">⚙️</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Mechanics</h1>
              <p className="text-orange-100 text-lg mt-2">Spelling, capitalization, and punctuation mastery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Mechanics</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Mechanics refers to the technical aspects of writing: spelling, capitalization, and punctuation. These conventions ensure clarity, professionalism, and readability in written communication. While they may seem like minor details, errors in mechanics can significantly impact how readers perceive your credibility and message.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mastering mechanics is essential for academic writing, professional communication, and standardized tests. These rules provide a common framework that allows writers and readers to communicate effectively across different contexts and cultures.
          </p>
        </section>

        {/* Capitalization */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Capitalization Rules</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Proper Nouns</h3>
              <p className="text-gray-700 mb-3">
                Capitalize specific names of people, places, organizations, and things.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded space-y-2">
                <p className="text-gray-700">✓ <strong>People:</strong> Martin Luther King Jr., Professor Smith, Dr. Johnson</p>
                <p className="text-gray-700">✓ <strong>Places:</strong> New York City, Mount Everest, Pacific Ocean</p>
                <p className="text-gray-700">✓ <strong>Organizations:</strong> United Nations, Harvard University, Microsoft Corporation</p>
                <p className="text-gray-700">✓ <strong>Days/Months:</strong> Monday, January, Independence Day</p>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Titles</h3>
              <p className="text-gray-700 mb-3">
                Capitalize titles when they precede names or stand alone as forms of address.
              </p>
              <div className="bg-amber-50 p-4 rounded space-y-2">
                <p className="text-sm text-gray-700">✓ Capitalize: "President Biden addressed the nation."</p>
                <p className="text-sm text-gray-700">✓ Lowercase: "The president addressed the nation."</p>
                <p className="text-sm text-gray-700">✓ Capitalize: "Good morning, Professor."</p>
                <p className="text-sm text-gray-700">✓ Lowercase: "She is a professor at the university."</p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Beginning of Sentences</h3>
              <p className="text-gray-700 mb-3">
                Always capitalize the first word of a sentence, including after colons when a complete sentence follows.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="text-sm text-gray-700">✓ "The study revealed interesting findings: <strong>M</strong>ost participants showed improvement."</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Title Capitalization</h3>
              <p className="text-gray-700 mb-3">
                In titles, capitalize major words; lowercase articles, conjunctions, and short prepositions.
              </p>
              <div className="bg-red-50 p-4 rounded">
                <p className="text-sm text-gray-700">✓ <em>"The Catcher in the Rye"</em></p>
                <p className="text-sm text-gray-700">✓ <em>"One Hundred Years of Solitude"</em></p>
                <p className="text-sm text-gray-700">✓ <em>"A Tale of Two Cities"</em></p>
              </div>
            </div>
          </div>
        </section>

        {/* Spelling */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Spelling Challenges</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Frequently Misspelled Words</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Academic/Professional:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ accommodate (2 c's, 2 m's)</li>
                    <li>✓ separate (sep-a-rate)</li>
                    <li>✓ definitely (not "defiantly")</li>
                    <li>✓ occurrence (2 c's, 2 r's)</li>
                    <li>✓ consensus (no "c" after "n")</li>
                    <li>✓ privilege (not "priviledge")</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Commonly Confused:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ affect (verb) vs. effect (noun)</li>
                    <li>✓ complement vs. compliment</li>
                    <li>✓ principal vs. principle</li>
                    <li>✓ stationary vs. stationery</li>
                    <li>✓ lose (loss) vs. loose (not tight)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Spelling Rules</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800">I before E except after C:</p>
                  <p className="text-sm text-gray-700 mt-1">✓ bel<strong>ie</strong>ve, rec<strong>ei</strong>ve, dec<strong>ei</strong>ve</p>
                  <p className="text-sm text-gray-600 italic">Exception: when sounding like "ay" as in "neighbor" and "weigh"</p>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800">Drop the E before -ing:</p>
                  <p className="text-sm text-gray-700 mt-1">✓ make → making, love → loving, use → using</p>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800">Double the Consonant:</p>
                  <p className="text-sm text-gray-700 mt-1">✓ run → running, stop → stopping (for short vowel + consonant)</p>
                  <p className="text-sm text-gray-700">✗ keep → keeping (long vowel sound, don't double)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Punctuation */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Punctuation Guidelines</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Period ( . )</h3>
              <p className="text-gray-700 mb-3">
                Ends declarative sentences and abbreviations.
              </p>
              <div className="bg-orange-50 p-4 rounded">
                <p className="text-sm text-gray-700">✓ "The meeting starts at 3 p.m."</p>
                <p className="text-sm text-gray-700">✓ "Dr. Smith will present the findings."</p>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comma ( , )</h3>
              <p className="text-gray-700 mb-3">
                Separates items, clauses, and provides clarity.
              </p>
              <div className="bg-amber-50 p-4 rounded space-y-2">
                <div>
                  <p className="font-semibold text-amber-900 text-sm">In Lists:</p>
                  <p className="text-sm text-gray-700">"I bought apples, oranges, and bananas."</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900 text-sm">After Introductory Elements:</p>
                  <p className="text-sm text-gray-700">"However, the results were unexpected."</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900 text-sm">With Coordinating Conjunctions:</p>
                  <p className="text-sm text-gray-700">"She studied hard, and she passed the exam."</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-900 text-sm">Setting Off Non-Essential Information:</p>
                  <p className="text-sm text-gray-700">"John, who is my neighbor, works at the hospital."</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Semicolon ( ; )</h3>
              <p className="text-gray-700 mb-3">
                Connects closely related independent clauses or separates complex list items.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="text-sm text-gray-700">✓ "The study was comprehensive; the results were conclusive."</p>
                <p className="text-sm text-gray-700 mt-2">✓ "Attendees came from Paris, France; Rome, Italy; and Berlin, Germany."</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Colon ( : )</h3>
              <p className="text-gray-700 mb-3">
                Introduces lists, explanations, or quotations.
              </p>
              <div className="bg-red-50 p-4 rounded">
                <p className="text-sm text-gray-700">✓ "The recipe requires three ingredients: flour, sugar, and eggs."</p>
                <p className="text-sm text-gray-700 mt-2">✓ "She had one goal: to finish the marathon."</p>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Apostrophe ( ' )</h3>
              <p className="text-gray-700 mb-3">
                Shows possession or forms contractions.
              </p>
              <div className="bg-pink-50 p-4 rounded space-y-2">
                <p className="text-sm text-gray-700">✓ Possession: "John's book", "the students' papers"</p>
                <p className="text-sm text-gray-700">✓ Contractions: "don't" (do not), "it's" (it is)</p>
                <p className="text-sm text-red-600">✗ Never use apostrophes for plural: "apple's" ❌ → "apples" ✓</p>
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
                Its vs. It's
              </h3>
              <p className="text-sm text-gray-700">✓ "It's" = It is or It has</p>
              <p className="text-sm text-gray-700">✓ "Its" = Possessive (like his, hers)</p>
              <p className="text-sm text-gray-600 mt-2">Example: "It's important to check its credentials."</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                There, Their, They're
              </h3>
              <p className="text-sm text-gray-700">✓ "There" = Location or "there is/are"</p>
              <p className="text-sm text-gray-700">✓ "Their" = Possessive</p>
              <p className="text-sm text-gray-700">✓ "They're" = They are</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Run-on Sentences and Comma Splices
              </h3>
              <p className="text-sm text-gray-700 mb-2">Don't join independent clauses with just a comma.</p>
              <p className="text-sm text-red-600">✗ "I studied hard, I passed the exam."</p>
              <p className="text-sm text-green-600">✓ "I studied hard, and I passed the exam." (add conjunction)</p>
              <p className="text-sm text-green-600">✓ "I studied hard; I passed the exam." (use semicolon)</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your understanding of mechanics:</p>

          <div className="space-y-6">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-orange-100">
                <h3 className="font-bold text-gray-900 mb-2">Question {index + 1}: {q.question}</h3>
                {q.instruction && (
                  <p className="text-sm text-orange-600 italic mb-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
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
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
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
              className="mt-6 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-6 bg-white rounded-xl border-2 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Score: {calculateScore()} / {practiceQuestions.length}
              </h3>
              <p className="text-gray-700">
                {calculateScore() === practiceQuestions.length
                  ? "Perfect! You've mastered mechanics! 🎉"
                  : calculateScore() >= 2
                  ? "Good job! Review the explanations to improve further."
                  : "Keep practicing! Review the rules above."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-700 hover:to-red-700 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Practice in Full Quiz
            </button>
          </Link>
          <Link href="/learn" className="flex-1">
            <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-orange-500 hover:text-orange-600 transition-all flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to All Topics
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
