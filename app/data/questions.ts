// Question Bank - Comprehensive exam-standard questions following the syllabus

export interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export const questionBank: Question[] = [
  // PARALLELISM (Questions 1-10)
  {
    id: 1,
    category: 'Parallelism',
    question: 'Choose the most standard/acceptable structure:',
    options: [
      'The researcher likes analyzing data and to write reports.',
      'The researcher likes analyzing data and writing reports.',
      'The researcher likes to analyze data and writing reports.',
      'The researcher likes analyzing data and writes reports.'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires consistent verb forms (analyzing/writing).'
  },
  {
    id: 2,
    category: 'Parallelism',
    question: 'Select the correct parallel structure:',
    options: [
      'The professor values students with dedication and who show commitment.',
      'The professor values students who have dedication and commitment.',
      'The professor values students with dedication and who are committed.',
      'The professor values students having dedication and who commit.'
    ],
    correctAnswer: 1,
    explanation: 'Maintain parallel structure using "who have" for both qualities.'
  },
  {
    id: 3,
    category: 'Parallelism',
    question: 'Which sentence demonstrates correct parallelism?',
    options: [
      'The study requires collecting data, analyzing results, and to write conclusions.',
      'The study requires collecting data, to analyze results, and writing conclusions.',
      'The study requires collecting data, analyzing results, and writing conclusions.',
      'The study requires data collection, analyzing results, and to write conclusions.'
    ],
    correctAnswer: 2,
    explanation: 'All three actions should use the same gerund form (-ing).'
  },
  {
    id: 4,
    category: 'Parallelism',
    question: 'Choose the sentence with proper parallel structure:',
    options: [
      'Success requires dedication, perseverance, and being patient.',
      'Success requires dedication, perseverance, and patience.',
      'Success requires being dedicated, perseverance, and patience.',
      'Success requires dedication, to persevere, and patience.'
    ],
    correctAnswer: 1,
    explanation: 'All three elements should be nouns for parallel structure.'
  },
  {
    id: 5,
    category: 'Parallelism',
    question: 'Identify the correctly structured sentence:',
    options: [
      'The candidate promised to reduce taxes, creating jobs, and improve education.',
      'The candidate promised reducing taxes, to create jobs, and improving education.',
      'The candidate promised to reduce taxes, to create jobs, and to improve education.',
      'The candidate promised reducing taxes, creating jobs, and to improve education.'
    ],
    correctAnswer: 2,
    explanation: 'Maintain parallel structure with "to" + verb for all three items.'
  },
  {
    id: 6,
    category: 'Parallelism',
    question: 'Select the sentence with correct parallelism:',
    options: [
      'The manager was praised by the board, commended by employees, but the shareholders criticized him.',
      'The manager was praised by the board, commended by employees, but criticized by shareholders.',
      'The manager was praised by the board, employees commended him, but shareholders criticized him.',
      'The manager was being praised by the board, commended by employees, but criticized by shareholders.'
    ],
    correctAnswer: 1,
    explanation: 'Use passive voice consistently: praised/commended/criticized + by.'
  },
  {
    id: 7,
    category: 'Parallelism',
    question: 'Which option shows proper parallel construction?',
    options: [
      'Reading extensively is beneficial, but to write carelessly is detrimental.',
      'Reading extensively is beneficial, but writing carelessly is detrimental.',
      'To read extensively is beneficial, but writing carelessly is detrimental.',
      'Reading extensively is beneficial, but careless writing is detrimental.'
    ],
    correctAnswer: 1,
    explanation: 'Both elements should use gerund form (reading/writing).'
  },
  {
    id: 8,
    category: 'Parallelism',
    question: 'Choose the correctly structured sentence:',
    options: [
      'The conference included presenting papers, discussing findings, and to network with colleagues.',
      'The conference included presenting papers, to discuss findings, and networking with colleagues.',
      'The conference included presenting papers, discussing findings, and networking with colleagues.',
      'The conference included paper presentations, discussing findings, and to network with colleagues.'
    ],
    correctAnswer: 2,
    explanation: 'All three activities should use the gerund form consistently.'
  },
  {
    id: 9,
    category: 'Parallelism',
    question: 'Identify the sentence with proper parallelism:',
    options: [
      'The report stated that enrollment increased, revenue grew, and satisfaction was improving.',
      'The report stated that enrollment increased, that revenue grew, and that satisfaction improved.',
      'The report stated that enrollment increased, revenue was growing, and satisfaction improved.',
      'The report stated enrollment increase, revenue growth, and that satisfaction improved.'
    ],
    correctAnswer: 1,
    explanation: 'Maintain parallel structure by repeating "that" with past tense verbs.'
  },
  {
    id: 10,
    category: 'Parallelism',
    question: 'Select the correctly parallel structure:',
    options: [
      'The athlete trains rigorously, eats healthy, and was sleeping adequately.',
      'The athlete trains rigorously, eating healthy, and sleeps adequately.',
      'The athlete trains rigorously, eats healthily, and sleeps adequately.',
      'The athlete was training rigorously, eats healthy, and sleeps adequately.'
    ],
    correctAnswer: 2,
    explanation: 'Use present tense verbs consistently: trains/eats/sleeps.'
  },

  // COHESION AND COHERENCE (Questions 11-18)
  {
    id: 11,
    category: 'Cohesion & Coherence',
    question: 'Academic excellence requires dedication. No one achieves it without effort. What does "it" refer to?',
    options: [
      'Dedication',
      'Effort',
      'Academic excellence',
      'Achievement'
    ],
    correctAnswer: 2,
    explanation: '"It" refers back to "academic excellence" - the main topic of the first sentence.'
  },
  {
    id: 12,
    category: 'Cohesion & Coherence',
    question: 'Dr. Smith purchased new laboratory equipment. The calibration failed immediately. What does "calibration" refer to?',
    options: [
      'Laboratory calibration',
      'Equipment calibration',
      'Purchase calibration',
      'General calibration'
    ],
    correctAnswer: 1,
    explanation: 'The calibration refers to the newly purchased laboratory equipment.'
  },
  {
    id: 13,
    category: 'Cohesion & Coherence',
    question: 'Student: "I understand quantum mechanics." Professor: "I do as well." What does "do" replace?',
    options: [
      'Understand',
      'Understand it',
      'Understand quantum mechanics',
      'Will understand'
    ],
    correctAnswer: 2,
    explanation: '"Do" substitutes for the entire phrase "understand quantum mechanics".'
  },
  {
    id: 14,
    category: 'Cohesion & Coherence',
    question: 'Two challenges face modern education: inadequate funding and outdated curricula. The latter poses greater threats. What does "latter" refer to?',
    options: [
      'Inadequate funding',
      'Outdated curricula',
      'Modern education',
      'Greater threats'
    ],
    correctAnswer: 1,
    explanation: '"Latter" refers to the second item mentioned - outdated curricula.'
  },
  {
    id: 15,
    category: 'Cohesion & Coherence',
    question: 'Complete the form correctly. Then, submit it to the registrar. "Then" indicates:',
    options: [
      'Simultaneously',
      'After completing the form',
      'While completing',
      'Before submitting'
    ],
    correctAnswer: 1,
    explanation: '"Then" shows sequential order - submit after completion.'
  },
  {
    id: 16,
    category: 'Cohesion & Coherence',
    question: 'The university maintains strict admission standards. This ensures quality education. "This" refers to:',
    options: [
      'The university',
      'Strict standards',
      'Maintaining strict admission standards',
      'Quality education'
    ],
    correctAnswer: 2,
    explanation: '"This" refers to the entire action of maintaining strict standards.'
  },
  {
    id: 17,
    category: 'Cohesion & Coherence',
    question: 'Climate change threatens biodiversity. Scientists study this phenomenon extensively. "This phenomenon" refers to:',
    options: [
      'Biodiversity',
      'Climate change',
      'Scientists',
      'Threats'
    ],
    correctAnswer: 1,
    explanation: 'The phenomenon being studied is climate change.'
  },
  {
    id: 18,
    category: 'Cohesion & Coherence',
    question: 'She rejected the proposal citing ethical concerns. That was admirable. "That" refers to:',
    options: [
      'The proposal',
      'Ethical concerns',
      'Rejecting the proposal',
      'Her citation'
    ],
    correctAnswer: 2,
    explanation: '"That" refers to her action of rejecting the proposal.'
  },

  // STYLISTIC VARIATION (Questions 19-26)
  {
    id: 19,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate for formal academic writing:',
    options: [
      "The professor wasn't available for consultation.",
      'The professor was not available for consultation.',
      "The prof wasn't available for consultation.",
      'The professor was not on seat.'
    ],
    correctAnswer: 1,
    explanation: 'Formal writing avoids contractions and uses complete forms.'
  },
  {
    id: 20,
    category: 'Stylistic Variation',
    question: 'Select the appropriate formal equivalent of "hot drinks":',
    options: [
      'Hot drinks',
      'Spirits',
      'Tipsy drinks',
      'Peppery drinks'
    ],
    correctAnswer: 1,
    explanation: 'In formal contexts, "spirits" refers to alcoholic beverages.'
  },
  {
    id: 21,
    category: 'Stylistic Variation',
    question: 'What is the Standard British English equivalent of "academician"?',
    options: [
      'Academics',
      'Academic',
      'Academician',
      'Academia'
    ],
    correctAnswer: 1,
    explanation: 'In British English, "academic" is the standard term for university professors.'
  },
  {
    id: 22,
    category: 'Stylistic Variation',
    question: 'Replace "assassinated my character" with standard English:',
    options: [
      'Injured my name',
      'Spoilt my name',
      'Injured my reputation',
      'Damaged my reputation'
    ],
    correctAnswer: 3,
    explanation: '"Damaged my reputation" is the appropriate standard expression.'
  },
  {
    id: 23,
    category: 'Stylistic Variation',
    question: 'What is the formal way to say "crack jokes"?',
    options: [
      'Talks',
      'Makes jokes',
      'Uses jokes',
      'Smiths jokes'
    ],
    correctAnswer: 1,
    explanation: 'In standard English, one "makes jokes" or "tells jokes".'
  },
  {
    id: 24,
    category: 'Stylistic Variation',
    question: 'Replace "home training" with standard English:',
    options: [
      'Well trained by parents',
      'Well taught',
      'Well brought up',
      'Well mentored'
    ],
    correctAnswer: 2,
    explanation: '"Well brought up" is the standard British English expression for proper upbringing.'
  },
  {
    id: 25,
    category: 'Stylistic Variation',
    question: 'What is the formal equivalent of "nylon bag"?',
    options: [
      'Leather bag',
      'Cellophane bag',
      'Non-leather bag',
      'Synthetic bag'
    ],
    correctAnswer: 1,
    explanation: 'In standard English, "cellophane bag" or "plastic bag" is appropriate.'
  },
  {
    id: 26,
    category: 'Stylistic Variation',
    question: 'Choose the formal academic phrasing:',
    options: [
      'I seek for approval of the results.',
      'I ask for approval of the results.',
      'I seek approval of the results.',
      'I need approval of the results.'
    ],
    correctAnswer: 2,
    explanation: '"Seek approval" (without "for") is the correct formal construction.'
  },

  // CONCORD (Questions 27-36)
  {
    id: 27,
    category: 'Concord',
    question: 'The committee, along with its advisors, _____ approved the proposal.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "committee" (singular), so use "has".'
  },
  {
    id: 28,
    category: 'Concord',
    question: 'Either the students or the teacher _____ responsible.',
    options: [
      'are',
      'is',
      'were',
      'been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject (teacher - singular).'
  },
  {
    id: 29,
    category: 'Concord',
    question: 'The number of applicants _____ increasing every year.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"The number" (as opposed to "a number") takes a singular verb.'
  },
  {
    id: 30,
    category: 'Concord',
    question: 'More than one researcher _____ contributed to this discovery.',
    options: [
      'have',
      'has',
      'were',
      'are'
    ],
    correctAnswer: 1,
    explanation: 'Despite plural meaning, "more than one" takes a singular verb.'
  },
  {
    id: 31,
    category: 'Concord',
    question: 'Economics _____ a challenging subject for many students.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'Academic subjects ending in -ics are treated as singular.'
  },
  {
    id: 32,
    category: 'Concord',
    question: 'Neither the professor nor the students _____ present.',
    options: [
      'was',
      'is',
      'were',
      'been'
    ],
    correctAnswer: 2,
    explanation: 'Verb agrees with the nearest subject (students - plural).'
  },
  {
    id: 33,
    category: 'Concord',
    question: 'Each researcher and assistant _____ assigned a specific task.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Each" requires a singular verb, even with compound subjects.'
  },
  {
    id: 34,
    category: 'Concord',
    question: 'The data _____ analyzed using advanced statistical methods.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Data" is the plural of "datum" and takes a plural verb.'
  },
  {
    id: 35,
    category: 'Concord',
    question: 'Ten kilometers _____ a long distance to walk.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'Measurements treated as a single unit take singular verbs.'
  },
  {
    id: 36,
    category: 'Concord',
    question: 'One of the scientists _____ received international recognition.',
    options: [
      'have',
      'has',
      'were',
      'are'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "one" (singular), not "scientists".'
  },

  // MECHANICS - Spelling (Questions 37-43)
  {
    id: 37,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    options: [
      'Accomodation',
      'Accommodation',
      'Acommodation',
      'Acomodation'
    ],
    correctAnswer: 1,
    explanation: 'Correct spelling has double "c" and double "m".'
  },
  {
    id: 38,
    category: 'Mechanics',
    question: 'Identify the correctly spelled word:',
    options: [
      'Priviledge',
      'Previlege',
      'Privilege',
      'Privilage'
    ],
    correctAnswer: 2,
    explanation: 'The correct spelling is "privilege" with "i" before "lege".'
  },
  {
    id: 39,
    category: 'Mechanics',
    question: 'Select the correct spelling:',
    options: [
      'Occassion',
      'Occasion',
      'Ocassion',
      'Ocasion'
    ],
    correctAnswer: 1,
    explanation: 'Correct spelling has double "c" and single "s".'
  },
  {
    id: 40,
    category: 'Mechanics',
    question: 'Which spelling is correct?',
    options: [
      'Maintainance',
      'Maintenance',
      'Maintenence',
      'Maintainence'
    ],
    correctAnswer: 1,
    explanation: '"Maintenance" comes from "maintain" + "-ance".'
  },
  {
    id: 41,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    options: [
      'Recieve',
      'Receive',
      'Recive',
      'Receeve'
    ],
    correctAnswer: 1,
    explanation: 'Remember: "i before e except after c".'
  },
  {
    id: 42,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    options: [
      'Arguement',
      'Argument',
      'Argeument',
      'Arguament'
    ],
    correctAnswer: 1,
    explanation: 'Drop the "e" from "argue" when adding "-ment".'
  },
  {
    id: 43,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    options: [
      'Mischievious',
      'Mischievous',
      'Mischeivious',
      'Mischevious'
    ],
    correctAnswer: 1,
    explanation: 'Correct spelling is "mischievous" (no extra "i").'
  },

  // MECHANICS - Capitalization (Questions 44-47)
  {
    id: 44,
    category: 'Mechanics',
    question: 'Choose the correct capitalization:',
    options: [
      'Vice-chancellor',
      'Vice Chancellor',
      'Vice-Chancellor',
      'vice-chancellor'
    ],
    correctAnswer: 2,
    explanation: 'Capitalize both parts of the hyphenated title.'
  },
  {
    id: 45,
    category: 'Mechanics',
    question: 'Identify correct capitalization:',
    options: [
      'either Christianity or Islam',
      'either christianity or islam',
      'either Christianity or islam',
      'either christianity or Islam'
    ],
    correctAnswer: 0,
    explanation: 'Religious names are always capitalized.'
  },
  {
    id: 46,
    category: 'Mechanics',
    question: 'Select the correct form:',
    options: [
      'The Internet is Worldwide',
      'The internet is worldwide',
      'The Internet is worldwide',
      'The internet is Worldwide'
    ],
    correctAnswer: 2,
    explanation: 'Capitalize "Internet" as a proper noun; "worldwide" is lowercase.'
  },
  {
    id: 47,
    category: 'Mechanics',
    question: 'Choose correct capitalization:',
    options: [
      'south-western Nigeria',
      'south-Western Nigeria',
      'South-Western Nigeria',
      'South-western Nigeria'
    ],
    correctAnswer: 2,
    explanation: 'Capitalize both parts when referring to a specific region.'
  },

  // VOCABULARY - Synonyms & Antonyms (Questions 48-50)
  {
    id: 48,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "ossified"?',
    options: [
      'Durable',
      'Flexible',
      'Pragmatic',
      'Contumacious'
    ],
    correctAnswer: 1,
    explanation: '"Ossified" means rigid or inflexible; "flexible" is the opposite.'
  },
  {
    id: 49,
    category: 'Vocabulary',
    question: '"Enervated" is opposite to:',
    options: [
      'Idyllic',
      'Frustrated',
      'Energized',
      'Decorous'
    ],
    correctAnswer: 2,
    explanation: '"Enervated" means weakened; "energized" is the antonym.'
  },
  {
    id: 50,
    category: 'Vocabulary',
    question: 'Which word is similar to "prolix"?',
    options: [
      'Terse',
      'Wordy',
      'Concise',
      'Brief'
    ],
    correctAnswer: 1,
    explanation: '"Prolix" means using too many words; "wordy" is synonymous.'
  }
]

// Helper function to shuffle questions
export function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Helper function to get questions by category
export function getQuestionsByCategory(category: string): Question[] {
  return questionBank.filter(q => q.category === category)
}

// Helper function to calculate performance rating
export function getPerformanceRating(percentage: number): {
  rating: string
  color: string
  message: string
} {
  if (percentage >= 85) {
    return {
      rating: 'Highly Proficient',
      color: 'text-green-600',
      message: 'Excellent! You have outstanding command of English grammar and vocabulary.'
    }
  } else if (percentage >= 70) {
    return {
      rating: 'Proficient',
      color: 'text-blue-600',
      message: 'Great job! You demonstrate good understanding with minor areas for improvement.'
    }
  } else if (percentage >= 60) {
    return {
      rating: 'Fairly Proficient',
      color: 'text-yellow-600',
      message: 'Good effort! Your skills are adequate but require practice in specific areas.'
    }
  } else if (percentage >= 50) {
    return {
      rating: 'Scarcely Proficient',
      color: 'text-orange-600',
      message: 'Keep practicing! You have basic understanding but need significant improvement.'
    }
  } else if (percentage >= 40) {
    return {
      rating: 'Not Proficient',
      color: 'text-red-600',
      message: 'More work needed. Focus on fundamentals and practice regularly.'
    }
  } else {
    return {
      rating: 'Needs Improvement',
      color: 'text-red-700',
      message: 'Don\'t give up! Start with basics and practice extensively.'
    }
  }
}
