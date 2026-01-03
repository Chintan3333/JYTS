// Planet Information Data
export const planetInfo = {
  sun: {
    name: 'Sun (Sūrya)',
    description: 'The king of the planets, represents the soul, authority, vitality, and purpose. Shows who you are at your core and how you shine in the world.',
    mainSubjects: [
      { title: 'Soul & Self (Ātman)', items: ['Inner self, soul purpose', 'Sense of identity and ego', 'Life direction and self-realization'] },
      { title: 'Authority & Leadership', items: ['Leadership qualities', 'Power, command, authority', 'Government, administration, ruling roles'] },
      { title: 'Father & Father Figures', items: ['Relationship with father', 'Influence of father or mentors', 'Paternal lineage'] },
      { title: 'Career & Status', items: ['Public position and reputation', 'Recognition, fame, honors', 'Success through authority or leadership roles'] },
      { title: 'Health & Vitality', items: ['Physical vitality and immunity', 'Heart, eyes, bones', 'Overall life force and stamina'] },
      { title: 'Confidence & Willpower', items: ['Self-confidence and courage', 'Ambition and determination', 'Ability to stand independently'] },
      { title: 'Dharma & Ethics', items: ['Righteousness, truth, integrity', 'Moral authority and principles'] }
    ],
    characteristics: {
      gender: 'Masculine',
      nature: 'Malefic (functional results depend on chart)',
      element: 'Fire',
      caste: 'Kṣatriya (warrior/ruler)',
      direction: 'East',
      day: 'Sunday'
    },
    positive: ['Strong leadership and authority', 'Confidence, clarity of purpose', 'Good relationship with father', 'Recognition and respect in society'],
    negative: ['Low confidence or ego issues', 'Problems with authority or father', 'Career recognition issues', 'Health issues related to vitality'],
    dignities: {
      own: ['Leo (Siṁha)'],
      exaltation: 'Aries (Meṣa)',
      debilitation: 'Libra (Tulā)'
    }
  },
  moon: {
    name: 'Moon (Chandra)',
    description: 'Represents the mind, emotions, and inner world. Reflects how a person feels, reacts, nurtures, and experiences life internally. Governs mental health and daily experiences.',
    mainSubjects: [
      { title: 'Mind & Emotions', items: ['Thoughts, feelings, and emotional responses', 'Mood, sensitivity, and adaptability', 'Mental peace or emotional fluctuations'] },
      { title: 'Mother & Maternal Influences', items: ['Relationship with mother', 'Maternal care, nourishment, and emotional support', 'Home atmosphere during childhood'] },
      { title: 'Mental Health & Psychology', items: ['Emotional stability or anxiety', 'Subconscious patterns and habits', 'Memory and imagination'] },
      { title: 'Nurturing & Care', items: ['Caring nature and compassion', 'Ability to nourish others emotionally or physically', 'Empathy and kindness'] },
      { title: 'Daily Life & Habits', items: ['Routine life and everyday experiences', 'Comfort, security, and personal needs'] },
      { title: 'Change & Adaptability', items: ['Flexibility and responsiveness', 'Fluctuations in life circumstances', 'Ability to adjust to change'] },
      { title: 'Public Life & Popularity', items: ['Public perception and popularity', 'How others emotionally respond to you'] }
    ],
    characteristics: {
      gender: 'Feminine',
      nature: 'Benefic (can act malefic when afflicted)',
      element: 'Water',
      caste: 'Vaiśya',
      direction: 'Northwest',
      day: 'Monday'
    },
    positive: ['Calm, balanced, and emotionally stable mind', 'Good relationship with mother', 'Strong intuition and empathy', 'Popularity and public support'],
    negative: ['Emotional instability or mood swings', 'Anxiety, stress, or mental unrest', 'Problems with mother or home life', 'Over-sensitivity or dependency'],
    dignities: {
      own: ['Cancer (Karka)'],
      exaltation: 'Taurus (Vṛṣabha)',
      debilitation: 'Scorpio (Vṛścika)'
    }
  },
  mars: {
    name: 'Mars (Maṅgala / Kuja)',
    description: 'Represents energy, action, courage, and aggression. Shows how a person asserts themselves, fights challenges, and uses physical and mental strength.',
    mainSubjects: [
      { title: 'Energy, Drive & Action', items: ['Physical energy and stamina', 'Initiative, motivation, and ambition', 'Ability to take quick action'] },
      { title: 'Courage & Bravery', items: ['Fearlessness and boldness', 'Willingness to face risks and challenges', 'Competitive spirit'] },
      { title: 'Anger & Aggression', items: ['Temper, impatience, and frustration', 'How one handles conflict', 'Assertiveness vs impulsiveness'] },
      { title: 'Brothers & Siblings', items: ['Younger brothers (and siblings in general)', 'Relationship with siblings'] },
      { title: 'Accidents, Injuries & Surgery', items: ['Cuts, burns, wounds', 'Accidents and physical trauma', 'Surgical procedures'] },
      { title: 'Weapons, Tools & Machinery', items: ['Weapons, sharp objects, fire', 'Machinery, engineering tools, metals'] },
      { title: 'Land & Property', items: ['Land, real estate, construction', 'Technical or mechanical fields'] },
      { title: 'Sexual Energy & Passion', items: ['Libido, passion, physical desire', 'Intensity in relationships'] }
    ],
    characteristics: {
      gender: 'Masculine',
      nature: 'Malefic',
      element: 'Fire',
      caste: 'Kṣatriya',
      direction: 'South',
      day: 'Tuesday'
    },
    positive: ['High courage, discipline, and leadership in action', 'Success in sports, military, police, engineering, surgery, or technical fields', 'Strong protective instincts and determination'],
    negative: ['Excessive anger, violence, or impulsiveness', 'Accidents, injuries, or disputes', 'Conflicts with siblings', 'Lack of motivation or physical weakness'],
    dignities: {
      own: ['Aries (Meṣa)', 'Scorpio (Vṛścika)'],
      exaltation: 'Capricorn (Makara)',
      debilitation: 'Cancer (Karka)'
    }
  },
  mercury: {
    name: 'Mercury (Budha)',
    description: 'Represents intellect, communication, logic, and learning. Governs how a person thinks, speaks, analyzes, and exchanges information.',
    mainSubjects: [
      { title: 'Intellect & Intelligence', items: ['Logical thinking and reasoning', 'Analytical ability and problem-solving', 'Quick understanding and adaptability'] },
      { title: 'Communication & Speech', items: ['Speaking, writing, teaching', 'Language skills and expression', 'Persuasion, debate, and negotiation'] },
      { title: 'Education & Learning', items: ['Schooling and academics', 'Curiosity and learning capacity', 'Skills acquired through study'] },
      { title: 'Business & Commerce', items: ['Trade, sales, marketing', 'Accounting, finance, and transactions', 'Entrepreneurship and negotiation'] },
      { title: 'Youth & Friends', items: ['Youthfulness and playful nature', 'Friendships and peer relationships'] },
      { title: 'Technology & Skills', items: ['Mathematics, data, computing', 'Writing, editing, journalism', 'Technical and intellectual skills'] },
      { title: 'Travel & Movement', items: ['Short journeys and commuting', 'Communication through travel or media'] }
    ],
    characteristics: {
      gender: 'Neutral',
      nature: 'Benefic (becomes malefic when afflicted)',
      element: 'Earth',
      caste: 'Vaiśya',
      direction: 'North',
      day: 'Wednesday'
    },
    positive: ['Sharp intellect and clear communication', 'Success in business, education, writing, teaching, or media', 'Adaptable, witty, and youthful mindset'],
    negative: ['Confusion, anxiety, or indecision', 'Speech problems or misunderstandings', 'Learning difficulties or nervousness', 'Business losses due to poor judgment'],
    dignities: {
      own: ['Gemini (Mithuna)', 'Virgo (Kanyā)'],
      exaltation: 'Virgo (Kanyā)',
      debilitation: 'Pisces (Mīna)'
    }
  },
  jupiter: {
    name: 'Jupiter (Guru / Bṛhaspati)',
    description: 'The great benefic, represents wisdom, expansion, knowledge, and blessings. Shows where life grows, receives grace, and finds meaning.',
    mainSubjects: [
      { title: 'Wisdom & Knowledge', items: ['Higher knowledge and learning', 'Philosophy, scriptures, and sacred texts', 'Moral understanding and insight'] },
      { title: 'Dharma & Ethics', items: ['Righteousness, truth, and integrity', 'Moral values and life principles', 'Spiritual guidance'] },
      { title: 'Teachers & Mentors', items: ['Gurus, teachers, professors', 'Counselors and advisors', 'Wisdom received from elders'] },
      { title: 'Wealth & Prosperity', items: ['Abundance, prosperity, and blessings', 'Financial growth and good fortune', 'Expansion in material life'] },
      { title: 'Children & Progeny', items: ['Children and their well-being', 'Role as a guide or protector to children'] },
      { title: 'Marriage (Especially for Women)', items: ['Husband and marital happiness (traditional interpretation)', 'Guidance and support from spouse'] },
      { title: 'Faith & Spirituality', items: ['Belief systems and religious inclinations', 'Devotion and spiritual practices'] },
      { title: 'Expansion & Growth', items: ['Personal growth and optimism', 'Opportunities and success through wisdom'] }
    ],
    characteristics: {
      gender: 'Masculine',
      nature: 'Great Benefic',
      element: 'Ether (Ākāśa)',
      caste: 'Brāhmaṇa',
      direction: 'Northeast',
      day: 'Thursday'
    },
    positive: ['Wise, ethical, and optimistic personality', 'Success in education, teaching, law, or spiritual fields', 'Prosperity, children, and strong moral values', 'Respect and guidance from others'],
    negative: ['Poor judgment or misplaced faith', 'Financial or educational setbacks', 'Issues related to children or mentors', 'Hypocrisy or overconfidence'],
    dignities: {
      own: ['Sagittarius (Dhanuṣ)', 'Pisces (Mīna)'],
      exaltation: 'Cancer (Karka)',
      debilitation: 'Capricorn (Makara)'
    }
  },
  venus: {
    name: 'Venus (Śukra)',
    description: 'The planet of love, beauty, pleasure, and relationships. Represents what we enjoy, how we relate, and how we seek harmony and comfort in life.',
    mainSubjects: [
      { title: 'Love & Relationships', items: ['Romantic relationships', 'Attraction and affection', 'Harmony in partnerships'] },
      { title: 'Marriage (Especially for Men)', items: ['Wife and marital happiness (traditional interpretation)', 'Quality of married life and intimacy'] },
      { title: 'Beauty & Aesthetics', items: ['Physical beauty and charm', 'Art, fashion, music, dance, and design', 'Creativity and artistic taste'] },
      { title: 'Pleasure & Enjoyment', items: ['Luxury, comfort, and enjoyment of life', 'Entertainment, leisure, and fun'] },
      { title: 'Wealth & Comforts', items: ['Material comforts and vehicles', 'Fine things, jewelry, perfumes, clothing'] },
      { title: 'Sexuality & Sensuality', items: ['Physical attraction and desire', 'Sensual pleasures and intimacy'] },
      { title: 'Diplomacy & Harmony', items: ['Ability to compromise and maintain peace', 'Social grace and charm'] }
    ],
    characteristics: {
      gender: 'Feminine',
      nature: 'Benefic',
      element: 'Water',
      caste: 'Brāhmaṇa',
      direction: 'Southeast',
      day: 'Friday'
    },
    positive: ['Loving, charming, and attractive personality', 'Happy relationships and marital harmony', 'Artistic talent and refined taste', 'Comfort, luxury, and financial ease'],
    negative: ['Relationship problems or lack of harmony', 'Overindulgence or excessive pleasure-seeking', 'Financial issues related to luxury spending', 'Lack of satisfaction or imbalance in desires'],
    dignities: {
      own: ['Taurus (Vṛṣabha)', 'Libra (Tulā)'],
      exaltation: 'Pisces (Mīna)',
      debilitation: 'Virgo (Kanyā)'
    }
  },
  saturn: {
    name: 'Saturn (Śani)',
    description: 'Represents discipline, responsibility, karma, and life lessons. The planet that tests patience and maturity and rewards sincere effort over time.',
    mainSubjects: [
      { title: 'Karma & Life Lessons', items: ['Past-life karma and consequences', 'Delays, challenges, and endurance', 'Lessons learned through hardship'] },
      { title: 'Discipline & Hard Work', items: ['Persistence, patience, and responsibility', 'Long-term effort and commitment', 'Seriousness and practicality'] },
      { title: 'Time, Age & Longevity', items: ['Passage of time and aging', 'Old age and maturity', 'Longevity and life span'] },
      { title: 'Career & Labor', items: ['Work involving hard effort or service', 'Labor, industry, and manual work', 'Low-level or demanding jobs'] },
      { title: 'Limitations & Delays', items: ['Restrictions, obstacles, and fear', 'Slow progress and setbacks', 'Tests of faith and perseverance'] },
      { title: 'Suffering & Isolation', items: ['Loneliness or separation', 'Detachment and austerity', 'Life in isolation or hardship'] },
      { title: 'Justice & Law', items: ['Fairness, justice, and ethical accountability', 'Punishment or reward according to actions'] },
      { title: 'Servants & Masses', items: ['Working class, servants, and underprivileged people', 'Social responsibility and service'] }
    ],
    characteristics: {
      gender: 'Neutral',
      nature: 'Malefic',
      element: 'Air',
      caste: 'Śūdra',
      direction: 'West',
      day: 'Saturday'
    },
    positive: ['Deep discipline, patience, and maturity', 'Long-term success through persistence', 'Respect earned through responsibility', 'Strong sense of justice and humility'],
    negative: ['Depression, fear, or pessimism', 'Excessive delays or frustration', 'Loneliness or lack of support', 'Health issues related to bones, joints, or nerves'],
    dignities: {
      own: ['Capricorn (Makara)', 'Aquarius (Kumbha)'],
      exaltation: 'Libra (Tulā)',
      debilitation: 'Aries (Meṣa)'
    }
  },
  rahu: {
    name: 'Rahu',
    description: 'A shadow planet (Chāyā Graha) that represents material desires, illusions, obsessions, and life\'s cravings. Linked to karmic growth and often shows where we may face confusion or struggle, but also where we are pushed to grow through unconventional paths.',
    mainSubjects: [
      { title: 'Material Desires & Obsessions', items: ['Deep cravings for worldly success, wealth, fame, or power', 'Unconventional desires that can feel all-consuming', 'A tendency to get involved in worldly matters to the point of obsession'] },
      { title: 'Illusion & Deception', items: ['Illusions or misunderstandings about life and self', 'False beliefs, deception, or being misled by desires', 'Tendency to overlook reality in pursuit of dreams'] },
      { title: 'Foreign Lands & Exploration', items: ['Desire for travel, especially to foreign or distant places', 'Connection to foreign cultures, people, or ideas', 'Unusual or unconventional career opportunities abroad'] },
      { title: 'Unconventionality & Unusual Experiences', items: ['Breaking societal norms and exploring alternative paths', 'Non-traditional career choices or rebellious attitudes', 'Attraction to the unknown or taboo subjects'] },
      { title: 'Karma & Life\'s Challenges', items: ['Karmic growth through struggle, confusion, or obsession', 'Life lessons learned through uncomfortable or challenging experiences', 'Push to break away from past karma and evolve in new ways'] },
      { title: 'Technology, Innovation & Media', items: ['Influence over modern technology, gadgets, or media', 'Interest in new age ideas, inventions, or digital media', 'Modern trends, social media, and virtual platforms'] },
      { title: 'Desires for Power & Authority', items: ['The desire for control, leadership, or dominance', 'Striving to break free from limitations to gain power and influence'] },
      { title: 'Hidden Truths & Mysticism', items: ['Tendency to uncover secrets or hidden aspects of life', 'A connection to mystical or esoteric knowledge', 'Deep curiosity about the unknown or mysterious'] }
    ],
    characteristics: {
      gender: 'Neutral',
      nature: 'Malefic (though can bring great results when well-placed)',
      element: 'Air',
      caste: 'Unclear (often associated with being an outsider)',
      direction: 'North (Rahu is linked to the North Node of the Moon)',
      day: 'Saturday (linked with Saturn\'s energy)'
    },
    positive: ['Unconventional, innovative, and groundbreaking approach to life', 'Success through foreign ventures, technology, or media', 'Ability to explore new horizons and break free from old patterns', 'Strong ambition and drive for worldly accomplishments'],
    negative: ['Obsession with material wealth or fame', 'Deception, confusion, or self-delusion', 'Inability to focus on what\'s truly important, leading to excessive attachment to fleeting desires', 'Mental stress, addiction, or overindulgence in worldly pleasures'],
    dignities: {
      own: ['Aquarius (Kumbha)', 'Taurus (Vṛṣabha)'],
      exaltation: 'Gemini (Mithuna)',
      debilitation: 'Sagittarius (Dhanuṣ)'
    }
  },
  ketu: {
    name: 'Ketu',
    description: 'A shadow planet (Chāyā Graha), the counterpart to Rahu. Linked to spiritual growth, detachment, and liberation. Often seen as a planet of enlightenment through letting go and represents what is already attained from past lives.',
    mainSubjects: [
      { title: 'Spirituality & Liberation', items: ['Connection to spiritual liberation (Moksha) and the higher self', 'Desire for enlightenment, detachment, and spiritual practices', 'Renunciation of material desires and ego'] },
      { title: 'Past-Life Karma & Surrender', items: ['The influence of past life karma that needs to be resolved', 'Inner growth through letting go of attachments', 'A feeling of being disconnected from the material world'] },
      { title: 'Intuition & Mysticism', items: ['Strong intuition, psychic abilities, and connection to the unseen', 'Interest in mystical and esoteric knowledge', 'Occult wisdom, metaphysical experiences, and spiritual revelations'] },
      { title: 'Detachment & Loss', items: ['Letting go of material comforts and relationships', 'A feeling of isolation, but for spiritual growth', 'Experiences of loss or detachment in life that lead to inner growth'] },
      { title: 'Healing & Transformation', items: ['Deep emotional and psychological healing', 'Transformation through the abandonment of unnecessary desires', 'Healing through self-awareness and introspection'] },
      { title: 'Hidden Wisdom & Inner Knowledge', items: ['Access to hidden knowledge, spiritual teachings, and higher truths', 'Silent, inward knowledge (as opposed to Rahu\'s outward focus)', 'Ability to uncover what is hidden or neglected'] },
      { title: 'Unconscious Mind & Subconscious Patterns', items: ['Deep-seated fears, hidden issues, and subconscious mind', 'What remains hidden or repressed from past experiences', 'Tendency to transcend material obstacles and focus on the inner world'] },
      { title: 'Non-materialism & Minimalism', items: ['Disinterest in material possessions, status, or fame', 'Tendency to live a simple, minimalist lifestyle', 'Focus on spiritual goals rather than worldly achievements'] }
    ],
    characteristics: {
      gender: 'Neutral',
      nature: 'Malefic (though it\'s often seen as spiritual in nature and brings liberation)',
      element: 'Fire',
      caste: 'Brahmin (in a spiritual sense)',
      direction: 'South (Ketu is linked to the South Node of the Moon)',
      day: 'Tuesday (linked with Mars\' energy)'
    },
    positive: ['Strong spiritual inclination and desire for Moksha (liberation)', 'Profound intuition and mystical insight', 'Success in non-material pursuits, such as meditation, philosophy, and healing', 'Ability to let go of attachments and experience inner peace'],
    negative: ['Over-detachment or neglect of necessary worldly responsibilities', 'Feelings of alienation or disconnection from others', 'Struggles to find purpose or meaning in life', 'Spiritual delusions or mental confusion due to excessive detachment'],
    dignities: {
      own: ['Scorpio (Vṛścika)', 'Pisces (Mīna)'],
      exaltation: 'Sagittarius (Dhanuṣ)',
      debilitation: 'Gemini (Mithuna)'
    }
  }
};

