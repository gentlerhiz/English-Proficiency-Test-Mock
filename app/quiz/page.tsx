'use client'

import { useState, useEffect } from 'react'
import { Clock, CheckCircle, XCircle, Award, Home } from 'lucide-react'
import Link from 'next/link'
import { questionBank, getPerformanceRating, type Question } from '../data/questions'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questionBank.length).fill(null)
  )
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
    if (currentQuestion < questionBank.length - 1) {
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
      if (answer === questionBank[index].correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getCategoryScore = (category: string) => {
    const categoryQuestions = questionBank.filter(q => q.category === category)
    let correct = 0
    questionBank.forEach((q, index) => {
      if (q.category === category && selectedAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: categoryQuestions.length,
      percentage: (correct / categoryQuestions.length) * 100
    }
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-6 rounded-full">
                <Award className="w-16 h-16 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              English Proficiency Test
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Test your knowledge across all syllabus areas
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-bold text-xl mb-4">Instructions:</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>You have <strong>60 minutes</strong> to complete {questionBank.length} questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Each question has <strong>4 options</strong> with one correct answer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Questions cover: <strong>Parallelism, Cohesion & Coherence, Stylistic Variation, Concord, Mechanics, and Vocabulary</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>You can navigate between questions and change your answers</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105"
            >
              Start Quiz
            </button>
            <div className="mt-4">
              <Link href="/" className="text-purple-600 hover:underline">
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
    const percentage = (score / questionBank.length) * 100
    const performanceRating = getPerformanceRating(percentage)
    
    const categories = ['Parallelism', 'Cohesion & Coherence', 'Stylistic Variation', 'Concord', 'Mechanics', 'Vocabulary']

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-full">
                  <Award className="w-20 h-20 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Quiz Complete!</h1>
              <div className={`text-6xl font-bold ${performanceRating.color} mb-2`}>
                {percentage.toFixed(1)}%
              </div>
              <p className="text-2xl font-semibold text-gray-700 mb-2">
                {performanceRating.rating}
              </p>
              <p className="text-gray-600 mb-6">
                You scored {score} out of {questionBank.length}
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {performanceRating.message}
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance by Category</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {categories.map((category) => {
                  const categoryScore = getCategoryScore(category)
                  return (
                    <div key={category} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{category}</h3>
                      <div className="flex items-center justify-between">
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
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Review Your Answers</h2>
              <div className="space-y-6">
                {questionBank.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer
                  
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex-shrink-0 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                              {question.category}
                            </span>
                            <span className="text-sm text-gray-500">Question {index + 1}</span>
                          </div>
                          <p className="font-semibold mb-3">{question.question}</p>
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => {
                              const isUserAnswer = userAnswer === optIndex
                              const isCorrectAnswer = question.correctAnswer === optIndex
                              
                              return (
                                <div
                                  key={optIndex}
                                  className={`p-3 rounded ${
                                    isCorrectAnswer ? 'bg-green-100 border-2 border-green-500' :
                                    isUserAnswer && !isCorrect ? 'bg-red-100 border-2 border-red-500' :
                                    'bg-gray-50'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">{String.fromCharCode(65 + optIndex)}.</span>
                                    <span>{option}</span>
                                    {isCorrectAnswer && (
                                      <span className="ml-auto text-green-600 font-semibold">✓ Correct</span>
                                    )}
                                    {isUserAnswer && !isCorrect && (
                                      <span className="ml-auto text-red-600 font-semibold">✗ Your answer</span>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          {question.explanation && (
                            <div className="mt-3 bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                              <p className="text-sm text-gray-700">
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

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Retake Quiz
              </button>
              <Link href="/">
                <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questionBank[currentQuestion]
  const progress = ((currentQuestion + 1) / questionBank.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-600" />
              <span className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Question</div>
              <div className="text-2xl font-bold text-purple-600">
                {currentQuestion + 1} / {questionBank.length}
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-6">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-4">
              {currentQ.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-purple-600 bg-purple-600 text-white'
                      : 'border-gray-400 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {questionBank.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-3 h-3 rounded-full transition ${
                  selectedAnswers[index] !== null
                    ? 'bg-green-500'
                    : index === currentQuestion
                    ? 'bg-purple-600'
                    : 'bg-gray-300'
                }`}
                title={`Question ${index + 1}`}
              />
            ))}
          </div>

          {currentQuestion === questionBank.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transition"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
