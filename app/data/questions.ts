// Question Bank - Comprehensive exam-standard questions following the syllabus

export interface Question {
  id: number
  category: string
  question: string
  instruction?: string
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
    options: [
      'The researcher likes analyzing data and to write reports.',
      'The researcher likes analyzing data and writing reports.',
      'The researcher likes to analyze data and writing reports.',
      'The researcher likes analyzing data and writes reports.'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires consistent verb forms. When items are joined by conjunctions (and, or, but), they must be in the same grammatical form. Here, both "analyzing" and "writing" are gerunds (-ing forms), creating proper parallelism.'
  },
  {
    id: 2,
    category: 'Parallelism',
    question: 'Select the correct parallel structure:',
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
    options: [
      'The professor values students with dedication and who show commitment.',
      'The professor values students who have dedication and commitment.',
      'The professor values students with dedication and who are committed.',
      'The professor values students having dedication and who commit.'
    ],
    correctAnswer: 1,
    explanation: 'This sentence demonstrates proper parallelism by using a single relative clause "who have" followed by two parallel nouns (dedication and commitment). Mixing prepositional phrases ("with dedication") with relative clauses ("who show") creates structural imbalance.'
  },
  {
    id: 3,
    category: 'Parallelism',
    question: 'Which sentence demonstrates correct parallelism?',
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
    options: [
      'The study requires collecting data, analyzing results, and to write conclusions.',
      'The study requires collecting data, to analyze results, and writing conclusions.',
      'The study requires collecting data, analyzing results, and writing conclusions.',
      'The study requires data collection, analyzing results, and to write conclusions.'
    ],
    correctAnswer: 2,
    explanation: 'In a series of three or more items, all elements must maintain the same grammatical structure. This sentence correctly uses gerunds (collecting, analyzing, writing) throughout. Mixing infinitives (to write) or nouns (data collection) with gerunds breaks the parallel structure.'
  },
  {
    id: 4,
    category: 'Parallelism',
    question: 'Choose the sentence with proper parallel structure:',
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Choose the option where all items in the series maintain the same grammatical form.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Dedication',
      'Effort',
      'Academic excellence',
      'Achievement'
    ],
    correctAnswer: 2,
    explanation: 'The pronoun "it" demonstrates anaphoric reference, pointing back to the main subject of the previous sentence: "academic excellence". This creates cohesion by connecting ideas across sentences. Pronouns typically refer to the subject or main focus of the preceding clause, not to subordinate elements like "dedication" or "effort".'
  },
  {
    id: 12,
    category: 'Cohesion & Coherence',
    question: 'Dr. Smith purchased new laboratory equipment. The calibration failed immediately. What does "calibration" refer to?',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
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
    instruction: 'Determine whether the collective noun is acting as a single unit (singular) or as individuals (plural).',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'The main subject is "committee" (singular collective noun). Phrases introduced by "along with", "together with", "as well as", or "in addition to" do not change the number of the subject. These are parenthetical elements and should be ignored when determining subject-verb agreement. Therefore, the singular verb "has" is correct.'
  },
  {
    id: 28,
    category: 'Concord',
    question: 'Either the students or the teacher _____ responsible.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'are',
      'is',
      'were',
      'been'
    ],
    correctAnswer: 1,
    explanation: 'This demonstrates the Rule of Proximity (or Proximity Agreement). When subjects are joined by "either...or" or "neither...nor", the verb agrees in number with the subject closest to it. Since "teacher" (singular) is nearer to the verb than "students" (plural), we use the singular verb "is".'
  },
  {
    id: 29,
    category: 'Concord',
    question: 'The number of applicants _____ increasing every year.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
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
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Data" is the plural form of "datum" (Latin origin) and requires a plural verb. In formal academic writing, "data" is always treated as plural. Other similar words include: criteria (plural of criterion), phenomena (plural of phenomenon), and media (plural of medium). This is an example of Concord with Anomaly, where irregular plural forms must be recognized.'
  },
  {
    id: 35,
    category: 'Concord',
    question: 'Ten kilometers _____ a long distance to walk.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
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
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Recieve',
      'Receive',
      'Recive',
      'Receeve'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling follows the rule: "i before e except after c". Since "receive" has "c" before the "ei" combination, we write "ei" not "ie". Other examples following this pattern include: deceive, perceive, conceive, and ceiling. Exceptions to this rule include: weird, seize, and either.'
  },
  {
    id: 42,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Identify the correct spelling from the options provided.',
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
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
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
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
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
    instruction: 'Select the option that follows standard mechanics conventions.',
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
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
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
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Durable',
      'Flexible',
      'Pragmatic',
      'Contumacious'
    ],
    correctAnswer: 1,
    explanation: '"Ossified" literally means "turned into bone" but figuratively means rigid, inflexible, or resistant to change (often describing outdated systems or thinking). The antonym is "flexible" meaning adaptable or capable of bending. This demonstrates understanding of synonymy and antonymy relationships.'
  },
  {
    id: 49,
    category: 'Vocabulary',
    question: '"Enervated" is opposite to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Idyllic',
      'Frustrated',
      'Energized',
      'Decorous'
    ],
    correctAnswer: 2,
    explanation: '"Enervated" means drained of energy, weakened, or lacking vitality. Despite sounding like it should mean "energized", it actually means the opposite. The true antonym is "energized" meaning full of energy or invigorated. This is a common source of confusion and tests vocabulary precision.'
  },
  {
    id: 50,
    category: 'Vocabulary',
    question: 'Which word is similar to "prolix"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Terse',
      'Wordy',
      'Concise',
      'Brief'
    ],
    correctAnswer: 1,
    explanation: '"Prolix" means excessively wordy or using more words than necessary (verbose). "Wordy" is a synonym. The other options (terse, concise, brief) are all antonyms meaning using few words. This tests understanding of stylistic variation and appropriate word choice for describing writing styles.'
  },

  // Additional Advanced Questions
  {
    id: 51,
    category: 'Parallelism',
    question: 'The dean emphasized that scholars should be innovative, collaborative, and _____ in their research.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'having dedication',
      'they should be dedicated',
      'dedicated',
      'dedication'
    ],
    correctAnswer: 2,
    explanation: 'The sentence uses a series of adjectives (innovative, collaborative) to describe qualities scholars should possess. To maintain parallel structure, the third item must also be an adjective. "Dedicated" is the only adjective among the options, making it the correct choice.'
  },
  {
    id: 52,
    category: 'Stylistic Variation',
    question: 'In formal academic writing, which is most appropriate?',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The findings are pretty significant.',
      'The findings are very significant.',
      'The findings are quite significant.',
      'The findings demonstrate considerable significance.'
    ],
    correctAnswer: 3,
    explanation: 'Academic writing favors precise, formal language. "Pretty" is too informal. While "very" and "quite" are acceptable, option D uses more sophisticated academic vocabulary with "demonstrate considerable significance", which is more precise and formal than intensifiers like "very" or "quite".'
  },
  {
    id: 53,
    category: 'Concord',
    question: 'Every student and teacher _____ required to attend the convocation.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When compound subjects are joined by "and" but preceded by "every", "each", or "no", the verb should be singular. "Every" emphasizes individual items separately, requiring singular agreement despite the compound subject. This is a critical rule in subject-verb agreement.'
  },
  {
    id: 54,
    category: 'Cohesion & Coherence',
    question: 'The laboratory purchased new equipment. However, the staff found _____ difficult to operate.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'them',
      'it',
      'these',
      'those'
    ],
    correctAnswer: 1,
    explanation: '"Equipment" is an uncountable noun treated as singular, requiring the singular pronoun "it". Using "them", "these", or "those" would be incorrect as they are plural. This tests understanding of pronoun-antecedent agreement in creating textual cohesion.'
  },
  {
    id: 55,
    category: 'Vocabulary',
    question: 'The research methodology was _____ by international standards.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'lauded',
      'applauded',
      'vindicated',
      'acclaimed'
    ],
    correctAnswer: 2,
    explanation: '"Vindicated" means proven correct or justified, which fits the academic context of research being validated by standards. "Lauded", "applauded", and "acclaimed" all mean praised, but don\'t convey the specific meaning of being proven valid or legitimate by standards.'
  },
  {
    id: 56,
    category: 'Mechanics',
    question: 'Choose the correct punctuation: The committee members _____ agreed to meet again.',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'having deliberated for hours,',
      'having deliberated for hours',
      'having deliberated, for hours,',
      'having deliberated for hours;'
    ],
    correctAnswer: 0,
    explanation: 'The participial phrase "having deliberated for hours" is an introductory phrase modifying "committee members" and should be followed by a comma. No comma is needed before "for hours" as it\'s part of the phrase. This demonstrates proper use of commas with introductory elements.'
  },
  {
    id: 57,
    category: 'Parallelism',
    question: 'The research proposal must be thorough, detailed, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'it should be comprehensive',
      'comprehensiveness',
      'comprehensive',
      'comprehend all aspects'
    ],
    correctAnswer: 2,
    explanation: 'The sentence lists coordinate adjectives (thorough, detailed) describing the research proposal. To maintain parallelism, the third element must also be an adjective. "Comprehensive" is the correct choice, maintaining the parallel structure of adjective, adjective, and adjective.'
  },
  {
    id: 58,
    category: 'Concord',
    question: 'The majority of the students _____ in favor of the new policy.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When "majority" is followed by "of" + a plural noun, the verb agrees with the plural noun (students), not with "majority". Since we\'re referring to multiple students, the plural verb "are" is correct. This demonstrates concord with collective expressions followed by prepositional phrases.'
  },
  {
    id: 59,
    category: 'Stylistic Variation',
    question: 'Replace this non-standard expression with standard English: "The deadline has reached."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The deadline has been reached.',
      'The deadline has arrived.',
      'The deadline has come.',
      'The deadline has expired.'
    ],
    correctAnswer: 3,
    explanation: 'In standard English, we say "the deadline has expired" or "the deadline has passed". "Reached" requires an object (e.g., "We have reached the deadline"). Option D uses the most precise and formal vocabulary appropriate for academic or professional contexts.'
  },
  {
    id: 60,
    category: 'Vocabulary',
    question: 'The argument was _____ because it lacked empirical evidence.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'tenacious',
      'tenuous',
      'tedious',
      'temperate'
    ],
    correctAnswer: 1,
    explanation: '"Tenuous" means weak, flimsy, or lacking substance—perfect for describing an argument without evidence. "Tenacious" means persistent (positive), "tedious" means boring, and "temperate" means moderate or restrained. This tests precise vocabulary selection and understanding of subtle distinctions in meaning.'
  },
  {
    id: 61,
    category: 'Mechanics',
    question: 'Identify the correct sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The Professor studies African Literature.',
      'The professor studies African literature.',
      'The Professor studies african literature.',
      'The professor studies African Literature.'
    ],
    correctAnswer: 1,
    explanation: 'Capitalize "African" as it derives from a proper noun (Africa). "Literature" is not capitalized as it\'s a general field of study, not a specific course title. "Professor" is lowercase when used as a general title, not a specific name. This tests capitalization rules for proper adjectives and common nouns.'
  },
  {
    id: 62,
    category: 'Cohesion & Coherence',
    question: 'Choose the best transition: The experiment was meticulously planned. _____, the results were inconclusive.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'Nevertheless',
      'Furthermore',
      'Consequently'
    ],
    correctAnswer: 1,
    explanation: '"Nevertheless" (meaning "despite this" or "however") is correct because it signals contrast between the careful planning and the disappointing results. "Therefore" and "Consequently" indicate cause-effect, while "Furthermore" adds supporting information—none of which fit the contrasting relationship here.'
  },
  {
    id: 63,
    category: 'Concord',
    question: 'Physics _____ always been challenging for many students.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'Academic subjects ending in "-ics" (physics, mathematics, economics, linguistics, statistics) are treated as singular when referring to the field of study. Therefore, "has" is correct. However, when "-ics" words refer to practical applications or qualities (e.g., "Her mathematics are weak"), they can take plural verbs.'
  },
  {
    id: 64,
    category: 'Stylistic Variation',
    question: 'Which is the most formal and appropriate for academic writing?',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'Lots of researchers think this theory is wrong.',
      'Many researchers think this theory is wrong.',
      'Numerous researchers contend that this theory is flawed.',
      'A lot of researchers believe this theory is incorrect.'
    ],
    correctAnswer: 2,
    explanation: 'Academic writing requires formal vocabulary and precise verbs. "Numerous" is more formal than "many" or "lots of". "Contend" (argue/assert) is more precise than "think" or "believe". "Flawed" is more academic than "wrong" or "incorrect". Option C demonstrates sophisticated academic register.'
  },
  {
    id: 65,
    category: 'Parallelism',
    question: 'The curriculum aims to develop critical thinking, to enhance communication skills, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'promoting ethical awareness',
      'to promote ethical awareness',
      'the promotion of ethical awareness',
      'it promotes ethical awareness'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses infinitive phrases (to develop, to enhance) to express the curriculum\'s aims. Maintaining parallel structure requires the third element to also be an infinitive phrase: "to promote ethical awareness". This consistency creates clarity and professional writing style.'
  },
  {
    id: 66,
    category: 'Vocabulary',
    question: 'The professor\'s lecture was so _____ that many students struggled to follow.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'obtuse',
      'abstruse',
      'verbose',
      'diffuse'
    ],
    correctAnswer: 1,
    explanation: '"Abstruse" means difficult to understand, complex, or obscure—fitting for a challenging lecture. "Obtuse" means slow to understand (describes a person), "verbose" means wordy, and "diffuse" means scattered or unfocused. This tests precise vocabulary for academic contexts and understanding of subtle semantic distinctions.'
  },
  {
    id: 67,
    category: 'Mechanics',
    question: 'Choose the correctly punctuated sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The study examined three variables: age income and education level.',
      'The study examined three variables: age, income, and education level.',
      'The study examined three variables age, income, and education level.',
      'The study examined three variables; age, income, and education level.'
    ],
    correctAnswer: 1,
    explanation: 'When introducing a list after an independent clause, use a colon. The items in the list should be separated by commas. Option B correctly uses a colon after "variables" and commas between list items. This demonstrates proper punctuation for introducing and separating items in a formal list.'
  },
  {
    id: 68,
    category: 'Cohesion & Coherence',
    question: 'Choose the pronoun that best maintains coherence: "The university implemented new policies. _____ aim to improve student welfare."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'It',
      'They',
      'These',
      'This'
    ],
    correctAnswer: 2,
    explanation: '"These" is the best choice because "policies" is plural and relatively close in the text. "These" (plural demonstrative) clearly refers back to "policies" and maintains coherence. "They" could work but is less specific. "It" and "This" are singular and don\'t match the plural "policies".'
  },
  {
    id: 69,
    category: 'Concord',
    question: 'A number of researchers _____ expressed concerns about the methodology.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"A number of" (meaning some/several) takes a plural verb, even though "number" is singular. This contrasts with "the number of" which takes a singular verb. "A number of researchers" emphasizes the individual researchers, requiring the plural verb "have". This is a key distinction in English concord.'
  },
  {
    id: 70,
    category: 'Vocabulary',
    question: 'The committee decided to _____ the proposal pending further review.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'differ',
      'defer',
      'deter',
      'demur'
    ],
    correctAnswer: 1,
    explanation: '"Defer" means to postpone or delay, which fits the context of putting off a decision. "Differ" means to be different, "deter" means to discourage, and "demur" means to object. This tests understanding of commonly confused words with similar spellings but distinct meanings (homophones and near-homophones).'
  },

  // PARALLELISM - Additional Questions (71-90)
  {
    id: 71,
    category: 'Parallelism',
    question: 'The job requires attention to detail, strong analytical skills, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'you must communicate effectively',
      'effective communication',
      'communicating effectively',
      'to communicate in an effective manner'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists two noun phrases: "attention to detail" and "strong analytical skills". To maintain parallel structure, the third item must also be a noun phrase. "Effective communication" is the correct noun phrase that matches the pattern.'
  },
  {
    id: 72,
    category: 'Parallelism',
    question: 'She enjoys painting landscapes, sculpting figures, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to photograph nature',
      'photographing nature',
      'nature photography',
      'she photographs nature'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses gerunds (painting, sculpting) to describe activities. To maintain parallel structure, the third activity should also be a gerund: "photographing nature".'
  },
  {
    id: 73,
    category: 'Parallelism',
    question: 'The company values employees who are punctual, who work diligently, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'showing initiative',
      'who show initiative',
      'with initiative',
      'they show initiative'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses relative clauses starting with "who" (who are punctual, who work diligently). To maintain parallelism, the third element must also be a relative clause beginning with "who": "who show initiative".'
  },
  {
    id: 74,
    category: 'Parallelism',
    question: 'The instructor emphasized the importance of preparing thoroughly, presenting confidently, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to answer questions clearly',
      'answering questions clearly',
      'clear answers to questions',
      'questions should be answered clearly'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses gerunds (preparing, presenting) with adverbs. The parallel structure requires another gerund with an adverb: "answering questions clearly".'
  },
  {
    id: 75,
    category: 'Parallelism',
    question: 'The policy aims to increase transparency, reduce corruption, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'promoting accountability',
      'promote accountability',
      'accountability promotion',
      'it promotes accountability'
    ],
    correctAnswer: 1,
    explanation: 'After "aims to", the sentence lists infinitive verbs without "to" (increase, reduce). To maintain parallelism, use another base form verb: "promote accountability".'
  },
  {
    id: 76,
    category: 'Parallelism',
    question: 'The students were asked to submit their assignments on time, follow the formatting guidelines, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'citing all sources properly',
      'cite all sources properly',
      'proper citation of all sources',
      'all sources should be cited properly'
    ],
    correctAnswer: 1,
    explanation: 'After "were asked to", the sentence uses infinitive verbs without "to" (submit, follow). The parallel structure requires another base form: "cite all sources properly".'
  },
  {
    id: 77,
    category: 'Parallelism',
    question: 'The conference will feature keynote speeches, panel discussions, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'there will be networking sessions',
      'networking sessions',
      'sessions for networking',
      'people can network'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists noun phrases (keynote speeches, panel discussions). To maintain parallelism, use another simple noun phrase: "networking sessions".'
  },
  {
    id: 78,
    category: 'Parallelism',
    question: 'Effective leadership involves setting clear goals, motivating team members, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to provide constructive feedback',
      'providing constructive feedback',
      'constructive feedback provision',
      'feedback should be provided constructively'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses gerunds (setting, motivating) to describe leadership activities. Maintain parallelism with another gerund: "providing constructive feedback".'
  },
  {
    id: 79,
    category: 'Parallelism',
    question: 'The program is designed to enhance critical thinking, foster creativity, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'developing problem-solving skills',
      'develop problem-solving skills',
      'the development of problem-solving skills',
      'it develops problem-solving skills'
    ],
    correctAnswer: 1,
    explanation: 'After "designed to", the sentence uses infinitive verbs without "to" (enhance, foster). Continue with another base form: "develop problem-solving skills".'
  },
  {
    id: 80,
    category: 'Parallelism',
    question: 'The candidate demonstrated competence by completing the project early, exceeding expectations, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'maintained high quality standards',
      'maintaining high quality standards',
      'high quality standards were maintained',
      'to maintain high quality standards'
    ],
    correctAnswer: 1,
    explanation: 'After "by", the sentence uses gerunds (completing, exceeding) to show how competence was demonstrated. Maintain parallelism with another gerund: "maintaining high quality standards".'
  },
  {
    id: 81,
    category: 'Parallelism',
    question: 'The organization strives to be transparent in its operations, accountable to stakeholders, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'it is responsive to feedback',
      'responsive to feedback',
      'responding to feedback',
      'feedback responsiveness'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses adjectives with prepositional phrases (transparent in..., accountable to...). Maintain parallelism with another adjective phrase: "responsive to feedback".'
  },
  {
    id: 82,
    category: 'Parallelism',
    question: 'The essay should be well-researched, clearly written, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'properly cited',
      'with proper citations',
      'citing properly',
      'citations should be proper'
    ],
    correctAnswer: 0,
    explanation: 'The sentence uses past participles as adjectives (well-researched, clearly written). Maintain parallelism with another past participle: "properly cited".'
  },
  {
    id: 83,
    category: 'Parallelism',
    question: 'Her responsibilities include managing the budget, coordinating events, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to supervise staff members',
      'supervising staff members',
      'staff member supervision',
      'staff members are supervised by her'
    ],
    correctAnswer: 1,
    explanation: 'After "include", the sentence lists gerunds (managing, coordinating). Continue with another gerund: "supervising staff members".'
  },
  {
    id: 84,
    category: 'Parallelism',
    question: 'The workshop focused on improving communication, building teamwork, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to enhance leadership abilities',
      'enhancing leadership abilities',
      'leadership ability enhancement',
      'abilities in leadership were enhanced'
    ],
    correctAnswer: 1,
    explanation: 'After "focused on", the sentence uses gerunds (improving, building). Maintain parallelism with another gerund: "enhancing leadership abilities".'
  },
  {
    id: 85,
    category: 'Parallelism',
    question: 'To succeed in this field, one must be innovative, persistent, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'having adaptability',
      'adaptable',
      'with adaptability',
      'adapt easily'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists adjectives describing necessary qualities (innovative, persistent). Continue with another adjective: "adaptable".'
  },
  {
    id: 86,
    category: 'Parallelism',
    question: 'The report was comprehensive, well-organized, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'writing it clearly',
      'clearly written',
      'with clear writing',
      'it was clear'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses adjectives and past participles (comprehensive, well-organized). Maintain parallelism with another past participle phrase: "clearly written".'
  },
  {
    id: 87,
    category: 'Parallelism',
    question: 'The course teaches students how to analyze data, interpret results, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'presenting findings effectively',
      'present findings effectively',
      'effective presentation of findings',
      'findings should be presented effectively'
    ],
    correctAnswer: 1,
    explanation: 'After "how to", the sentence uses infinitive verbs without "to" (analyze, interpret). Continue with another base form: "present findings effectively".'
  },
  {
    id: 88,
    category: 'Parallelism',
    question: 'The successful applicant will be responsible for developing strategies, implementing solutions, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to monitor progress regularly',
      'monitoring progress regularly',
      'regular progress monitoring',
      'progress is monitored regularly'
    ],
    correctAnswer: 1,
    explanation: 'After "responsible for", the sentence uses gerunds (developing, implementing). Maintain parallelism with another gerund: "monitoring progress regularly".'
  },
  {
    id: 89,
    category: 'Parallelism',
    question: 'The university promotes excellence in teaching, innovation in research, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'serving the community',
      'service to the community',
      'to serve the community',
      'community service activities'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses noun phrases with "in" (excellence in teaching, innovation in research). While "service to the community" uses "to" instead of "in", it maintains the parallel structure of noun + prepositional phrase better than the other options.'
  },
  {
    id: 90,
    category: 'Parallelism',
    question: 'The manager prefers hiring experienced candidates, training them thoroughly, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to retain them long-term',
      'retaining them long-term',
      'long-term retention',
      'they are retained long-term'
    ],
    correctAnswer: 1,
    explanation: 'After "prefers", the sentence uses gerunds (hiring, training). Maintain parallelism with another gerund: "retaining them long-term".'
  },

  // CONCORD - Additional Questions (91-110)
  {
    id: 91,
    category: 'Concord',
    question: 'Neither the coach nor the players _____ satisfied with the results.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'was',
      'is',
      'were',
      'has been'
    ],
    correctAnswer: 2,
    explanation: 'With "neither...nor" constructions, the verb agrees with the subject closest to it (Rule of Proximity). Since "players" (plural) is nearest to the verb, use the plural form "were".'
  },
  {
    id: 92,
    category: 'Concord',
    question: 'The faculty, including the dean, _____ approved the new curriculum.',
    instruction: 'Determine whether the collective noun is acting as a single unit (singular) or as individuals (plural).',
    options: [
      'has',
      'have',
      'are',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'The main subject is "faculty" (collective noun treated as singular). The phrase "including the dean" is parenthetical and does not affect verb agreement. Use singular "has".'
  },
  {
    id: 93,
    category: 'Concord',
    question: 'Twenty dollars _____ too much for that book.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When referring to a single amount of money as a unit, use a singular verb. "Twenty dollars" represents one price, not individual dollars, so "is" is correct.'
  },
  {
    id: 94,
    category: 'Concord',
    question: 'None of the students _____ completed the assignment on time.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"None" can take either singular or plural verbs depending on context. When "none of" is followed by a plural noun (students), it typically takes a plural verb in modern usage: "have completed".'
  },
  {
    id: 95,
    category: 'Concord',
    question: 'The criteria for admission _____ very strict.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Criteria" is the plural form of "criterion" (Latin origin). It always takes a plural verb: "are". This is similar to "data", "phenomena", and "media".'
  },
  {
    id: 96,
    category: 'Concord',
    question: 'Each of the researchers _____ presenting their findings tomorrow.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'were',
      'have been'
    ],
    correctAnswer: 0,
    explanation: '"Each" is always singular, even when followed by "of" + plural noun. Use the singular verb "is". The pronoun "their" is acceptable in modern English for singular gender-neutral reference.'
  },
  {
    id: 97,
    category: 'Concord',
    question: 'The team _____ celebrating their victory in the championship.',
    instruction: 'Determine whether the collective noun is acting as a single unit (singular) or as individuals (plural).',
    options: [
      'is',
      'are',
      'was',
      'been'
    ],
    correctAnswer: 1,
    explanation: 'When a collective noun (team) refers to individual members performing separate actions, use a plural verb. "The team are celebrating" emphasizes individual members celebrating, not the team as a single unit.'
  },
  {
    id: 98,
    category: 'Concord',
    question: 'Half of the budget _____ allocated to research and development.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When "half of" refers to a singular noun (budget), use a singular verb: "was". If it referred to plural countable items (e.g., "half of the students"), you would use a plural verb.'
  },
  {
    id: 99,
    category: 'Concord',
    question: 'Politics _____ been a controversial topic throughout history.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'When referring to the field of study or general concept, "politics" takes a singular verb: "has". However, when referring to political activities or opinions, it can take a plural verb (e.g., "His politics are conservative").'
  },
  {
    id: 100,
    category: 'Concord',
    question: 'The news from the conference _____ encouraging.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'are',
      'was',
      'have been'
    ],
    correctAnswer: 2,
    explanation: '"News" is always singular despite ending in "s". Use the singular verb "was". This is similar to other uncountable nouns like "information", "advice", and "furniture".'
  },
  {
    id: 101,
    category: 'Concord',
    question: 'Either the manager or his assistants _____ handling the situation.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. Since "assistants" (plural) is closer to the verb than "manager" (singular), use the plural verb "are".'
  },
  {
    id: 102,
    category: 'Concord',
    question: 'A pair of scissors _____ on the desk.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'When "pair of" is used, the verb agrees with "pair" (singular), not with the plural noun following it. Use singular "is". However, "scissors" alone would take a plural verb.'
  },
  {
    id: 103,
    category: 'Concord',
    question: 'The jury _____ reached a unanimous decision.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'are',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'When a collective noun acts as a single unit, use a singular verb. "The jury has reached" treats the jury as one body making a single decision.'
  },
  {
    id: 104,
    category: 'Concord',
    question: 'Neither of the solutions _____ acceptable to the committee.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Neither" is singular and always takes a singular verb, even when followed by "of" + plural noun. Use "was" to match the singular subject "neither".'
  },
  {
    id: 105,
    category: 'Concord',
    question: 'The phenomena observed in the experiment _____ unprecedented.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Phenomena" is the plural form of "phenomenon" (Greek origin). It always requires a plural verb: "were". This is similar to "criteria" (plural of criterion) and "analyses" (plural of analysis).'
  },
  {
    id: 106,
    category: 'Concord',
    question: 'Five years _____ a long time to wait for results.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When a period of time is considered as a single unit, use a singular verb. "Five years" represents one duration, not individual years, so "is" is correct.'
  },
  {
    id: 107,
    category: 'Concord',
    question: 'The media _____ covering the story extensively.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Media" is the plural form of "medium" (Latin origin). In formal writing, it takes a plural verb: "are". However, in informal usage, singular treatment is becoming more common.'
  },
  {
    id: 108,
    category: 'Concord',
    question: 'Every student and teacher _____ expected to attend the assembly.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When subjects joined by "and" are preceded by "every", the verb is singular because "every" emphasizes each item individually. Use "is".'
  },
  {
    id: 109,
    category: 'Concord',
    question: 'The majority of the evidence _____ in favor of the hypothesis.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When "majority of" is followed by an uncountable noun (evidence), use a singular verb: "is". If followed by a plural countable noun (e.g., "students"), use a plural verb.'
  },
  {
    id: 110,
    category: 'Concord',
    question: 'Measles _____ a highly contagious disease.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'Despite ending in "s", "measles" (like other disease names such as mumps, diabetes) is singular and takes a singular verb: "is".'
  },

  // COHESION & COHERENCE - Additional Questions (111-130)
  {
    id: 111,
    category: 'Cohesion & Coherence',
    question: 'The experiment yielded surprising results. _____, the researchers decided to repeat the procedure.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'However',
      'Moreover',
      'Consequently'
    ],
    correctAnswer: 3,
    explanation: '"Consequently" (meaning "as a result") correctly shows the cause-effect relationship: surprising results led to repeating the experiment. "Therefore" is similar but less formal here. "However" shows contrast, and "Moreover" adds information.'
  },
  {
    id: 112,
    category: 'Cohesion & Coherence',
    question: 'Students should study regularly. _____, cramming before exams is ineffective.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'In addition',
      'In contrast',
      'Likewise'
    ],
    correctAnswer: 2,
    explanation: '"In contrast" correctly signals the opposing relationship between regular study (recommended) and cramming (ineffective). "Similarly" and "Likewise" show similarity, while "In addition" adds supporting information.'
  },
  {
    id: 113,
    category: 'Cohesion & Coherence',
    question: 'The policy has several advantages. _____, it reduces costs and improves efficiency.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nevertheless',
      'For instance',
      'On the contrary',
      'Conversely'
    ],
    correctAnswer: 1,
    explanation: '"For instance" correctly introduces specific examples of the advantages mentioned. "Nevertheless" shows contrast despite, "On the contrary" negates, and "Conversely" shows opposite.'
  },
  {
    id: 114,
    category: 'Cohesion & Coherence',
    question: 'The project was completed on time. _____, the quality exceeded expectations.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Consequently',
      'Nevertheless',
      'Furthermore',
      'Otherwise'
    ],
    correctAnswer: 2,
    explanation: '"Furthermore" (meaning "in addition" or "moreover") adds another positive point to the first statement. Both sentences present positive outcomes without contrast or cause-effect relationships.'
  },
  {
    id: 115,
    category: 'Cohesion & Coherence',
    question: 'Regular exercise improves physical health. _____, it enhances mental wellbeing.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Conversely',
      'Nevertheless',
      'Additionally',
      'Otherwise'
    ],
    correctAnswer: 2,
    explanation: '"Additionally" (or "Moreover", "Furthermore") correctly adds a second benefit to support the topic of exercise benefits. "Conversely" shows opposition, "Nevertheless" shows contrast despite something, and "Otherwise" presents alternatives.'
  },
  {
    id: 116,
    category: 'Cohesion & Coherence',
    question: 'The library provides access to thousands of journals. _____, students can access databases remotely.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'However',
      'In fact',
      'Instead',
      'On the contrary'
    ],
    correctAnswer: 1,
    explanation: '"In fact" or "Moreover" would work here to emphasize or add to the library\'s resources. "However" shows contrast, "Instead" shows replacement, and "On the contrary" negates the previous statement.'
  },
  {
    id: 117,
    category: 'Cohesion & Coherence',
    question: 'The company invested heavily in research. _____, innovation remained stagnant.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'Thus',
      'Nevertheless',
      'Consequently'
    ],
    correctAnswer: 2,
    explanation: '"Nevertheless" (meaning "despite this" or "however") shows contrast between the investment and the lack of innovation. "Therefore", "Thus", and "Consequently" all show cause-effect, which contradicts the meaning here.'
  },
  {
    id: 118,
    category: 'Cohesion & Coherence',
    question: 'First, gather all necessary materials. _____, review the instructions carefully.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Finally',
      'Next',
      'Meanwhile',
      'Previously'
    ],
    correctAnswer: 1,
    explanation: '"Next" correctly indicates the second step in a sequence after "First". "Finally" indicates the last step, "Meanwhile" shows simultaneous action, and "Previously" refers to past time.'
  },
  {
    id: 119,
    category: 'Cohesion & Coherence',
    question: 'The theory seems plausible. _____, empirical evidence is lacking.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Moreover',
      'Furthermore',
      'However',
      'Additionally'
    ],
    correctAnswer: 2,
    explanation: '"However" correctly signals contrast between the theory seeming plausible and the lack of evidence. "Moreover", "Furthermore", and "Additionally" all add supporting information rather than contrasting.'
  },
  {
    id: 120,
    category: 'Cohesion & Coherence',
    question: 'The deadline is approaching. _____, we must accelerate our progress.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'In other words',
      'For example',
      'Therefore',
      'On the other hand'
    ],
    correctAnswer: 2,
    explanation: '"Therefore" correctly shows the logical consequence: approaching deadline leads to needing to accelerate. "In other words" restates, "For example" gives instances, and "On the other hand" contrasts.'
  },
  {
    id: 121,
    category: 'Cohesion & Coherence',
    question: 'Technology offers many benefits. _____, it raises privacy concerns.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'Likewise',
      'On the other hand',
      'In addition'
    ],
    correctAnswer: 2,
    explanation: '"On the other hand" correctly introduces a contrasting viewpoint, balancing benefits with concerns. "Similarly" and "Likewise" show agreement, while "In addition" adds more benefits.'
  },
  {
    id: 122,
    category: 'Cohesion & Coherence',
    question: 'The research methodology was flawed. _____, the conclusions are questionable.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nevertheless',
      'As a result',
      'In addition',
      'Similarly'
    ],
    correctAnswer: 1,
    explanation: '"As a result" correctly shows cause-effect: flawed methodology leads to questionable conclusions. "Nevertheless" would show contrast (conclusions valid despite flaws), which is illogical here.'
  },
  {
    id: 123,
    category: 'Cohesion & Coherence',
    question: 'The proposal requires significant funding. _____, it demands substantial time commitment.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'In contrast',
      'Otherwise',
      'Moreover',
      'Instead'
    ],
    correctAnswer: 2,
    explanation: '"Moreover" (or "Additionally", "Furthermore") adds another requirement to the first. Both sentences list demands without contrast or alternatives.'
  },
  {
    id: 124,
    category: 'Cohesion & Coherence',
    question: 'Some researchers support the hypothesis. _____, others remain skeptical.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Likewise',
      'Similarly',
      'However',
      'Furthermore'
    ],
    correctAnswer: 2,
    explanation: '"However" correctly introduces contrasting views between supporters and skeptics. "Likewise" and "Similarly" show agreement, while "Furthermore" adds supporting information.'
  },
  {
    id: 125,
    category: 'Cohesion & Coherence',
    question: 'The university expanded its facilities. _____, enrollment increased significantly.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Subsequently',
      'Nevertheless',
      'Otherwise',
      'Conversely'
    ],
    correctAnswer: 0,
    explanation: '"Subsequently" (meaning "afterward" or "later") correctly indicates that enrollment increase followed the expansion in time. It shows chronological sequence and possible causation.'
  },
  {
    id: 126,
    category: 'Cohesion & Coherence',
    question: 'The experiment failed to produce expected results. _____, it provided valuable insights.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'Thus',
      'Nonetheless',
      'Consequently'
    ],
    correctAnswer: 2,
    explanation: '"Nonetheless" (meaning "despite this" or "even so") shows that despite failure, something positive resulted. "Therefore", "Thus", and "Consequently" show cause-effect, which doesn\'t fit the contrasting relationship.'
  },
  {
    id: 127,
    category: 'Cohesion & Coherence',
    question: 'Effective communication requires clarity. _____, it demands active listening.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Conversely',
      'Instead',
      'Equally important',
      'On the contrary'
    ],
    correctAnswer: 2,
    explanation: '"Equally important" correctly adds another essential requirement while emphasizing its importance. "Conversely" and "On the contrary" show opposition, while "Instead" shows replacement.'
  },
  {
    id: 128,
    category: 'Cohesion & Coherence',
    question: 'The data supports the initial hypothesis. _____, further research is recommended.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nevertheless',
      'Therefore',
      'In contrast',
      'Otherwise'
    ],
    correctAnswer: 0,
    explanation: '"Nevertheless" shows that despite supporting the hypothesis, more research is still needed. This indicates that support alone isn\'t sufficient for complete validation.'
  },
  {
    id: 129,
    category: 'Cohesion & Coherence',
    question: 'Attending lectures is important. _____, independent study is essential for mastery.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Likewise',
      'Similarly',
      'However',
      'Therefore'
    ],
    correctAnswer: 2,
    explanation: '"However" correctly introduces a contrasting but complementary point: lectures alone aren\'t enough. "Likewise" and "Similarly" would incorrectly suggest lectures and independent study are the same.'
  },
  {
    id: 130,
    category: 'Cohesion & Coherence',
    question: 'The software has advanced features. _____, the interface is user-friendly.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'In spite of this',
      'Despite this',
      'At the same time',
      'Conversely'
    ],
    correctAnswer: 2,
    explanation: '"At the same time" correctly indicates that both qualities exist simultaneously. "In spite of this" and "Despite this" suggest contradiction, while "Conversely" suggests opposition between the features.'
  },

  // STYLISTIC VARIATION - Additional Questions (131-145)
  {
    id: 131,
    category: 'Stylistic Variation',
    question: 'Replace with standard English: "The result is not too good."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The result is not very good.',
      'The result is poor.',
      'The result is unsatisfactory.',
      'The result is inadequate.'
    ],
    correctAnswer: 2,
    explanation: 'In formal academic writing, "unsatisfactory" is more precise and professional than "not too good". It clearly conveys that the result fails to meet standards.'
  },
  {
    id: 132,
    category: 'Stylistic Variation',
    question: 'Choose the most formal alternative to: "The professor is very smart."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The professor is quite intelligent.',
      'The professor is really clever.',
      'The professor possesses considerable expertise.',
      'The professor is pretty knowledgeable.'
    ],
    correctAnswer: 2,
    explanation: '"Possesses considerable expertise" is the most formal and specific, using sophisticated vocabulary appropriate for academic writing. "Very smart", "really clever", and "pretty knowledgeable" are too informal.'
  },
  {
    id: 133,
    category: 'Stylistic Variation',
    question: 'Replace with standard formal English: "The findings are kind of interesting."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The findings are somewhat interesting.',
      'The findings are rather interesting.',
      'The findings are noteworthy.',
      'The findings are sort of interesting.'
    ],
    correctAnswer: 2,
    explanation: '"Noteworthy" is formal and precise, meaning "worthy of attention or notice". Avoid vague intensifiers like "kind of", "sort of", "somewhat", or "rather" in formal academic writing.'
  },
  {
    id: 134,
    category: 'Stylistic Variation',
    question: 'Identify the most appropriate formal expression for: "The deadline is very close."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The deadline is really near.',
      'The deadline is approaching rapidly.',
      'The deadline is imminent.',
      'The deadline is coming soon.'
    ],
    correctAnswer: 2,
    explanation: '"Imminent" is formal and precise, meaning "about to happen" or "impending". It\'s more academic than "very close", "really near", or "coming soon".'
  },
  {
    id: 135,
    category: 'Stylistic Variation',
    question: 'Choose the formal equivalent of: "The student got good grades."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The student achieved excellent results.',
      'The student obtained satisfactory grades.',
      'The student attained commendable academic performance.',
      'The student received good marks.'
    ],
    correctAnswer: 2,
    explanation: '"Attained commendable academic performance" uses sophisticated formal vocabulary. "Got" is too informal for academic writing; use "achieved", "attained", or "obtained".'
  },
  {
    id: 136,
    category: 'Stylistic Variation',
    question: 'Replace with standard English: "The research is ongoing."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The research is still going on.',
      'The research is continuing.',
      'The research is in progress.',
      'The research is not yet finished.'
    ],
    correctAnswer: 2,
    explanation: '"In progress" or "continuing" are both acceptable formal alternatives. "Ongoing" is actually standard and acceptable in formal English, but "in progress" is more traditional formal style.'
  },
  {
    id: 137,
    category: 'Stylistic Variation',
    question: 'Identify the formal replacement for: "The idea is pretty good."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The idea is quite good.',
      'The idea is rather good.',
      'The idea has considerable merit.',
      'The idea is fairly good.'
    ],
    correctAnswer: 2,
    explanation: '"Has considerable merit" is formal and precise, indicating the idea has significant value. Avoid informal intensifiers like "pretty", "quite", "rather", or "fairly" in academic writing.'
  },
  {
    id: 138,
    category: 'Stylistic Variation',
    question: 'Choose the most formal expression: "The author talks about climate change."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The author discusses climate change.',
      'The author examines climate change.',
      'The author addresses climate change.',
      'The author explores the phenomenon of climate change.'
    ],
    correctAnswer: 3,
    explanation: '"Explores the phenomenon of climate change" is the most formal and sophisticated, using precise academic vocabulary. "Talks about" is too informal; use "discusses", "examines", "addresses", or "explores".'
  },
  {
    id: 139,
    category: 'Stylistic Variation',
    question: 'Replace with formal academic English: "A lot of people think this way."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'Many people think this way.',
      'Numerous individuals hold this perspective.',
      'Lots of people believe this.',
      'Many persons think like this.'
    ],
    correctAnswer: 1,
    explanation: '"Numerous individuals hold this perspective" uses formal vocabulary. "A lot of" and "lots of" are too informal; use "many", "numerous", or "considerable numbers of" in academic writing.'
  },
  {
    id: 140,
    category: 'Stylistic Variation',
    question: 'Identify the formal equivalent: "The test was really hard."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The test was very difficult.',
      'The test was quite challenging.',
      'The test was extremely demanding.',
      'The test presented considerable challenges.'
    ],
    correctAnswer: 3,
    explanation: '"Presented considerable challenges" is the most formal and sophisticated expression. Avoid informal words like "really" and "hard" in academic writing; use "challenging", "demanding", or "rigorous".'
  },
  {
    id: 141,
    category: 'Stylistic Variation',
    question: 'Choose the formal replacement: "The report shows clearly that..."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The report demonstrates clearly that...',
      'The report demonstrates conclusively that...',
      'The report clearly shows that...',
      'The report indicates clearly that...'
    ],
    correctAnswer: 1,
    explanation: '"Demonstrates conclusively" is more formal and precise than "shows clearly". "Demonstrates" is more academic than "shows", and "conclusively" is stronger and more formal than "clearly".'
  },
  {
    id: 142,
    category: 'Stylistic Variation',
    question: 'Replace with standard formal English: "The study looks at various factors."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The study examines various factors.',
      'The study investigates multiple factors.',
      'The study analyzes diverse factors.',
      'The study explores numerous factors.'
    ],
    correctAnswer: 1,
    explanation: '"Investigates multiple factors" is formal and precise. "Looks at" is too informal; use "examines", "investigates", "analyzes", or "explores" in academic writing.'
  },
  {
    id: 143,
    category: 'Stylistic Variation',
    question: 'Identify the most formal expression: "The theory is based on facts."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The theory is founded on empirical evidence.',
      'The theory is grounded in factual data.',
      'The theory rests on solid facts.',
      'The theory is supported by facts.'
    ],
    correctAnswer: 0,
    explanation: '"Founded on empirical evidence" uses the most sophisticated academic vocabulary. "Empirical evidence" is more precise and formal than "facts".'
  },
  {
    id: 144,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The problem is getting worse."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The problem is becoming worse.',
      'The problem is worsening.',
      'The problem is deteriorating.',
      'The problem is increasingly severe.'
    ],
    correctAnswer: 3,
    explanation: '"Increasingly severe" is the most formal and precise. While "deteriorating" and "worsening" are good, "increasingly severe" better emphasizes progressive intensification in formal academic style.'
  },
  {
    id: 145,
    category: 'Stylistic Variation',
    question: 'Replace with formal academic English: "We need to find out why this happens."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'We need to discover why this occurs.',
      'It is necessary to ascertain the cause of this phenomenon.',
      'We must determine why this takes place.',
      'We should investigate why this happens.'
    ],
    correctAnswer: 1,
    explanation: '"It is necessary to ascertain the cause of this phenomenon" is the most formal construction. It uses sophisticated vocabulary ("ascertain", "phenomenon") and impersonal academic style ("It is necessary").'
  },

  // MECHANICS - Additional Questions (146-160)
  {
    id: 146,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Concensus',
      'Consensus',
      'Concencus',
      'Consencus'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "consensus" with "s" in both middle positions. This comes from Latin "consensus" meaning "agreement".'
  },
  {
    id: 147,
    category: 'Mechanics',
    question: 'Identify the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Seperate',
      'Separate',
      'Seperate',
      'Separete'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "separate" with "a" in the middle. A memory aid: there\'s "a rat" in "separate".'
  },
  {
    id: 148,
    category: 'Mechanics',
    question: 'Select the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Definately',
      'Definitly',
      'Definitely',
      'Definatley'
    ],
    correctAnswer: 2,
    explanation: 'The correct spelling is "definitely" with "i" throughout. It comes from "definite" + "-ly".'
  },
  {
    id: 149,
    category: 'Mechanics',
    question: 'Which spelling is correct?',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Embarass',
      'Embarrass',
      'Embaras',
      'Embarras'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "embarrass" with double "r" and double "s". Remember: Really Red And So Silly = double r, double s.'
  },
  {
    id: 150,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Liason',
      'Liaison',
      'Liaision',
      'Liasion'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "liaison" with "i" before "a". This French loanword means a connection or intermediary.'
  },
  {
    id: 151,
    category: 'Mechanics',
    question: 'Identify the correct punctuation: The committee members _____ were experienced professionals.',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'all of whom',
      'all of whom,',
      ', all of whom,',
      ', all of whom'
    ],
    correctAnswer: 2,
    explanation: 'The non-restrictive clause "all of whom" provides additional non-essential information and should be enclosed in commas on both sides.'
  },
  {
    id: 152,
    category: 'Mechanics',
    question: 'Choose the correctly punctuated sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The results were surprising; however we continued the study.',
      'The results were surprising; however, we continued the study.',
      'The results were surprising, however we continued the study.',
      'The results were surprising however, we continued the study.'
    ],
    correctAnswer: 1,
    explanation: 'When using a semicolon with transitional expressions like "however", place a comma after the transitional word: semicolon + however + comma.'
  },
  {
    id: 153,
    category: 'Mechanics',
    question: 'Select the correct capitalization:',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She earned a Bachelor\'s Degree in biology.',
      'She earned a bachelor\'s degree in Biology.',
      'She earned a Bachelor\'s degree in biology.',
      'She earned a bachelor\'s degree in biology.'
    ],
    correctAnswer: 3,
    explanation: 'Generic degree names and fields of study are lowercase unless they are proper nouns (e.g., "English") or part of an official title.'
  },
  {
    id: 154,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Perseverence',
      'Perseverance',
      'Perserverance',
      'Perserverence'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "perseverance" with "e" after "v". It comes from "persevere" + "-ance".'
  },
  {
    id: 155,
    category: 'Mechanics',
    question: 'Identify the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Neccessary',
      'Necesary',
      'Necessary',
      'Neccesary'
    ],
    correctAnswer: 2,
    explanation: 'The correct spelling is "necessary" with one "c" and double "s". Remember: one Collar, two Sleeves = 1 c, 2 s\'s.'
  },
  {
    id: 156,
    category: 'Mechanics',
    question: 'Choose the correct punctuation: After reviewing the data _____ the team reached a conclusion.',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      ', carefully',
      'carefully',
      'carefully,',
      ', carefully,'
    ],
    correctAnswer: 3,
    explanation: 'The adverb "carefully" is inserted within the sentence and should be set off by commas: comma before and after.'
  },
  {
    id: 157,
    category: 'Mechanics',
    question: 'Select the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Exhileration',
      'Exhilaration',
      'Exhiliration',
      'Exhilaration'
    ],
    correctAnswer: 3,
    explanation: 'The correct spelling is "exhilaration" with "a" after "l". It means a feeling of great happiness and excitement.'
  },
  {
    id: 158,
    category: 'Mechanics',
    question: 'Identify the correct capitalization:',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She traveled to the middle east.',
      'She traveled to the Middle east.',
      'She traveled to the Middle East.',
      'She traveled to the middle East.'
    ],
    correctAnswer: 2,
    explanation: 'Region names are capitalized as proper nouns. Both words in "Middle East" should be capitalized.'
  },
  {
    id: 159,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Occurence',
      'Occurance',
      'Occurrence',
      'Occurrance'
    ],
    correctAnswer: 2,
    explanation: 'The correct spelling is "occurrence" with double "c", double "r", and "-ence" ending. From "occur" (doubling the final "r") + "-ence".'
  },
  {
    id: 160,
    category: 'Mechanics',
    question: 'Select the correctly punctuated sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The research focused on three areas: physics, chemistry and biology.',
      'The research focused on three areas: physics chemistry and biology.',
      'The research focused on three areas: physics, chemistry, and biology.',
      'The research focused on three areas, physics, chemistry, and biology.'
    ],
    correctAnswer: 2,
    explanation: 'Use a colon to introduce a list after a complete independent clause. Items in the list should be separated by commas, including the Oxford comma before "and".'
  },

  // VOCABULARY - Additional Questions (161-210)
  {
    id: 161,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ remarks offended many in the audience.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'perspicacious',
      'innocuous',
      'pejorative',
      'laudatory'
    ],
    correctAnswer: 2,
    explanation: '"Pejorative" means expressing disapproval or criticism, often insulting. "Perspicacious" means perceptive, "innocuous" means harmless, and "laudatory" means expressing praise.'
  },
  {
    id: 162,
    category: 'Vocabulary',
    question: 'The professor\'s explanation was so _____ that even beginners understood.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'obscure',
      'lucid',
      'ambiguous',
      'cryptic'
    ],
    correctAnswer: 1,
    explanation: '"Lucid" means clear and easy to understand. "Obscure", "ambiguous", and "cryptic" all suggest lack of clarity.'
  },
  {
    id: 163,
    category: 'Vocabulary',
    question: 'The politician\'s _____ response avoided directly answering the question.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'candid',
      'forthright',
      'evasive',
      'frank'
    ],
    correctAnswer: 2,
    explanation: '"Evasive" means avoiding commitment or directness. "Candid", "forthright", and "frank" all mean honest and direct.'
  },
  {
    id: 164,
    category: 'Vocabulary',
    question: 'Despite the setback, she remained _____ about her chances of success.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'pessimistic',
      'sanguine',
      'morose',
      'despondent'
    ],
    correctAnswer: 1,
    explanation: '"Sanguine" means optimistic or positive, especially in difficult situations. "Pessimistic", "morose", and "despondent" all indicate negativity or hopelessness.'
  },
  {
    id: 165,
    category: 'Vocabulary',
    question: 'The evidence _____ the defendant\'s claim of innocence.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'corroborated',
      'refuted',
      'substantiated',
      'vindicated'
    ],
    correctAnswer: 1,
    explanation: '"Refuted" means proved wrong or disproved. "Corroborated", "substantiated", and "vindicated" all mean supported or proved correct.'
  },
  {
    id: 166,
    category: 'Vocabulary',
    question: 'The company\'s _____ approach to innovation led to its decline.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'progressive',
      'innovative',
      'stagnant',
      'dynamic'
    ],
    correctAnswer: 2,
    explanation: '"Stagnant" means showing no activity or development, static. "Progressive", "innovative", and "dynamic" all suggest active development and change.'
  },
  {
    id: 167,
    category: 'Vocabulary',
    question: 'His _____ behavior at the formal event embarrassed his colleagues.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'decorous',
      'uncouth',
      'refined',
      'dignified'
    ],
    correctAnswer: 1,
    explanation: '"Uncouth" means lacking good manners, refinement, or grace. "Decorous", "refined", and "dignified" all describe proper, polished behavior.'
  },
  {
    id: 168,
    category: 'Vocabulary',
    question: 'The review praised the author\'s _____ writing style.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'verbose',
      'prolix',
      'succinct',
      'rambling'
    ],
    correctAnswer: 2,
    explanation: '"Succinct" means concise and clearly expressed, a positive quality. "Verbose", "prolix", and "rambling" all mean excessively wordy.'
  },
  {
    id: 169,
    category: 'Vocabulary',
    question: 'The diplomat\'s _____ handling of the crisis prevented escalation.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'tactless',
      'inept',
      'judicious',
      'reckless'
    ],
    correctAnswer: 2,
    explanation: '"Judicious" means having or showing good judgment, wise and sensible. "Tactless", "inept", and "reckless" all suggest poor judgment.'
  },
  {
    id: 170,
    category: 'Vocabulary',
    question: 'The student\'s _____ work ethic earned respect from professors.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'lackadaisical',
      'assiduous',
      'negligent',
      'indolent'
    ],
    correctAnswer: 1,
    explanation: '"Assiduous" means showing great care and perseverance, diligent. "Lackadaisical", "negligent", and "indolent" all describe laziness or carelessness.'
  },
  {
    id: 171,
    category: 'Vocabulary',
    question: 'The _____ nature of the regulations made compliance difficult.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'straightforward',
      'pellucid',
      'byzantine',
      'transparent'
    ],
    correctAnswer: 2,
    explanation: '"Byzantine" means excessively complicated, intricate, or devious. "Straightforward", "pellucid", and "transparent" all suggest clarity and simplicity.'
  },
  {
    id: 172,
    category: 'Vocabulary',
    question: 'Her _____ for languages allowed her to learn five fluently.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'ineptitude',
      'aptitude',
      'deficiency',
      'inadequacy'
    ],
    correctAnswer: 1,
    explanation: '"Aptitude" means natural ability or talent. "Ineptitude", "deficiency", and "inadequacy" all suggest lack of ability.'
  },
  {
    id: 173,
    category: 'Vocabulary',
    question: 'The witness gave a _____ account that contradicted earlier testimony.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'consistent',
      'concordant',
      'discrepant',
      'harmonious'
    ],
    correctAnswer: 2,
    explanation: '"Discrepant" means differing or inconsistent with. "Consistent", "concordant", and "harmonious" all suggest agreement or harmony.'
  },
  {
    id: 174,
    category: 'Vocabulary',
    question: 'The manager\'s _____ leadership style stifled creativity.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'democratic',
      'collaborative',
      'autocratic',
      'participative'
    ],
    correctAnswer: 2,
    explanation: '"Autocratic" means exercising complete control without input from others. "Democratic", "collaborative", and "participative" all involve shared decision-making.'
  },
  {
    id: 175,
    category: 'Vocabulary',
    question: 'The _____ of evidence made the case difficult to prosecute.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'abundance',
      'profusion',
      'paucity',
      'plethora'
    ],
    correctAnswer: 2,
    explanation: '"Paucity" means scarcity or lack of something. "Abundance", "profusion", and "plethora" all mean large quantities.'
  },
  {
    id: 176,
    category: 'Vocabulary',
    question: 'His _____ comments revealed his deep knowledge of the subject.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'superficial',
      'cursory',
      'insightful',
      'shallow'
    ],
    correctAnswer: 2,
    explanation: '"Insightful" means having or showing deep understanding. "Superficial", "cursory", and "shallow" all suggest lack of depth.'
  },
  {
    id: 177,
    category: 'Vocabulary',
    question: 'The committee\'s decision to _____ the outdated policy was well-received.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'perpetuate',
      'maintain',
      'abrogate',
      'sustain'
    ],
    correctAnswer: 2,
    explanation: '"Abrogate" means to repeal or abolish formally. "Perpetuate", "maintain", and "sustain" all mean to continue or keep in existence.'
  },
  {
    id: 178,
    category: 'Vocabulary',
    question: 'The _____ nature of the problem required immediate attention.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'trivial',
      'negligible',
      'exigent',
      'inconsequential'
    ],
    correctAnswer: 2,
    explanation: '"Exigent" means pressing, urgent, or demanding immediate action. "Trivial", "negligible", and "inconsequential" all mean unimportant.'
  },
  {
    id: 179,
    category: 'Vocabulary',
    question: 'Her _____ attitude toward work frustrated her supervisors.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'zealous',
      'perfunctory',
      'enthusiastic',
      'ardent'
    ],
    correctAnswer: 1,
    explanation: '"Perfunctory" means carried out with minimal effort or interest, routine. "Zealous", "enthusiastic", and "ardent" all indicate strong enthusiasm.'
  },
  {
    id: 180,
    category: 'Vocabulary',
    question: 'The researcher\'s _____ analysis revealed hidden patterns in the data.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'cursory',
      'meticulous',
      'careless',
      'hasty'
    ],
    correctAnswer: 1,
    explanation: '"Meticulous" means showing great attention to detail, very careful and precise. "Cursory", "careless", and "hasty" all suggest lack of thoroughness.'
  },
  {
    id: 181,
    category: 'Vocabulary',
    question: 'The _____ between theory and practice became evident during implementation.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'congruence',
      'harmony',
      'dichotomy',
      'concordance'
    ],
    correctAnswer: 2,
    explanation: '"Dichotomy" means a division or contrast between two things. "Congruence", "harmony", and "concordance" all suggest agreement or compatibility.'
  },
  {
    id: 182,
    category: 'Vocabulary',
    question: 'The _____ of the ancient manuscript made translation challenging.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'clarity',
      'legibility',
      'opacity',
      'transparency'
    ],
    correctAnswer: 2,
    explanation: '"Opacity" means the quality of being difficult to understand, obscure. "Clarity", "legibility", and "transparency" all suggest ease of understanding.'
  },
  {
    id: 183,
    category: 'Vocabulary',
    question: 'His _____ spending habits led to financial difficulties.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'frugal',
      'prudent',
      'profligate',
      'thrifty'
    ],
    correctAnswer: 2,
    explanation: '"Profligate" means recklessly extravagant or wasteful. "Frugal", "prudent", and "thrifty" all describe careful spending.'
  },
  {
    id: 184,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ delivery captivated the audience.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'monotonous',
      'compelling',
      'tedious',
      'dull'
    ],
    correctAnswer: 1,
    explanation: '"Compelling" means evoking interest or attention, powerfully persuasive. "Monotonous", "tedious", and "dull" all suggest boring presentation.'
  },
  {
    id: 185,
    category: 'Vocabulary',
    question: 'The _____ requirements of the position deterred many applicants.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'lenient',
      'lax',
      'stringent',
      'permissive'
    ],
    correctAnswer: 2,
    explanation: '"Stringent" means strict, precise, and exacting. "Lenient", "lax", and "permissive" all suggest being not strict or demanding.'
  },
  {
    id: 186,
    category: 'Vocabulary',
    question: 'The author\'s _____ use of metaphors enhanced the narrative.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'sparse',
      'meager',
      'copious',
      'scant'
    ],
    correctAnswer: 2,
    explanation: '"Copious" means abundant in supply or quantity, plentiful. "Sparse", "meager", and "scant" all suggest small amounts or scarcity.'
  },
  {
    id: 187,
    category: 'Vocabulary',
    question: 'The _____ witness refused to testify despite pressure.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'compliant',
      'obdurate',
      'yielding',
      'amenable'
    ],
    correctAnswer: 1,
    explanation: '"Obdurate" means stubbornly refusing to change one\'s opinion. "Compliant", "yielding", and "amenable" all suggest willingness to cooperate.'
  },
  {
    id: 188,
    category: 'Vocabulary',
    question: 'The committee decided to _____ the controversial clause from the document.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'insert',
      'append',
      'expunge',
      'include'
    ],
    correctAnswer: 2,
    explanation: '"Expunge" means to erase or remove completely. "Insert", "append", and "include" all mean to add something.'
  },
  {
    id: 189,
    category: 'Vocabulary',
    question: 'Her _____ grasp of the subject impressed the examiners.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'tenuous',
      'comprehensive',
      'superficial',
      'cursory'
    ],
    correctAnswer: 1,
    explanation: '"Comprehensive" means complete and including all aspects. "Tenuous", "superficial", and "cursory" all suggest weak or incomplete understanding.'
  },
  {
    id: 190,
    category: 'Vocabulary',
    question: 'The _____ of the situation required diplomatic intervention.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'triviality',
      'insignificance',
      'gravity',
      'levity'
    ],
    correctAnswer: 2,
    explanation: '"Gravity" means seriousness or importance, especially of situation or matter. "Triviality", "insignificance", and "levity" all suggest lack of seriousness.'
  },
  {
    id: 191,
    category: 'Vocabulary',
    question: 'The _____ student always sought to learn more than required.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'apathetic',
      'inquisitive',
      'indifferent',
      'lethargic'
    ],
    correctAnswer: 1,
    explanation: '"Inquisitive" means curious, eager to learn or know things. "Apathetic", "indifferent", and "lethargic" all suggest lack of interest or energy.'
  },
  {
    id: 192,
    category: 'Vocabulary',
    question: 'The policy aimed to _____ discrimination in the workplace.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'perpetuate',
      'foster',
      'eradicate',
      'promote'
    ],
    correctAnswer: 2,
    explanation: '"Eradicate" means to eliminate or destroy completely. "Perpetuate", "foster", and "promote" all mean to continue or encourage.'
  },
  {
    id: 193,
    category: 'Vocabulary',
    question: 'The _____ of opinions enriched the discussion.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'uniformity',
      'homogeneity',
      'diversity',
      'monotony'
    ],
    correctAnswer: 2,
    explanation: '"Diversity" means variety or range of different things. "Uniformity", "homogeneity", and "monotony" all suggest sameness or lack of variety.'
  },
  {
    id: 194,
    category: 'Vocabulary',
    question: 'His _____ achievements in science earned him international recognition.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'mediocre',
      'mundane',
      'prodigious',
      'ordinary'
    ],
    correctAnswer: 2,
    explanation: '"Prodigious" means remarkably or impressively great in extent or degree. "Mediocre", "mundane", and "ordinary" all suggest average or unremarkable quality.'
  },
  {
    id: 195,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ argument failed to convince the audience.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'cogent',
      'compelling',
      'specious',
      'persuasive'
    ],
    correctAnswer: 2,
    explanation: '"Specious" means superficially plausible but actually wrong, misleading. "Cogent", "compelling", and "persuasive" all mean convincing or well-reasoned.'
  },
  {
    id: 196,
    category: 'Vocabulary',
    question: 'The _____ effects of the policy were unexpected.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'intended',
      'anticipated',
      'inadvertent',
      'planned'
    ],
    correctAnswer: 2,
    explanation: '"Inadvertent" means unintentional, not resulting from deliberate planning. "Intended", "anticipated", and "planned" all suggest purposeful action.'
  },
  {
    id: 197,
    category: 'Vocabulary',
    question: 'The professor\'s _____ criticism demoralized the student.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'constructive',
      'trenchant',
      'supportive',
      'encouraging'
    ],
    correctAnswer: 1,
    explanation: '"Trenchant" means vigorous or incisive in expression, often sharply critical. "Constructive", "supportive", and "encouraging" all suggest helpful feedback.'
  },
  {
    id: 198,
    category: 'Vocabulary',
    question: 'The _____ of resources hampered the project\'s progress.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'abundance',
      'sufficiency',
      'dearth',
      'adequacy'
    ],
    correctAnswer: 2,
    explanation: '"Dearth" means scarcity or lack of something. "Abundance", "sufficiency", and "adequacy" all suggest enough or plenty.'
  },
  {
    id: 199,
    category: 'Vocabulary',
    question: 'His _____ remarks during the meeting were inappropriate.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'pertinent',
      'relevant',
      'flippant',
      'apropos'
    ],
    correctAnswer: 2,
    explanation: '"Flippant" means not showing proper seriousness or respect. "Pertinent", "relevant", and "apropos" all mean appropriate or to the point.'
  },
  {
    id: 200,
    category: 'Vocabulary',
    question: 'The _____ document outlined all procedures clearly.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'ambiguous',
      'vague',
      'explicit',
      'nebulous'
    ],
    correctAnswer: 2,
    explanation: '"Explicit" means stated clearly and in detail, leaving no room for confusion. "Ambiguous", "vague", and "nebulous" all suggest lack of clarity.'
  },
  {
    id: 201,
    category: 'Vocabulary',
    question: 'The company\'s _____ growth impressed investors.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'stagnant',
      'static',
      'exponential',
      'dormant'
    ],
    correctAnswer: 2,
    explanation: '"Exponential" means increasing rapidly, accelerating growth. "Stagnant", "static", and "dormant" all suggest lack of growth or activity.'
  },
  {
    id: 202,
    category: 'Vocabulary',
    question: 'The _____ leader inspired loyalty among followers.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'despotic',
      'tyrannical',
      'charismatic',
      'oppressive'
    ],
    correctAnswer: 2,
    explanation: '"Charismatic" means exercising compelling charm that inspires devotion. "Despotic", "tyrannical", and "oppressive" all describe harsh, authoritarian leadership.'
  },
  {
    id: 203,
    category: 'Vocabulary',
    question: 'The researcher\'s _____ approach yielded reliable results.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'haphazard',
      'systematic',
      'random',
      'arbitrary'
    ],
    correctAnswer: 1,
    explanation: '"Systematic" means done according to a fixed plan or system, methodical. "Haphazard", "random", and "arbitrary" all suggest lack of system or planning.'
  },
  {
    id: 204,
    category: 'Vocabulary',
    question: 'The _____ tone of the letter offended the recipient.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'respectful',
      'deferential',
      'patronizing',
      'courteous'
    ],
    correctAnswer: 2,
    explanation: '"Patronizing" means treating with apparent kindness that betrays superiority. "Respectful", "deferential", and "courteous" all show genuine respect.'
  },
  {
    id: 205,
    category: 'Vocabulary',
    question: 'The _____ scholar published prolifically throughout her career.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'dilettante',
      'amateur',
      'erudite',
      'novice'
    ],
    correctAnswer: 2,
    explanation: '"Erudite" means having or showing great knowledge or learning. "Dilettante", "amateur", and "novice" all suggest lack of expertise or serious commitment.'
  },
  {
    id: 206,
    category: 'Vocabulary',
    question: 'The _____ nature of the agreement allowed for flexibility.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'rigid',
      'inflexible',
      'provisional',
      'immutable'
    ],
    correctAnswer: 2,
    explanation: '"Provisional" means arranged or existing for the present, temporary and conditional. "Rigid", "inflexible", and "immutable" all suggest inability to change.'
  },
  {
    id: 207,
    category: 'Vocabulary',
    question: 'The committee sought to _____ tensions between opposing factions.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'exacerbate',
      'intensify',
      'ameliorate',
      'aggravate'
    ],
    correctAnswer: 2,
    explanation: '"Ameliorate" means to make better or improve. "Exacerbate", "intensify", and "aggravate" all mean to make worse.'
  },
  {
    id: 208,
    category: 'Vocabulary',
    question: 'The _____ evidence supported the prosecution\'s case.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'tenuous',
      'flimsy',
      'incontrovertible',
      'dubious'
    ],
    correctAnswer: 2,
    explanation: '"Incontrovertible" means not able to be denied or disputed, indisputable. "Tenuous", "flimsy", and "dubious" all suggest weakness or unreliability.'
  },
  {
    id: 209,
    category: 'Vocabulary',
    question: 'The politician\'s _____ promises rarely materialized.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'genuine',
      'sincere',
      'specious',
      'authentic'
    ],
    correctAnswer: 2,
    explanation: '"Specious" means superficially plausible but actually false. "Genuine", "sincere", and "authentic" all mean real and honest.'
  },
  {
    id: 210,
    category: 'Vocabulary',
    question: 'The _____ atmosphere in the laboratory fostered innovation.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'stifling',
      'oppressive',
      'conducive',
      'inhibiting'
    ],
    correctAnswer: 2,
    explanation: '"Conducive" means making a certain situation or outcome likely or possible, favorable. "Stifling", "oppressive", and "inhibiting" all suggest preventing or limiting.'
  },

  // PARALLELISM - Additional Questions (211-220)
  {
    id: 211,
    category: 'Parallelism',
    question: 'The proposal suggests reducing costs, increasing revenue, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to improve efficiency',
      'improving efficiency',
      'improve efficiency',
      'efficiency improvements'
    ],
    correctAnswer: 2,
    explanation: 'After "suggests", the sentence uses gerunds (reducing, increasing). However, with modal-like verbs suggesting obligation or recommendation followed by multiple items, base forms are also acceptable. Here "improve efficiency" maintains parallel structure with the pattern established.'
  },
  {
    id: 212,
    category: 'Parallelism',
    question: 'The ideal candidate should be experienced, knowledgeable, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'having reliability',
      'reliable',
      'with reliability',
      'reliability is important'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists adjectives (experienced, knowledgeable). Continue with another adjective: "reliable".'
  },
  {
    id: 213,
    category: 'Parallelism',
    question: 'She succeeded by planning carefully, working consistently, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to adapt quickly',
      'adapting quickly',
      'quick adaptation',
      'she adapted quickly'
    ],
    correctAnswer: 1,
    explanation: 'After "by", the sentence uses gerunds with adverbs (planning carefully, working consistently). Continue with another gerund-adverb combination: "adapting quickly".'
  },
  {
    id: 214,
    category: 'Parallelism',
    question: 'The training program covers technical skills, professional ethics, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'how to communicate effectively',
      'effective communication',
      'communicating effectively',
      'to communicate effectively'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists noun phrases (technical skills, professional ethics). Continue with another noun phrase: "effective communication".'
  },
  {
    id: 215,
    category: 'Parallelism',
    question: 'The committee recommended hiring consultants, conducting surveys, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to analyze data',
      'analyzing data',
      'data analysis',
      'they should analyze data'
    ],
    correctAnswer: 1,
    explanation: 'After "recommended", the sentence uses gerunds (hiring, conducting). Continue with another gerund: "analyzing data".'
  },
  {
    id: 216,
    category: 'Parallelism',
    question: 'The manuscript was well-written, thoroughly researched, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'it was properly formatted',
      'properly formatted',
      'with proper formatting',
      'formatting was proper'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses past participles with adverbs (well-written, thoroughly researched). Continue with another past participle-adverb combination: "properly formatted".'
  },
  {
    id: 217,
    category: 'Parallelism',
    question: 'To complete the project successfully, we need adequate funding, qualified personnel, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'having sufficient time',
      'sufficient time',
      'time that is sufficient',
      'to have sufficient time'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists noun phrases with adjectives (adequate funding, qualified personnel). Continue with another adjective-noun phrase: "sufficient time".'
  },
  {
    id: 218,
    category: 'Parallelism',
    question: 'The director values creativity, rewards initiative, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'encouraging collaboration',
      'encourages collaboration',
      'to encourage collaboration',
      'collaboration is encouraged'
    ],
    correctAnswer: 1,
    explanation: 'The sentence uses present tense verbs (values, rewards). Continue with another present tense verb: "encourages collaboration".'
  },
  {
    id: 219,
    category: 'Parallelism',
    question: 'The policy addresses environmental concerns, economic factors, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'it considers social impacts',
      'social impacts',
      'considering social impacts',
      'to consider social impacts'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists noun phrases (environmental concerns, economic factors). Continue with another noun phrase: "social impacts".'
  },
  {
    id: 220,
    category: 'Parallelism',
    question: 'The speaker was articulate, persuasive, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'she engaged the audience',
      'engaging',
      'with engagement',
      'engaged the audience'
    ],
    correctAnswer: 1,
    explanation: 'The sentence lists adjectives (articulate, persuasive). Continue with another adjective: "engaging".'
  },

  // CONCORD - Additional Questions (221-230)
  {
    id: 221,
    category: 'Concord',
    question: 'The series of lectures _____ extremely informative.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Series" can be singular or plural depending on context. When "series" refers to one set, use a singular verb. "The series" (singular) takes "was".'
  },
  {
    id: 222,
    category: 'Concord',
    question: 'Seventy percent of the population _____ in urban areas.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'live',
      'lives',
      'is living',
      'has lived'
    ],
    correctAnswer: 0,
    explanation: 'When percentages refer to plural countable nouns (population as people), use a plural verb. "Seventy percent" of people "live" in urban areas.'
  },
  {
    id: 223,
    category: 'Concord',
    question: 'The scissors _____ on the table.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'Certain tools that come in pairs (scissors, trousers, glasses) always take plural verbs when used alone: "scissors are". But "a pair of scissors" takes singular.'
  },
  {
    id: 224,
    category: 'Concord',
    question: 'Either the professor or the students _____ mistaken about the date.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. "Students" (plural) is closer, so use "are".'
  },
  {
    id: 225,
    category: 'Concord',
    question: 'The audience _____ applauding enthusiastically.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'been'
    ],
    correctAnswer: 1,
    explanation: 'When a collective noun emphasizes individual members acting separately, use a plural verb. "The audience are applauding" treats them as individuals clapping.'
  },
  {
    id: 226,
    category: 'Concord',
    question: 'Three-quarters of the work _____ completed yesterday.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When fractions refer to uncountable nouns (work), use a singular verb. "Three-quarters of the work" is treated as a single portion: "was".'
  },
  {
    id: 227,
    category: 'Concord',
    question: 'The headquarters _____ located in the capital city.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Headquarters" can be singular or plural. When referring to one main office location, use singular: "The headquarters is located". For multiple offices: "are".'
  },
  {
    id: 228,
    category: 'Concord',
    question: 'Neither coffee nor tea _____ available at this hour.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When two singular nouns are joined by "neither...nor", use a singular verb. Both "coffee" and "tea" are singular: "is".'
  },
  {
    id: 229,
    category: 'Concord',
    question: 'The staff _____ divided in their opinions on the matter.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When a collective noun emphasizes individual members with different views, use a plural verb. "The staff are divided" treats them as individuals.'
  },
  {
    id: 230,
    category: 'Concord',
    question: 'Linguistics _____ the scientific study of language.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'Academic subjects ending in "-ics" take singular verbs when referring to the field of study: "Linguistics is".'
  },

  // COHESION & COHERENCE - Additional Questions (231-240)
  {
    id: 231,
    category: 'Cohesion & Coherence',
    question: 'Education is crucial for development. _____, investment in schools must increase.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'However',
      'Therefore',
      'Nevertheless',
      'In contrast'
    ],
    correctAnswer: 1,
    explanation: '"Therefore" correctly shows the logical consequence: education\'s importance leads to need for investment. "However" and "Nevertheless" show contrast, which doesn\'t fit.'
  },
  {
    id: 232,
    category: 'Cohesion & Coherence',
    question: 'The budget was limited. _____, the team completed the project successfully.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Thus',
      'Therefore',
      'Nevertheless',
      'Consequently'
    ],
    correctAnswer: 2,
    explanation: '"Nevertheless" (despite this) correctly shows contrast between the limitation and successful completion. "Thus", "Therefore", and "Consequently" all show cause-effect.'
  },
  {
    id: 233,
    category: 'Cohesion & Coherence',
    question: 'Regular practice improves skills. _____, consistent effort leads to mastery.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'On the contrary',
      'However',
      'Similarly',
      'Conversely'
    ],
    correctAnswer: 2,
    explanation: '"Similarly" correctly introduces a parallel point: both sentences make the same argument about practice/effort leading to improvement/mastery.'
  },
  {
    id: 234,
    category: 'Cohesion & Coherence',
    question: 'The proposal has merit. _____, implementation costs are prohibitive.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Moreover',
      'Furthermore',
      'However',
      'Additionally'
    ],
    correctAnswer: 2,
    explanation: '"However" correctly introduces a contrasting problem that balances the positive merit with negative costs. "Moreover", "Furthermore", and "Additionally" add supporting points.'
  },
  {
    id: 235,
    category: 'Cohesion & Coherence',
    question: 'Technology enhances productivity. _____, it can reduce employment opportunities.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Likewise',
      'Similarly',
      'Conversely',
      'Furthermore'
    ],
    correctAnswer: 2,
    explanation: '"Conversely" correctly introduces an opposite effect: technology both helps (productivity) and harms (employment). "Likewise" and "Similarly" show agreement.'
  },
  {
    id: 236,
    category: 'Cohesion & Coherence',
    question: 'The evidence is compelling. _____, more research is warranted.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nevertheless',
      'Therefore',
      'In contrast',
      'Otherwise'
    ],
    correctAnswer: 0,
    explanation: '"Nevertheless" shows that despite compelling evidence, more research is still needed. This indicates that evidence alone isn\'t conclusive.'
  },
  {
    id: 237,
    category: 'Cohesion & Coherence',
    question: 'The climate is changing. _____, weather patterns have become unpredictable.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'As a result',
      'In contrast',
      'Nevertheless',
      'Otherwise'
    ],
    correctAnswer: 0,
    explanation: '"As a result" correctly shows cause-effect: climate change causes unpredictable weather. "In contrast" shows difference, "Nevertheless" shows contrast despite, "Otherwise" shows alternative.'
  },
  {
    id: 238,
    category: 'Cohesion & Coherence',
    question: 'Some favor traditional methods. _____, others prefer modern approaches.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'Likewise',
      'In contrast',
      'Moreover'
    ],
    correctAnswer: 2,
    explanation: '"In contrast" correctly introduces opposing preferences. "Similarly" and "Likewise" show agreement, "Moreover" adds supporting information.'
  },
  {
    id: 239,
    category: 'Cohesion & Coherence',
    question: 'The theory is elegant. _____, it lacks empirical support.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Furthermore',
      'Moreover',
      'However',
      'Additionally'
    ],
    correctAnswer: 2,
    explanation: '"However" correctly contrasts the theory\'s elegance with its empirical weakness. "Furthermore", "Moreover", and "Additionally" would add supporting positive points.'
  },
  {
    id: 240,
    category: 'Cohesion & Coherence',
    question: 'Begin with research. _____, develop your hypothesis.',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Finally',
      'Subsequently',
      'Meanwhile',
      'Previously'
    ],
    correctAnswer: 1,
    explanation: '"Subsequently" (afterward, next) correctly indicates the next step in sequence after research. "Finally" indicates last step, "Meanwhile" shows simultaneous action.'
  },

  // STYLISTIC VARIATION - Additional Questions (241-250)
  {
    id: 241,
    category: 'Stylistic Variation',
    question: 'Replace with formal academic English: "The study tries to find out the causes."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The study tries to discover the causes.',
      'The study attempts to identify the causes.',
      'The study seeks to ascertain the causes.',
      'The study looks for the causes.'
    ],
    correctAnswer: 2,
    explanation: '"Seeks to ascertain" is the most formal and academic. "Tries" and "looks for" are too informal; "ascertain" is more precise than "identify" or "discover" in academic contexts.'
  },
  {
    id: 242,
    category: 'Stylistic Variation',
    question: 'Choose the most formal alternative: "The results are almost the same."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The results are nearly identical.',
      'The results are virtually identical.',
      'The results are comparable.',
      'The results exhibit substantial congruence.'
    ],
    correctAnswer: 3,
    explanation: '"Exhibit substantial congruence" is the most sophisticated and formal. "Almost the same" is too informal for academic writing.'
  },
  {
    id: 243,
    category: 'Stylistic Variation',
    question: 'Replace with standard formal English: "The problem is getting bigger."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The problem is growing larger.',
      'The problem is expanding.',
      'The problem is escalating.',
      'The problem is increasing in magnitude.'
    ],
    correctAnswer: 3,
    explanation: '"Increasing in magnitude" is the most formal and precise. "Getting bigger" is too informal; use sophisticated vocabulary in academic writing.'
  },
  {
    id: 244,
    category: 'Stylistic Variation',
    question: 'Identify the formal equivalent: "The study backs up the theory."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The study supports the theory.',
      'The study corroborates the theory.',
      'The study validates the theory.',
      'The study substantiates the theory.'
    ],
    correctAnswer: 3,
    explanation: '"Substantiates" is the most formal and academic. "Backs up" is phrasal verb and too informal; formal writing prefers single academic verbs.'
  },
  {
    id: 245,
    category: 'Stylistic Variation',
    question: 'Choose the formal replacement: "The findings go against previous research."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The findings oppose previous research.',
      'The findings contradict previous research.',
      'The findings diverge from previous research.',
      'The findings are inconsistent with previous research.'
    ],
    correctAnswer: 3,
    explanation: '"Are inconsistent with" is the most formal and academic phrasing. "Go against" is too informal; use precise academic vocabulary.'
  },
  {
    id: 246,
    category: 'Stylistic Variation',
    question: 'Replace with formal academic English: "The method is used a lot in research."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The method is frequently used in research.',
      'The method is widely employed in research.',
      'The method is extensively utilized in research.',
      'The method is commonly applied in research.'
    ],
    correctAnswer: 2,
    explanation: '"Extensively utilized" is the most formal. "Used a lot" is too informal; "utilized" and "extensively" are more academic than "used" and "a lot".'
  },
  {
    id: 247,
    category: 'Stylistic Variation',
    question: 'Identify the most formal expression: "The data shows important patterns."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The data reveals important patterns.',
      'The data demonstrates significant patterns.',
      'The data indicates crucial patterns.',
      'The data evinces salient patterns.'
    ],
    correctAnswer: 3,
    explanation: '"Evinces salient patterns" uses the most sophisticated academic vocabulary. "Shows" is too informal; "evinces" and "salient" are formal academic terms.'
  },
  {
    id: 248,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The research looks into various factors."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The research examines various factors.',
      'The research investigates multiple factors.',
      'The research scrutinizes diverse factors.',
      'The research explores numerous variables.'
    ],
    correctAnswer: 2,
    explanation: '"Scrutinizes diverse factors" is the most formal. "Looks into" is a phrasal verb and too informal; "scrutinizes" implies thorough examination.'
  },
  {
    id: 249,
    category: 'Stylistic Variation',
    question: 'Replace with formal academic English: "The results are really interesting."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The results are very interesting.',
      'The results are quite compelling.',
      'The results are particularly noteworthy.',
      'The results warrant considerable attention.'
    ],
    correctAnswer: 3,
    explanation: '"Warrant considerable attention" is the most formal and sophisticated. Avoid intensifiers like "really" or "very" in academic writing; use precise formal expressions.'
  },
  {
    id: 250,
    category: 'Stylistic Variation',
    question: 'Identify the formal equivalent: "The theory can\'t explain all cases."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The theory cannot explain all cases.',
      'The theory fails to explain all cases.',
      'The theory is unable to account for all cases.',
      'The theory does not adequately explicate all phenomena.'
    ],
    correctAnswer: 3,
    explanation: '"Does not adequately explicate all phenomena" is the most formal and academic. Avoid contractions ("can\'t") in formal writing; use sophisticated vocabulary like "explicate" and "phenomena".'
  },

  // MECHANICS - Additional Questions (251-260)
  {
    id: 251,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Acquaintence',
      'Acquaintance',
      'Aquaintance',
      'Acquaintince'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "acquaintance" with "ai" and "-ance" ending. It means a person one knows slightly or knowledge of something.'
  },
  {
    id: 252,
    category: 'Mechanics',
    question: 'Identify the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Phenomenom',
      'Phenomenon',
      'Phenominon',
      'Phinomenon'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "phenomenon" (singular) with "ph" and "e" after "nom". The plural is "phenomena".'
  },
  {
    id: 253,
    category: 'Mechanics',
    question: 'Select the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Indispensible',
      'Indispensable',
      'Indespensable',
      'Indispencible'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "indispensable" with "-able" ending, not "-ible". It means absolutely necessary or essential.'
  },
  {
    id: 254,
    category: 'Mechanics',
    question: 'Choose the correctly punctuated sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The professor said, that the exam would be difficult.',
      'The professor said that, the exam would be difficult.',
      'The professor said that the exam would be difficult.',
      'The professor said, "that the exam would be difficult."'
    ],
    correctAnswer: 2,
    explanation: 'No comma is needed before "that" in indirect speech. Commas are not used to separate the verb from its complement clause introduced by "that".'
  },
  {
    id: 255,
    category: 'Mechanics',
    question: 'Identify the correct capitalization:',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She studied Biology and Chemistry.',
      'She studied biology and chemistry.',
      'She studied Biology and chemistry.',
      'She studied biology and Chemistry.'
    ],
    correctAnswer: 1,
    explanation: 'General subjects are lowercase unless they are proper nouns (like English) or part of a specific course title. "Biology" and "chemistry" as general fields are lowercase.'
  },
  {
    id: 256,
    category: 'Mechanics',
    question: 'Choose the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Harrass',
      'Harass',
      'Haras',
      'Harras'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "harass" with one "r" and double "s". It means to subject to aggressive pressure or intimidation.'
  },
  {
    id: 257,
    category: 'Mechanics',
    question: 'Select the correctly punctuated sentence:',
    instruction: 'Select the option that follows standard mechanics conventions.',
    options: [
      'The meeting which lasted three hours was productive.',
      'The meeting, which lasted three hours was productive.',
      'The meeting which lasted three hours, was productive.',
      'The meeting, which lasted three hours, was productive.'
    ],
    correctAnswer: 3,
    explanation: 'Non-restrictive relative clauses (providing additional, non-essential information) should be enclosed in commas. "Which lasted three hours" is non-restrictive.'
  },
  {
    id: 258,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Supercede',
      'Supersede',
      'Superceed',
      'Superseed'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "supersede" with "s" (not "c") and "-sede" ending. It means to replace or take the place of.'
  },
  {
    id: 259,
    category: 'Mechanics',
    question: 'Choose the correct capitalization:',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The President addressed the Nation.',
      'The president addressed the nation.',
      'The President addressed the nation.',
      'The president addressed the Nation.'
    ],
    correctAnswer: 1,
    explanation: 'Generic references to positions and places are lowercase. "President" and "nation" are only capitalized when part of specific titles or proper names.'
  },
  {
    id: 260,
    category: 'Mechanics',
    question: 'Select the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'Mispell',
      'Misspell',
      'Mispel',
      'Misspel'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "misspell" with double "s" (mis- + spell). It means to spell incorrectly.'
  },

  // VOCABULARY - Additional Questions (261-320) - Final 60 questions
  {
    id: 261,
    category: 'Vocabulary',
    question: 'The _____ student challenged every assumption presented.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'complacent',
      'iconoclastic',
      'orthodox',
      'conventional'
    ],
    correctAnswer: 1,
    explanation: '"Iconoclastic" means attacking or ignoring cherished beliefs and traditional institutions. "Complacent", "orthodox", and "conventional" all suggest conformity or acceptance.'
  },
  {
    id: 262,
    category: 'Vocabulary',
    question: 'The writer\'s _____ style made the complex topic accessible.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'abstruse',
      'recondite',
      'pellucid',
      'esoteric'
    ],
    correctAnswer: 2,
    explanation: '"Pellucid" means translucently clear in style or meaning. "Abstruse", "recondite", and "esoteric" all mean difficult to understand or obscure.'
  },
  {
    id: 263,
    category: 'Vocabulary',
    question: 'His _____ adherence to rules frustrated creative team members.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'flexible',
      'dogmatic',
      'adaptable',
      'pragmatic'
    ],
    correctAnswer: 1,
    explanation: '"Dogmatic" means inclined to lay down principles as incontrovertibly true, inflexible. "Flexible", "adaptable", and "pragmatic" all suggest openness to change.'
  },
  {
    id: 264,
    category: 'Vocabulary',
    question: 'The _____ of her argument impressed the debate judges.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'weakness',
      'fallacy',
      'cogency',
      'flaw'
    ],
    correctAnswer: 2,
    explanation: '"Cogency" means the quality of being clear, logical, and convincing. "Weakness", "fallacy", and "flaw" all indicate problems in reasoning.'
  },
  {
    id: 265,
    category: 'Vocabulary',
    question: 'The researcher\'s _____ claims required substantial evidence.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'modest',
      'grandiose',
      'humble',
      'understated'
    ],
    correctAnswer: 1,
    explanation: '"Grandiose" means impressive or magnificent in appearance or style, especially when exaggerated or pretentious. "Modest", "humble", and "understated" suggest moderation.'
  },
  {
    id: 266,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ manner alienated the audience.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'affable',
      'arrogant',
      'genial',
      'amiable'
    ],
    correctAnswer: 1,
    explanation: '"Arrogant" means having an exaggerated sense of one\'s own importance, overbearing. "Affable", "genial", and "amiable" all describe pleasant, friendly behavior.'
  },
  {
    id: 267,
    category: 'Vocabulary',
    question: 'The _____ testimony contradicted physical evidence.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'veracious',
      'mendacious',
      'truthful',
      'honest'
    ],
    correctAnswer: 1,
    explanation: '"Mendacious" means given to lying or false statements. "Veracious", "truthful", and "honest" all mean truthful or accurate.'
  },
  {
    id: 268,
    category: 'Vocabulary',
    question: 'The committee\'s _____ decision disappointed stakeholders.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'prudent',
      'judicious',
      'capricious',
      'wise'
    ],
    correctAnswer: 2,
    explanation: '"Capricious" means given to sudden changes of mood or behavior, unpredictable. "Prudent", "judicious", and "wise" all suggest careful judgment.'
  },
  {
    id: 269,
    category: 'Vocabulary',
    question: 'The author\'s _____ prose captivated readers.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'turgid',
      'lyrical',
      'labored',
      'convoluted'
    ],
    correctAnswer: 1,
    explanation: '"Lyrical" means expressing the writer\'s emotions in a beautiful and imaginative way. "Turgid", "labored", and "convoluted" all suggest awkward or overly complex writing.'
  },
  {
    id: 270,
    category: 'Vocabulary',
    question: 'The _____ nature of the agreement caused disputes.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'explicit',
      'ambiguous',
      'precise',
      'clear'
    ],
    correctAnswer: 1,
    explanation: '"Ambiguous" means open to more than one interpretation, unclear. "Explicit", "precise", and "clear" all suggest definiteness.'
  },
  {
    id: 271,
    category: 'Vocabulary',
    question: 'The _____ between the two accounts raised suspicions.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'congruence',
      'harmony',
      'discordance',
      'agreement'
    ],
    correctAnswer: 2,
    explanation: '"Discordance" means disagreement or lack of harmony. "Congruence", "harmony", and "agreement" all suggest compatibility.'
  },
  {
    id: 272,
    category: 'Vocabulary',
    question: 'Her _____ objections delayed the proceedings.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'relevant',
      'frivolous',
      'valid',
      'substantial'
    ],
    correctAnswer: 1,
    explanation: '"Frivolous" means not having any serious purpose or value, trivial. "Relevant", "valid", and "substantial" all suggest serious objections.'
  },
  {
    id: 273,
    category: 'Vocabulary',
    question: 'The _____ professor commanded respect from all students.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'mediocre',
      'venerable',
      'inexperienced',
      'novice'
    ],
    correctAnswer: 1,
    explanation: '"Venerable" means accorded a great deal of respect because of age, wisdom, or character. "Mediocre", "inexperienced", and "novice" suggest lack of distinction or experience.'
  },
  {
    id: 274,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ delivery compensated for weak content.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'lackluster',
      'dynamic',
      'lifeless',
      'monotonous'
    ],
    correctAnswer: 1,
    explanation: '"Dynamic" means energetic and forceful, positive and engaging. "Lackluster", "lifeless", and "monotonous" all suggest dull presentation.'
  },
  {
    id: 275,
    category: 'Vocabulary',
    question: 'The _____ decision proved costly in retrospect.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'prudent',
      'hasty',
      'judicious',
      'careful'
    ],
    correctAnswer: 1,
    explanation: '"Hasty" means done with excessive speed or urgency, rushed. "Prudent", "judicious", and "careful" all suggest well-considered decisions.'
  },
  {
    id: 276,
    category: 'Vocabulary',
    question: 'His _____ personality made him popular at social events.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'withdrawn',
      'gregarious',
      'reclusive',
      'introverted'
    ],
    correctAnswer: 1,
    explanation: '"Gregarious" means fond of company, sociable. "Withdrawn", "reclusive", and "introverted" all suggest preference for solitude.'
  },
  {
    id: 277,
    category: 'Vocabulary',
    question: 'The _____ conditions in the laboratory ensured accurate results.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'haphazard',
      'pristine',
      'chaotic',
      'disorganized'
    ],
    correctAnswer: 1,
    explanation: '"Pristine" means in its original condition, unspoiled, perfectly clean. "Haphazard", "chaotic", and "disorganized" all suggest disorder.'
  },
  {
    id: 278,
    category: 'Vocabulary',
    question: 'The politician\'s _____ remarks sparked controversy.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'diplomatic',
      'tactful',
      'inflammatory',
      'conciliatory'
    ],
    correctAnswer: 2,
    explanation: '"Inflammatory" means arousing or intended to arouse anger or violence. "Diplomatic", "tactful", and "conciliatory" all suggest peaceful, careful speech.'
  },
  {
    id: 279,
    category: 'Vocabulary',
    question: 'The _____ nature of academic work requires patience.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'spontaneous',
      'tedious',
      'exciting',
      'thrilling'
    ],
    correctAnswer: 1,
    explanation: '"Tedious" means too long, slow, or dull, tiresome. "Spontaneous", "exciting", and "thrilling" all suggest engaging activity.'
  },
  {
    id: 280,
    category: 'Vocabulary',
    question: 'The company\'s _____ approach to innovation stifled growth.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'progressive',
      'conservative',
      'forward-thinking',
      'visionary'
    ],
    correctAnswer: 1,
    explanation: '"Conservative" means averse to change or innovation, traditional. "Progressive", "forward-thinking", and "visionary" all suggest embracing new ideas.'
  },
  {
    id: 281,
    category: 'Vocabulary',
    question: 'The _____ scholar contributed significantly to the field.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'dilettante',
      'preeminent',
      'amateur',
      'novice'
    ],
    correctAnswer: 1,
    explanation: '"Preeminent" means surpassing all others, outstanding. "Dilettante", "amateur", and "novice" all suggest lack of serious expertise.'
  },
  {
    id: 282,
    category: 'Vocabulary',
    question: 'The _____ of his response left everyone confused.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'clarity',
      'vagueness',
      'precision',
      'definiteness'
    ],
    correctAnswer: 1,
    explanation: '"Vagueness" means the quality of being uncertain or ill-defined. "Clarity", "precision", and "definiteness" all suggest clear communication.'
  },
  {
    id: 283,
    category: 'Vocabulary',
    question: 'The author\'s _____ wit delighted readers.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'dull',
      'trenchant',
      'pedestrian',
      'mundane'
    ],
    correctAnswer: 1,
    explanation: '"Trenchant" means vigorous or incisive in expression, keen and sharp. "Dull", "pedestrian", and "mundane" all suggest uninteresting or ordinary.'
  },
  {
    id: 284,
    category: 'Vocabulary',
    question: 'The _____ instructions led to multiple errors.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'explicit',
      'equivocal',
      'clear',
      'unambiguous'
    ],
    correctAnswer: 1,
    explanation: '"Equivocal" means open to more than one interpretation, ambiguous. "Explicit", "clear", and "unambiguous" all suggest definiteness.'
  },
  {
    id: 285,
    category: 'Vocabulary',
    question: 'Her _____ demeanor put everyone at ease.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'hostile',
      'affable',
      'aggressive',
      'antagonistic'
    ],
    correctAnswer: 1,
    explanation: '"Affable" means friendly, good-natured, and easy to talk to. "Hostile", "aggressive", and "antagonistic" all suggest unfriendliness.'
  },
  {
    id: 286,
    category: 'Vocabulary',
    question: 'The _____ scientist rejected conventional wisdom.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'orthodox',
      'maverick',
      'conformist',
      'traditional'
    ],
    correctAnswer: 1,
    explanation: '"Maverick" means an unorthodox or independent-minded person. "Orthodox", "conformist", and "traditional" all suggest adherence to convention.'
  },
  {
    id: 287,
    category: 'Vocabulary',
    question: 'The _____ of the situation demanded immediate action.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'triviality',
      'urgency',
      'insignificance',
      'unimportance'
    ],
    correctAnswer: 1,
    explanation: '"Urgency" means importance requiring swift action. "Triviality", "insignificance", and "unimportance" all suggest lack of significance.'
  },
  {
    id: 288,
    category: 'Vocabulary',
    question: 'The _____ critique offered no constructive suggestions.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'helpful',
      'caustic',
      'beneficial',
      'supportive'
    ],
    correctAnswer: 1,
    explanation: '"Caustic" means sarcastic in a scathing and bitter way, harsh. "Helpful", "beneficial", and "supportive" all suggest positive assistance.'
  },
  {
    id: 289,
    category: 'Vocabulary',
    question: 'The document\'s _____ provisions allowed for interpretation.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'rigid',
      'flexible',
      'inflexible',
      'strict'
    ],
    correctAnswer: 1,
    explanation: '"Flexible" means capable of bending without breaking, adaptable. "Rigid", "inflexible", and "strict" all suggest inability to change.'
  },
  {
    id: 290,
    category: 'Vocabulary',
    question: 'The _____ narrative captivated audiences worldwide.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'boring',
      'compelling',
      'tedious',
      'dull'
    ],
    correctAnswer: 1,
    explanation: '"Compelling" means evoking interest or attention, gripping. "Boring", "tedious", and "dull" all suggest lack of interest.'
  },
  {
    id: 291,
    category: 'Vocabulary',
    question: 'His _____ behavior contradicted his stated principles.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'consistent',
      'hypocritical',
      'honest',
      'sincere'
    ],
    correctAnswer: 1,
    explanation: '"Hypocritical" means behaving in a way that contradicts stated beliefs or feelings. "Consistent", "honest", and "sincere" all suggest genuine behavior.'
  },
  {
    id: 292,
    category: 'Vocabulary',
    question: 'The _____ policy protected individual rights.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'oppressive',
      'liberal',
      'restrictive',
      'tyrannical'
    ],
    correctAnswer: 1,
    explanation: '"Liberal" means favorable to or respectful of individual rights and freedoms. "Oppressive", "restrictive", and "tyrannical" all suggest limiting freedoms.'
  },
  {
    id: 293,
    category: 'Vocabulary',
    question: 'The researcher\'s _____ attention to detail ensured accuracy.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'careless',
      'fastidious',
      'negligent',
      'sloppy'
    ],
    correctAnswer: 1,
    explanation: '"Fastidious" means very attentive to accuracy and detail, meticulous. "Careless", "negligent", and "sloppy" all suggest lack of care.'
  },
  {
    id: 294,
    category: 'Vocabulary',
    question: 'The _____ of supporters bolstered the candidate\'s confidence.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'scarcity',
      'multitude',
      'paucity',
      'dearth'
    ],
    correctAnswer: 1,
    explanation: '"Multitude" means a large number of people or things. "Scarcity", "paucity", and "dearth" all mean shortage or lack.'
  },
  {
    id: 295,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ tone suggested disrespect.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'respectful',
      'contemptuous',
      'deferential',
      'reverent'
    ],
    correctAnswer: 1,
    explanation: '"Contemptuous" means showing contempt, scornful. "Respectful", "deferential", and "reverent" all show respect.'
  },
  {
    id: 296,
    category: 'Vocabulary',
    question: 'The _____ solution addressed all concerns effectively.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'inadequate',
      'comprehensive',
      'partial',
      'incomplete'
    ],
    correctAnswer: 1,
    explanation: '"Comprehensive" means complete and including all necessary elements. "Inadequate", "partial", and "incomplete" all suggest insufficiency.'
  },
  {
    id: 297,
    category: 'Vocabulary',
    question: 'His _____ character earned universal admiration.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'dubious',
      'impeccable',
      'questionable',
      'suspect'
    ],
    correctAnswer: 1,
    explanation: '"Impeccable" means in accordance with the highest standards, flawless. "Dubious", "questionable", and "suspect" all suggest unreliability.'
  },
  {
    id: 298,
    category: 'Vocabulary',
    question: 'The _____ of the proposal hindered its acceptance.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'feasibility',
      'implausibility',
      'practicality',
      'viability'
    ],
    correctAnswer: 1,
    explanation: '"Implausibility" means the quality of being difficult to believe, unrealistic. "Feasibility", "practicality", and "viability" all suggest practicality.'
  },
  {
    id: 299,
    category: 'Vocabulary',
    question: 'The _____ performance exceeded all expectations.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'mediocre',
      'stellar',
      'average',
      'ordinary'
    ],
    correctAnswer: 1,
    explanation: '"Stellar" means exceptionally good, outstanding. "Mediocre", "average", and "ordinary" all suggest unremarkable performance.'
  },
  {
    id: 300,
    category: 'Vocabulary',
    question: 'The committee voted to _____ the outdated regulation.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'maintain',
      'repeal',
      'sustain',
      'continue'
    ],
    correctAnswer: 1,
    explanation: '"Repeal" means to revoke or annul officially. "Maintain", "sustain", and "continue" all mean to keep in effect.'
  },
  {
    id: 301,
    category: 'Vocabulary',
    question: 'The _____ review praised every aspect of the book.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'critical',
      'laudatory',
      'negative',
      'disparaging'
    ],
    correctAnswer: 1,
    explanation: '"Laudatory" means expressing praise and commendation. "Critical", "negative", and "disparaging" all suggest disapproval.'
  },
  {
    id: 302,
    category: 'Vocabulary',
    question: 'His _____ lifestyle left him financially secure.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'extravagant',
      'frugal',
      'lavish',
      'wasteful'
    ],
    correctAnswer: 1,
    explanation: '"Frugal" means sparing or economical in use of resources. "Extravagant", "lavish", and "wasteful" all suggest excessive spending.'
  },
  {
    id: 303,
    category: 'Vocabulary',
    question: 'The _____ debate clarified complex issues.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'confusing',
      'illuminating',
      'obscure',
      'muddled'
    ],
    correctAnswer: 1,
    explanation: '"Illuminating" means helping to clarify or explain. "Confusing", "obscure", and "muddled" all suggest lack of clarity.'
  },
  {
    id: 304,
    category: 'Vocabulary',
    question: 'The _____ agreement satisfied all parties involved.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'contentious',
      'equitable',
      'unfair',
      'biased'
    ],
    correctAnswer: 1,
    explanation: '"Equitable" means fair and impartial. "Contentious", "unfair", and "biased" all suggest inequality or dispute.'
  },
  {
    id: 305,
    category: 'Vocabulary',
    question: 'The researcher\'s _____ findings challenged existing theories.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'conventional',
      'groundbreaking',
      'ordinary',
      'typical'
    ],
    correctAnswer: 1,
    explanation: '"Groundbreaking" means pioneering, innovative. "Conventional", "ordinary", and "typical" all suggest nothing new or special.'
  },
  {
    id: 306,
    category: 'Vocabulary',
    question: 'The _____ of the crime shocked the community.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'insignificance',
      'enormity',
      'triviality',
      'pettiness'
    ],
    correctAnswer: 1,
    explanation: '"Enormity" means the great or extreme scale, seriousness, or extent of something negative. "Insignificance", "triviality", and "pettiness" suggest unimportance.'
  },
  {
    id: 307,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ comments offended many attendees.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'tactful',
      'insensitive',
      'diplomatic',
      'considerate'
    ],
    correctAnswer: 1,
    explanation: '"Insensitive" means showing lack of sensitivity, thoughtless. "Tactful", "diplomatic", and "considerate" all show awareness of others\' feelings.'
  },
  {
    id: 308,
    category: 'Vocabulary',
    question: 'The _____ leader adapted quickly to changing circumstances.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'rigid',
      'pragmatic',
      'inflexible',
      'dogmatic'
    ],
    correctAnswer: 1,
    explanation: '"Pragmatic" means dealing with things sensibly and realistically. "Rigid", "inflexible", and "dogmatic" all suggest inability to adapt.'
  },
  {
    id: 309,
    category: 'Vocabulary',
    question: 'The _____ of the manuscript required extensive editing.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'coherence',
      'incoherence',
      'clarity',
      'lucidity'
    ],
    correctAnswer: 1,
    explanation: '"Incoherence" means the quality of being illogical or unclear. "Coherence", "clarity", and "lucidity" all suggest clear logical connection.'
  },
  {
    id: 310,
    category: 'Vocabulary',
    question: 'The _____ senator commanded bipartisan respect.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'divisive',
      'venerated',
      'controversial',
      'polarizing'
    ],
    correctAnswer: 1,
    explanation: '"Venerated" means regarded with great respect. "Divisive", "controversial", and "polarizing" all suggest causing disagreement.'
  },
  {
    id: 311,
    category: 'Vocabulary',
    question: 'The _____ approach yielded better results than expected.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'conventional',
      'innovative',
      'traditional',
      'orthodox'
    ],
    correctAnswer: 1,
    explanation: '"Innovative" means featuring new methods, original and creative. "Conventional", "traditional", and "orthodox" all suggest established methods.'
  },
  {
    id: 312,
    category: 'Vocabulary',
    question: 'The _____ evidence undermined the defense\'s case.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'weak',
      'incontrovertible',
      'dubious',
      'questionable'
    ],
    correctAnswer: 1,
    explanation: '"Incontrovertible" means not able to be denied or disputed. "Weak", "dubious", and "questionable" all suggest unreliability.'
  },
  {
    id: 313,
    category: 'Vocabulary',
    question: 'Her _____ dedication inspired colleagues to excel.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'halfhearted',
      'unwavering',
      'lukewarm',
      'tepid'
    ],
    correctAnswer: 1,
    explanation: '"Unwavering" means steady and resolute, not changing. "Halfhearted", "lukewarm", and "tepid" all suggest lack of commitment.'
  },
  {
    id: 314,
    category: 'Vocabulary',
    question: 'The _____ politician avoided taking clear positions.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'forthright',
      'equivocating',
      'candid',
      'straightforward'
    ],
    correctAnswer: 1,
    explanation: '"Equivocating" means using ambiguous language to avoid commitment. "Forthright", "candid", and "straightforward" all suggest directness.'
  },
  {
    id: 315,
    category: 'Vocabulary',
    question: 'The _____ atmosphere fostered creativity and innovation.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'stifling',
      'vibrant',
      'oppressive',
      'dreary'
    ],
    correctAnswer: 1,
    explanation: '"Vibrant" means full of energy and enthusiasm, lively. "Stifling", "oppressive", and "dreary" all suggest negativity that limits creativity.'
  },
  {
    id: 316,
    category: 'Vocabulary',
    question: 'The _____ of the ancient text challenged translators.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'clarity',
      'obscurity',
      'transparency',
      'simplicity'
    ],
    correctAnswer: 1,
    explanation: '"Obscurity" means the state of being unknown or difficult to understand. "Clarity", "transparency", and "simplicity" all suggest ease of understanding.'
  },
  {
    id: 317,
    category: 'Vocabulary',
    question: 'The professor\'s _____ knowledge amazed students.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'limited',
      'encyclopedic',
      'superficial',
      'shallow'
    ],
    correctAnswer: 1,
    explanation: '"Encyclopedic" means comprehensive in knowledge, very extensive. "Limited", "superficial", and "shallow" all suggest inadequate knowledge.'
  },
  {
    id: 318,
    category: 'Vocabulary',
    question: 'The _____ witness testified reluctantly under pressure.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'willing',
      'recalcitrant',
      'cooperative',
      'compliant'
    ],
    correctAnswer: 1,
    explanation: '"Recalcitrant" means stubbornly resistant to authority or control. "Willing", "cooperative", and "compliant" all suggest readiness to help.'
  },
  {
    id: 319,
    category: 'Vocabulary',
    question: 'The _____ of the proposal ensured smooth implementation.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'complexity',
      'simplicity',
      'intricacy',
      'convolution'
    ],
    correctAnswer: 1,
    explanation: '"Simplicity" means the quality of being easy to understand or do. "Complexity", "intricacy", and "convolution" all suggest difficulty.'
  },
  {
    id: 320,
    category: 'Vocabulary',
    question: 'The _____ scholar published over fifty groundbreaking papers.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'mediocre',
      'prolific',
      'unproductive',
      'barren'
    ],
    correctAnswer: 1,
    explanation: '"Prolific" means producing much work or many results, highly productive. "Mediocre", "unproductive", and "barren" all suggest limited output or quality.'
  },

  // CONCORD - Extended Questions (321-400) - 80 questions
  {
    id: 321,
    category: 'Concord',
    question: 'The range of possibilities _____ endless.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'seem',
      'seems',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'The subject is "range" (singular), not "possibilities". Use the singular verb "seems".'
  },
  {
    id: 322,
    category: 'Concord',
    question: 'Fifty kilometers _____ too far to walk in one day.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When distance is treated as a single unit, use a singular verb. "Fifty kilometers" represents one distance.'
  },
  {
    id: 323,
    category: 'Concord',
    question: 'The bacteria _____ multiplying rapidly in the culture.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Bacteria" is the plural form of "bacterium". It always takes a plural verb: "are".'
  },
  {
    id: 324,
    category: 'Concord',
    question: 'Every book and article _____ been thoroughly reviewed.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'When subjects are joined by "and" but preceded by "every", use a singular verb: "has".'
  },
  {
    id: 325,
    category: 'Concord',
    question: 'Neither the results nor the conclusion _____ satisfactory.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the nearest subject. "Conclusion" (singular) is nearest: "was".'
  },
  {
    id: 326,
    category: 'Concord',
    question: 'The alumni _____ gathering for the reunion next month.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Alumni" is the plural form of "alumnus". Use the plural verb "are".'
  },
  {
    id: 327,
    category: 'Concord',
    question: 'Two-thirds of the students _____ passed the examination.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: 'When fractions refer to plural countable nouns (students), use a plural verb: "have".'
  },
  {
    id: 328,
    category: 'Concord',
    question: 'The proceeds from the sale _____ donated to charity.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Proceeds" (meaning profits or earnings) is always plural and takes a plural verb: "were".'
  },
  {
    id: 329,
    category: 'Concord',
    question: 'Either the CEO or the board members _____ responsible.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. "Board members" (plural) is nearest: "are".'
  },
  {
    id: 330,
    category: 'Concord',
    question: 'The goods _____ arrived at the warehouse yesterday.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"Goods" (meaning merchandise) is always plural and requires a plural verb: "have".'
  },
  {
    id: 331,
    category: 'Concord',
    question: 'Statistics _____ an important tool for researchers.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When referring to the field of study, "statistics" can be singular. However, when referring to numerical data, it\'s plural: "are".'
  },
  {
    id: 332,
    category: 'Concord',
    question: 'The offspring of the species _____ identical to the parents.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Offspring" can be singular or plural. Context (comparing multiple offspring to parents) suggests plural: "are".'
  },
  {
    id: 333,
    category: 'Concord',
    question: 'A series of experiments _____ conducted last year.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"A series" (one set) is treated as singular despite "of experiments". Use "was".'
  },
  {
    id: 334,
    category: 'Concord',
    question: 'The athletics program _____ received additional funding.',
    instruction: 'Determine whether the collective noun is acting as a single unit (singular) or as individuals (plural).',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'When "athletics" refers to a program or department (singular entity), use a singular verb: "has".'
  },
  {
    id: 335,
    category: 'Concord',
    question: 'Neither of the proposals _____ adequate funding.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: '"Neither" is singular and always takes a singular verb: "has".'
  },
  {
    id: 336,
    category: 'Concord',
    question: 'The means of transportation _____ limited in rural areas.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Means" can be singular or plural. "The means" (plural here, referring to various methods) takes "are".'
  },
  {
    id: 337,
    category: 'Concord',
    question: 'The analyses _____ revealed significant patterns.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"Analyses" is the plural form of "analysis". Use the plural verb "have".'
  },
  {
    id: 338,
    category: 'Concord',
    question: 'Each of the participants _____ given a certificate.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Each" is singular, even when followed by "of" + plural noun. Use "was".'
  },
  {
    id: 339,
    category: 'Concord',
    question: 'The whereabouts of the suspect _____ unknown.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 1,
    explanation: '"Whereabouts" can be singular or plural. When meaning "location" as a single concept, use singular: "is" or "are" both acceptable, but "is" more common.'
  },
  {
    id: 340,
    category: 'Concord',
    question: 'The thesis _____ defended successfully yesterday.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Thesis" (singular) takes a singular verb: "was". The plural is "theses".'
  },
  {
    id: 341,
    category: 'Concord',
    question: 'Seventy-five dollars _____ the cost of membership.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'An amount of money as a single sum takes a singular verb: "is".'
  },
  {
    id: 342,
    category: 'Concord',
    question: 'The appendices _____ additional information.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'contains',
      'contain',
      'is containing',
      'has contained'
    ],
    correctAnswer: 1,
    explanation: '"Appendices" is the plural of "appendix". Use the plural verb "contain".'
  },
  {
    id: 343,
    category: 'Concord',
    question: 'The fish in the aquarium _____ various species.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'represents',
      'represent',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"Fish" can be singular or plural. Context (various species) indicates plural: "represent".'
  },
  {
    id: 344,
    category: 'Concord',
    question: 'Mathematics, along with physics, _____ required for the program.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Along with physics" is parenthetical. The subject is "Mathematics" (singular): "is".'
  },
  {
    id: 345,
    category: 'Concord',
    question: 'A number of issues _____ still unresolved.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"A number of" takes a plural verb (emphasizing individual items). Use "are".'
  },
  {
    id: 346,
    category: 'Concord',
    question: 'The premises _____ thoroughly inspected last week.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Premises" (meaning buildings and land) is always plural: "were".'
  },
  {
    id: 347,
    category: 'Concord',
    question: 'One-third of the budget _____ allocated to research.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When a fraction refers to an uncountable noun (budget), use a singular verb: "was".'
  },
  {
    id: 348,
    category: 'Concord',
    question: 'The strata of rock _____ clearly visible.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Strata" is the plural of "stratum". Use the plural verb "were".'
  },
  {
    id: 349,
    category: 'Concord',
    question: 'None of the information _____ accurate.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When "none of" refers to an uncountable noun (information), use a singular verb: "was".'
  },
  {
    id: 350,
    category: 'Concord',
    question: 'The wages of employees _____ increased this year.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"Wages" is plural and requires a plural verb: "have".'
  },
  {
    id: 351,
    category: 'Concord',
    question: 'Either the students or the instructor _____ mistaken.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. "Instructor" (singular) is nearest: "is".'
  },
  {
    id: 352,
    category: 'Concord',
    question: 'The corps of engineers _____ completed the project.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: '"Corps" (a group acting as a unit) takes a singular verb: "has".'
  },
  {
    id: 353,
    category: 'Concord',
    question: 'Forty percent of the workforce _____ remote employees.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When a percentage refers to plural countable nouns (employees), use a plural verb: "are".'
  },
  {
    id: 354,
    category: 'Concord',
    question: 'The ethics of the decision _____ questionable.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When "ethics" refers to moral principles (plural concept), use a plural verb: "are".'
  },
  {
    id: 355,
    category: 'Concord',
    question: 'A great deal of effort _____ invested in the research.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"A great deal of" followed by an uncountable noun (effort) takes a singular verb: "was".'
  },
  {
    id: 356,
    category: 'Concord',
    question: 'The stimulus _____ produced unexpected results.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: '"Stimulus" (singular) takes a singular verb: "has". The plural is "stimuli".'
  },
  {
    id: 357,
    category: 'Concord',
    question: 'Neither rain nor snow _____ the delivery schedule.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'affect',
      'affects',
      'are affecting',
      'were affecting'
    ],
    correctAnswer: 1,
    explanation: 'Both subjects are singular, and with "neither...nor", the verb agrees with the nearest (snow): "affects".'
  },
  {
    id: 358,
    category: 'Concord',
    question: 'The customs procedures _____ time-consuming.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Customs" (when referring to official procedures) can be plural. "Procedures" is plural: "are".'
  },
  {
    id: 359,
    category: 'Concord',
    question: 'The remains of the ancient city _____ discovered recently.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Remains" (plural) takes a plural verb: "were".'
  },
  {
    id: 360,
    category: 'Concord',
    question: 'Each student and teacher _____ required to attend.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When "each" precedes compound subjects, use a singular verb: "is".'
  },
  {
    id: 361,
    category: 'Concord',
    question: 'The clergy _____ divided on the issue.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When "clergy" emphasizes individual members with different opinions, use a plural verb: "are".'
  },
  {
    id: 362,
    category: 'Concord',
    question: 'Three hours _____ sufficient time for the examination.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'A period of time treated as a single unit takes a singular verb: "is".'
  },
  {
    id: 363,
    category: 'Concord',
    question: 'The pliers _____ in the toolbox.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'Tools that come in pairs (pliers, scissors) take plural verbs: "are".'
  },
  {
    id: 364,
    category: 'Concord',
    question: 'More than one solution _____ been proposed.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctAnswer: 1,
    explanation: 'Despite the plural meaning, "more than one" takes a singular verb: "has".'
  },
  {
    id: 365,
    category: 'Concord',
    question: 'The crossroads _____ a strategic location.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Crossroads" can be singular or plural. When referring to one intersection, use singular: "is".'
  },
  {
    id: 366,
    category: 'Concord',
    question: 'The hypotheses _____ tested systematically.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Hypotheses" is the plural of "hypothesis". Use the plural verb "were".'
  },
  {
    id: 367,
    category: 'Concord',
    question: 'A flock of birds _____ flying overhead.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'Collective nouns acting as a unit take singular verbs. "A flock" (one group) flying together: "is".'
  },
  {
    id: 368,
    category: 'Concord',
    question: 'The genetics of the population _____ being studied.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'When "genetics" refers to the field of study, use a singular verb: "is".'
  },
  {
    id: 369,
    category: 'Concord',
    question: 'Neither the manager nor the supervisors _____ aware.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the nearest subject. "Supervisors" (plural) is nearest: "were".'
  },
  {
    id: 370,
    category: 'Concord',
    question: 'The oasis in the desert _____ a welcome sight.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Oasis" (singular) takes a singular verb: "is". The plural is "oases".'
  },
  {
    id: 371,
    category: 'Concord',
    question: 'The curricula of both programs _____ similar.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Curricula" is the plural of "curriculum". Use the plural verb "are".'
  },
  {
    id: 372,
    category: 'Concord',
    question: 'Fifty pounds of grain _____ stored in the silo.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'When quantity + of + noun forms a single unit, use a singular verb: "is".'
  },
  {
    id: 373,
    category: 'Concord',
    question: 'The acoustics in the hall _____ excellent.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'When "acoustics" refers to sound qualities, use a plural verb: "are".'
  },
  {
    id: 374,
    category: 'Concord',
    question: 'A variety of methods _____ employed in the study.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"A variety of" followed by a plural noun emphasizes the individual items. Use plural: "were".'
  },
  {
    id: 375,
    category: 'Concord',
    question: 'The species _____ endangered.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'was'
    ],
    correctAnswer: 0,
    explanation: '"Species" can be singular or plural. Context determines: if referring to multiple types, use "are"; one type, use "is". Both acceptable.'
  },
  {
    id: 376,
    category: 'Concord',
    question: 'The memoranda _____ distributed to all staff.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Memoranda" is the plural of "memorandum". Use the plural verb "were".'
  },
  {
    id: 377,
    category: 'Concord',
    question: 'Half of the participants _____ completed the survey.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'has',
      'have',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: '"Half of" followed by a plural noun (participants) takes a plural verb: "have".'
  },
  {
    id: 378,
    category: 'Concord',
    question: 'The diagnosis _____ confirmed by multiple tests.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Diagnosis" (singular) takes a singular verb: "was". The plural is "diagnoses".'
  },
  {
    id: 379,
    category: 'Concord',
    question: 'Either you or I _____ responsible for the error.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'are',
      'am',
      'is',
      'was'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. "I" is nearest, requiring "am".'
  },
  {
    id: 380,
    category: 'Concord',
    question: 'The majority of the votes _____ in favor of the motion.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Majority of" followed by a plural noun (votes) takes a plural verb: "were".'
  },
  {
    id: 381,
    category: 'Concord',
    question: 'The trousers _____ too long.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'Clothing items that come in pairs (trousers, pants) take plural verbs: "are".'
  },
  {
    id: 382,
    category: 'Concord',
    question: 'Every man, woman, and child _____ welcome.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When subjects are joined by "and" but preceded by "every", use a singular verb: "is".'
  },
  {
    id: 383,
    category: 'Concord',
    question: 'The nuclei of the cells _____ clearly visible.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Nuclei" is the plural of "nucleus". Use the plural verb "were".'
  },
  {
    id: 384,
    category: 'Concord',
    question: 'The shears _____ sharpened recently.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'Tools that come in pairs (shears) take plural verbs: "were".'
  },
  {
    id: 385,
    category: 'Concord',
    question: 'None of the evidence _____ conclusive.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When "none of" refers to an uncountable noun (evidence), use a singular verb: "was".'
  },
  {
    id: 386,
    category: 'Concord',
    question: 'The crises _____ managed effectively.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Crises" is the plural of "crisis". Use the plural verb "were".'
  },
  {
    id: 387,
    category: 'Concord',
    question: 'The basis of the argument _____ flawed.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Basis" (singular) takes a singular verb: "is". The plural is "bases".'
  },
  {
    id: 388,
    category: 'Concord',
    question: 'The glasses _____ on the table.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Glasses" (eyewear) always takes a plural verb: "are".'
  },
  {
    id: 389,
    category: 'Concord',
    question: 'Neither the theory nor the experiments _____ support the hypothesis.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'supports',
      'support',
      'is supporting',
      'has supported'
    ],
    correctAnswer: 1,
    explanation: 'With "neither...nor", the verb agrees with the nearest subject. "Experiments" (plural) is nearest: "support".'
  },
  {
    id: 390,
    category: 'Concord',
    question: 'The archives _____ historical documents.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'contains',
      'contain',
      'is containing',
      'has contained'
    ],
    correctAnswer: 1,
    explanation: '"Archives" (plural) takes a plural verb: "contain".'
  },
  {
    id: 391,
    category: 'Concord',
    question: 'Thirty minutes _____ allotted for each presentation.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'A period of time as a single unit takes a singular verb: "is".'
  },
  {
    id: 392,
    category: 'Concord',
    question: 'The fungi _____ growing rapidly.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Fungi" is the plural of "fungus". Use the plural verb "are".'
  },
  {
    id: 393,
    category: 'Concord',
    question: 'A pair of gloves _____ left on the bench.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"A pair of" takes a singular verb (verb agrees with "pair"): "was".'
  },
  {
    id: 394,
    category: 'Concord',
    question: 'The means by which success _____ achieved vary.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'were'
    ],
    correctAnswer: 0,
    explanation: 'When "means" refers to a method (singular), use a singular verb: "is".'
  },
  {
    id: 395,
    category: 'Concord',
    question: 'The synopsis _____ helpful for understanding the book.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Synopsis" (singular) takes a singular verb: "is". The plural is "synopses".'
  },
  {
    id: 396,
    category: 'Concord',
    question: 'Ninety percent of the work _____ completed.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctAnswer: 1,
    explanation: 'When a percentage refers to an uncountable noun (work), use a singular verb: "was".'
  },
  {
    id: 397,
    category: 'Concord',
    question: 'The larvae _____ developing into adults.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Larvae" is the plural of "larva". Use the plural verb "are".'
  },
  {
    id: 398,
    category: 'Concord',
    question: 'Either the book or the articles _____ required reading.',
    instruction: 'Apply the rule of proximity - the verb should agree with the nearest subject.',
    options: [
      'is',
      'are',
      'was',
      'has been'
    ],
    correctAnswer: 1,
    explanation: 'With "either...or", the verb agrees with the nearest subject. "Articles" (plural) is nearest: "are".'
  },
  {
    id: 399,
    category: 'Concord',
    question: 'The axis of rotation _____ clearly marked.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctAnswer: 1,
    explanation: '"Axis" (singular) takes a singular verb: "is". The plural is "axes".'
  },
  {
    id: 400,
    category: 'Concord',
    question: 'The contents of the report _____ surprising.',
    instruction: 'Choose the verb form that agrees with the subject in number and person.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctAnswer: 1,
    explanation: '"Contents" (plural) takes a plural verb: "were".'
  },

  // PARALLELISM - Extended Questions (401-460) - 60 questions
  {
    id: 401,
    category: 'Parallelism',
    question: 'The project requires careful planning, thorough research, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to execute precisely',
      'precise execution',
      'executing precisely',
      'it must be executed precisely'
    ],
    correctAnswer: 1,
    explanation: 'Parallel structure requires all items in the series to have the same form. "Planning" and "research" are nouns, so "execution" (noun) maintains parallelism.'
  },
  {
    id: 402,
    category: 'Parallelism',
    question: 'She enjoys swimming, cycling, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to run',
      'runs',
      'running',
      'she runs'
    ],
    correctAnswer: 2,
    explanation: 'The gerunds "swimming" and "cycling" require "running" to maintain parallel structure.'
  },
  {
    id: 403,
    category: 'Parallelism',
    question: 'The instructor explained the concept, demonstrated the technique, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'answering questions',
      'answered questions',
      'to answer questions',
      'questions were answered'
    ],
    correctAnswer: 1,
    explanation: 'All verbs in the series are in past tense: "explained", "demonstrated", "answered".'
  },
  {
    id: 404,
    category: 'Parallelism',
    question: 'The position demands someone who is reliable, who is creative, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'has initiative',
      'with initiative',
      'who has initiative',
      'initiative is needed'
    ],
    correctAnswer: 2,
    explanation: 'Each clause begins with "who is/has" for parallel structure.'
  },
  {
    id: 405,
    category: 'Parallelism',
    question: 'Effective communication requires not only speaking clearly but also _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to listen actively',
      'listening actively',
      'active listening',
      'you should listen actively'
    ],
    correctAnswer: 1,
    explanation: '"Not only...but also" requires parallel forms. "Speaking" (gerund) pairs with "listening" (gerund).'
  },
  {
    id: 406,
    category: 'Parallelism',
    question: 'The research involved collecting data, analyzing results, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to draw conclusions',
      'drawing conclusions',
      'conclusions were drawn',
      'we drew conclusions'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "collecting" and "analyzing" require "drawing" for parallelism.'
  },
  {
    id: 407,
    category: 'Parallelism',
    question: 'The manager is responsible for hiring staff, training employees, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to evaluate performance',
      'evaluating performance',
      'performance evaluation',
      'performance is evaluated'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "hiring" and "training" require "evaluating" to maintain parallel structure.'
  },
  {
    id: 408,
    category: 'Parallelism',
    question: 'He is known for his intelligence, his dedication, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'being creative',
      'his creativity',
      'he is creative',
      'creativity'
    ],
    correctAnswer: 1,
    explanation: 'Each noun is preceded by the possessive "his": "his intelligence", "his dedication", "his creativity".'
  },
  {
    id: 409,
    category: 'Parallelism',
    question: 'The study aimed to identify problems, to propose solutions, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'implementing changes',
      'to implement changes',
      'changes should be implemented',
      'the implementation of changes'
    ],
    correctAnswer: 1,
    explanation: 'Infinitives "to identify" and "to propose" require "to implement" for parallelism.'
  },
  {
    id: 410,
    category: 'Parallelism',
    question: 'She prefers reading books to _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'watch movies',
      'watching movies',
      'movies',
      'she watches movies'
    ],
    correctAnswer: 1,
    explanation: 'The gerund "reading" requires another gerund "watching" after "to" in this comparison.'
  },
  {
    id: 411,
    category: 'Parallelism',
    question: 'The company values honesty, integrity, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'being accountable',
      'accountability',
      'to be accountable',
      'accountable behavior'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "honesty" and "integrity" require "accountability" to maintain parallelism.'
  },
  {
    id: 412,
    category: 'Parallelism',
    question: 'To succeed, you must work hard, stay focused, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'maintaining motivation',
      'maintain motivation',
      'motivation is maintained',
      'to maintain motivation'
    ],
    correctAnswer: 1,
    explanation: 'Base form verbs "work" and "stay" require "maintain" for parallel structure.'
  },
  {
    id: 413,
    category: 'Parallelism',
    question: 'The workshop covered writing effectively, speaking confidently, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to present professionally',
      'presenting professionally',
      'professional presentation',
      'how to present professionally'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "writing" and "speaking" require "presenting" to maintain parallelism.'
  },
  {
    id: 414,
    category: 'Parallelism',
    question: 'Neither the preparation nor the _____ was adequate.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'executing',
      'execution',
      'to execute',
      'how it was executed'
    ],
    correctAnswer: 1,
    explanation: '"Neither...nor" joins two nouns: "preparation" and "execution".'
  },
  {
    id: 415,
    category: 'Parallelism',
    question: 'The athlete trains by running daily, lifting weights regularly, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'she swims weekly',
      'swimming weekly',
      'to swim weekly',
      'weekly swimming'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "running" and "lifting" require "swimming" for parallel structure.'
  },
  {
    id: 416,
    category: 'Parallelism',
    question: 'The advantages of the plan include cost savings, time efficiency, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'improving quality',
      'quality improvement',
      'to improve quality',
      'improved quality'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "cost savings" and "time efficiency" require "quality improvement".'
  },
  {
    id: 417,
    category: 'Parallelism',
    question: 'She is skilled at designing graphics, writing content, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to manage projects',
      'managing projects',
      'project management',
      'she manages projects'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "designing" and "writing" require "managing" to maintain parallelism.'
  },
  {
    id: 418,
    category: 'Parallelism',
    question: 'The process involves initial assessment, detailed planning, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to implement systematically',
      'systematic implementation',
      'implementing systematically',
      'it is implemented systematically'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "initial assessment" and "detailed planning" require "systematic implementation".'
  },
  {
    id: 419,
    category: 'Parallelism',
    question: 'He was praised for his innovation, his perseverance, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'leading effectively',
      'his leadership',
      'he leads well',
      'leadership skills'
    ],
    correctAnswer: 1,
    explanation: 'Possessive pronouns preceding nouns: "his innovation", "his perseverance", "his leadership".'
  },
  {
    id: 420,
    category: 'Parallelism',
    question: 'The goals are to increase revenue, to reduce costs, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'improving efficiency',
      'to improve efficiency',
      'efficiency improvement',
      'we improve efficiency'
    ],
    correctAnswer: 1,
    explanation: 'Infinitives "to increase" and "to reduce" require "to improve" for parallelism.'
  },
  {
    id: 421,
    category: 'Parallelism',
    question: 'The committee reviewed the proposal, discussed the implications, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'making recommendations',
      'made recommendations',
      'to make recommendations',
      'recommendations were made'
    ],
    correctAnswer: 1,
    explanation: 'Past tense verbs "reviewed" and "discussed" require "made" for parallel structure.'
  },
  {
    id: 422,
    category: 'Parallelism',
    question: 'They succeeded through hard work, careful planning, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'they persisted',
      'persistent effort',
      'persisting',
      'to persist'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "hard work" and "careful planning" require "persistent effort".'
  },
  {
    id: 423,
    category: 'Parallelism',
    question: 'The program teaches students to think critically, to write clearly, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'communicating effectively',
      'to communicate effectively',
      'effective communication',
      'they communicate effectively'
    ],
    correctAnswer: 1,
    explanation: 'Infinitives "to think" and "to write" require "to communicate" for parallelism.'
  },
  {
    id: 424,
    category: 'Parallelism',
    question: 'She contributes by sharing ideas, offering feedback, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to support colleagues',
      'supporting colleagues',
      'colleague support',
      'she supports colleagues'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "sharing" and "offering" require "supporting" to maintain parallelism.'
  },
  {
    id: 425,
    category: 'Parallelism',
    question: 'The challenges include limited resources, tight deadlines, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'high expectations exist',
      'high expectations',
      'expecting highly',
      'to expect highly'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "limited resources" and "tight deadlines" require "high expectations".'
  },
  {
    id: 426,
    category: 'Parallelism',
    question: 'Effective leadership requires vision, courage, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to be decisive',
      'decisiveness',
      'deciding well',
      'making decisions'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "vision" and "courage" require "decisiveness" for parallelism.'
  },
  {
    id: 427,
    category: 'Parallelism',
    question: 'The course covers basic concepts, advanced techniques, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'applying practically',
      'practical application',
      'to apply practically',
      'how to apply'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "basic concepts" and "advanced techniques" require "practical application".'
  },
  {
    id: 428,
    category: 'Parallelism',
    question: 'The scientist hypothesized, experimented, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'drawing conclusions',
      'concluded',
      'to conclude',
      'conclusions were drawn'
    ],
    correctAnswer: 1,
    explanation: 'Past tense verbs "hypothesized" and "experimented" require "concluded".'
  },
  {
    id: 429,
    category: 'Parallelism',
    question: 'They improved by practicing regularly, seeking feedback, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to refine techniques',
      'refining techniques',
      'technique refinement',
      'they refined techniques'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "practicing" and "seeking" require "refining" for parallel structure.'
  },
  {
    id: 430,
    category: 'Parallelism',
    question: 'The qualities sought include reliability, flexibility, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'being adaptable',
      'adaptability',
      'to adapt',
      'adapting well'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "reliability" and "flexibility" require "adaptability".'
  },
  {
    id: 431,
    category: 'Parallelism',
    question: 'The presentation was informative, engaging, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'inspired people',
      'inspirational',
      'it inspired',
      'inspiring people'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "informative" and "engaging" require "inspirational" for parallelism.'
  },
  {
    id: 432,
    category: 'Parallelism',
    question: 'Success depends on setting goals, developing strategies, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to maintain focus',
      'maintaining focus',
      'focus maintenance',
      'one maintains focus'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "setting" and "developing" require "maintaining" for parallel structure.'
  },
  {
    id: 433,
    category: 'Parallelism',
    question: 'The report is comprehensive, accurate, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'presenting well',
      'well-presented',
      'presents well',
      'a good presentation'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "comprehensive" and "accurate" require "well-presented" for parallelism.'
  },
  {
    id: 434,
    category: 'Parallelism',
    question: 'The responsibilities include managing budgets, supervising staff, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to coordinate projects',
      'coordinating projects',
      'project coordination',
      'projects are coordinated'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "managing" and "supervising" require "coordinating" to maintain parallelism.'
  },
  {
    id: 435,
    category: 'Parallelism',
    question: 'The solution is practical, cost-effective, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'implementing easily',
      'easy to implement',
      'can be implemented easily',
      'implementation is easy'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "practical" and "cost-effective" require "easy to implement" for parallelism.'
  },
  {
    id: 436,
    category: 'Parallelism',
    question: 'The benefits include increased productivity, improved morale, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'reducing turnover',
      'reduced turnover',
      'turnover reduction',
      'to reduce turnover'
    ],
    correctAnswer: 1,
    explanation: 'Past participles "increased" and "improved" require "reduced" for parallel structure.'
  },
  {
    id: 437,
    category: 'Parallelism',
    question: 'She excels at problem-solving, decision-making, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to communicate',
      'communication',
      'communicating',
      'she communicates'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "problem-solving" and "decision-making" require "communication".'
  },
  {
    id: 438,
    category: 'Parallelism',
    question: 'The team demonstrated creativity, collaboration, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'committing to excellence',
      'commitment',
      'they were committed',
      'to commit'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "creativity" and "collaboration" require "commitment" for parallelism.'
  },
  {
    id: 439,
    category: 'Parallelism',
    question: 'Learning occurs through observation, practice, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to reflect',
      'reflection',
      'reflecting',
      'we reflect'
    ],
    correctAnswer: 1,
    explanation: 'Nouns "observation" and "practice" require "reflection" to maintain parallelism.'
  },
  {
    id: 440,
    category: 'Parallelism',
    question: 'The strategy involves identifying opportunities, assessing risks, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to allocate resources',
      'allocating resources',
      'resource allocation',
      'resources are allocated'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "identifying" and "assessing" require "allocating" for parallel structure.'
  },
  {
    id: 441,
    category: 'Parallelism',
    question: 'The product is innovative, reliable, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'affords well',
      'affordable',
      'it can be afforded',
      'affordability'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "innovative" and "reliable" require "affordable" for parallelism.'
  },
  {
    id: 442,
    category: 'Parallelism',
    question: 'The objectives are to enhance quality, to streamline processes, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'maximizing value',
      'to maximize value',
      'value maximization',
      'we maximize value'
    ],
    correctAnswer: 1,
    explanation: 'Infinitives "to enhance" and "to streamline" require "to maximize" for parallelism.'
  },
  {
    id: 443,
    category: 'Parallelism',
    question: 'Productivity increases through automation, optimization, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'integrating systems',
      'integration',
      'to integrate',
      'systems are integrated'
    ],
    correctAnswer: 1,
    explanation: 'Nouns "automation" and "optimization" require "integration" to maintain parallelism.'
  },
  {
    id: 444,
    category: 'Parallelism',
    question: 'The approach is systematic, thorough, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'documents well',
      'well-documented',
      'documentation is good',
      'it documents'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "systematic" and "thorough" require "well-documented" for parallelism.'
  },
  {
    id: 445,
    category: 'Parallelism',
    question: 'The requirements include technical skills, professional experience, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'demonstrating leadership',
      'leadership ability',
      'to demonstrate leadership',
      'one demonstrates leadership'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "technical skills" and "professional experience" require "leadership ability".'
  },
  {
    id: 446,
    category: 'Parallelism',
    question: 'Employees appreciate recognition, advancement opportunities, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'receiving feedback',
      'feedback',
      'to receive feedback',
      'they receive feedback'
    ],
    correctAnswer: 1,
    explanation: 'Nouns "recognition" and "opportunities" require "feedback" to maintain parallelism.'
  },
  {
    id: 447,
    category: 'Parallelism',
    question: 'The framework supports planning, implementation, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to evaluate',
      'evaluation',
      'evaluating',
      'it evaluates'
    ],
    correctAnswer: 1,
    explanation: 'Nouns "planning" and "implementation" require "evaluation" for parallel structure.'
  },
  {
    id: 448,
    category: 'Parallelism',
    question: 'The solution proved efficient, scalable, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'sustaining',
      'sustainable',
      'it sustains',
      'sustainability'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "efficient" and "scalable" require "sustainable" for parallelism.'
  },
  {
    id: 449,
    category: 'Parallelism',
    question: 'The initiative focuses on reducing waste, conserving energy, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to promote sustainability',
      'promoting sustainability',
      'sustainability promotion',
      'sustainability is promoted'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "reducing" and "conserving" require "promoting" to maintain parallelism.'
  },
  {
    id: 450,
    category: 'Parallelism',
    question: 'The design is modern, functional, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'appeals aesthetically',
      'aesthetically appealing',
      'has aesthetic appeal',
      'aesthetic'
    ],
    correctAnswer: 1,
    explanation: 'Adjectives "modern" and "functional" require "aesthetically appealing" for parallelism.'
  },
  {
    id: 451,
    category: 'Parallelism',
    question: 'The priorities are customer satisfaction, employee engagement, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'growing sustainably',
      'sustainable growth',
      'to grow sustainably',
      'growth that is sustainable'
    ],
    correctAnswer: 1,
    explanation: 'Compound nouns "customer satisfaction" and "employee engagement" require "sustainable growth".'
  },
  {
    id: 452,
    category: 'Parallelism',
    question: 'The consultant advised analyzing data, identifying trends, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to recommend actions',
      'recommending actions',
      'action recommendations',
      'actions are recommended'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "analyzing" and "identifying" require "recommending" for parallel structure.'
  },
  {
    id: 453,
    category: 'Parallelism',
    question: 'The candidate demonstrated intelligence, maturity, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'being enthusiastic',
      'enthusiasm',
      'enthusiastic behavior',
      'to be enthusiastic'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "intelligence" and "maturity" require "enthusiasm" for parallelism.'
  },
  {
    id: 454,
    category: 'Parallelism',
    question: 'The method is proven, tested, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'people trust it',
      'trusted',
      'trustworthy',
      'trust exists'
    ],
    correctAnswer: 1,
    explanation: 'Past participles "proven" and "tested" require "trusted" for parallel structure.'
  },
  {
    id: 455,
    category: 'Parallelism',
    question: 'The outcomes include better results, greater efficiency, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'satisfaction increases',
      'increased satisfaction',
      'increasing satisfaction',
      'to increase satisfaction'
    ],
    correctAnswer: 1,
    explanation: 'Comparative adjective + noun structure: "better results", "greater efficiency", "increased satisfaction".'
  },
  {
    id: 456,
    category: 'Parallelism',
    question: 'The principles emphasize transparency, accountability, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'being fair',
      'fairness',
      'fair treatment',
      'to be fair'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "transparency" and "accountability" require "fairness" for parallelism.'
  },
  {
    id: 457,
    category: 'Parallelism',
    question: 'The system enables tracking progress, measuring outcomes, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to generate reports',
      'generating reports',
      'report generation',
      'reports are generated'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "tracking" and "measuring" require "generating" to maintain parallelism.'
  },
  {
    id: 458,
    category: 'Parallelism',
    question: 'The conference featured presentations, workshops, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'networking occurred',
      'networking sessions',
      'people networked',
      'to network'
    ],
    correctAnswer: 1,
    explanation: 'Plural nouns "presentations" and "workshops" require "networking sessions".'
  },
  {
    id: 459,
    category: 'Parallelism',
    question: 'The process requires patience, persistence, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'focusing',
      'focus',
      'to focus',
      'being focused'
    ],
    correctAnswer: 1,
    explanation: 'Abstract nouns "patience" and "persistence" require "focus" for parallelism.'
  },
  {
    id: 460,
    category: 'Parallelism',
    question: 'The team achieved success by communicating openly, collaborating effectively, and _____.',
    instruction: 'Complete the sentence maintaining parallel structure with the existing elements.',
    options: [
      'to adapt quickly',
      'adapting quickly',
      'quick adaptation',
      'they adapted quickly'
    ],
    correctAnswer: 1,
    explanation: 'Gerunds "communicating" and "collaborating" require "adapting" to maintain parallelism.'
  },

  // MECHANICS - Extended Questions (461-520) - 60 questions
  {
    id: 461,
    category: 'Mechanics',
    question: 'Which sentence is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Professor lectured on European History.',
      'The professor lectured on european history.',
      'The professor lectured on European history.',
      'The Professor lectured on european history.'
    ],
    correctAnswer: 2,
    explanation: 'Job titles are lowercase when used generically. Proper adjectives (European) are capitalized. General subjects (history) are lowercase.'
  },
  {
    id: 462,
    category: 'Mechanics',
    question: 'Identify the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'accomodate',
      'accommodate',
      'acommodate',
      'acomodate'
    ],
    correctAnswer: 1,
    explanation: '"Accommodate" has two c\'s and two m\'s. Remember: "accommodate" can accommodate two c\'s and two m\'s.'
  },
  {
    id: 463,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'We visited aunt Sarah in the Spring.',
      'We visited Aunt Sarah in the spring.',
      'We visited Aunt sarah in the Spring.',
      'We visited aunt sarah in the spring.'
    ],
    correctAnswer: 1,
    explanation: 'Family titles are capitalized when used as names (Aunt Sarah). Seasons are lowercase unless part of a proper noun.'
  },
  {
    id: 464,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'recieve',
      'receeve',
      'receive',
      'receve'
    ],
    correctAnswer: 2,
    explanation: '"Receive" follows the rule: I before E except after C.'
  },
  {
    id: 465,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Company\'s Headquarters is in New York City.',
      'The company\'s headquarters is in new york city.',
      'The Company\'s headquarters is in New York City.',
      'The company\'s headquarters is in New York City.'
    ],
    correctAnswer: 3,
    explanation: 'Generic terms (company, headquarters) are lowercase. Proper nouns (city names) are capitalized.'
  },
  {
    id: 466,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'occurance',
      'occurence',
      'occurrence',
      'occurrance'
    ],
    correctAnswer: 2,
    explanation: '"Occurrence" doubles the R before adding -ence. When adding suffixes to words ending in a consonant, often double the consonant.'
  },
  {
    id: 467,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She studies Biology and Chemistry at University.',
      'She studies biology and chemistry at university.',
      'She Studies Biology And Chemistry At University.',
      'She studies Biology and chemistry at University.'
    ],
    correctAnswer: 1,
    explanation: 'When used as general fields of study (not course titles), academic subjects are lowercase. "University" is lowercase when used generically.'
  },
  {
    id: 468,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'seperate',
      'separate',
      'seperete',
      'seprate'
    ],
    correctAnswer: 1,
    explanation: '"Separate" contains "par" in the middle. Remember: there\'s "a rat" in separate.'
  },
  {
    id: 469,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The President announced the new Policy.',
      'The president announced the new policy.',
      'The President announced the new policy.',
      'The president announced the New Policy.'
    ],
    correctAnswer: 1,
    explanation: 'Titles are lowercase when used generically (not referring to a specific president). Common nouns (policy) are lowercase.'
  },
  {
    id: 470,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'definately',
      'definitly',
      'definitely',
      'definatly'
    ],
    correctAnswer: 2,
    explanation: '"Definitely" comes from "definite" + -ly. Remember: there\'s "finite" in definitely.'
  },
  {
    id: 471,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'I have a Doctor\'s appointment on Tuesday.',
      'I have a doctor\'s appointment on Tuesday.',
      'I have a Doctor\'s Appointment on tuesday.',
      'I have a doctor\'s Appointment on Tuesday.'
    ],
    correctAnswer: 1,
    explanation: 'Professions are lowercase when used generically. Days of the week are always capitalized.'
  },
  {
    id: 472,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'liason',
      'liazon',
      'liaison',
      'liasion'
    ],
    correctAnswer: 2,
    explanation: '"Liaison" has two i\'s and one s. It follows French spelling patterns.'
  },
  {
    id: 473,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The committee met in the Conference Room on the Third Floor.',
      'The Committee met in the conference room on the third floor.',
      'The committee met in the conference room on the third floor.',
      'The Committee met in the Conference Room on the Third Floor.'
    ],
    correctAnswer: 2,
    explanation: 'Generic terms (committee, conference room, floor number) are lowercase unless they are proper names.'
  },
  {
    id: 474,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'necesary',
      'neccessary',
      'necessary',
      'neccesary'
    ],
    correctAnswer: 2,
    explanation: '"Necessary" has one C and two S\'s. Remember: one collar and two sleeves.'
  },
  {
    id: 475,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'My Mother speaks French fluently.',
      'My mother speaks french fluently.',
      'My mother speaks French fluently.',
      'My Mother speaks french fluently.'
    ],
    correctAnswer: 2,
    explanation: 'Family terms with possessive pronouns (my mother) are lowercase. Language names are always capitalized.'
  },
  {
    id: 476,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'embarrass',
      'embarass',
      'embarras',
      'embaress'
    ],
    correctAnswer: 0,
    explanation: '"Embarrass" has two R\'s and two S\'s. Remember: really red and super shy.'
  },
  {
    id: 477,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She earned a master\'s Degree in Engineering.',
      'She earned a Master\'s degree in engineering.',
      'She earned a master\'s degree in engineering.',
      'She earned a Master\'s Degree in Engineering.'
    ],
    correctAnswer: 2,
    explanation: 'Degree names are lowercase when used generically. Capitalize only when stating the full, official degree name.'
  },
  {
    id: 478,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'milenium',
      'milennium',
      'millennium',
      'milenium'
    ],
    correctAnswer: 2,
    explanation: '"Millennium" has two N\'s and two L\'s. It comes from Latin: mille (thousand) + annum (year).'
  },
  {
    id: 479,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Board Of Directors met last Monday.',
      'The board of directors met last monday.',
      'The Board of Directors met last Monday.',
      'The board of Directors met last Monday.'
    ],
    correctAnswer: 2,
    explanation: 'Capitalize all major words in official titles. Days of the week are always capitalized.'
  },
  {
    id: 480,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'concensus',
      'consensus',
      'concencus',
      'consencus'
    ],
    correctAnswer: 1,
    explanation: '"Consensus" has an S in the middle, not a C. It comes from Latin "consentire" (to agree).'
  },
  {
    id: 481,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Federal Government passed new legislation.',
      'The federal government passed new legislation.',
      'The Federal government passed new Legislation.',
      'The federal Government passed new legislation.'
    ],
    correctAnswer: 1,
    explanation: 'When used generically (not as an official title), "federal government" is lowercase. Common nouns like "legislation" are lowercase.'
  },
  {
    id: 482,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'maintainance',
      'maintenance',
      'maintenence',
      'maintainence'
    ],
    correctAnswer: 1,
    explanation: '"Maintenance" comes from "maintain" + -enance (not -ance as you might expect).'
  },
  {
    id: 483,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'We traveled South to visit the coast.',
      'We traveled south to visit the Coast.',
      'We traveled south to visit the coast.',
      'We Traveled South to visit the Coast.'
    ],
    correctAnswer: 2,
    explanation: 'Directions are lowercase when indicating direction (not regions). Common nouns like "coast" are lowercase.'
  },
  {
    id: 484,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'perseverence',
      'perseverance',
      'perserverance',
      'perserverence'
    ],
    correctAnswer: 1,
    explanation: '"Perseverance" ends in -ance. Remember: persevere + -ance.'
  },
  {
    id: 485,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Department of Education released a Statement.',
      'The department of education released a statement.',
      'The Department of Education released a statement.',
      'The department of Education released a Statement.'
    ],
    correctAnswer: 2,
    explanation: 'Official government departments are capitalized. Common nouns like "statement" are lowercase.'
  },
  {
    id: 486,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'priviledge',
      'privilage',
      'privilege',
      'privlege'
    ],
    correctAnswer: 2,
    explanation: '"Privilege" has no D and ends in -lege. Remember: "I" before "lege".'
  },
  {
    id: 487,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Novel was adapted into a Film.',
      'The novel was adapted into a film.',
      'The Novel was adapted into a film.',
      'The novel was adapted into a Film.'
    ],
    correctAnswer: 1,
    explanation: 'Common nouns like "novel" and "film" are lowercase unless they are part of a title.'
  },
  {
    id: 488,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'questionaire',
      'questionnaire',
      'questionairre',
      'questionair'
    ],
    correctAnswer: 1,
    explanation: '"Questionnaire" has two N\'s and ends in -aire. It follows French spelling patterns.'
  },
  {
    id: 489,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The United Nations held a summit in Geneva, Switzerland.',
      'The united nations held a summit in geneva, switzerland.',
      'The United nations held a Summit in Geneva, Switzerland.',
      'The United Nations held a Summit in geneva, Switzerland.'
    ],
    correctAnswer: 0,
    explanation: 'Organization names and place names are capitalized. Common nouns like "summit" are lowercase.'
  },
  {
    id: 490,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'aquaintance',
      'acquaintence',
      'acquaintance',
      'aquaintence'
    ],
    correctAnswer: 2,
    explanation: '"Acquaintance" has a C after the A and ends in -ance. Remember: "I" before "nt".'
  },
  {
    id: 491,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Treaty was signed in the Fall of 1945.',
      'The treaty was signed in the fall of 1945.',
      'The Treaty was signed in the fall of 1945.',
      'The treaty was signed in the Fall of 1945.'
    ],
    correctAnswer: 1,
    explanation: 'Common nouns like "treaty" are lowercase. Seasons are lowercase unless part of a proper noun.'
  },
  {
    id: 492,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'exagerate',
      'exaggerate',
      'exaggarate',
      'exaggerete'
    ],
    correctAnswer: 1,
    explanation: '"Exaggerate" has two G\'s. Remember: exaggeration adds extra letters.'
  },
  {
    id: 493,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She works for microsoft Corporation.',
      'She works for Microsoft Corporation.',
      'She works for Microsoft corporation.',
      'She works for microsoft corporation.'
    ],
    correctAnswer: 1,
    explanation: 'Company names and their designations (Corporation, Inc., etc.) are capitalized.'
  },
  {
    id: 494,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'calender',
      'calandar',
      'calendar',
      'calander'
    ],
    correctAnswer: 2,
    explanation: '"Calendar" ends in -ar (not -er). Remember: "dar" at the end.'
  },
  {
    id: 495,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Museum opens at 10 AM.',
      'The museum opens at 10 am.',
      'The museum opens at 10 AM.',
      'The Museum opens at 10 am.'
    ],
    correctAnswer: 2,
    explanation: 'Generic terms (museum) are lowercase unless it\'s a proper name. Time abbreviations (AM/PM) are capitalized.'
  },
  {
    id: 496,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'wierd',
      'weard',
      'weird',
      'weerd'
    ],
    correctAnswer: 2,
    explanation: '"Weird" is one of the exceptions to "I before E except after C." Remember: we\'re weird.'
  },
  {
    id: 497,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Mayor addressed the City Council.',
      'The mayor addressed the city council.',
      'The Mayor addressed the city council.',
      'The mayor addressed the City Council.'
    ],
    correctAnswer: 1,
    explanation: 'Titles are lowercase when used generically. Official bodies like "city council" are lowercase when used generically.'
  },
  {
    id: 498,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'pharoah',
      'pharaoh',
      'pharoah',
      'pharoh'
    ],
    correctAnswer: 1,
    explanation: '"Pharaoh" has an A before the O. It comes from Egyptian through Greek and Latin.'
  },
  {
    id: 499,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Article was published in the Journal of Medicine.',
      'The article was published in the Journal Of Medicine.',
      'The article was published in the Journal of Medicine.',
      'The Article was published in the journal of medicine.'
    ],
    correctAnswer: 2,
    explanation: 'Common nouns (article) are lowercase. Publication titles are capitalized (all major words), with minor words like "of" lowercase.'
  },
  {
    id: 500,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'mischievous',
      'mischievious',
      'mischeivous',
      'mischevious'
    ],
    correctAnswer: 0,
    explanation: '"Mischievous" has no second I before the O. It\'s pronounced MIS-chi-vus (three syllables).'
  },
  {
    id: 501,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'He celebrated his Birthday in december.',
      'He celebrated his birthday in December.',
      'He celebrated his Birthday in December.',
      'He celebrated his birthday in december.'
    ],
    correctAnswer: 1,
    explanation: 'Common nouns like "birthday" are lowercase. Months are always capitalized.'
  },
  {
    id: 502,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'arguement',
      'argument',
      'arguament',
      'arguemant'
    ],
    correctAnswer: 1,
    explanation: '"Argument" drops the E from "argue" before adding -ment.'
  },
  {
    id: 503,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Supreme court ruled on the case.',
      'The supreme Court ruled on the case.',
      'The Supreme Court ruled on the case.',
      'The supreme court ruled on the case.'
    ],
    correctAnswer: 2,
    explanation: 'Official court names are capitalized: "Supreme Court".'
  },
  {
    id: 504,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'judgement',
      'judgemant',
      'judgment',
      'judgmant'
    ],
    correctAnswer: 2,
    explanation: 'In American English, "judgment" typically drops the E. British English accepts "judgement".'
  },
  {
    id: 505,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She read the Bible and the Quran.',
      'She read the bible and the quran.',
      'She read the Bible and the quran.',
      'She read the bible and the Quran.'
    ],
    correctAnswer: 0,
    explanation: 'Religious texts are always capitalized: Bible, Quran, Torah, etc.'
  },
  {
    id: 506,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'bennefit',
      'benifit',
      'benefit',
      'bennefit'
    ],
    correctAnswer: 2,
    explanation: '"Benefit" has one N and one F in the middle. Remember: fit to benefit.'
  },
  {
    id: 507,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Hurricane caused extensive damage along the Coast.',
      'The hurricane caused extensive damage along the coast.',
      'The Hurricane caused extensive damage along the coast.',
      'The hurricane caused extensive damage along the Coast.'
    ],
    correctAnswer: 1,
    explanation: 'Common nouns (hurricane, coast) are lowercase unless part of a proper name (Hurricane Katrina).'
  },
  {
    id: 508,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'apparant',
      'aparent',
      'apparent',
      'apparrent'
    ],
    correctAnswer: 2,
    explanation: '"Apparent" has two P\'s and one R. Remember: it appears with double P.'
  },
  {
    id: 509,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Company CEO announced the merger.',
      'The company CEO announced the merger.',
      'The Company ceo announced the merger.',
      'The company ceo announced the merger.'
    ],
    correctAnswer: 1,
    explanation: 'Generic terms (company) are lowercase. Acronyms and initialisms (CEO) are always capitalized.'
  },
  {
    id: 510,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'paralell',
      'paralel',
      'parallel',
      'parrallel'
    ],
    correctAnswer: 2,
    explanation: '"Parallel" has two L\'s at the end. Remember: parallel lines have two L\'s.'
  },
  {
    id: 511,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'They drove North through the Rocky mountains.',
      'They drove north through the Rocky Mountains.',
      'They drove North through the Rocky Mountains.',
      'They drove north through the rocky mountains.'
    ],
    correctAnswer: 1,
    explanation: 'Directions are lowercase when indicating direction. Proper geographical names (Rocky Mountains) are capitalized.'
  },
  {
    id: 512,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'goverment',
      'government',
      'governmant',
      'govenment'
    ],
    correctAnswer: 1,
    explanation: '"Government" has an N before the M. Remember: govern + ment.'
  },
  {
    id: 513,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Statue Of Liberty is in New York.',
      'The statue of liberty is in new york.',
      'The Statue of Liberty is in New York.',
      'The statue of Liberty is in New York.'
    ],
    correctAnswer: 2,
    explanation: 'Monument names have all major words capitalized, with minor words (of) lowercase.'
  },
  {
    id: 514,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'independant',
      'independnt',
      'independent',
      'independet'
    ],
    correctAnswer: 2,
    explanation: '"Independent" ends in -ent (not -ant). Remember: depend + ent.'
  },
  {
    id: 515,
    category: 'Mechanics',
    question: 'Which sentence has correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'She won an Academy award for best actress.',
      'She won an academy award for best actress.',
      'She won an Academy Award for best actress.',
      'She won an Academy Award for Best Actress.'
    ],
    correctAnswer: 3,
    explanation: 'Award names and their categories are fully capitalized: "Academy Award for Best Actress".'
  },
  {
    id: 516,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'existance',
      'existense',
      'existence',
      'existince'
    ],
    correctAnswer: 2,
    explanation: '"Existence" ends in -ence (not -ance). Remember: exist + ence.'
  },
  {
    id: 517,
    category: 'Mechanics',
    question: 'Which is correctly capitalized?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Minister of foreign affairs visited Canada.',
      'The minister of Foreign Affairs visited canada.',
      'The Minister of Foreign Affairs visited Canada.',
      'The minister of foreign affairs visited Canada.'
    ],
    correctAnswer: 2,
    explanation: 'Official government positions are capitalized. Country names are always capitalized.'
  },
  {
    id: 518,
    category: 'Mechanics',
    question: 'Identify the correct spelling:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'recomend',
      'reccommend',
      'recommend',
      'recomand'
    ],
    correctAnswer: 2,
    explanation: '"Recommend" has one C and two M\'s. Remember: I recommend two M\'s.'
  },
  {
    id: 519,
    category: 'Mechanics',
    question: 'Which sentence uses correct capitalization?',
    instruction: 'Apply proper capitalization rules for proper nouns, titles, and sentence beginnings.',
    options: [
      'The Internet has transformed global Communication.',
      'The internet has transformed global communication.',
      'The Internet has transformed global communication.',
      'The internet has transformed Global Communication.'
    ],
    correctAnswer: 1,
    explanation: 'In modern usage, "internet" is lowercase. Common nouns like "communication" are lowercase.'
  },
  {
    id: 520,
    category: 'Mechanics',
    question: 'Select the correctly spelled word:',
    instruction: 'Identify the correct spelling from the options provided.',
    options: [
      'tommorrow',
      'tommorow',
      'tomorrow',
      'tomarrow'
    ],
    correctAnswer: 2,
    explanation: '"Tomorrow" has one M and two R\'s. Remember: "to" + "morrow".'
  },

  // STYLISTIC VARIATION - Extended Questions (521-563) - 43 questions
  {
    id: 521,
    category: 'Stylistic Variation',
    question: 'Choose the more formal alternative: "The meeting was put off."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The meeting was delayed.',
      'The meeting was postponed.',
      'The meeting got pushed back.',
      'They put off the meeting.'
    ],
    correctAnswer: 1,
    explanation: '"Postponed" is the most formal term. "Put off" and "pushed back" are informal phrasal verbs.'
  },
  {
    id: 522,
    category: 'Stylistic Variation',
    question: 'Select the appropriate informal version: "The candidate possessed exceptional qualifications."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The candidate had great qualifications.',
      'The candidate boasted exceptional qualifications.',
      'The candidate was really qualified.',
      'The candidate had awesome qualifications.'
    ],
    correctAnswer: 0,
    explanation: '"Had" is simpler and less formal than "possessed". "Great" is appropriately informal without being too casual.'
  },
  {
    id: 523,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "They need to figure out the problem."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'They need to work out the problem.',
      'They need to solve the problem.',
      'They need to determine a solution to the problem.',
      'They gotta fix the problem.'
    ],
    correctAnswer: 2,
    explanation: '"Determine a solution" is the most formal. "Figure out" and "work out" are informal phrasal verbs.'
  },
  {
    id: 524,
    category: 'Stylistic Variation',
    question: 'Choose the informal equivalent: "The proposal was rejected."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The proposal was turned down.',
      'The proposal experienced rejection.',
      'The proposal was denied.',
      'They said no to the proposal.'
    ],
    correctAnswer: 0,
    explanation: '"Turned down" is an informal phrasal verb. "Rejected" and "denied" are formal, while "said no" is too casual.'
  },
  {
    id: 525,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The company got rid of unnecessary expenses."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The company cut unnecessary expenses.',
      'The company eliminated unnecessary expenses.',
      'The company ditched unnecessary expenses.',
      'The company removed unnecessary expenses.'
    ],
    correctAnswer: 1,
    explanation: '"Eliminated" is the most formal. "Got rid of" and "ditched" are informal, while "removed" is semi-formal.'
  },
  {
    id: 526,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The research was conducted meticulously."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The research was done carefully.',
      'The research was performed meticulously.',
      'The research was executed with precision.',
      'The research was undertaken carefully.'
    ],
    correctAnswer: 0,
    explanation: '"Done" is simpler and less formal than "conducted". "Carefully" is less formal than "meticulously".'
  },
  {
    id: 527,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The results back up our hypothesis."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The results support our hypothesis.',
      'The results confirm our hypothesis.',
      'The results corroborate our hypothesis.',
      'The results prove our hypothesis.'
    ],
    correctAnswer: 2,
    explanation: '"Corroborate" is the most formal term. "Back up" is an informal phrasal verb.'
  },
  {
    id: 528,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The committee commenced deliberations."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The committee started discussions.',
      'The committee began deliberations.',
      'The committee initiated dialogue.',
      'The committee undertook discussions.'
    ],
    correctAnswer: 0,
    explanation: '"Started" and "discussions" are less formal than "commenced" and "deliberations".'
  },
  {
    id: 529,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "We need to look into this issue."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'We need to check out this issue.',
      'We need to investigate this issue.',
      'We need to examine this matter.',
      'We need to inquire into this issue.'
    ],
    correctAnswer: 3,
    explanation: '"Inquire into" is the most formal. "Look into" and "check out" are informal phrasal verbs.'
  },
  {
    id: 530,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The organization endeavored to enhance efficiency."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The organization tried to improve efficiency.',
      'The organization attempted to enhance efficiency.',
      'The organization sought to improve efficiency.',
      'The organization strove to enhance efficiency.'
    ],
    correctAnswer: 0,
    explanation: '"Tried" and "improve" are simpler and less formal than "endeavored" and "enhance".'
  },
  {
    id: 531,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The plan fell through."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The plan didn\'t work out.',
      'The plan failed.',
      'The plan was unsuccessful.',
      'The plan collapsed.'
    ],
    correctAnswer: 2,
    explanation: '"Was unsuccessful" is the most formal. "Fell through" is an informal phrasal verb.'
  },
  {
    id: 532,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The evidence substantiates the claim."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The evidence supports the claim.',
      'The evidence validates the claim.',
      'The evidence confirms the claim.',
      'The evidence backs the claim.'
    ],
    correctAnswer: 3,
    explanation: '"Backs" is less formal than "substantiates". All support the meaning, but "backs" is most casual.'
  },
  {
    id: 533,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "They came up with a solution."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'They found a solution.',
      'They devised a solution.',
      'They developed a solution.',
      'They formulated a solution.'
    ],
    correctAnswer: 3,
    explanation: '"Formulated" is the most formal. "Came up with" is an informal phrasal verb.'
  },
  {
    id: 534,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The participants assembled in the auditorium."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The participants gathered in the auditorium.',
      'The participants convened in the auditorium.',
      'The participants congregated in the auditorium.',
      'The participants met up in the auditorium.'
    ],
    correctAnswer: 0,
    explanation: '"Gathered" is less formal than "assembled". "Met up" is too casual for most contexts.'
  },
  {
    id: 535,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "The report points out several problems."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The report shows several problems.',
      'The report highlights several problems.',
      'The report identifies several problems.',
      'The report delineates several deficiencies.'
    ],
    correctAnswer: 3,
    explanation: '"Delineates several deficiencies" is the most formal. "Points out" is an informal phrasal verb.'
  },
  {
    id: 536,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The legislation was rescinded."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The legislation was repealed.',
      'The legislation was revoked.',
      'The legislation was canceled.',
      'The legislation was withdrawn.'
    ],
    correctAnswer: 2,
    explanation: '"Canceled" is simpler and less formal than "rescinded", "repealed", or "revoked".'
  },
  {
    id: 537,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The team will work together on the project."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The team will cooperate on the project.',
      'The team will collaborate on the project.',
      'The team will join forces on the project.',
      'The team will team up on the project.'
    ],
    correctAnswer: 1,
    explanation: '"Collaborate" is formal and professional. "Team up" and "join forces" are informal.'
  },
  {
    id: 538,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The institution promulgated new guidelines."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The institution issued new guidelines.',
      'The institution announced new guidelines.',
      'The institution published new guidelines.',
      'The institution put out new guidelines.'
    ],
    correctAnswer: 3,
    explanation: '"Put out" is an informal phrasal verb. "Promulgated" is very formal.'
  },
  {
    id: 539,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The argument doesn\'t hold water."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The argument isn\'t valid.',
      'The argument lacks validity.',
      'The argument is untenable.',
      'The argument doesn\'t make sense.'
    ],
    correctAnswer: 2,
    explanation: '"Untenable" is the most formal. "Doesn\'t hold water" is an informal idiom.'
  },
  {
    id: 540,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The data corroborates our findings."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The data supports our findings.',
      'The data confirms our findings.',
      'The data backs up our findings.',
      'The data validates our findings.'
    ],
    correctAnswer: 2,
    explanation: '"Backs up" is an informal phrasal verb. "Corroborates" is formal.'
  },
  {
    id: 541,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "We need to speed up the process."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'We need to accelerate the process.',
      'We need to expedite the process.',
      'We need to hasten the process.',
      'We need to quicken the process.'
    ],
    correctAnswer: 1,
    explanation: '"Expedite" is the most formal business term. "Speed up" is an informal phrasal verb.'
  },
  {
    id: 542,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The defendant absconded from custody."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The defendant escaped from custody.',
      'The defendant fled from custody.',
      'The defendant ran away from custody.',
      'The defendant left custody.'
    ],
    correctAnswer: 2,
    explanation: '"Ran away" is the most informal. "Absconded" is formal legal terminology.'
  },
  {
    id: 543,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The policy will get rid of discrimination."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The policy will eliminate discrimination.',
      'The policy will remove discrimination.',
      'The policy will eradicate discrimination.',
      'The policy will do away with discrimination.'
    ],
    correctAnswer: 2,
    explanation: '"Eradicate" is the most formal. "Get rid of" and "do away with" are informal.'
  },
  {
    id: 544,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The findings were disseminated widely."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The findings were distributed widely.',
      'The findings were shared widely.',
      'The findings were circulated widely.',
      'The findings were spread around.'
    ],
    correctAnswer: 3,
    explanation: '"Spread around" is informal. "Disseminated" is formal academic language.'
  },
  {
    id: 545,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The study turned up interesting results."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The study found interesting results.',
      'The study revealed interesting results.',
      'The study uncovered interesting results.',
      'The study yielded interesting results.'
    ],
    correctAnswer: 3,
    explanation: '"Yielded" is the most formal. "Turned up" is an informal phrasal verb.'
  },
  {
    id: 546,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The manager terminated the employee."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The manager dismissed the employee.',
      'The manager fired the employee.',
      'The manager discharged the employee.',
      'The manager let go of the employee.'
    ],
    correctAnswer: 1,
    explanation: '"Fired" is direct and informal. "Terminated" and "discharged" are formal HR terms.'
  },
  {
    id: 547,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "The company will cut back on expenses."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The company will reduce expenses.',
      'The company will curtail expenses.',
      'The company will decrease expenses.',
      'The company will lower expenses.'
    ],
    correctAnswer: 1,
    explanation: '"Curtail" is the most formal. "Cut back on" is an informal phrasal verb.'
  },
  {
    id: 548,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The authorities apprehended the suspect."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The authorities arrested the suspect.',
      'The authorities captured the suspect.',
      'The authorities caught the suspect.',
      'The authorities detained the suspect.'
    ],
    correctAnswer: 2,
    explanation: '"Caught" is the most informal. "Apprehended" is formal police/legal terminology.'
  },
  {
    id: 549,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The government will crack down on corruption."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The government will fight corruption.',
      'The government will combat corruption.',
      'The government will suppress corruption.',
      'The government will take action against corruption.'
    ],
    correctAnswer: 2,
    explanation: '"Suppress" is formal. "Crack down on" is an informal phrasal verb.'
  },
  {
    id: 550,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The physician prescribed medication."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The doctor prescribed medication.',
      'The doctor gave medication.',
      'The doctor provided medication.',
      'The doctor ordered medication.'
    ],
    correctAnswer: 1,
    explanation: '"Gave" is simpler and less formal. "Doctor" is also less formal than "physician".'
  },
  {
    id: 551,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The project got approval."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The project received approval.',
      'The project obtained approval.',
      'The project secured approval.',
      'The project was granted approval.'
    ],
    correctAnswer: 3,
    explanation: '"Was granted approval" is the most formal passive construction. "Got" is informal.'
  },
  {
    id: 552,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The evidence substantiates the hypothesis."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The evidence supports the hypothesis.',
      'The evidence proves the hypothesis.',
      'The evidence backs the hypothesis.',
      'The evidence shows the hypothesis is right.'
    ],
    correctAnswer: 3,
    explanation: '"Shows...is right" is the most conversational. "Substantiates" is formal.'
  },
  {
    id: 553,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "They put together a comprehensive report."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'They made a comprehensive report.',
      'They created a comprehensive report.',
      'They compiled a comprehensive report.',
      'They produced a comprehensive report.'
    ],
    correctAnswer: 2,
    explanation: '"Compiled" is the most formal. "Put together" is an informal phrasal verb.'
  },
  {
    id: 554,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The corporation remunerated employees generously."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The corporation compensated employees generously.',
      'The corporation paid employees generously.',
      'The corporation rewarded employees generously.',
      'The corporation gave employees generous pay.'
    ],
    correctAnswer: 3,
    explanation: '"Gave...generous pay" is the most informal. "Remunerated" is very formal.'
  },
  {
    id: 555,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The study looked at various factors."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The study examined various factors.',
      'The study investigated various factors.',
      'The study analyzed various factors.',
      'The study scrutinized various factors.'
    ],
    correctAnswer: 3,
    explanation: '"Scrutinized" implies the most thorough, formal examination. "Looked at" is informal.'
  },
  {
    id: 556,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The committee deliberated extensively."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The committee discussed extensively.',
      'The committee talked extensively.',
      'The committee debated extensively.',
      'The committee considered extensively.'
    ],
    correctAnswer: 1,
    explanation: '"Talked" is the most informal. "Deliberated" is formal.'
  },
  {
    id: 557,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The proposal fell flat."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The proposal failed.',
      'The proposal was unsuccessful.',
      'The proposal was rejected.',
      'The proposal was not well-received.'
    ],
    correctAnswer: 3,
    explanation: '"Was not well-received" is diplomatically formal. "Fell flat" is an informal idiom.'
  },
  {
    id: 558,
    category: 'Stylistic Variation',
    question: 'Select the informal version: "The facility accommodates five hundred individuals."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The facility holds five hundred people.',
      'The facility houses five hundred people.',
      'The facility fits five hundred people.',
      'The facility seats five hundred people.'
    ],
    correctAnswer: 0,
    explanation: '"Holds" and "people" are less formal than "accommodates" and "individuals".'
  },
  {
    id: 559,
    category: 'Stylistic Variation',
    question: 'Which is more formal? "The findings match our predictions."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The findings agree with our predictions.',
      'The findings correspond to our predictions.',
      'The findings align with our predictions.',
      'The findings are consistent with our predictions.'
    ],
    correctAnswer: 3,
    explanation: '"Are consistent with" is the most formal. "Match" is simpler and less formal.'
  },
  {
    id: 560,
    category: 'Stylistic Variation',
    question: 'Choose the less formal equivalent: "The institution endeavors to foster excellence."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The institution tries to encourage excellence.',
      'The institution aims to promote excellence.',
      'The institution seeks to develop excellence.',
      'The institution works to build excellence.'
    ],
    correctAnswer: 0,
    explanation: '"Tries" and "encourage" are less formal than "endeavors" and "foster".'
  },
  {
    id: 561,
    category: 'Stylistic Variation',
    question: 'Select the formal version: "The rules will be beefed up."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The rules will be strengthened.',
      'The rules will be reinforced.',
      'The rules will be fortified.',
      'The rules will be made stricter.'
    ],
    correctAnswer: 1,
    explanation: '"Reinforced" is formal and professional. "Beefed up" is very informal slang.'
  },
  {
    id: 562,
    category: 'Stylistic Variation',
    question: 'Which is less formal? "The candidate demonstrated proficiency."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The candidate showed proficiency.',
      'The candidate exhibited proficiency.',
      'The candidate displayed proficiency.',
      'The candidate proved to be proficient.'
    ],
    correctAnswer: 0,
    explanation: '"Showed" is simpler and less formal than "demonstrated".'
  },
  {
    id: 563,
    category: 'Stylistic Variation',
    question: 'Choose the formal alternative: "The plan will pay off in the long run."',
    instruction: 'Choose language appropriate to the context, audience, and level of formality.',
    options: [
      'The plan will succeed eventually.',
      'The plan will prove beneficial ultimately.',
      'The plan will yield dividends over time.',
      'The plan will work out eventually.'
    ],
    correctAnswer: 2,
    explanation: '"Yield dividends" is formal business language. "Pay off" and "work out" are informal.'
  },

  // VOCABULARY - Extended Questions (564-586) - 23 questions
  {
    id: 564,
    category: 'Vocabulary',
    question: 'The lawyer\'s _____ arguments convinced the jury.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'cogent',
      'verbose',
      'ambiguous',
      'frivolous'
    ],
    correctAnswer: 0,
    explanation: '"Cogent" means clear, logical, and convincing. The other options suggest negative qualities: verbose (wordy), ambiguous (unclear), frivolous (not serious).'
  },
  {
    id: 565,
    category: 'Vocabulary',
    question: 'The committee chose a _____ approach to avoid controversy.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'radical',
      'circumspect',
      'reckless',
      'impetuous'
    ],
    correctAnswer: 1,
    explanation: '"Circumspect" means cautious and prudent. This fits the goal of avoiding controversy, unlike radical, reckless, or impetuous.'
  },
  {
    id: 566,
    category: 'Vocabulary',
    question: 'His _____ nature made him unsuitable for leadership.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'assertive',
      'decisive',
      'vacillating',
      'resolute'
    ],
    correctAnswer: 2,
    explanation: '"Vacillating" means indecisive, wavering. This is unsuitable for leadership, unlike assertive, decisive, or resolute.'
  },
  {
    id: 567,
    category: 'Vocabulary',
    question: 'The scientist\'s theory was _____ by extensive research.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'refuted',
      'corroborated',
      'contradicted',
      'negated'
    ],
    correctAnswer: 1,
    explanation: '"Corroborated" means confirmed or supported. Refuted, contradicted, and negated all mean the opposite.'
  },
  {
    id: 568,
    category: 'Vocabulary',
    question: 'The _____ student absorbed knowledge effortlessly.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'obtuse',
      'perspicacious',
      'apathetic',
      'indifferent'
    ],
    correctAnswer: 1,
    explanation: '"Perspicacious" means having keen insight and understanding. Obtuse (dull), apathetic (lacking interest), and indifferent don\'t fit.'
  },
  {
    id: 569,
    category: 'Vocabulary',
    question: 'Her _____ smile suggested hidden motives.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'genuine',
      'inscrutable',
      'transparent',
      'candid'
    ],
    correctAnswer: 1,
    explanation: '"Inscrutable" means mysterious or difficult to interpret. Genuine, transparent, and candid suggest openness.'
  },
  {
    id: 570,
    category: 'Vocabulary',
    question: 'The _____ politician changed positions frequently.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'steadfast',
      'principled',
      'mercurial',
      'unwavering'
    ],
    correctAnswer: 2,
    explanation: '"Mercurial" means subject to sudden changes of mood or mind. Steadfast, principled, and unwavering suggest consistency.'
  },
  {
    id: 571,
    category: 'Vocabulary',
    question: 'The report contained _____ errors that undermined its credibility.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'trivial',
      'egregious',
      'minor',
      'negligible'
    ],
    correctAnswer: 1,
    explanation: '"Egregious" means outstandingly bad or shocking. Trivial, minor, and negligible suggest unimportant errors.'
  },
  {
    id: 572,
    category: 'Vocabulary',
    question: 'The speaker\'s _____ manner alienated the audience.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'affable',
      'supercilious',
      'cordial',
      'genial'
    ],
    correctAnswer: 1,
    explanation: '"Supercilious" means arrogantly superior and disdainful. Affable, cordial, and genial suggest friendliness.'
  },
  {
    id: 573,
    category: 'Vocabulary',
    question: 'The athlete showed _____ in the face of defeat.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'cowardice',
      'pusillanimity',
      'fortitude',
      'timidity'
    ],
    correctAnswer: 2,
    explanation: '"Fortitude" means courage in pain or adversity. Cowardice, pusillanimity, and timidity suggest weakness.'
  },
  {
    id: 574,
    category: 'Vocabulary',
    question: 'The writer\'s _____ prose captivated readers.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'turgid',
      'pedestrian',
      'mellifluous',
      'clumsy'
    ],
    correctAnswer: 2,
    explanation: '"Mellifluous" means sweet-sounding and pleasant. Turgid (pompous), pedestrian (dull), and clumsy don\'t captivate.'
  },
  {
    id: 575,
    category: 'Vocabulary',
    question: 'His _____ lifestyle contrasted with his humble origins.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'austere',
      'spartan',
      'opulent',
      'frugal'
    ],
    correctAnswer: 2,
    explanation: '"Opulent" means luxurious and wealthy, contrasting with humble. Austere, spartan, and frugal suggest simplicity.'
  },
  {
    id: 576,
    category: 'Vocabulary',
    question: 'The _____ excuse was immediately dismissed.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'plausible',
      'credible',
      'specious',
      'legitimate'
    ],
    correctAnswer: 2,
    explanation: '"Specious" means superficially plausible but actually wrong. Plausible, credible, and legitimate suggest validity.'
  },
  {
    id: 577,
    category: 'Vocabulary',
    question: 'The diplomat\'s _____ response avoided giving offense.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'tactless',
      'judicious',
      'imprudent',
      'rash'
    ],
    correctAnswer: 1,
    explanation: '"Judicious" means having good judgment; wise and careful. Tactless, imprudent, and rash suggest poor judgment.'
  },
  {
    id: 578,
    category: 'Vocabulary',
    question: 'The criminal showed no _____ for his actions.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'remorse',
      'pride',
      'satisfaction',
      'pleasure'
    ],
    correctAnswer: 0,
    explanation: '"Remorse" means deep regret for wrongdoing. Pride, satisfaction, and pleasure are inappropriate for criminal actions.'
  },
  {
    id: 579,
    category: 'Vocabulary',
    question: 'The professor\'s _____ knowledge impressed colleagues.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'superficial',
      'erudite',
      'shallow',
      'limited'
    ],
    correctAnswer: 1,
    explanation: '"Erudite" means having or showing great knowledge. Superficial, shallow, and limited suggest inadequate knowledge.'
  },
  {
    id: 580,
    category: 'Vocabulary',
    question: 'The _____ nature of the problem required immediate attention.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'trivial',
      'exigent',
      'insignificant',
      'minor'
    ],
    correctAnswer: 1,
    explanation: '"Exigent" means pressing or urgent. Trivial, insignificant, and minor suggest lack of importance.'
  },
  {
    id: 581,
    category: 'Vocabulary',
    question: 'Her _____ demeanor made her approachable.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'aloof',
      'amiable',
      'hostile',
      'distant'
    ],
    correctAnswer: 1,
    explanation: '"Amiable" means friendly and pleasant. Aloof, hostile, and distant suggest unapproachability.'
  },
  {
    id: 582,
    category: 'Vocabulary',
    question: 'The witness provided a _____ account of events.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'distorted',
      'veracious',
      'fabricated',
      'false'
    ],
    correctAnswer: 1,
    explanation: '"Veracious" means truthful and accurate. Distorted, fabricated, and false suggest dishonesty.'
  },
  {
    id: 583,
    category: 'Vocabulary',
    question: 'The _____ student challenged every assumption.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'docile',
      'iconoclastic',
      'compliant',
      'submissive'
    ],
    correctAnswer: 1,
    explanation: '"Iconoclastic" means attacking cherished beliefs or institutions. Docile, compliant, and submissive suggest conformity.'
  },
  {
    id: 584,
    category: 'Vocabulary',
    question: 'The artist\'s work showed _____ creativity.',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'derivative',
      'imitative',
      'innovative',
      'conventional'
    ],
    correctAnswer: 2,
    explanation: '"Innovative" means introducing new ideas; original. Derivative, imitative, and conventional suggest lack of originality.'
  },
  {
    id: 585,
    category: 'Vocabulary',
    question: 'The _____ executive motivated the entire team.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'lethargic',
      'dynamic',
      'sluggish',
      'passive'
    ],
    correctAnswer: 1,
    explanation: '"Dynamic" means positive, energetic, and forceful. Lethargic, sluggish, and passive suggest lack of energy.'
  },
  {
    id: 586,
    category: 'Vocabulary',
    question: 'The _____ tone of the article offended many readers.',
    instruction: 'Choose the word that best fits the context and meaning of the sentence.',
    options: [
      'respectful',
      'pejorative',
      'complimentary',
      'appreciative'
    ],
    correctAnswer: 1,
    explanation: '"Pejorative" means expressing contempt or disapproval. Respectful, complimentary, and appreciative are positive.'
  },

  // COHESION & COHERENCE - Extended Questions (587-600) - 14 questions
  {
    id: 587,
    category: 'Cohesion & Coherence',
    question: 'Select the best transition: "The project was completed on time. _____, it exceeded quality expectations."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'However',
      'Therefore',
      'Moreover',
      'Conversely'
    ],
    correctAnswer: 2,
    explanation: '"Moreover" adds additional positive information. "However" and "Conversely" signal contrast, while "Therefore" signals result.'
  },
  {
    id: 588,
    category: 'Cohesion & Coherence',
    question: 'Which word best connects these ideas? "The evidence is compelling. _____, we must proceed cautiously."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Furthermore',
      'Nevertheless',
      'Similarly',
      'Consequently'
    ],
    correctAnswer: 1,
    explanation: '"Nevertheless" introduces a contrasting idea despite the preceding statement. "Furthermore" would add support rather than caution.'
  },
  {
    id: 589,
    category: 'Cohesion & Coherence',
    question: 'Choose the appropriate connector: "The theory was innovative. _____, it lacked empirical support."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Additionally',
      'Likewise',
      'However',
      'Hence'
    ],
    correctAnswer: 2,
    explanation: '"However" signals a contrast between innovation and lack of support. "Additionally" and "Likewise" add agreement.'
  },
  {
    id: 590,
    category: 'Cohesion & Coherence',
    question: 'Select the best transition: "The data was unreliable. _____, the conclusions were questionable."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Meanwhile',
      'Consequently',
      'In contrast',
      'Alternatively'
    ],
    correctAnswer: 1,
    explanation: '"Consequently" shows cause and effect: unreliable data leads to questionable conclusions.'
  },
  {
    id: 591,
    category: 'Cohesion & Coherence',
    question: 'Which connector fits best? "First-year students struggled. _____, seniors excelled."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'In contrast',
      'Furthermore',
      'As a result'
    ],
    correctAnswer: 1,
    explanation: '"In contrast" highlights the difference between the two groups\' performance.'
  },
  {
    id: 592,
    category: 'Cohesion & Coherence',
    question: 'Choose the appropriate transition: "The study identified problems. _____, it proposed solutions."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nonetheless',
      'In addition',
      'On the contrary',
      'Instead'
    ],
    correctAnswer: 1,
    explanation: '"In addition" shows that proposing solutions is an additional positive contribution beyond identifying problems.'
  },
  {
    id: 593,
    category: 'Cohesion & Coherence',
    question: 'Select the best connector: "The method was expensive. _____, it proved highly effective."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'Similarly',
      'Nevertheless',
      'Accordingly'
    ],
    correctAnswer: 2,
    explanation: '"Nevertheless" introduces a positive aspect despite the negative cost factor.'
  },
  {
    id: 594,
    category: 'Cohesion & Coherence',
    question: 'Which transition works best? "The deadline was extended. _____, the team maintained the original schedule."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Thus',
      'Moreover',
      'Nevertheless',
      'Likewise'
    ],
    correctAnswer: 2,
    explanation: '"Nevertheless" shows the team\'s action contrasts with what might be expected after an extension.'
  },
  {
    id: 595,
    category: 'Cohesion & Coherence',
    question: 'Choose the appropriate word: "The first experiment failed. _____, the second succeeded."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'Conversely',
      'Additionally',
      'Therefore'
    ],
    correctAnswer: 1,
    explanation: '"Conversely" indicates the opposite outcome between the two experiments.'
  },
  {
    id: 596,
    category: 'Cohesion & Coherence',
    question: 'Select the best transition: "The analysis revealed patterns. _____, predictions became more accurate."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Nevertheless',
      'Conversely',
      'Consequently',
      'Alternatively'
    ],
    correctAnswer: 2,
    explanation: '"Consequently" shows that improved predictions resulted from revealing patterns.'
  },
  {
    id: 597,
    category: 'Cohesion & Coherence',
    question: 'Which connector fits best? "The findings support the hypothesis. _____, they contradict previous studies."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Furthermore',
      'However',
      'Similarly',
      'Hence'
    ],
    correctAnswer: 1,
    explanation: '"However" introduces the contrasting fact that the findings contradict previous work.'
  },
  {
    id: 598,
    category: 'Cohesion & Coherence',
    question: 'Choose the appropriate transition: "The procedure was complex. _____, results were consistent."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Therefore',
      'Nonetheless',
      'Similarly',
      'Consequently'
    ],
    correctAnswer: 1,
    explanation: '"Nonetheless" shows that despite complexity, positive results were achieved.'
  },
  {
    id: 599,
    category: 'Cohesion & Coherence',
    question: 'Select the best connector: "The policy reduced costs. _____, it improved efficiency."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'However',
      'In contrast',
      'Furthermore',
      'Alternatively'
    ],
    correctAnswer: 2,
    explanation: '"Furthermore" adds another positive outcome to the first benefit mentioned.'
  },
  {
    id: 600,
    category: 'Cohesion & Coherence',
    question: 'Which transition works best? "The initial approach failed. _____, a new strategy was developed."',
    instruction: 'Select the option that best maintains cohesion and coherence in the passage.',
    options: [
      'Similarly',
      'Likewise',
      'Subsequently',
      'Nevertheless'
    ],
    correctAnswer: 2,
    explanation: '"Subsequently" indicates that the new strategy was developed after the failure, showing chronological sequence.'
  },

  // VOCABULARY - Additional Synonyms & Antonyms (Questions 601-650)
  {
    id: 601,
    category: 'Vocabulary',
    question: 'What is the synonym of "ubiquitous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Rare',
      'Omnipresent',
      'Scarce',
      'Limited'
    ],
    correctAnswer: 1,
    explanation: '"Ubiquitous" means present everywhere at once, so "omnipresent" is the correct synonym.'
  },
  {
    id: 602,
    category: 'Vocabulary',
    question: 'What is the antonym of "ephemeral"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Temporary',
      'Brief',
      'Permanent',
      'Fleeting'
    ],
    correctAnswer: 2,
    explanation: '"Ephemeral" means lasting for a very short time, so "permanent" is the opposite.'
  },
  {
    id: 603,
    category: 'Vocabulary',
    question: 'Which word is similar to "meticulous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Careless',
      'Negligent',
      'Scrupulous',
      'Hasty'
    ],
    correctAnswer: 2,
    explanation: '"Meticulous" means showing great attention to detail, which is synonymous with "scrupulous".'
  },
  {
    id: 604,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "mundane"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Ordinary',
      'Extraordinary',
      'Common',
      'Routine'
    ],
    correctAnswer: 1,
    explanation: '"Mundane" means ordinary or lacking interest, so "extraordinary" is its antonym.'
  },
  {
    id: 605,
    category: 'Vocabulary',
    question: '"Benevolent" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Malevolent',
      'Hostile',
      'Charitable',
      'Cruel'
    ],
    correctAnswer: 2,
    explanation: '"Benevolent" means well-meaning and kindly, making "charitable" the best synonym.'
  },
  {
    id: 606,
    category: 'Vocabulary',
    question: 'What is the antonym of "verbose"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Wordy',
      'Lengthy',
      'Concise',
      'Elaborate'
    ],
    correctAnswer: 2,
    explanation: '"Verbose" means using more words than necessary, while "concise" means brief and to the point.'
  },
  {
    id: 607,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "pragmatic"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Idealistic',
      'Practical',
      'Theoretical',
      'Abstract'
    ],
    correctAnswer: 1,
    explanation: '"Pragmatic" means dealing with things realistically and practically, making "practical" the correct synonym.'
  },
  {
    id: 608,
    category: 'Vocabulary',
    question: 'What is opposite to "frugal"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Economical',
      'Thrifty',
      'Extravagant',
      'Careful'
    ],
    correctAnswer: 2,
    explanation: '"Frugal" means economical with money or resources, while "extravagant" means spending excessively.'
  },
  {
    id: 609,
    category: 'Vocabulary',
    question: '"Candid" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Deceptive',
      'Frank',
      'Evasive',
      'Dishonest'
    ],
    correctAnswer: 1,
    explanation: '"Candid" means truthful and straightforward, which is synonymous with "frank".'
  },
  {
    id: 610,
    category: 'Vocabulary',
    question: 'What is the antonym of "ambiguous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Vague',
      'Unclear',
      'Explicit',
      'Confusing'
    ],
    correctAnswer: 2,
    explanation: '"Ambiguous" means open to more than one interpretation, while "explicit" means stated clearly.'
  },
  {
    id: 611,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "diligent"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Lazy',
      'Industrious',
      'Careless',
      'Negligent'
    ],
    correctAnswer: 1,
    explanation: '"Diligent" means showing care and effort in work, making "industrious" the correct synonym.'
  },
  {
    id: 612,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "opaque"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Cloudy',
      'Murky',
      'Transparent',
      'Obscure'
    ],
    correctAnswer: 2,
    explanation: '"Opaque" means not able to be seen through, while "transparent" means allowing light to pass through.'
  },
  {
    id: 613,
    category: 'Vocabulary',
    question: '"Tenacious" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Weak',
      'Persistent',
      'Yielding',
      'Feeble'
    ],
    correctAnswer: 1,
    explanation: '"Tenacious" means holding firmly to something, which is synonymous with "persistent".'
  },
  {
    id: 614,
    category: 'Vocabulary',
    question: 'What is the antonym of "austere"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Lavish',
      'Severe',
      'Strict',
      'Simple'
    ],
    correctAnswer: 0,
    explanation: '"Austere" means severe or strict in appearance or manner, while "lavish" means elaborate and luxurious.'
  },
  {
    id: 615,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "arduous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Easy',
      'Simple',
      'Strenuous',
      'Effortless'
    ],
    correctAnswer: 2,
    explanation: '"Arduous" means involving or requiring strenuous effort, making "strenuous" the correct synonym.'
  },
  {
    id: 616,
    category: 'Vocabulary',
    question: 'What is opposite to "concede"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Admit',
      'Yield',
      'Resist',
      'Surrender'
    ],
    correctAnswer: 2,
    explanation: '"Concede" means to admit or yield, while "resist" means to refuse to accept or give in.'
  },
  {
    id: 617,
    category: 'Vocabulary',
    question: '"Eloquent" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Inarticulate',
      'Articulate',
      'Stumbling',
      'Clumsy'
    ],
    correctAnswer: 1,
    explanation: '"Eloquent" means fluent and persuasive in speaking, which is synonymous with "articulate".'
  },
  {
    id: 618,
    category: 'Vocabulary',
    question: 'What is the antonym of "loquacious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Talkative',
      'Chatty',
      'Taciturn',
      'Verbose'
    ],
    correctAnswer: 2,
    explanation: '"Loquacious" means tending to talk a great deal, while "taciturn" means reserved or uncommunicative.'
  },
  {
    id: 619,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "diminutive"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Large',
      'Tiny',
      'Massive',
      'Huge'
    ],
    correctAnswer: 1,
    explanation: '"Diminutive" means extremely or unusually small, making "tiny" the correct synonym.'
  },
  {
    id: 620,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "indigenous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Native',
      'Local',
      'Foreign',
      'Original'
    ],
    correctAnswer: 2,
    explanation: '"Indigenous" means originating or occurring naturally in a place, while "foreign" means from another country.'
  },
  {
    id: 621,
    category: 'Vocabulary',
    question: '"Copious" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Scarce',
      'Abundant',
      'Limited',
      'Meager'
    ],
    correctAnswer: 1,
    explanation: '"Copious" means abundant in supply or quantity, making "abundant" the correct synonym.'
  },
  {
    id: 622,
    category: 'Vocabulary',
    question: 'What is the antonym of "ameliorate"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Improve',
      'Enhance',
      'Worsen',
      'Better'
    ],
    correctAnswer: 2,
    explanation: '"Ameliorate" means to make something better or improve, while "worsen" means to make or become worse.'
  },
  {
    id: 623,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "fortuitous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Planned',
      'Deliberate',
      'Accidental',
      'Intentional'
    ],
    correctAnswer: 2,
    explanation: '"Fortuitous" means happening by chance rather than intention, making "accidental" the correct synonym.'
  },
  {
    id: 624,
    category: 'Vocabulary',
    question: 'What is opposite to "gregarious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Sociable',
      'Outgoing',
      'Solitary',
      'Friendly'
    ],
    correctAnswer: 2,
    explanation: '"Gregarious" means fond of company and sociable, while "solitary" means done or existing alone.'
  },
  {
    id: 625,
    category: 'Vocabulary',
    question: '"Lucid" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Confused',
      'Clear',
      'Obscure',
      'Vague'
    ],
    correctAnswer: 1,
    explanation: '"Lucid" means expressed clearly and easy to understand, which is synonymous with "clear".'
  },
  {
    id: 626,
    category: 'Vocabulary',
    question: 'What is the antonym of "parsimonious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Stingy',
      'Miserly',
      'Generous',
      'Thrifty'
    ],
    correctAnswer: 2,
    explanation: '"Parsimonious" means unwilling to spend money or use resources, while "generous" means freely giving.'
  },
  {
    id: 627,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "zealous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Apathetic',
      'Indifferent',
      'Enthusiastic',
      'Uninterested'
    ],
    correctAnswer: 2,
    explanation: '"Zealous" means having or showing great energy or enthusiasm, making "enthusiastic" the correct synonym.'
  },
  {
    id: 628,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "prolific"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Productive',
      'Fertile',
      'Unproductive',
      'Fruitful'
    ],
    correctAnswer: 2,
    explanation: '"Prolific" means producing much fruit, foliage, or many works, while "unproductive" means not producing.'
  },
  {
    id: 629,
    category: 'Vocabulary',
    question: '"Altruistic" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Selfish',
      'Selfless',
      'Greedy',
      'Egotistical'
    ],
    correctAnswer: 1,
    explanation: '"Altruistic" means showing a disinterested concern for others, which is synonymous with "selfless".'
  },
  {
    id: 630,
    category: 'Vocabulary',
    question: 'What is the antonym of "transient"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Temporary',
      'Brief',
      'Enduring',
      'Momentary'
    ],
    correctAnswer: 2,
    explanation: '"Transient" means lasting only for a short time, while "enduring" means lasting over a period of time.'
  },
  {
    id: 631,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "incisive"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Dull',
      'Blunt',
      'Penetrating',
      'Superficial'
    ],
    correctAnswer: 2,
    explanation: '"Incisive" means intelligently analytical and clear-thinking, making "penetrating" the correct synonym.'
  },
  {
    id: 632,
    category: 'Vocabulary',
    question: 'What is opposite to "mundane"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Ordinary',
      'Celestial',
      'Common',
      'Routine'
    ],
    correctAnswer: 1,
    explanation: '"Mundane" means lacking interest or earthly, while "celestial" means heavenly or extraordinary.'
  },
  {
    id: 633,
    category: 'Vocabulary',
    question: '"Reticent" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Outspoken',
      'Reserved',
      'Vocal',
      'Expressive'
    ],
    correctAnswer: 1,
    explanation: '"Reticent" means not revealing one\'s thoughts readily, which is synonymous with "reserved".'
  },
  {
    id: 634,
    category: 'Vocabulary',
    question: 'What is the antonym of "spurious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'False',
      'Fake',
      'Genuine',
      'Counterfeit'
    ],
    correctAnswer: 2,
    explanation: '"Spurious" means not being what it purports to be or false, while "genuine" means truly what it is said to be.'
  },
  {
    id: 635,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "pernicious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Beneficial',
      'Harmful',
      'Helpful',
      'Advantageous'
    ],
    correctAnswer: 1,
    explanation: '"Pernicious" means having a harmful effect, especially in a gradual way, making "harmful" the correct synonym.'
  },
  {
    id: 636,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "acquiesce"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Agree',
      'Consent',
      'Oppose',
      'Comply'
    ],
    correctAnswer: 2,
    explanation: '"Acquiesce" means to accept something reluctantly, while "oppose" means to disagree or resist.'
  },
  {
    id: 637,
    category: 'Vocabulary',
    question: '"Astute" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Foolish',
      'Shrewd',
      'Naive',
      'Stupid'
    ],
    correctAnswer: 1,
    explanation: '"Astute" means having the ability to accurately assess situations, which is synonymous with "shrewd".'
  },
  {
    id: 638,
    category: 'Vocabulary',
    question: 'What is the antonym of "magnanimous"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Generous',
      'Noble',
      'Petty',
      'Forgiving'
    ],
    correctAnswer: 2,
    explanation: '"Magnanimous" means generous or forgiving, especially toward a rival, while "petty" means small-minded.'
  },
  {
    id: 639,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "obdurate"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Flexible',
      'Yielding',
      'Stubborn',
      'Compliant'
    ],
    correctAnswer: 2,
    explanation: '"Obdurate" means stubbornly refusing to change one\'s opinion, making "stubborn" the correct synonym.'
  },
  {
    id: 640,
    category: 'Vocabulary',
    question: 'What is opposite to "terse"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Brief',
      'Concise',
      'Verbose',
      'Succinct'
    ],
    correctAnswer: 2,
    explanation: '"Terse" means sparing in the use of words or abrupt, while "verbose" means using more words than necessary.'
  },
  {
    id: 641,
    category: 'Vocabulary',
    question: '"Voracious" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Moderate',
      'Insatiable',
      'Satisfied',
      'Content'
    ],
    correctAnswer: 1,
    explanation: '"Voracious" means wanting or devouring great quantities, which is synonymous with "insatiable".'
  },
  {
    id: 642,
    category: 'Vocabulary',
    question: 'What is the antonym of "ascetic"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Austere',
      'Severe',
      'Hedonistic',
      'Simple'
    ],
    correctAnswer: 2,
    explanation: '"Ascetic" means characterized by severe self-discipline, while "hedonistic" means devoted to pleasure.'
  },
  {
    id: 643,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "ephemeral"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Permanent',
      'Lasting',
      'Transitory',
      'Enduring'
    ],
    correctAnswer: 2,
    explanation: '"Ephemeral" means lasting for a very short time, making "transitory" the correct synonym.'
  },
  {
    id: 644,
    category: 'Vocabulary',
    question: 'What is opposite in meaning to "alacrity"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Eagerness',
      'Enthusiasm',
      'Reluctance',
      'Willingness'
    ],
    correctAnswer: 2,
    explanation: '"Alacrity" means brisk and cheerful readiness, while "reluctance" means unwillingness or hesitation.'
  },
  {
    id: 645,
    category: 'Vocabulary',
    question: '"Languid" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Energetic',
      'Lethargic',
      'Vigorous',
      'Active'
    ],
    correctAnswer: 1,
    explanation: '"Languid" means displaying or having a lack of energy, which is synonymous with "lethargic".'
  },
  {
    id: 646,
    category: 'Vocabulary',
    question: 'What is the antonym of "perfunctory"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Hasty',
      'Careless',
      'Thorough',
      'Superficial'
    ],
    correctAnswer: 2,
    explanation: '"Perfunctory" means carried out with minimum effort, while "thorough" means complete with attention to detail.'
  },
  {
    id: 647,
    category: 'Vocabulary',
    question: 'Which word is synonymous with "sagacious"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Foolish',
      'Wise',
      'Ignorant',
      'Unwise'
    ],
    correctAnswer: 1,
    explanation: '"Sagacious" means having or showing keen mental discernment and good judgment, making "wise" the synonym.'
  },
  {
    id: 648,
    category: 'Vocabulary',
    question: 'What is opposite to "intrepid"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Brave',
      'Courageous',
      'Timid',
      'Fearless'
    ],
    correctAnswer: 2,
    explanation: '"Intrepid" means fearless and adventurous, while "timid" means showing a lack of courage or confidence.'
  },
  {
    id: 649,
    category: 'Vocabulary',
    question: '"Tacit" is similar to:',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Explicit',
      'Expressed',
      'Implied',
      'Stated'
    ],
    correctAnswer: 2,
    explanation: '"Tacit" means understood or implied without being stated, which is synonymous with "implied".'
  },
  {
    id: 650,
    category: 'Vocabulary',
    question: 'What is the antonym of "banal"?',
    instruction: 'Select the most contextually appropriate word based on meaning and register.',
    options: [
      'Trite',
      'Commonplace',
      'Original',
      'Hackneyed'
    ],
    correctAnswer: 2,
    explanation: '"Banal" means so lacking in originality as to be obvious and boring, while "original" means new and innovative.'
  },

  // VOCABULARY - Ambiguity Resolution (Questions 651-700)
  {
    id: 651,
    category: 'Vocabulary',
    question: 'The word "bank" in "He walked along the river bank" refers to:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'A financial institution',
      'The edge of a river',
      'To rely on something',
      'A storage place'
    ],
    correctAnswer: 1,
    explanation: 'Context indicates "bank" refers to the edge or side of the river, demonstrating lexical ambiguity resolution.'
  },
  {
    id: 652,
    category: 'Vocabulary',
    question: '"The chicken is ready to eat" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The chicken is cooked',
      'The chicken is hungry',
      'Both interpretations are possible',
      'Neither interpretation makes sense'
    ],
    correctAnswer: 2,
    explanation: 'This demonstrates syntactic ambiguity - it could mean the chicken is cooked and ready for consumption, or the chicken (animal) is ready to consume food.'
  },
  {
    id: 653,
    category: 'Vocabulary',
    question: 'In "I saw her duck," the word "duck" most likely means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'A water bird',
      'Lower one\'s head quickly',
      'A type of fabric',
      'A term of endearment'
    ],
    correctAnswer: 1,
    explanation: 'With "saw her" as the context, "duck" is more likely a verb meaning to lower the head, though it could also be a noun (the bird).'
  },
  {
    id: 654,
    category: 'Vocabulary',
    question: 'The sentence "Visiting relatives can be boring" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Relatives who visit are boring',
      'The act of visiting relatives is boring',
      'Both interpretations are possible',
      'The sentence is grammatically incorrect'
    ],
    correctAnswer: 2,
    explanation: 'This shows structural ambiguity - "visiting" can be a gerund (the act of visiting) or an adjective (relatives who visit).'
  },
  {
    id: 655,
    category: 'Vocabulary',
    question: 'In "The bat flew out of my hand," "bat" most likely refers to:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'A flying mammal',
      'A sports equipment',
      'To hit something',
      'An eyelash movement'
    ],
    correctAnswer: 1,
    explanation: 'The phrase "flew out of my hand" suggests it was held and released, indicating sports equipment rather than the animal.'
  },
  {
    id: 656,
    category: 'Vocabulary',
    question: '"I need to book a book" contains ambiguity in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The first "book" only',
      'The second "book" only',
      'Both instances of "book"',
      'Neither instance'
    ],
    correctAnswer: 0,
    explanation: 'The first "book" is a verb (to reserve), the second is a noun (a written work), demonstrating homonymy.'
  },
  {
    id: 657,
    category: 'Vocabulary',
    question: 'The sentence "He saw the man with the telescope" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The telescope belongs to the man',
      'He used a telescope to see the man',
      'Both interpretations are grammatically possible',
      'The sentence lacks a verb'
    ],
    correctAnswer: 2,
    explanation: 'This demonstrates prepositional phrase attachment ambiguity - "with the telescope" could modify "saw" or "man".'
  },
  {
    id: 658,
    category: 'Vocabulary',
    question: 'In "The lamb is too hot to eat," the ambiguity lies in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The temperature of the meat',
      'The animal is experiencing heat',
      'Both interpretations are possible',
      'The sentence is incomplete'
    ],
    correctAnswer: 2,
    explanation: 'It could mean the lamb (meat) is too hot temperature-wise, or the lamb (animal) is too hot to eat food.'
  },
  {
    id: 659,
    category: 'Vocabulary',
    question: '"Flying planes can be dangerous" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Planes that are flying',
      'The act of piloting planes',
      'Both interpretations are valid',
      'It refers to paper planes'
    ],
    correctAnswer: 2,
    explanation: '"Flying" could be an adjective (planes that are flying) or a gerund (the act of flying planes).'
  },
  {
    id: 660,
    category: 'Vocabulary',
    question: 'In "She cannot bear children," the word "bear" means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Tolerate or endure',
      'Give birth to',
      'Carry or support',
      'The animal'
    ],
    correctAnswer: 1,
    explanation: 'With "children" as the object, "bear" most likely means to give birth to, though it could mean tolerate.'
  },
  {
    id: 661,
    category: 'Vocabulary',
    question: 'The phrase "old men and women" is ambiguous regarding:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Whether both are old',
      'Whether they are related',
      'Their exact ages',
      'Their occupations'
    ],
    correctAnswer: 0,
    explanation: 'It\'s unclear if "old" modifies just "men" or both "men and women" due to coordinate structure ambiguity.'
  },
  {
    id: 662,
    category: 'Vocabulary',
    question: 'In "I like cooking apples," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The activity of cooking apples',
      'Apples that are good for cooking',
      'Both interpretations are possible',
      'A preference for apple dishes'
    ],
    correctAnswer: 2,
    explanation: '"Cooking" could be a gerund (the activity) or an adjective (type of apple suitable for cooking).'
  },
  {
    id: 663,
    category: 'Vocabulary',
    question: '"She hit the man with the cane" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The instrument used for hitting',
      'The man owns the cane',
      'Both interpretations are grammatically valid',
      'The action is unclear'
    ],
    correctAnswer: 2,
    explanation: '"With the cane" could indicate the instrument of hitting or describe which man was hit.'
  },
  {
    id: 664,
    category: 'Vocabulary',
    question: 'In "They are hunting dogs," the ambiguity involves:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Dogs that hunt',
      'People hunting for dogs',
      'Both interpretations work',
      'A specific dog breed'
    ],
    correctAnswer: 2,
    explanation: '"Hunting" could be an adjective (dogs bred for hunting) or part of a verb phrase (people are hunting dogs).'
  },
  {
    id: 665,
    category: 'Vocabulary',
    question: 'The word "fine" in "She received a fine" most likely means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Of high quality',
      'A monetary penalty',
      'Very thin',
      'Acceptable'
    ],
    correctAnswer: 1,
    explanation: 'The verb "received" with "a fine" as object indicates a monetary penalty, resolving the polysemy.'
  },
  {
    id: 666,
    category: 'Vocabulary',
    question: '"Time flies like an arrow" contains potential ambiguity in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The speed of time',
      'A type of insect',
      'Both interpretations possible but one is idiomatic',
      'The direction of flight'
    ],
    correctAnswer: 2,
    explanation: 'While idiomatically it means time passes quickly, it could absurdly mean flies (insects) enjoy arrows, demonstrating syntactic ambiguity.'
  },
  {
    id: 667,
    category: 'Vocabulary',
    question: 'In "The shooting of the hunters was terrible," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Hunters being shot',
      'Hunters\' marksmanship',
      'Both interpretations are grammatically possible',
      'The timing of the event'
    ],
    correctAnswer: 2,
    explanation: 'This demonstrates genitive ambiguity - hunters could be the subject (doing the shooting) or object (being shot).'
  },
  {
    id: 668,
    category: 'Vocabulary',
    question: '"I saw her duck under the table" - "duck" here means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'A water bird',
      'To lower one\'s body',
      'A pet name',
      'A type of movement'
    ],
    correctAnswer: 1,
    explanation: 'The phrase "under the table" clarifies that "duck" is a verb meaning to lower the body quickly.'
  },
  {
    id: 669,
    category: 'Vocabulary',
    question: 'The sentence "She likes entertaining guests" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Guests who entertain',
      'The act of entertaining guests',
      'Both could be grammatically valid',
      'The verb tense is unclear'
    ],
    correctAnswer: 2,
    explanation: '"Entertaining" could be a gerund (activity) or adjective (guests who are entertaining).'
  },
  {
    id: 670,
    category: 'Vocabulary',
    question: 'In "He gave her dog biscuits," the ambiguity involves:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Biscuits for her dog',
      'Dog-shaped biscuits for her',
      'Both interpretations are possible',
      'The quantity of biscuits'
    ],
    correctAnswer: 2,
    explanation: 'Without punctuation, it\'s unclear if "dog" modifies "biscuits" or if "her dog" is the recipient.'
  },
  {
    id: 671,
    category: 'Vocabulary',
    question: '"More people have died in car accidents than live" creates ambiguity in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The word "live" as verb or adjective',
      'The number of deaths',
      'The time period',
      'The location'
    ],
    correctAnswer: 0,
    explanation: '"Live" could mean "are alive" (verb) or could continue to "than live...in other accidents" (adjective).'
  },
  {
    id: 672,
    category: 'Vocabulary',
    question: 'In "Teachers who skip classes are fired," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Teachers avoiding their own classes',
      'Teachers who miss students\' classes',
      'Both interpretations work',
      'The punishment method'
    ],
    correctAnswer: 2,
    explanation: '"Skip classes" could mean teachers not attending their teaching duties or teachers missing other classes.'
  },
  {
    id: 673,
    category: 'Vocabulary',
    question: 'The word "light" in "Turn off the light" refers to:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Not heavy',
      'Illumination or lamp',
      'Pale in color',
      'Not serious'
    ],
    correctAnswer: 1,
    explanation: 'The verb "turn off" collocates with electrical devices, indicating "light" means illumination/lamp.'
  },
  {
    id: 674,
    category: 'Vocabulary',
    question: '"Large animals and insects" is ambiguous about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Whether insects are included as large',
      'The number of species',
      'Their habitat',
      'Their behavior'
    ],
    correctAnswer: 0,
    explanation: 'Scope ambiguity - unclear if "large" modifies both "animals and insects" or just "animals".'
  },
  {
    id: 675,
    category: 'Vocabulary',
    question: 'In "I watched the race from the stands," "stands" means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The verb meaning to be upright',
      'Seating structures at a venue',
      'A position on an issue',
      'Supports or bases'
    ],
    correctAnswer: 1,
    explanation: 'The context "watched the race from" indicates "stands" refers to spectator seating structures.'
  },
  {
    id: 676,
    category: 'Vocabulary',
    question: '"The girl saw the boy with binoculars" demonstrates ambiguity in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Instrument attachment',
      'Possession',
      'Both interpretations are structurally possible',
      'Temporal sequence'
    ],
    correctAnswer: 2,
    explanation: 'Could mean she used binoculars to see him, or she saw him who had binoculars - prepositional phrase attachment ambiguity.'
  },
  {
    id: 677,
    category: 'Vocabulary',
    question: 'In "She drew a picture of a man with a pen," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The drawing instrument',
      'The man holds a pen',
      'Both interpretations are valid',
      'The artistic style'
    ],
    correctAnswer: 2,
    explanation: '"With a pen" could indicate the instrument used for drawing or describe the man in the picture.'
  },
  {
    id: 678,
    category: 'Vocabulary',
    question: 'The word "match" in "I need a match" could mean:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'A fire-starting stick only',
      'A competitive game only',
      'Either depending on context',
      'A compatible partner only'
    ],
    correctAnswer: 2,
    explanation: 'Without additional context, "match" could refer to a fire stick, sporting competition, or compatible item/person.'
  },
  {
    id: 679,
    category: 'Vocabulary',
    question: '"Students rarely work" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Students seldom have jobs',
      'Students rarely do their schoolwork',
      'Both interpretations are possible',
      'The time frame is unclear'
    ],
    correctAnswer: 2,
    explanation: '"Work" could mean employment or academic work, demonstrating lexical ambiguity.'
  },
  {
    id: 680,
    category: 'Vocabulary',
    question: 'In "He saw the Grand Canyon flying to New York," the ambiguity involves:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The canyon is flying',
      'He was flying when he saw it',
      'Both are grammatically possible but one is logical',
      'The direction of flight'
    ],
    correctAnswer: 2,
    explanation: 'Dangling modifier - logically he was flying, but grammatically "flying" could modify "Grand Canyon".'
  },
  {
    id: 681,
    category: 'Vocabulary',
    question: 'The phrase "Exotic animals and birds" creates ambiguity about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Whether birds are considered animals',
      'Whether birds are also exotic',
      'The number of species',
      'Their origin'
    ],
    correctAnswer: 1,
    explanation: 'Scope ambiguity - unclear if "exotic" applies only to animals or to both animals and birds.'
  },
  {
    id: 682,
    category: 'Vocabulary',
    question: 'In "The shooting of the detective was brilliant," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The detective\'s photography skills',
      'The detective being shot',
      'The detective\'s marksmanship',
      'All interpretations could be valid'
    ],
    correctAnswer: 3,
    explanation: 'Genitive ambiguity - could mean the detective\'s shooting skills, someone shooting the detective brilliantly, or a film scene.'
  },
  {
    id: 683,
    category: 'Vocabulary',
    question: '"I saw her duck in the pond" - "duck" most likely means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Lower her head',
      'A water bird',
      'Both could work contextually',
      'A swimming motion'
    ],
    correctAnswer: 1,
    explanation: 'The phrase "in the pond" strongly suggests "duck" is a noun (the bird) rather than a verb.'
  },
  {
    id: 684,
    category: 'Vocabulary',
    question: 'The word "fast" in "He broke his fast" means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Quick or speedy',
      'Period without eating',
      'Firmly fixed',
      'Ahead of time'
    ],
    correctAnswer: 1,
    explanation: 'The verb "broke" with "fast" as object indicates the period of not eating, resolving the polysemy.'
  },
  {
    id: 685,
    category: 'Vocabulary',
    question: '"Clever men and women" is ambiguous about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Whether women are clever too',
      'The number of people',
      'Their occupations',
      'Their relationship'
    ],
    correctAnswer: 0,
    explanation: 'Coordinate structure ambiguity - unclear if "clever" modifies only "men" or both "men and women".'
  },
  {
    id: 686,
    category: 'Vocabulary',
    question: 'In "She served the guest with a smile," the ambiguity involves:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Her manner of service',
      'The guest was smiling',
      'Both interpretations are grammatically possible',
      'The type of service'
    ],
    correctAnswer: 0,
    explanation: 'While both could work grammatically, "with a smile" most naturally describes her manner of serving.'
  },
  {
    id: 687,
    category: 'Vocabulary',
    question: 'The sentence "Reading teachers is difficult" is ambiguous because:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Teachers who teach reading',
      'The act of reading to teachers',
      'Understanding teachers is hard',
      'Multiple interpretations are possible'
    ],
    correctAnswer: 3,
    explanation: '"Reading" could be a gerund (the activity) or adjective (type of teacher), and "teachers" could be object or subject.'
  },
  {
    id: 688,
    category: 'Vocabulary',
    question: 'In "The patient saw the doctor with concern," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The patient was concerned',
      'The doctor had concern',
      'Both interpretations work',
      'The medical condition'
    ],
    correctAnswer: 2,
    explanation: '"With concern" could modify how the patient saw the doctor, or describe the doctor\'s state.'
  },
  {
    id: 689,
    category: 'Vocabulary',
    question: 'The word "cleave" is ambiguous because it can mean:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'To split apart',
      'To stick together',
      'Both opposite meanings (auto-antonym)',
      'To cut cleanly'
    ],
    correctAnswer: 2,
    explanation: '"Cleave" is an auto-antonym - it can mean both to split/separate and to adhere/cling, requiring context for clarity.'
  },
  {
    id: 690,
    category: 'Vocabulary',
    question: 'In "I left the keys on the table in the kitchen," potential ambiguity exists about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Which item is in the kitchen',
      'The number of keys',
      'The time of action',
      'Who owns the keys'
    ],
    correctAnswer: 0,
    explanation: 'Prepositional phrase attachment - "in the kitchen" could modify "left" (action location) or "table" (table location).'
  },
  {
    id: 691,
    category: 'Vocabulary',
    question: '"Every boy loves his mother" differs from "Every boy loves a mother" in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Scope of quantification',
      'Tense usage',
      'Number agreement',
      'Formality level'
    ],
    correctAnswer: 0,
    explanation: '"His mother" (his own) vs "a mother" (possibly any mother) demonstrates scope ambiguity with quantifiers.'
  },
  {
    id: 692,
    category: 'Vocabulary',
    question: 'The word "sanction" is ambiguous because it can mean:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'To approve or authorize',
      'To penalize or boycott',
      'Both opposite meanings',
      'To support financially'
    ],
    correctAnswer: 2,
    explanation: '"Sanction" is another auto-antonym - it can mean both to officially approve and to impose a penalty.'
  },
  {
    id: 693,
    category: 'Vocabulary',
    question: 'In "Small cars and trucks," the ambiguity concerns:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Whether trucks are small',
      'The number of vehicles',
      'The manufacturing company',
      'The color'
    ],
    correctAnswer: 0,
    explanation: 'Scope ambiguity with adjective modification - does "small" apply only to cars or to both cars and trucks?'
  },
  {
    id: 694,
    category: 'Vocabulary',
    question: '"I told her about the problem yesterday" could be ambiguous about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'When the telling occurred',
      'When the problem occurred',
      'Both temporal interpretations are possible',
      'Who has the problem'
    ],
    correctAnswer: 2,
    explanation: '"Yesterday" could modify when the telling happened or when the problem arose - temporal modifier ambiguity.'
  },
  {
    id: 695,
    category: 'Vocabulary',
    question: 'The word "oversight" is ambiguous because it means:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Supervision',
      'An error or omission',
      'Both meanings exist',
      'A review process'
    ],
    correctAnswer: 2,
    explanation: '"Oversight" can mean watchful care/supervision OR an inadvertent failure to notice - another auto-antonym.'
  },
  {
    id: 696,
    category: 'Vocabulary',
    question: 'In "Mary wants to marry a Norwegian," ambiguity exists about:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Any Norwegian person',
      'A specific Norwegian person',
      'Both interpretations are possible',
      'Mary\'s nationality'
    ],
    correctAnswer: 2,
    explanation: 'Referential ambiguity - "a Norwegian" could be specific (one particular person) or non-specific (any Norwegian).'
  },
  {
    id: 697,
    category: 'Vocabulary',
    question: '"I photographed the students with a camera" - potential ambiguity in:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'The instrument used',
      'Students holding cameras',
      'First interpretation is most logical',
      'The location'
    ],
    correctAnswer: 2,
    explanation: 'While grammatically "with a camera" could modify students or photographing, logically it indicates the instrument.'
  },
  {
    id: 698,
    category: 'Vocabulary',
    question: 'The sentence "Pretty little girls\' school" has multiple ambiguities regarding:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'What "pretty" modifies',
      'Whether girls or school is little',
      'Possessive scope',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Multiple ambiguities: pretty (somewhat/attractive), little (young/small), and possessive attachment (girls\' or little girls\').'
  },
  {
    id: 699,
    category: 'Vocabulary',
    question: 'In "They decided on the boat," the ambiguity involves:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Where the decision was made',
      'What was decided upon',
      'Both interpretations are valid',
      'When the decision occurred'
    ],
    correctAnswer: 2,
    explanation: '"On the boat" could indicate location of the decision or that the boat was the choice made.'
  },
  {
    id: 700,
    category: 'Vocabulary',
    question: '"I didn\'t say John stole the money" can have different meanings based on:',
    instruction: 'Select the correct meaning based on context to resolve ambiguity.',
    options: [
      'Stress on different words',
      'Written punctuation',
      'Context only',
      'Grammar rules'
    ],
    correctAnswer: 0,
    explanation: 'Prosodic ambiguity - stressing different words changes meaning: I/didn\'t/say/John/stole/the/money each creates different implications.'
  },

  // STYLISTIC VARIATION - Additional Questions (Questions 701-730)
  {
    id: 701,
    category: 'Stylistic Variation',
    question: 'Which is most appropriate for academic writing?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The study shows that kids learn fast',
      'The research demonstrates that children acquire knowledge rapidly',
      'Research shows kids pick things up quick',
      'The study proves children learn stuff fast'
    ],
    correctAnswer: 1,
    explanation: 'Academic writing requires formal vocabulary: "research demonstrates," "children" (not kids), "acquire knowledge rapidly" (not learn fast).'
  },
  {
    id: 702,
    category: 'Stylistic Variation',
    question: 'Select the most formal alternative:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'We need to check out the data',
      'We must examine the data',
      'We gotta look at the data',
      'We should take a look at the data'
    ],
    correctAnswer: 1,
    explanation: '"Must examine" is most formal; "check out," "gotta," and "take a look" are too casual for formal contexts.'
  },
  {
    id: 703,
    category: 'Stylistic Variation',
    question: 'Which sentence uses consultative register appropriately?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Hey doc, my stomach hurts bad',
      'Doctor, I am experiencing severe abdominal pain',
      'Physician, I present with acute gastric discomfort',
      'Yo doctor, my belly is killing me'
    ],
    correctAnswer: 1,
    explanation: 'Consultative register balances formality and accessibility - polite address, clear symptom description without excessive jargon.'
  },
  {
    id: 704,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate business email opening:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Hey there!',
      'Dear Sir or Madam,',
      'What\'s up?',
      'Yo!'
    ],
    correctAnswer: 1,
    explanation: 'Formal business correspondence requires formal greetings; "Dear Sir or Madam" is appropriate when the recipient is unknown.'
  },
  {
    id: 705,
    category: 'Stylistic Variation',
    question: 'Which is most suitable for a legal document?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The party of the first part agrees to stuff',
      'The first party agrees to do things',
      'Party A hereby agrees to fulfill the obligations',
      'Party one says they\'ll do what they promised'
    ],
    correctAnswer: 2,
    explanation: 'Legal documents use frozen register with precise terminology: "hereby," "fulfill," "obligations" are standard legal language.'
  },
  {
    id: 706,
    category: 'Stylistic Variation',
    question: 'Select the most informal expression:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I am unable to attend',
      'I cannot attend',
      'I can\'t make it',
      'My attendance is not possible'
    ],
    correctAnswer: 2,
    explanation: '"Can\'t make it" is casual/informal; the others progress from formal to consultative register.'
  },
  {
    id: 707,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate academic hedging?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The data proves this is true',
      'The data suggests this may be accurate',
      'The data totally shows this is right',
      'The data definitely confirms this'
    ],
    correctAnswer: 1,
    explanation: 'Academic writing uses hedging language ("suggests," "may be") to show appropriate caution rather than absolute claims.'
  },
  {
    id: 708,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate technical description:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The machine broke down',
      'The equipment malfunctioned',
      'The device experienced operational failure',
      'The thing stopped working'
    ],
    correctAnswer: 2,
    explanation: 'Technical contexts require precise terminology: "device," "operational failure" are more specific than "machine broke down."'
  },
  {
    id: 709,
    category: 'Stylistic Variation',
    question: 'Which is most appropriate for a research conclusion?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'So basically, we found out that...',
      'In conclusion, the findings indicate...',
      'To sum up, we figured out...',
      'Anyway, the results show...'
    ],
    correctAnswer: 1,
    explanation: 'Academic conclusions use formal transitions: "In conclusion," "findings indicate" rather than casual expressions.'
  },
  {
    id: 710,
    category: 'Stylistic Variation',
    question: 'Select the most formal expression of disagreement:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'That\'s totally wrong',
      'I respectfully disagree with this assertion',
      'I don\'t think that\'s right',
      'Nope, that\'s not correct'
    ],
    correctAnswer: 1,
    explanation: 'Formal disagreement uses respectful language and formal vocabulary: "respectfully disagree," "assertion."'
  },
  {
    id: 711,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate nominalization?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'They decided quickly',
      'A rapid decision was made',
      'They made up their minds fast',
      'The decision happened quick'
    ],
    correctAnswer: 1,
    explanation: 'Nominalization (verb to noun) is common in formal writing: "decision" (noun) vs "decided" (verb), "rapid" vs "quickly."'
  },
  {
    id: 712,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate passive construction for a lab report:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'We heated the solution',
      'The solution was heated',
      'I heated up the solution',
      'The solution got hot'
    ],
    correctAnswer: 1,
    explanation: 'Scientific writing often uses passive voice to emphasize the action/object: "The solution was heated" is standard.'
  },
  {
    id: 713,
    category: 'Stylistic Variation',
    question: 'Which is most suitable for a formal presentation?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I\'m gonna talk about climate change',
      'I will discuss climate change',
      'I\'ll chat about climate change',
      'Let me tell you about climate change'
    ],
    correctAnswer: 1,
    explanation: 'Formal presentations use complete forms and formal verbs: "I will discuss" rather than contractions or casual verbs.'
  },
  {
    id: 714,
    category: 'Stylistic Variation',
    question: 'Select the most euphemistic expression:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'He was fired',
      'He was terminated',
      'He was let go',
      'His employment was discontinued'
    ],
    correctAnswer: 3,
    explanation: '"Employment was discontinued" is most euphemistic (softened); it\'s formal and indirect compared to blunt alternatives.'
  },
  {
    id: 715,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate academic objectivity?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I think the results are amazing',
      'The results are significant',
      'In my opinion, the results are great',
      'Obviously, the results are important'
    ],
    correctAnswer: 1,
    explanation: 'Academic writing avoids first person and subjective language; "The results are significant" is objective.'
  },
  {
    id: 716,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate diplomatic phrasing:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Your proposal has problems',
      'Your proposal requires refinement',
      'Your proposal is bad',
      'Your proposal doesn\'t work'
    ],
    correctAnswer: 1,
    explanation: 'Diplomatic language softens criticism: "requires refinement" is more tactful than direct negative statements.'
  },
  {
    id: 717,
    category: 'Stylistic Variation',
    question: 'Which is most appropriate for a grant proposal?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'We want to study this',
      'We propose to investigate this phenomenon',
      'We\'re gonna look into this',
      'We plan to check this out'
    ],
    correctAnswer: 1,
    explanation: 'Grant proposals require formal language: "propose to investigate," "phenomenon" convey professionalism and precision.'
  },
  {
    id: 718,
    category: 'Stylistic Variation',
    question: 'Select the most appropriate medical terminology:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The patient has a bad headache',
      'The patient presents with severe cephalgia',
      'The patient\'s head hurts a lot',
      'The patient complains of head pain'
    ],
    correctAnswer: 1,
    explanation: 'Medical contexts use technical terminology: "presents with" (professional phrasing), "cephalgia" (medical term for headache).'
  },
  {
    id: 719,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate scholarly tone?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Lots of researchers say this is true',
      'Numerous scholars have confirmed this assertion',
      'A bunch of experts agree with this',
      'Many people think this is right'
    ],
    correctAnswer: 1,
    explanation: 'Scholarly writing uses precise, formal language: "numerous scholars," "confirmed," "assertion" over casual expressions.'
  },
  {
    id: 720,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate impersonal construction:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I found that temperature affects the reaction',
      'We observed that temperature affects the reaction',
      'It was found that temperature affects the reaction',
      'You can see that temperature affects the reaction'
    ],
    correctAnswer: 2,
    explanation: 'Impersonal constructions ("It was found that") remove personal reference, increasing objectivity in academic writing.'
  },
  {
    id: 721,
    category: 'Stylistic Variation',
    question: 'Which is most appropriate for a policy document?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Employees should not come late',
      'Punctuality is expected of all personnel',
      'Workers need to show up on time',
      'Staff shouldn\'t be tardy'
    ],
    correctAnswer: 1,
    explanation: 'Policy documents use formal language: "punctuality," "personnel" rather than casual expressions about being late.'
  },
  {
    id: 722,
    category: 'Stylistic Variation',
    question: 'Select the most appropriate academic qualification:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'This might possibly maybe work',
      'This may potentially demonstrate efficacy',
      'This could probably work',
      'This might work, I guess'
    ],
    correctAnswer: 1,
    explanation: 'Academic hedging uses formal modal verbs and vocabulary: "may potentially," "demonstrate efficacy" are appropriately cautious and formal.'
  },
  {
    id: 723,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate formality for a job application?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I\'m really good at this stuff',
      'I possess extensive expertise in this field',
      'I know a lot about this',
      'I\'m pretty experienced with this'
    ],
    correctAnswer: 1,
    explanation: 'Job applications require formal self-presentation: "possess extensive expertise in this field" is appropriately professional.'
  },
  {
    id: 724,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate neutral terminology:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'The chairman led the meeting',
      'The chairperson presided over the meeting',
      'The chair guy ran the meeting',
      'The boss handled the meeting'
    ],
    correctAnswer: 1,
    explanation: 'Gender-neutral, formal language is appropriate: "chairperson," "presided over" are both inclusive and formal.'
  },
  {
    id: 725,
    category: 'Stylistic Variation',
    question: 'Which is most appropriate for an abstract?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'This paper talks about climate change effects',
      'This study examines the impacts of climate change',
      'This essay discusses what climate change does',
      'This work looks at climate change stuff'
    ],
    correctAnswer: 1,
    explanation: 'Abstracts use formal, precise language: "study examines," "impacts" rather than casual verbs like "talks about."'
  },
  {
    id: 726,
    category: 'Stylistic Variation',
    question: 'Select the most appropriate formal transition:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'Also, the data shows...',
      'Furthermore, the data indicate...',
      'Plus, the data shows...',
      'And the data shows...'
    ],
    correctAnswer: 1,
    explanation: 'Formal academic transitions use words like "furthermore" and subject-verb agreement "data indicate" (plural).'
  },
  {
    id: 727,
    category: 'Stylistic Variation',
    question: 'Which demonstrates appropriate professional distance?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'I feel strongly that this is wrong',
      'The evidence suggests this conclusion is problematic',
      'I personally think this is incorrect',
      'In my view, this is a bad conclusion'
    ],
    correctAnswer: 1,
    explanation: 'Professional writing maintains distance: references evidence rather than personal feelings, uses formal vocabulary.'
  },
  {
    id: 728,
    category: 'Stylistic Variation',
    question: 'Choose the most appropriate cautious claim:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'This definitely causes cancer',
      'This may be associated with increased cancer risk',
      'This probably causes cancer',
      'This might maybe cause cancer'
    ],
    correctAnswer: 1,
    explanation: 'Scientific caution uses measured language: "may be associated with" is appropriately hedged and formal.'
  },
  {
    id: 729,
    category: 'Stylistic Variation',
    question: 'Which is most suitable for a research methodology section?',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'We picked 50 people randomly',
      'A random sample of 50 participants was selected',
      'We randomly chose 50 folks',
      'We got 50 random people'
    ],
    correctAnswer: 1,
    explanation: 'Methodology sections use passive voice and formal terms: "sample," "participants," "was selected" are standard.'
  },
  {
    id: 730,
    category: 'Stylistic Variation',
    question: 'Select the most appropriate formal recommendation:',
    instruction: 'Choose the option that best matches the formal register required for academic contexts.',
    options: [
      'You should really do more research',
      'Further investigation is warranted',
      'More research would be good',
      'It would be nice to research more'
    ],
    correctAnswer: 1,
    explanation: 'Formal recommendations use impersonal constructions and formal vocabulary: "Further investigation is warranted" is appropriately academic.'
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