// House Information Data
export const houseInfo = {
  1: {
    name: '1st House (Lagna / Ascendant Bhāva)',
    description: 'One of the most important houses because it represents the self, personality, and overall life path. It sets the tone for the whole chart.',
    mainSubjects: [
      { title: 'Self & Personality', items: ['Physical appearance, body structure, and general health', 'Personality traits, temperament, and attitude', 'Outer expression of the self'] },
      { title: 'Life Direction & Vitality', items: ['Overall energy and vitality', 'Life approach, courage, and stamina', 'General life path and self-development'] },
      { title: 'Physical Body & Health', items: ['Constitution and immunity', 'Strength and resilience', 'Predisposition to diseases or vitality'] },
      { title: 'Character & Behavior', items: ['Habits, behavior, and mannerisms', 'Leadership abilities and initiative', 'How one is perceived by others'] },
      { title: 'Identity & Ego', items: ['Sense of identity and self-awareness', 'Confidence and self-esteem', 'Individuality and personal goals'] },
      { title: 'Birth & Early Environment', items: ['Circumstances at birth influencing personality', 'Early upbringing affecting character'] }
    ],
    positive: ['Healthy, energetic, and confident', 'Strong personality with clear life direction', 'Good physical constitution and vitality', 'Balanced self-expression and leadership qualities'],
    negative: ['Weak health or low vitality', 'Challenges in self-confidence or identity', 'Personality traits that may cause difficulties in life', 'Obstacles in personal development or life direction']
  },
  2: {
    name: '2nd House (Dhana Bhāva / Dwitiya Bhāva)',
    description: 'Mainly associated with wealth, family, and speech. Shows how we earn, manage resources, and communicate, as well as our family environment and values.',
    mainSubjects: [
      { title: 'Wealth & Finances', items: ['Personal income, savings, and financial stability', 'Material possessions and assets', 'Financial management and spending habits'] },
      { title: 'Family & Early Life', items: ['Immediate family, especially parents (mainly father in some texts)', 'Family environment, traditions, and upbringing'] },
      { title: 'Speech & Communication', items: ['Way of speaking, articulation, and persuasive abilities', 'Communication skills in social and professional life'] },
      { title: 'Food & Nourishment', items: ['Eating habits and diet', 'Enjoyment of food and culinary skills'] },
      { title: 'Values & Possessions', items: ['Material and moral values', 'Sense of security derived from possessions and family'] },
      { title: 'Face & Appearance', items: ['Shape and features of the face (as per classical texts)', 'Expressions and demeanor'] }
    ],
    positive: ['Good financial stability and ability to earn', 'Strong family support and harmonious upbringing', 'Clear and effective communication', 'Enjoyment of comforts, food, and possessions'],
    negative: ['Financial difficulties or losses', 'Family disputes or lack of support', 'Poor communication or misunderstandings', 'Issues with personal values or material security']
  },
  3: {
    name: '3rd House (Sahaja Bhāva / Parakrama Bhāva)',
    description: 'Associated with courage, effort, communication, and siblings. Shows how a person faces challenges, expresses themselves, and takes initiative.',
    mainSubjects: [
      { title: 'Siblings', items: ['Relationship with brothers and sisters', 'Support or rivalry among siblings'] },
      { title: 'Communication & Skills', items: ['Writing, speaking, teaching, or other communication skills', 'Short travels for work or study', 'Learning skills or hobbies'] },
      { title: 'Courage & Initiative', items: ['Bravery, boldness, and adventurousness', 'Willpower, determination, and ability to take risks', 'Competitive spirit'] },
      { title: 'Effort & Enterprise', items: ['Hard work and personal effort to achieve goals', 'Entrepreneurship or self-driven projects'] },
      { title: 'Short Journeys & Travel', items: ['Journeys close to home or within the country', 'Traveling for work, study, or errands'] },
      { title: 'Friends & Acquaintances', items: ['Relationships with peers, neighbors, and casual friends', 'Social networks at a local or practical level'] },
      { title: 'Mental Agility & Learning', items: ['Quick thinking, curiosity, and adaptability', 'Learning through experience rather than formal education'] }
    ],
    positive: ['Courageous, communicative, and skilled in multiple areas', 'Strong relationship with siblings', 'Proactive, adventurous, and persistent', 'Successful short travels and local networking'],
    negative: ['Conflicts with siblings or neighbors', 'Hesitation, fear, or lack of initiative', 'Struggles in communication or learning new skills', 'Obstacles in short travels or local efforts']
  },
  4: {
    name: '4th House (Sukha Bhāva / Chaturth Bhāva)',
    description: 'Primarily associated with home, emotions, and comforts. Represents the inner world, family environment, and sources of happiness.',
    mainSubjects: [
      { title: 'Home & Property', items: ['Residential comfort and property ownership', 'Real estate, vehicles, and immovable assets', 'Domestic peace and living conditions'] },
      { title: 'Mother & Maternal Influences', items: ['Relationship with mother or motherly figures', 'Maternal support and nurturing'] },
      { title: 'Emotional Well-being', items: ['Inner peace, mental stability, and happiness', 'Emotional security and contentment'] },
      { title: 'Education & Early Life', items: ['Early learning environment', 'Influence of upbringing on personality and values'] },
      { title: 'Vehicles & Comforts', items: ['Cars, vehicles, and other personal comforts', 'Luxuries and lifestyle amenities'] },
      { title: 'Spirituality & Inner Fulfillment', items: ['Meditation, inner growth, and personal satisfaction', 'Happiness derived from domestic and personal life'] },
      { title: 'Ancestral Heritage & Roots', items: ['Connection with family lineage or ancestral property', 'Cultural or traditional values'] }
    ],
    positive: ['Happy and harmonious home life', 'Strong bond with mother and family', 'Emotional stability and inner contentment', 'Comforts, property, and secure domestic environment'],
    negative: ['Conflicts or disturbances at home', 'Strained relationship with mother or maternal figures', 'Emotional instability or restlessness', 'Problems with property or domestic comforts']
  },
  5: {
    name: '5th House (Panchama Bhāva)',
    description: 'Considered one of the Trikona houses (houses of fortune), and it represents creativity, intelligence, and progeny. Associated with both material and spiritual pleasures, as well as personal expression.',
    mainSubjects: [
      { title: 'Children & Progeny', items: ['Biological children or adopted children', 'Relationship with children', 'Fertility and pregnancy'] },
      { title: 'Intelligence & Education', items: ['Mental abilities, intelligence, and analytical skills', 'Creativity in thinking', 'Education, especially higher or specialized learning'] },
      { title: 'Creativity & Arts', items: ['Artistic abilities (music, painting, dance, writing)', 'Creative expression and hobbies', 'Innovation and originality'] },
      { title: 'Romance & Love Affairs', items: ['Love relationships and early romantic experiences', 'Flirtations or romantic creativity'] },
      { title: 'Speculation & Gains', items: ['Profits from speculation, gambling, or risk-taking (not always literal gambling)', 'Investments that require intelligence and analysis'] },
      { title: 'Spiritual Merit (Punya)', items: ['Past-life merits or good karma', 'Spiritual inclinations, devotion, and religious practices'] },
      { title: 'Pleasure & Enjoyment', items: ['Fun, entertainment, and recreation', 'Joys of life that involve personal expression'] }
    ],
    positive: ['Intelligent, creative, and resourceful', 'Good relationships with children', 'Successful speculative or creative ventures', 'Spiritual and moral growth through personal effort'],
    negative: ['Difficulties in conceiving or issues with children', 'Problems in love affairs or education', 'Losses through speculation or poor judgment', 'Lack of creative or intellectual expression']
  },
  6: {
    name: '6th House (Ṣaṣṭha Bhāva)',
    description: 'Deals with challenges, service, and the ways we confront difficulties in life. Often called a Dusthāna (challenging house), but it also shows strength, resilience, and the ability to overcome obstacles.',
    mainSubjects: [
      { title: 'Health & Illness', items: ['Diseases, injuries, chronic conditions', 'Digestive system, intestines', 'Healing, recovery, medical treatment'] },
      { title: 'Enemies & Opposition', items: ['Enemies, rivals, competitors', 'Legal opponents', 'Conflicts and disputes'] },
      { title: 'Service & Work', items: ['Daily work routine', 'Service-oriented jobs', 'Employment (especially non-managerial roles)', 'Duty, responsibility, discipline'] },
      { title: 'Debts & Loans', items: ['Financial debts', 'Repayment obligations', 'Financial pressure'] },
      { title: 'Litigation & Legal Matters', items: ['Lawsuits', 'Court cases', 'Legal struggles'] },
      { title: 'Obstacles & Struggles', items: ['Hardships and challenges', 'Delays and resistance', 'Tests of endurance'] },
      { title: 'Discipline & Hard Work', items: ['Persistence', 'Ability to fight through problems', 'Competitive spirit'] },
      { title: 'Enemies Within', items: ['Bad habits', 'Addictions', 'Negative thought patterns'] },
      { title: 'Maternal Uncle', items: ['Relationship with maternal uncle (in many traditions)'] }
    ],
    positive: ['Ability to defeat enemies', 'Success in competitive fields', 'Strong problem-solving skills', 'Careers in medicine, law, military, social service, healing, or conflict management'],
    negative: ['Chronic illness', 'Heavy debts', 'Constant conflicts', 'Stressful work environment']
  },
  7: {
    name: '7th House (Saptama Bhāva)',
    description: 'Primarily associated with partnerships, marriage, and relationships. It\'s directly opposite the 1st house (self) and shows how we connect with others in a one-to-one dynamic.',
    mainSubjects: [
      { title: 'Marriage & Spouse', items: ['Nature of marriage', 'Characteristics and personality of the spouse', 'Marital happiness or challenges'] },
      { title: 'Partnerships', items: ['Business partnerships', 'Long-term collaborations', 'Contracts and agreements'] },
      { title: 'Legal & Social Bonds', items: ['Marriage contracts and legal agreements', 'Social dealings and diplomacy', 'Public interactions'] },
      { title: 'Romantic Relationships', items: ['Romantic tendencies', 'Attraction and compatibility', 'Love, intimacy, and emotional bonding'] },
      { title: 'Open Enemies', items: ['In some texts, the 7th house can show open opponents or competitors because it represents the "other" in opposition to self'] },
      { title: 'Balance & Harmony', items: ['Shows how one balances personal needs with another person\'s needs', 'Negotiation and compromise skills'] }
    ],
    positive: ['Harmonious marriage and strong partnerships', 'Profitable business partnerships', 'Ability to maintain healthy one-on-one relationships', 'Good social and diplomatic skills'],
    negative: ['Marital discord or delays in marriage', 'Difficulties in business partnerships', 'Legal disputes with partners or spouses', 'Challenges in one-to-one relationships']
  },
  8: {
    name: '8th House (Ayur Bhāva / Randhra Bhāva)',
    description: 'Considered a Dusthāna, meaning it deals with complex, transformative, and sometimes challenging aspects of life. It\'s the house of transformation, mysteries, and hidden matters.',
    mainSubjects: [
      { title: 'Longevity & Death', items: ['Lifespan (general indications, not exact dates)', 'Health crises and accidents', 'Transformation through life challenges'] },
      { title: 'Occult & Mysticism', items: ['Interest in astrology, occult sciences, metaphysics, and hidden knowledge', 'Psychic abilities, intuition, or mystical experiences'] },
      { title: 'Inheritance & Legacies', items: ['Property, wealth, or assets inherited from others', 'Wills, legacies, and joint finances', 'Insurance or other people\'s money'] },
      { title: 'Sudden Gains or Losses', items: ['Unexpected financial ups and downs', 'Profits through speculation or sudden events'] },
      { title: 'Transformation & Change', items: ['Major life changes, crises, or turning points', 'Psychological transformation, personal growth through challenges'] },
      { title: 'Sexuality & Intimacy', items: ['Sexual life and deep bonds with partners', 'Taboo or hidden aspects of sexuality'] },
      { title: 'Secrets & Hidden Matters', items: ['Hidden enemies', 'Secrets, conspiracies, or confidential matters', 'Research and investigation skills'] },
      { title: 'Debts & Loans', items: ['Borrowing and lending money', 'Obligations or financial entanglements'] }
    ],
    positive: ['Ability to handle crises and transform challenges into growth', 'Success in research, investigation, or occult studies', 'Gains through inheritance or others\' resources', 'Strong resilience and deep psychological insight'],
    negative: ['Health crises or accidents', 'Sudden financial loss', 'Hidden enemies causing trouble', 'Difficulty in intimate relationships or personal transformation']
  },
  9: {
    name: '9th House (Dharma Bhāva)',
    description: 'One of the most auspicious houses and is associated with luck, higher knowledge, and spiritual inclinations. Represents our life path, moral compass, and the blessings we receive from the universe.',
    mainSubjects: [
      { title: 'Dharma & Life Path', items: ['Personal ethics, moral values, and principles', 'Sense of purpose in life', 'Guidance from higher wisdom or philosophy'] },
      { title: 'Luck & Fortune', items: ['Natural blessings, prosperity, and opportunities', 'Good fortune, success, and protection from difficulties', 'Long-term gains and rewards'] },
      { title: 'Higher Education & Knowledge', items: ['Advanced studies, universities, and scholarly pursuits', 'Interest in philosophy, religion, or spiritual learning', 'Teachers, mentors, and guides'] },
      { title: 'Religion & Spirituality', items: ['Faith, beliefs, and spiritual inclinations', 'Pilgrimages, rituals, and sacred practices'] },
      { title: 'Father & Paternal Influences', items: ['Relationship with father or fatherly figures', 'Guidance and support from elders'] },
      { title: 'Long Journeys & Travel', items: ['Foreign travel or trips to distant places', 'Exposure to other cultures and experiences'] },
      { title: 'Wisdom & Guidance', items: ['Philosophical thinking', 'Ability to give and receive guidance', 'Mentorship roles'] }
    ],
    positive: ['Strong luck and protective influences', 'Successful higher education and career through guidance', 'Harmonious relationship with father or mentors', 'Spiritual growth and philosophical insight'],
    negative: ['Obstacles in education or spiritual growth', 'Strained relationship with father', 'Lack of guidance or misfortune', 'Trouble with long-distance travel']
  },
  10: {
    name: '10th House (Karma Bhāva / Karma Sthāna)',
    description: 'The house of career, profession, and public life. It reflects your achievements, status, and reputation in the world.',
    mainSubjects: [
      { title: 'Career & Profession', items: ['Occupation, job, or professional path', 'Achievements and status in career', 'Work reputation and recognition'] },
      { title: 'Authority & Leadership', items: ['Positions of power or responsibility', 'Management, authority, and leadership skills', 'Public image and influence'] },
      { title: 'Life Goals & Ambitions', items: ['Long-term objectives and ambitions', 'Success through personal effort', 'Recognition for achievements'] },
      { title: 'Father & Paternal Influence', items: ['Relationship with father or fatherly figures', 'Guidance and support from elders in professional life'] },
      { title: 'Social Status & Public Image', items: ['Standing in society', 'Honors, awards, and respect', 'Influence and authority in social circles'] },
      { title: 'Professional Success & Fame', items: ['Recognition for talents and efforts', 'Achievements that bring fame or public acknowledgement'] },
      { title: 'Work Ethics & Karma', items: ['Approach to responsibilities', 'Discipline, duty, and work habits', 'Reputation through actions'] }
    ],
    positive: ['Successful and respected career', 'Leadership qualities and strong social standing', 'Recognition and rewards for hard work', 'Strong guidance and support from father or mentors'],
    negative: ['Career instability or professional setbacks', 'Conflicts with authority figures or superiors', 'Lack of recognition or social respect', 'Obstacles in achieving ambitions']
  },
  11: {
    name: '11th House (Labha Bhāva)',
    description: 'Considered very auspicious and is often called the House of Gains, Social Networks, and Fulfillment of Desires. It shows what we earn, how we connect socially, and what we achieve in life.',
    mainSubjects: [
      { title: 'Gains & Income', items: ['Financial profits, earnings, and wealth', 'Monetary gains from career, business, or investments', 'Unexpected financial opportunities'] },
      { title: 'Fulfillment of Desires', items: ['Achievements of personal and material goals', 'Hopes, dreams, and ambitions', 'Support from friends or influential people to achieve goals'] },
      { title: 'Friends & Social Networks', items: ['Social circle and friendships', 'Elder siblings (especially brothers in many texts)', 'Beneficial associations, organizations, clubs'] },
      { title: 'Elder Siblings', items: ['Relationship with older brothers or sisters (depending on tradition)', 'Support or influence from them'] },
      { title: 'Social Influence & Connections', items: ['Networking abilities', 'Popularity, reputation in social circles', 'Ability to influence or be supported by groups'] },
      { title: 'Elderly Mentors & Guides', items: ['Guidance from seniors, teachers, or advisors', 'Associations with helpful people in society'] },
      { title: 'Success & Recognition', items: ['Achievements due to efforts or social support', 'Realization of goals and life ambitions'] }
    ],
    positive: ['Financial prosperity and gains', 'Strong social and professional network', 'Fulfillment of life goals', 'Support from friends, mentors, or influential people'],
    negative: ['Financial losses or debts', 'Disharmony in social networks or with siblings', 'Obstacles in achieving ambitions or goals', 'Isolation or difficulty in connecting with helpful people']
  },
  12: {
    name: '12th House (Vyaya Bhāva / Moksha Bhāva)',
    description: 'Considered a Dusthāna, dealing with loss, expenditure, isolation, and spiritual liberation. It reflects what we let go of, where we experience solitude, and our connection to higher consciousness.',
    mainSubjects: [
      { title: 'Losses & Expenditure', items: ['Financial losses or unnecessary spending', 'Expenses related to lifestyle, travel, or helping others', 'Letting go of material attachments'] },
      { title: 'Isolation & Solitude', items: ['Time spent in seclusion, retreats, or hospitals', 'Living away from home or foreign lands', 'Solitary experiences for reflection or healing'] },
      { title: 'Foreign Lands & Travel', items: ['Long-distance travel or relocation abroad', 'Life experiences connected with foreign places'] },
      { title: 'Spirituality & Liberation', items: ['Moksha (spiritual liberation) and higher consciousness', 'Meditation, yoga, and spiritual practices', 'Detachment and renunciation'] },
      { title: 'Hidden Enemies & Secret Matters', items: ['People working against you in secret', 'Hidden fears, subconscious patterns, and psychological issues'] },
      { title: 'Hospitals, Prisons & Institutions', items: ['Places of confinement or care, such as hospitals, ashrams, or monasteries', 'Institutional support or rehabilitation'] },
      { title: 'Dreams & Intuition', items: ['Imagination, intuition, and psychic abilities', 'Hidden desires and subconscious mind'] }
    ],
    positive: ['Spiritual growth and detachment from materialism', 'Comfort in solitude and foreign environments', 'Charitable actions and helping others', 'Strong intuition and inner wisdom'],
    negative: ['Financial losses or overspending', 'Isolation, confinement, or hidden enemies causing trouble', 'Psychological stress or confusion', 'Obstacles in spiritual progress']
  }
};

