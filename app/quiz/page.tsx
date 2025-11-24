'use client'

import { useState, useEffect } from 'react'
import { Clock, CheckCircle, XCircle, Award, Home } from 'lucide-react'
import Link from 'next/link'
import { questionBank, getPerformanceRating, type Question } from '../data/questions'

// Function to randomly select 50 questions from the bank
const getRandomQuestions = (count: number = 50): Question[] => {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default function QuizPage() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false)

  // Timer effect
  useEffect(() => {
    if (!quizStarted || showResults) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted, showResults])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getCategoryScore = (category: string) => {
    const categoryQuestions = quizQuestions.filter(q => q.category === category)
    let correct = 0
    quizQuestions.forEach((q, index) => {
      if (q.category === category && selectedAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: categoryQuestions.length,
      percentage: categoryQuestions.length > 0 ? (correct / categoryQuestions.length) * 100 : 0
    }
  }

  // Initialize quiz with 50 random questions when started
  const startQuiz = () => {
    const randomQuestions = getRandomQuestions(50)
    setQuizQuestions(randomQuestions)
    setSelectedAnswers(new Array(50).fill(null))
    setQuizStarted(true)
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-purple-100 p-4 sm:p-6 rounded-full">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              English Proficiency Test
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              Test your knowledge across all syllabus areas
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 text-left">
              <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Instructions:</h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>You have <strong>60 minutes</strong> to complete <strong>50 questions</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>50 random questions</strong> will be selected from our question bank</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Questions cover: <strong>Parallelism, Cohesion & Coherence, Stylistic Variation, Concord, Mechanics, and Vocabulary</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>You can navigate between questions and change your answers</span>
                </li>
              </ul>
            </div>

            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition shadow-md w-full sm:w-auto whitespace-nowrap"
            >
              Start Quiz
            </button>
            <div className="mt-4">
              <Link href="/" className="text-purple-600 hover:underline text-sm sm:text-base">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = (score / quizQuestions.length) * 100
    const performanceRating = getPerformanceRating(percentage)
    
    const categories = ['Parallelism', 'Cohesion & Coherence', 'Stylistic Variation', 'Concord', 'Mechanics', 'Vocabulary']

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-3 sm:p-4 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 sm:p-6 rounded-full">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-purple-600" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Quiz Complete!</h1>
              <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${performanceRating.color} mb-2`}>
                {percentage.toFixed(1)}%
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                {performanceRating.rating}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                You scored {score} out of {quizQuestions.length}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
                {performanceRating.message}
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Performance by Category</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {categories.map((category) => {
                  const categoryScore = getCategoryScore(category)
                  return (
                    <div key={category} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 text-sm sm:text-base">{category}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          {categoryScore.correct} / {categoryScore.total}
                        </span>
                        <span className={`font-bold ${
                          categoryScore.percentage >= 70 ? 'text-green-600' :
                          categoryScore.percentage >= 50 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {categoryScore.percentage.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${
                            categoryScore.percentage >= 70 ? 'bg-green-500' :
                            categoryScore.percentage >= 50 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${categoryScore.percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Detailed Results */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Review Your Answers</h2>
              <div className="space-y-4 sm:space-y-6">
                {quizQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer
                  
                  return (
                    <div key={question.id} className="border rounded-lg p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-3">
                        <div className={`flex-shrink-0 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> : <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                              {question.category}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500">Question {index + 1}</span>
                          </div>
                          <p className="font-semibold mb-2 text-sm sm:text-base">{question.question}</p>
                          {question.instruction && (
                            <div className="mb-3 p-2 sm:p-3 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                              <p className="text-xs sm:text-sm text-indigo-700 flex items-start gap-2">
                                <span className="flex-shrink-0">💡</span>
                                <span>{question.instruction}</span>
                              </p>
                            </div>
                          )}
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => {
                              const isUserAnswer = userAnswer === optIndex
                              const isCorrectAnswer = question.correctAnswer === optIndex
                              
                              return (
                                <div
                                  key={optIndex}
                                  className={`p-2 sm:p-3 rounded ${
                                    isCorrectAnswer ? 'bg-green-100 border-2 border-green-500' :
                                    isUserAnswer && !isCorrect ? 'bg-red-100 border-2 border-red-500' :
                                    'bg-gray-50'
                                  }`}
                                >
                                  <div className="flex flex-wrap items-start sm:items-center gap-2">
                                    <span className="font-semibold text-sm flex-shrink-0">{String.fromCharCode(65 + optIndex)}.</span>
                                    <span className="flex-1 text-sm">{option}</span>
                                    {isCorrectAnswer && (
                                      <span className="text-green-600 font-semibold text-xs sm:text-sm whitespace-nowrap">✓ Correct</span>
                                    )}
                                    {isUserAnswer && !isCorrect && (
                                      <span className="text-red-600 font-semibold text-xs sm:text-sm whitespace-nowrap">✗ Your answer</span>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          {question.explanation && (
                            <div className="mt-3 bg-blue-50 p-2 sm:p-3 rounded border-l-4 border-blue-500">
                              <p className="text-xs sm:text-sm text-gray-700">
                                <strong>Explanation:</strong> {question.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-emerald-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-600 transition shadow-sm whitespace-nowrap"
              >
                Retake Quiz
              </button>
              <Link href="/" className="w-full sm:w-auto">
                <button className="w-full bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-sky-600 transition shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <span className={`text-lg sm:text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs sm:text-sm text-gray-600">Question</div>
              <div className="text-lg sm:text-2xl font-bold text-purple-600">
                {currentQuestion + 1} / {quizQuestions.length}
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              {currentQ.category}
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              {currentQ.question}
            </h2>
            {currentQ.instruction && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-indigo-50 border-l-4 border-indigo-400 rounded">
                <p className="text-sm sm:text-base text-indigo-700 flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">💡</span>
                  <span>{currentQ.instruction}</span>
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg border-3 transition-all shadow-sm hover:shadow-md ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-300'
                    : 'border-gray-300 hover:border-indigo-400 bg-white'
                }`}
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5 sm:mt-0 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-gray-500 text-gray-700 bg-gray-50'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1 text-sm sm:text-base leading-relaxed font-medium text-gray-800">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          {/* Question Indicators - Scrollable on mobile */}
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2 px-2 max-w-full">
              {quizQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0 font-bold text-xs transition-all shadow-sm hover:shadow-md ${
                    selectedAnswers[index] !== null
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : index === currentQuestion
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-300'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  title={`Question ${index + 1}${selectedAnswers[index] !== null ? ' (Answered)' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1 px-4 sm:px-6 py-3 rounded-lg font-bold text-sm sm:text-base bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <span className="hidden sm:inline">← Previous</span>
              <span className="sm:hidden">← Prev</span>
            </button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base bg-green-600 text-white hover:bg-green-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 px-4 sm:px-6 py-3 rounded-lg font-bold text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span className="hidden sm:inline">Next →</span>
                <span className="sm:hidden">Next →</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
