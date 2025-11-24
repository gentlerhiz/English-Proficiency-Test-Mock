'use client'

import { Home, PlayCircle, ArrowLeft, CheckCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function VocabularyPage() {
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const practiceQuestions = [
    {
      id: 1,
      question: "Select the sentence with the most appropriate collocation:",
      instruction: "Identify the combination of words that naturally go together in English.",
      options: [
        "We need to do a research on climate change.",
        "We need to make a research on climate change.",
        "We need to conduct research on climate change.",
        "We need to take a research on climate change."
      ],
      correct: 2,
      explanation: "'Conduct research' is the standard collocation in academic English. We 'do homework' but 'conduct' or 'carry out' research."
    },
    {
      id: 2,
      question: "Choose the sentence that uses the appropriate register:",
      instruction: "Match the vocabulary level to a formal academic context.",
      options: [
        "The study shows that kids need to chill out more often.",
        "The research indicates that children require increased recreational periods.",
        "The investigation says youngsters gotta have more break time.",
        "The paper talks about how young people need tons of downtime."
      ],
      correct: 1,
      explanation: "'Indicates,' 'children,' 'require,' and 'recreational periods' are appropriate for formal academic writing. The other options use casual or conversational language."
    },
    {
      id: 3,
      question: "Identify the sentence with correct sense relations (synonymy):",
      instruction: "Select the option where the underlined word is correctly replaced with a synonym.",
      options: [
        "The scientist observed the phenomenon → The scientist watched the occurrence.",
        "The evidence was compelling → The proof was forcing.",
        "They reached a consensus → They achieved an agreement.",
        "The theory was refuted → The hypothesis was approved."
      ],
      correct: 2,
      explanation: "'Consensus' and 'agreement' are true synonyms. 'Watched' is too informal for 'observed,' 'forcing' isn't synonymous with 'compelling,' and 'refuted' means disproved, not approved."
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to All Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl">📚</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Vocabulary Development</h1>
              <p className="text-green-100 text-lg mt-2">Collocations, sense relations, and appropriate word choice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Vocabulary Mastery</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Effective vocabulary use goes beyond knowing individual word meanings. It involves understanding how words combine naturally (collocations), relate to one another (sense relations), and vary across different contexts (register). Advanced vocabulary skills enable precise expression, appropriate tone, and sophisticated communication.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In academic and professional contexts, choosing the right word—considering its nuances, connotations, and typical usage patterns—is crucial for clarity and credibility. This section explores key aspects of vocabulary development that distinguish proficient writers and speakers.
          </p>
        </section>

        {/* Collocations */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Collocations</h2>
          
          <p className="text-gray-700 mb-6">
            Collocations are words that frequently occur together. Native speakers intuitively know these combinations, but learners must actively learn them.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Verb + Noun Collocations</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-3">Academic Context:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ <strong>conduct</strong> research/a study</li>
                    <li>✓ <strong>draw</strong> conclusions/inferences</li>
                    <li>✓ <strong>formulate</strong> a hypothesis</li>
                    <li>✓ <strong>gather</strong> data/evidence</li>
                    <li>✓ <strong>raise</strong> questions/concerns</li>
                    <li>✓ <strong>reach</strong> a consensus</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-3">Professional Context:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ <strong>meet</strong> a deadline/requirement</li>
                    <li>✓ <strong>make</strong> a decision/proposal</li>
                    <li>✓ <strong>take</strong> action/measures</li>
                    <li>✓ <strong>launch</strong> a campaign/initiative</li>
                    <li>✓ <strong>implement</strong> changes/policies</li>
                    <li>✓ <strong>achieve</strong> goals/objectives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Adjective + Noun Collocations</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800 mb-2">Strength and Impact:</p>
                  <p className="text-sm text-gray-700">✓ <strong>strong</strong> evidence, <strong>compelling</strong> argument, <strong>significant</strong> impact</p>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800 mb-2">Size and Extent:</p>
                  <p className="text-sm text-gray-700">✓ <strong>substantial</strong> increase, <strong>considerable</strong> effort, <strong>extensive</strong> research</p>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800 mb-2">Common Errors:</p>
                  <p className="text-sm text-red-600">✗ "do research" (informal) → ✓ "conduct research"</p>
                  <p className="text-sm text-red-600">✗ "say a speech" → ✓ "give/deliver a speech"</p>
                  <p className="text-sm text-red-600">✗ "make homework" → ✓ "do homework"</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Adverb + Adjective Collocations</h3>
              
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-gray-700 space-y-2">
                  <span className="block">✓ <strong>deeply</strong> concerned, <strong>highly</strong> unlikely, <strong>utterly</strong> impossible</span>
                  <span className="block">✓ <strong>perfectly</strong> clear, <strong>fully</strong> aware, <strong>entirely</strong> different</span>
                  <span className="block">✓ <strong>widely</strong> accepted, <strong>closely</strong> related, <strong>readily</strong> available</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sense Relations */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sense Relations</h2>
          
          <p className="text-gray-700 mb-6">
            Understanding how words relate in meaning helps with precise expression and vocabulary expansion.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Synonymy (Similar Meaning)</h3>
              <p className="text-gray-700 mb-3">
                Words with similar meanings, though often with subtle differences in usage, connotation, or register.
              </p>
              <div className="bg-green-50 p-4 rounded space-y-2">
                <p className="text-sm text-gray-700"><strong>Academic:</strong> conclude ≈ infer ≈ deduce (slight differences in certainty/process)</p>
                <p className="text-sm text-gray-700"><strong>Register variation:</strong> begin (neutral) ≈ commence (formal) ≈ start (informal)</p>
                <p className="text-sm text-gray-700"><strong>Connotation:</strong> thin (neutral) vs. slender (positive) vs. scrawny (negative)</p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Antonymy (Opposite Meaning)</h3>
              <p className="text-gray-700 mb-3">
                Words with opposite meanings help create contrast and clarify distinctions.
              </p>
              <div className="bg-emerald-50 p-4 rounded space-y-2">
                <p className="text-sm text-gray-700"><strong>Gradable:</strong> hot ↔ cold (degrees between)</p>
                <p className="text-sm text-gray-700"><strong>Complementary:</strong> alive ↔ dead (no middle ground)</p>
                <p className="text-sm text-gray-700"><strong>Relational:</strong> above ↔ below, teacher ↔ student</p>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Hyponymy (Category Relationships)</h3>
              <p className="text-gray-700 mb-3">
                Hierarchical relationships where specific words fall under general categories.
              </p>
              <div className="bg-teal-50 p-4 rounded">
                <p className="text-sm text-gray-700 mb-2"><strong>Superordinate → Hyponyms:</strong></p>
                <p className="text-sm text-gray-700">• <em>Vehicle</em> → car, truck, motorcycle, bicycle</p>
                <p className="text-sm text-gray-700">• <em>Emotion</em> → joy, anger, fear, sadness</p>
                <p className="text-sm text-gray-700">• <em>Communication verb</em> → say, whisper, shout, murmur, declare</p>
              </div>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. Polysemy (Multiple Meanings)</h3>
              <p className="text-gray-700 mb-3">
                Single words with multiple related meanings depending on context.
              </p>
              <div className="bg-cyan-50 p-4 rounded">
                <p className="text-sm text-gray-700"><strong>"Run":</strong> physical movement, operate (run a business), flow (water runs), extend (road runs)</p>
                <p className="text-sm text-gray-700 mt-2"><strong>"Bank":</strong> financial institution, river edge (related meanings)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Register and Context */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Register-Appropriate Vocabulary</h2>
          
          <p className="text-gray-700 mb-6">
            The same concept can be expressed at different levels of formality. Choosing appropriate vocabulary for your audience and context is essential.
          </p>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Formality Levels Compared</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-green-300">
                    <th className="p-3 text-left font-bold text-green-900">Informal/Casual</th>
                    <th className="p-3 text-left font-bold text-green-900">Neutral</th>
                    <th className="p-3 text-left font-bold text-green-900">Formal/Academic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-100">
                  <tr className="bg-white">
                    <td className="p-3 text-gray-700">kids</td>
                    <td className="p-3 text-gray-700">children</td>
                    <td className="p-3 text-gray-700">juveniles, minors</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">find out</td>
                    <td className="p-3 text-gray-700">discover</td>
                    <td className="p-3 text-gray-700">ascertain, determine</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-gray-700">get</td>
                    <td className="p-3 text-gray-700">receive</td>
                    <td className="p-3 text-gray-700">obtain, acquire</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">show</td>
                    <td className="p-3 text-gray-700">demonstrate</td>
                    <td className="p-3 text-gray-700">illustrate, exemplify</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-gray-700">boss</td>
                    <td className="p-3 text-gray-700">manager</td>
                    <td className="p-3 text-gray-700">supervisor, administrator</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">think about</td>
                    <td className="p-3 text-gray-700">consider</td>
                    <td className="p-3 text-gray-700">contemplate, deliberate</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-gray-700">help</td>
                    <td className="p-3 text-gray-700">assist</td>
                    <td className="p-3 text-gray-700">facilitate, aid</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">end</td>
                    <td className="p-3 text-gray-700">finish</td>
                    <td className="p-3 text-gray-700">conclude, terminate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Academic Vocabulary Features</h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Prefer Latin/Greek-derived words:</p>
                <p className="text-sm text-gray-700">✓ utilize (not "use"), commence (not "start"), purchase (not "buy")</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Use nominalizations:</p>
                <p className="text-sm text-gray-700">✓ "The investigation revealed..." (not "We investigated and found...")</p>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Avoid contractions and phrasal verbs:</p>
                <p className="text-sm text-red-600">✗ "The data doesn't add up."</p>
                <p className="text-sm text-green-600">✓ "The data does not correspond with expectations."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical vs. Common Vocabulary */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical vs. Common Vocabulary</h2>
          
          <p className="text-gray-700 mb-6">
            Different fields use specialized terminology. Knowing when to use technical terms versus common language is crucial for effective communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">When to Use Technical Terms</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Writing for experts in your field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Precision is more important than accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Academic journals and research papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No common-language equivalent exists</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded">
                <p className="text-xs text-gray-600 italic">Example: "The photosynthetic efficiency was measured using chlorophyll fluorescence."</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">When to Use Common Vocabulary</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Writing for general audiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Clarity is the primary goal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Popular science, blogs, public communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Technical terms would confuse readers</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded">
                <p className="text-xs text-gray-600 italic">Example: "We measured how efficiently plants convert light into energy."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Vocabulary Mistakes</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                False Friends and Confusables
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">✓ <strong>Affect</strong> (verb) vs. <strong>Effect</strong> (noun): "The policy will affect outcomes; the effect will be significant."</p>
                <p className="text-gray-700">✓ <strong>Imply</strong> (suggest) vs. <strong>Infer</strong> (conclude): "The author implies; the reader infers."</p>
                <p className="text-gray-700">✓ <strong>Disinterested</strong> (impartial) vs. <strong>Uninterested</strong> (not interested)</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Inappropriate Register Mixing
              </h3>
              <p className="text-sm text-red-600 mb-1">✗ "The research shows that kids gotta have better nutrition."</p>
              <p className="text-sm text-green-600">✓ "The research demonstrates that children require improved nutrition."</p>
              <p className="text-xs text-gray-600 mt-2 italic">Mixing casual language ("kids," "gotta") with formal academic writing creates inconsistency.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Incorrect Collocations
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-red-600">✗ "make research" → ✓ conduct research</p>
                <p className="text-red-600">✗ "strong coffee maker" (if meaning intense) → ✓ powerful coffee maker</p>
                <p className="text-red-600">✗ "say a speech" → ✓ give/deliver a speech</p>
                <p className="text-xs text-gray-600 mt-2 italic">Collocations are learned combinations; direct translation from other languages often fails.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Practice Exercise</h2>
          </div>
          
          <p className="text-gray-700 mb-6">Test your vocabulary knowledge:</p>

          <div className="space-y-6">
            {practiceQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl p-6 border-2 border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">Question {index + 1}: {q.question}</h3>
                {q.instruction && (
                  <p className="text-sm text-green-600 italic mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
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
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
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
              className="mt-6 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-6 bg-white rounded-xl border-2 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Score: {calculateScore()} / {practiceQuestions.length}
              </h3>
              <p className="text-gray-700">
                {calculateScore() === practiceQuestions.length
                  ? "Excellent! Your vocabulary skills are outstanding! 🎉"
                  : calculateScore() >= 2
                  ? "Good work! Review the explanations to refine your understanding."
                  : "Keep learning! Study the sections above carefully."}
              </p>
            </div>
          )}
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Practice in Full Quiz
            </button>
          </Link>
          <Link href="/learn" className="flex-1">
            <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to All Topics
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