// Zodiac Signs Information Data
export const zodiacSignInfo = {
  'Aries': {
    name: 'Aries (Meṣa)',
    number: 1,
    description: 'The 1st zodiac sign, ruled by Mars (Mangal) and belongs to the Fire element (Agni tattva). It represents initiative, action, courage, and leadership.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Beginning, initiation, first step', 'Energy, enthusiasm, dynamism', 'Courage, bravery, fearlessness', 'Independence and self-identity', 'Competitive spirit'] },
      { title: 'Mind, Behavior & Personality', items: ['Confidence and assertiveness', 'Quick decision-making', 'Aggression and impatience', 'Adventurous mindset', 'Leadership attitude'] },
      { title: 'Body Parts & Health', items: ['Head, brain, skull', 'Face, forehead', 'Blood circulation', 'Fevers, cuts, burns, accidents', 'Headaches, migraines'] },
      { title: 'Professions & Activities', items: ['Army, police, defense services', 'Sports, athletics, gym, martial arts', 'Engineering (mechanical, military)', 'Surgeons, emergency doctors', 'Entrepreneurs, startups', 'Fire-related work (electricity, explosives, metallurgy)'] },
      { title: 'Power, Action & Conflict', items: ['Weapons and arms', 'Battles, wars, conflicts', 'Competition and rivalry', 'Risk-taking activities', 'Law enforcement and command roles'] }
    ],
    characteristics: {
      direction: 'East',
      element: 'Fire',
      nature: 'Movable (Chara)',
      gender: 'Male sign',
      caste: 'Kshatriya',
      rulingPlanet: 'Mars (Mangal)',
      indicates: 'strength, aggression, discipline, stamina'
    },
    relationships: ['Passionate but dominant', 'Straightforward in expression', 'Short temper, quick forgiveness', 'Needs independence in relationships'],
    summary: 'Aries signifies raw energy, courage, leadership, and the power to begin something new.'
  },
  'Taurus': {
    name: 'Taurus (Vṛṣabha)',
    number: 2,
    description: 'The 2nd zodiac sign, ruled by Venus (Shukra) and belongs to the Earth element (Prithvi tattva). It represents wealth, stability, comfort, possessions, and enjoyment of life.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Stability and permanence', 'Accumulation and preservation', 'Comfort, luxury, pleasure', 'Patience and endurance', 'Practicality and realism'] },
      { title: 'Mind, Speech & Values', items: ['Calm, steady thinking', 'Sweet and attractive speech', 'Strong personal values', 'Conservative mindset', 'Stubbornness'] },
      { title: 'Wealth, Assets & Possessions', items: ['Money, savings, bank balance', 'Property, land, real estate', 'Gold, silver, jewelry', 'Vehicles and luxury items', 'Family wealth and inheritance'] },
      { title: 'Food, Taste & Enjoyment', items: ['Eating habits and food quality', 'Love for sweets and rich food', 'Agriculture, dairy, farming', 'Restaurants, hotels, food business'] },
      { title: 'Arts, Beauty & Creativity', items: ['Music, singing, voice-based arts', 'Acting, modeling, fashion', 'Cosmetics, perfumes, design', 'Luxury brands and beauty industry'] },
      { title: 'Professions & Careers', items: ['Banking, finance, accounting', 'Real estate, land business', 'Jewelry, gold, diamond trade', 'Fashion, luxury products', 'Musician, singer, voice artist', 'Food, dairy, agriculture business'] },
      { title: 'Body Parts & Health', items: ['Face, mouth, lips', 'Throat, neck, vocal cords', 'Teeth, tongue', 'Throat infections, thyroid issues'] }
    ],
    characteristics: {
      direction: 'South',
      element: 'Earth',
      nature: 'Fixed (Sthira)',
      gender: 'Female sign',
      caste: 'Vaishya',
      rulingPlanet: 'Venus (Shukra)',
      indicates: 'love, luxury, beauty, comfort, pleasure'
    },
    relationships: ['Loyal and devoted', 'Sensual and affectionate', 'Possessive in relationships', 'Prefers long-term security'],
    summary: 'Taurus represents wealth, stability, beauty, comfort, and the ability to enjoy and preserve material life.'
  },
  'Gemini': {
    name: 'Gemini (Mithuna)',
    number: 3,
    description: 'The 3rd zodiac sign, ruled by Mercury (Budha) and belongs to the Air element (Vayu tattva). It represents communication, intellect, skills, adaptability, and exchange of information.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Communication and expression', 'Curiosity and learning', 'Movement and change', 'Duality and flexibility', 'Information exchange'] },
      { title: 'Mind, Intelligence & Thinking', items: ['Logical and analytical mind', 'Quick grasping power', 'Multitasking ability', 'Cleverness and wit', 'Overthinking and restlessness'] },
      { title: 'Communication & Media', items: ['Speaking, writing, debating', 'Journalism, media, publishing', 'Marketing, advertising, sales', 'Social media, blogging, content creation', 'Public relations'] },
      { title: 'Skills, Talents & Learning', items: ['Writing, editing, scripting', 'Teaching, training, coaching', 'Languages and translation', 'Short-term courses and certifications', 'Computer skills and data handling'] },
      { title: 'Technology & Trade', items: ['IT, software, data analysis', 'Business, trading, brokerage', 'E-commerce and digital platforms', 'Networking and connections'] },
      { title: 'Body Parts & Health', items: ['Arms, shoulders, hands', 'Lungs, nervous system', 'Skin sensitivity', 'Respiratory issues, anxiety'] }
    ],
    characteristics: {
      direction: 'West',
      element: 'Air',
      nature: 'Dual (Dwiswabhava)',
      gender: 'Male sign',
      caste: 'Shudra',
      rulingPlanet: 'Mercury (Budha)',
      indicates: 'intellect, speech, trade, calculation, logic'
    },
    relationships: ['Friendly and talkative', 'Needs mental stimulation', 'Flirtatious nature', 'Easily bored in monotony'],
    summary: 'Gemini signifies communication, intelligence, skills, trade, and adaptability in life.'
  },
  'Cancer': {
    name: 'Cancer (Karka)',
    number: 4,
    description: 'The 4th zodiac sign, ruled by the Moon (Chandra) and belongs to the Water element (Jala tattva). It represents emotions, mind, home, mother, comfort, and inner security.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Emotions and sensitivity', 'Nurturing and care', 'Protection and security', 'Attachment and memory', 'Inner happiness'] },
      { title: 'Mind, Emotions & Psychology', items: ['Mental state and peace', 'Emotional intelligence', 'Mood fluctuations', 'Imagination and intuition', 'Anxiety and over-sensitivity'] },
      { title: 'Home, Mother & Comforts', items: ['Mother and maternal side', 'Home, house, domestic life', 'Property, land, real estate', 'Vehicles and conveyances', 'Household comfort and luxury'] },
      { title: 'Care, Nourishment & Support', items: ['Caretaking and service', 'Nursing, healing', 'Childcare and teaching', 'Emotional support roles'] },
      { title: 'Body Parts & Health', items: ['Chest, breasts', 'Stomach, digestion', 'Fluids in body', 'Gastric problems, water retention'] },
      { title: 'Land, Water & Environment', items: ['Agriculture and farming', 'Water bodies (rivers, lakes, seas)', 'Marine-related activities', 'Public welfare and housing'] }
    ],
    characteristics: {
      direction: 'North',
      element: 'Water',
      nature: 'Movable (Chara)',
      gender: 'Female sign',
      caste: 'Brahmin',
      rulingPlanet: 'Moon (Chandra)',
      indicates: 'mind, emotions, mother, comfort, nourishment'
    },
    relationships: ['Caring and protective', 'Emotionally attached', 'Family-oriented', 'Can become overly dependent'],
    summary: 'Cancer represents mind, emotions, mother, home, nourishment, and inner happiness.'
  },
  'Leo': {
    name: 'Leo (Siṁha)',
    number: 5,
    description: 'The 5th zodiac sign, ruled by the Sun (Surya) and belongs to the Fire element (Agni tattva). It represents authority, power, leadership, status, creativity, and recognition.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Authority and command', 'Leadership and rulership', 'Self-respect and dignity', 'Fame, honor, recognition', 'Confidence and pride'] },
      { title: 'Power, Government & Status', items: ['Kings, rulers, administrators', 'Government, politics', 'Authority figures and bosses', 'High-ranking positions', 'Public image and reputation'] },
      { title: 'Intelligence, Creativity & Children', items: ['Intelligence and wisdom', 'Creativity and originality', 'Education and learning ability', 'Children and progeny', 'Decision-making power'] },
      { title: 'Arts, Performance & Fame', items: ['Acting, drama, cinema', 'Stage performance', 'Public speaking', 'Entertainment industry', 'Creative leadership roles'] },
      { title: 'Speculation & Risk', items: ['Stock market, investments', 'Gambling and speculation', 'Risk-taking with confidence', 'Authority in financial decisions'] },
      { title: 'Body Parts & Health', items: ['Heart and spine', 'Upper back', 'Eyes (especially right eye)', 'Blood pressure, cardiac issues'] }
    ],
    characteristics: {
      direction: 'East',
      element: 'Fire',
      nature: 'Fixed (Sthira)',
      gender: 'Male sign',
      caste: 'Kshatriya',
      rulingPlanet: 'Sun (Surya)',
      indicates: 'soul, ego, authority, vitality, fame'
    },
    relationships: ['Dominant but generous', 'Loyal and protective', 'Needs admiration and respect', 'Can be egoistic if afflicted'],
    summary: 'Leo signifies authority, leadership, fame, intelligence, children, and creative power.'
  },
  'Virgo': {
    name: 'Virgo (Kanyā)',
    number: 6,
    description: 'The 6th zodiac sign, ruled by Mercury (Budha) and belongs to the Earth element (Prithvi tattva). It represents service, analysis, health, discipline, problem-solving, and daily work.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Service and duty', 'Discipline and routine', 'Cleanliness and order', 'Analysis and logic', 'Practical intelligence'] },
      { title: 'Intelligence, Analysis & Skills', items: ['Analytical and detail-oriented mind', 'Critical thinking', 'Research and investigation', 'Data analysis and calculations', 'Perfectionism'] },
      { title: 'Health, Disease & Healing', items: ['Health and hygiene', 'Diseases and immunity', 'Doctors, nurses, healers', 'Medicines, pharmacy', 'Diet, nutrition, fitness'] },
      { title: 'Service, Work & Employment', items: ['Service-oriented jobs', 'Clerical and administrative work', 'Office routines and daily tasks', 'Compliance and quality control', 'Training and skill-based work'] },
      { title: 'Enemies, Competition & Struggles', items: ['Enemies and opposition', 'Legal disputes', 'Debts and loans', 'Daily struggles and challenges', 'Ability to overcome obstacles'] },
      { title: 'Body Parts & Health', items: ['Intestines and digestive system', 'Nervous system', 'Skin sensitivity', 'Gut-related disorders'] }
    ],
    characteristics: {
      direction: 'South',
      element: 'Earth',
      nature: 'Dual (Dwiswabhava)',
      gender: 'Female sign',
      caste: 'Vaishya',
      rulingPlanet: 'Mercury (Budha)',
      indicates: 'intellect, logic, analysis, communication'
    },
    relationships: ['Practical and supportive', 'Helpful but critical', 'Loyal in service', 'Emotionally reserved'],
    summary: 'Virgo signifies service, health, discipline, analysis, work, and the ability to solve problems.'
  },
  'Libra': {
    name: 'Libra (Tulā)',
    number: 7,
    description: 'The 7th zodiac sign, ruled by Venus (Shukra) and belongs to the Air element (Vayu tattva). It represents relationships, balance, justice, partnerships, and public interaction.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Balance and harmony', 'Justice and fairness', 'Cooperation and diplomacy', 'Equality and mutual respect', 'Social grace'] },
      { title: 'Marriage, Relationships & Partnerships', items: ['Spouse and married life', 'Business partnerships', 'Contracts and agreements', 'Public dealings', 'One-to-one relationships'] },
      { title: 'Society, Public & Interaction', items: ['Society and social behavior', 'Public image and popularity', 'Networking and alliances', 'Customer relations', 'Negotiation skills'] },
      { title: 'Law, Justice & Ethics', items: ['Law and legal matters', 'Courts, judges, lawyers', 'Ethics and moral balance', 'Arbitration and mediation', 'Settlements and compromise'] },
      { title: 'Beauty, Art & Luxury', items: ['Fashion and style', 'Designing and aesthetics', 'Music, dance, fine arts', 'Luxury products', 'Interior decoration'] },
      { title: 'Body Parts & Health', items: ['Kidneys', 'Lower back', 'Waist region', 'Hormonal balance issues'] }
    ],
    characteristics: {
      direction: 'West',
      element: 'Air',
      nature: 'Movable (Chara)',
      gender: 'Male sign',
      caste: 'Shudra',
      rulingPlanet: 'Venus (Shukra)',
      indicates: 'love, harmony, luxury, relationships'
    },
    relationships: ['Romantic and charming', 'Peace-loving', 'Avoids conflict', 'Indecisive at times'],
    summary: 'Libra signifies relationships, marriage, partnerships, justice, balance, and social harmony.'
  },
  'Scorpio': {
    name: 'Scorpio (Vṛścika)',
    number: 8,
    description: 'The 8th zodiac sign, ruled primarily by Mars (Mangal) (with Ketu as co-ruler in some traditions) and belongs to the Water element (Jala tattva). It represents transformation, secrecy, depth, crisis, and hidden power.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Transformation and rebirth', 'Secrets and mysteries', 'Depth, intensity, extremes', 'Sudden events and changes', 'Control and power'] },
      { title: 'Occult, Hidden Knowledge & Research', items: ['Astrology, tantra, mantra', 'Occult sciences and mysticism', 'Psychology and deep research', 'Investigation and detective work', 'Forensics and espionage'] },
      { title: 'Crisis, Longevity & Sudden Events', items: ['Accidents and shocks', 'Sudden gains or losses', 'Chronic issues', 'Life-changing events', 'Longevity and survival instincts'] },
      { title: 'Wealth of Others & Inheritance', items: ['Inherited wealth', 'Insurance, claims, compensation', 'Taxes, penalties', 'Joint finances', 'Hidden or unaccounted money'] },
      { title: 'Disease, Surgery & Healing', items: ['Chronic and hidden diseases', 'Surgery and emergency medicine', 'Healing through transformation', 'Detoxification and regeneration'] },
      { title: 'Body Parts & Health', items: ['Reproductive organs', 'Genitals', 'Anus and excretory system', 'Hormonal imbalances'] }
    ],
    characteristics: {
      direction: 'North',
      element: 'Water',
      nature: 'Fixed (Sthira)',
      gender: 'Female sign',
      caste: 'Brahmin',
      rulingPlanet: 'Mars (Mangal)',
      coRuler: 'Ketu',
      indicates: 'intensity, courage, secrecy, transformation'
    },
    relationships: ['Deeply loyal or deeply hostile', 'Possessive and intense', 'Emotionally secretive', 'Strong attachment'],
    summary: 'Scorpio signifies transformation, secrecy, occult knowledge, crises, hidden power, and deep emotional intensity.'
  },
  'Sagittarius': {
    name: 'Sagittarius (Dhanuṣ)',
    number: 9,
    description: 'The 9th zodiac sign, ruled by Jupiter (Guru / Brihaspati) and belongs to the Fire element (Agni tattva). It represents dharma, higher knowledge, fortune, wisdom, and spiritual guidance.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Dharma (righteous path)', 'Higher wisdom and philosophy', 'Truth, ethics, and morality', 'Expansion and growth', 'Optimism and faith'] },
      { title: 'Religion, Spirituality & Philosophy', items: ['Religion and belief systems', 'Temples, rituals, scriptures', 'Philosophy and ethics', 'Spiritual teachers and gurus', 'Pilgrimages and sacred journeys'] },
      { title: 'Higher Education & Knowledge', items: ['Higher studies and universities', 'Law, philosophy, theology', 'Research and advanced learning', 'Teaching and guidance', 'Wisdom-based education'] },
      { title: 'Guru, Father & Mentors', items: ['Guru and spiritual guide', 'Father and father figures', 'Teachers and mentors', 'Blessings and guidance from elders'] },
      { title: 'Fortune, Luck & Blessings', items: ['Luck and good fortune', 'Divine grace', 'Prosperity through righteousness', 'Destiny and fate support'] },
      { title: 'Travel, Distance & Exploration', items: ['Long-distance and foreign travel', 'Pilgrimages', 'Cultural and philosophical exploration', 'Global exposure'] },
      { title: 'Body Parts & Health', items: ['Hips and thighs', 'Liver', 'Sciatic nerve', 'Obesity or liver-related issues'] }
    ],
    characteristics: {
      direction: 'East',
      element: 'Fire',
      nature: 'Dual (Dwiswabhava)',
      gender: 'Male sign',
      caste: 'Kshatriya',
      rulingPlanet: 'Jupiter (Guru)',
      indicates: 'wisdom, expansion, blessings, morality'
    },
    relationships: ['Honest and straightforward', 'Freedom-loving', 'Idealistic in relationships', 'Mentor-like attitude'],
    summary: 'Sagittarius signifies dharma, higher wisdom, religion, luck, gurus, long journeys, and divine guidance.'
  },
  'Capricorn': {
    name: 'Capricorn (Makara)',
    number: 10,
    description: 'The 10th zodiac sign, ruled by Saturn (Shani) and belongs to the Earth element (Prithvi tattva). It represents karma, profession, responsibility, discipline, authority through hard work, and social status.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Karma (actions and duties)', 'Discipline and responsibility', 'Hard work and perseverance', 'Structure and order', 'Practical ambition'] },
      { title: 'Career, Profession & Karma', items: ['Job, profession, and livelihood', 'Government service', 'Administrative and managerial roles', 'Corporate leadership', 'Public responsibility'] },
      { title: 'Authority, Status & Society', items: ['Social status and reputation', 'Power earned through effort', 'Leadership in institutions', 'Organizational hierarchy', 'Respect in society'] },
      { title: 'Labor, Industry & Infrastructure', items: ['Construction and engineering', 'Manufacturing and factories', 'Mining, metals, oil', 'Machinery and heavy work', 'Labor class and workforce management'] },
      { title: 'Rules, Law & Discipline', items: ['Law enforcement and regulations', 'Policies and compliance', 'Bureaucracy and administration', 'Long-term planning', 'Accountability'] },
      { title: 'Body Parts & Health', items: ['Knees', 'Bones and joints', 'Teeth', 'Chronic pain, arthritis'] }
    ],
    characteristics: {
      direction: 'South',
      element: 'Earth',
      nature: 'Movable (Chara)',
      gender: 'Female sign',
      caste: 'Shudra',
      rulingPlanet: 'Saturn (Shani)',
      indicates: 'karma, discipline, delay, justice, hard work'
    },
    relationships: ['Serious and committed', 'Reserved emotionally', 'Loyal but strict', 'Values stability over romance'],
    summary: 'Capricorn signifies karma, profession, discipline, authority, hard work, and long-term success.'
  },
  'Aquarius': {
    name: 'Aquarius (Kumbha)',
    number: 11,
    description: 'The 11th zodiac sign, ruled primarily by Saturn (Shani) (with Rahu as co-ruler in some traditions) and belongs to the Air element (Vayu tattva). It represents gains, income, fulfillment of desires, networks, society, and progressive thinking.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Gains and achievements', 'Desires and aspirations', 'Progress and innovation', 'Equality and humanitarianism', 'Collective thinking'] },
      { title: 'Income, Gains & Achievements', items: ['Financial gains', 'Salary, bonuses, profits', 'Returns on investments', 'Achievements of goals', 'Rewards of past efforts'] },
      { title: 'Friends, Networks & Society', items: ['Friends and social circles', 'Associations and communities', 'Elder siblings', 'Networking and group activities', 'Social influence'] },
      { title: 'Society, Masses & Humanity', items: ['Public welfare', 'NGOs and social causes', 'Mass movements', 'Equality and social reform', 'Collective responsibility'] },
      { title: 'Technology, Innovation & Science', items: ['Science and research', 'Technology and innovation', 'Engineering and inventions', 'IT, AI, digital platforms', 'Futuristic ideas'] },
      { title: 'Large Organizations & Systems', items: ['Corporations and institutions', 'Government bodies', 'Social systems and structures', 'Policy implementation', 'Large-scale operations'] },
      { title: 'Body Parts & Health', items: ['Ankles', 'Calves', 'Blood circulation', 'Nervous disorders'] }
    ],
    characteristics: {
      direction: 'West',
      element: 'Air',
      nature: 'Fixed (Sthira)',
      gender: 'Male sign',
      caste: 'Shudra',
      rulingPlanet: 'Saturn (Shani)',
      coRuler: 'Rahu',
      indicates: 'gains, networks, innovation, masses'
    },
    relationships: ['Friendly but detached', 'Idealistic and unconventional', 'Values freedom and equality', 'Emotionally independent'],
    summary: 'Aquarius signifies gains, social networks, large organizations, innovation, and service to humanity.'
  },
  'Pisces': {
    name: 'Pisces (Mīna)',
    number: 12,
    description: 'The 12th and final zodiac sign, ruled by Jupiter (Guru / Brihaspati) and belongs to the Water element (Jala tattva). It represents moksha, spirituality, liberation, loss, isolation, and divine connection.',
    mainSubjects: [
      { title: 'Core Nature & Themes', items: ['Moksha (liberation)', 'Spiritual surrender', 'Compassion and empathy', 'Imagination and dreams', 'Detachment from material life'] },
      { title: 'Spirituality, Moksha & Divine Realms', items: ['Salvation and liberation', 'Meditation, yoga', 'Ashrams, monasteries', 'Divine love and devotion', 'Mysticism and enlightenment'] },
      { title: 'Loss, Isolation & Seclusion', items: ['Losses and expenses', 'Hospitals and asylums', 'Prisons and confinement', 'Isolation and solitude', 'Foreign lands and exile'] },
      { title: 'Foreign Lands & Long Stays', items: ['Foreign residence', 'Overseas connections', 'Immigration', 'Spiritual journeys abroad', 'Oceanic travel'] },
      { title: 'Sleep, Dreams & Subconscious', items: ['Sleep and rest', 'Dreams and fantasy', 'Subconscious mind', 'Escapism and imagination', 'Psychic experiences'] },
      { title: 'Charity, Compassion & Service', items: ['Charity and donations', 'Helping the poor', 'Selfless service', 'NGOs and spiritual service', 'Universal love'] },
      { title: 'Body Parts & Health', items: ['Feet', 'Lymphatic system', 'Immune system', 'Sleep disorders, addictions'] }
    ],
    characteristics: {
      direction: 'North',
      element: 'Water',
      nature: 'Dual (Dwiswabhava)',
      gender: 'Female sign',
      caste: 'Brahmin',
      rulingPlanet: 'Jupiter (Guru)',
      indicates: 'wisdom, spirituality, compassion, moksha'
    },
    relationships: ['Emotionally sensitive', 'Sacrificing nature', 'Unconditional love', 'Needs emotional boundaries'],
    summary: 'Pisces signifies moksha, spirituality, compassion, loss, foreign lands, dreams, and divine connection.'
  }
};

// Helper function to get zodiac sign color
export const getZodiacSignColor = (signName) => {
  const colorMap = {
    'Aries': '#FF6B6B', // Red
    'Taurus': '#4ECDC4', // Turquoise
    'Gemini': '#45B7D1', // Sky Blue
    'Cancer': '#96CEB4', // Mint Green
    'Leo': '#FFEAA7', // Light Yellow
    'Virgo': '#DDA15E', // Tan
    'Libra': '#A8DADC', // Light Blue
    'Scorpio': '#9B59B6', // Purple
    'Sagittarius': '#F39C12', // Orange
    'Capricorn': '#E74C3C', // Red
    'Aquarius': '#3498DB', // Blue
    'Pisces': '#2ECC71' // Green
  };
  return colorMap[signName] || '#1976d2';
};

// Helper function to get zodiac sign abbreviation
export const getZodiacSignAbbr = (signName) => {
  const abbrMap = {
    'Aries': 'Ar', 'Taurus': 'Ta', 'Gemini': 'Ge', 'Cancer': 'Ca',
    'Leo': 'Le', 'Virgo': 'Vi', 'Libra': 'Li', 'Scorpio': 'Sc',
    'Sagittarius': 'Sg', 'Capricorn': 'Cp', 'Aquarius': 'Aq', 'Pisces': 'Pi'
  };
  return abbrMap[signName] || signName.substring(0, 2);
};

