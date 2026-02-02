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

// Planet-in-Sign Personality Traits (Vedic astrology - practical personality examples)
export const planetInSignTraits = {
  sun: {
    Aries: 'Bold, confident, and natural leader. Takes initiative, energetic, assertive, loves challenges, can be impulsive.',
    Taurus: 'Steady, reliable leader. Values security, comfort, and stability. Leads with patience, persistence, and practical wisdom.',
    Gemini: 'Curious, adaptable leader. Energetic communicator, loves variety and learning, sociable, may struggle with focus.',
    Cancer: 'Nurturing and protective leader. Leads with care and empathy, values home and family, emotionally connected but can be sensitive.',
    Leo: 'Bold, confident, and natural leader. Radiates charisma, loves recognition, creative, authoritative, often inspirational to others.',
    Virgo: 'Analytical and detail-oriented leader. Practical, service-minded, prefers order and efficiency. Can be critical but highly responsible.',
    Libra: 'Diplomatic and graceful leader. Values harmony, fairness, and aesthetics. Charismatic, balanced, and socially skilled, but can avoid confrontation.',
    Scorpio: 'Intense, magnetic, and authoritative. Strong will, deeply passionate, strategic thinker, often private or mysterious. Can be transformative for others.',
    Sagittarius: 'Optimistic, adventurous, and truth-seeking leader. Loves freedom, philosophy, travel, and inspiring others. Bold and confident, sometimes blunt.',
    Capricorn: 'Ambitious, disciplined leader. Lives for achievement, status, and responsibility. Career-driven, serious, and reliable, often takes on authority roles.',
    Aquarius: 'Independent, unconventional leader. Thinks globally, champions social causes, may work in science, tech, or humanitarian fields. Values freedom over authority.',
    Pisces: 'A gentle, artistic soul who leads with compassion rather than authority. Might be a spiritual teacher, healer, or artist. Soft-spoken, introspective, lives for helping others.'
  },
  moon: {
    Aries: 'Emotionally quick and passionate. Feels intensely but briefly, enthusiastic, spontaneous, may have mood swings.',
    Taurus: 'Emotionally calm and grounded. Seeks comfort and security, loyal, nurturing, and enjoys sensual pleasures.',
    Gemini: 'Emotionally flexible, changeable, and communicative. Feels better through talking, networking, or intellectual stimulation.',
    Cancer: 'Exalted here. Deeply emotional, intuitive, and empathetic. Highly caring, loyal, and protective; feels others\' emotions strongly.',
    Leo: 'Emotionally expressive, warm, and generous. Seeks admiration and validation, loyal and protective of loved ones, can be dramatic.',
    Virgo: 'Emotionally cautious and thoughtful. Values logic over sentiment, helps others practically, can worry or overanalyze feelings.',
    Libra: 'Emotionally harmonious, seeks peace in relationships. Sensitive to others\' needs, charming, and sociable. Can be indecisive or people-pleasing.',
    Scorpio: 'Emotionally deep and intuitive. Feels everything profoundly, loyal but secretive, prone to emotional extremes. Highly resilient.',
    Sagittarius: 'Emotionally enthusiastic, cheerful, and open-minded. Seeks experiences, growth, and adventure; may avoid emotional depth or routine.',
    Capricorn: 'Emotionally reserved and cautious. Values stability and security, tends to hide feelings, but is extremely dependable and loyal.',
    Aquarius: 'Emotionally detached yet friendly. Thinks rationally about feelings, loves community and group activities, may struggle with deep emotional intimacy.',
    Pisces: 'Highly empathetic and emotional, easily feels others\' moods. A caregiver or counselor type, but can get lost in fantasy or avoid conflicts.'
  },
  mars: {
    Aries: 'Exalted here. Extremely courageous, action-oriented, and competitive. Quick to act, loves challenges, can be aggressive or impatient.',
    Taurus: 'Acts steadily and persistently. Enduring, patient, focused on long-term goals, but can be stubborn or slow to anger.',
    Gemini: 'Acts quickly and mentally. Energetic in ideas and communication, multitasks well, may scatter energy or get restless.',
    Cancer: 'Acts emotionally rather than directly. Protective of loved ones, strategic in conflicts, can be passive-aggressive or moody.',
    Leo: 'Courageous, dynamic, and ambitious. Acts with flair and determination, loves challenges and leadership roles, can be proud or stubborn.',
    Virgo: 'Acts methodically and precisely. Excellent in problem-solving, service-oriented action, meticulous in planning. Can be overly critical or perfectionist.',
    Libra: 'Acts tactfully rather than aggressively. Skilled negotiator, strategic in conflict, but can avoid direct confrontation or assertiveness.',
    Scorpio: 'Exalted here. Extremely courageous, focused, and determined. Pursues goals relentlessly, thrives in crises, strategic and powerful in action.',
    Sagittarius: 'Courageous, energetic, and idealistic. Acts on principles, loves challenges, sports, or exploration; can be reckless or overconfident.',
    Capricorn: 'Highly strategic and disciplined in action. Hardworking, goal-oriented, persistent, and capable of long-term planning. Courage manifests in endurance and practical efforts.',
    Aquarius: 'Acts innovatively, driven by ideas or social causes. Courage is intellectual or collective rather than physical. Can be rebellious or unconventional in approach.',
    Pisces: 'Acts in subtle ways, often motivated by ideals or emotions. Courage is spiritual or moral rather than physical; might pursue activism, charity, or artistic projects passionately but quietly.'
  },
  mercury: {
    Aries: 'Quick thinker and communicator. Speaks boldly, makes fast decisions, innovative, sometimes impatient with details.',
    Taurus: 'Practical and methodical thinker. Learns slowly but surely, communicates clearly, prefers concrete facts over abstract ideas.',
    Gemini: 'Exalted here. Sharp, versatile thinker. Excellent in communication, writing, teaching, and problem-solving. Highly curious.',
    Cancer: 'Thinks intuitively and emotionally. Communicates with care and empathy, remembers details about people, may struggle with objectivity.',
    Leo: 'Creative and persuasive thinker. Communicates boldly, enjoys storytelling and teaching, may sometimes be dramatic or opinionated.',
    Virgo: 'Exalted here. Highly intelligent, analytical, and organized. Strong communication and research skills, thrives in detail-oriented work.',
    Libra: 'Thinks logically with a focus on fairness. Excellent in communication, debate, and mediation. Can overanalyze decisions to maintain balance.',
    Scorpio: 'Penetrating, investigative mind. Excellent research, problem-solving, and psychology skills. Can be secretive or skeptical.',
    Sagittarius: 'Philosophical, big-picture thinker. Communicates boldly, loves learning, teaching, and travel; may overlook details.',
    Capricorn: 'Practical and methodical thinker. Plans carefully, good with structure, finance, and management. Prefers logic over emotions, can be conservative in ideas.',
    Aquarius: 'Genius-level thinking, highly original and forward-looking. Excels in science, tech, communication, or abstract thinking. Sometimes detached from emotions.',
    Pisces: 'Thinks intuitively and creatively rather than logically. Could be a poet, storyteller, or visionary thinker. Sometimes struggles with details or facts.'
  },
  jupiter: {
    Aries: 'Optimistic and adventurous in thought. Believes in action-oriented growth, independent learning, may overlook details.',
    Taurus: 'Values material and emotional security. Generous and wise in practical matters, appreciates stability, growth, and comfort.',
    Gemini: 'Learns through curiosity and communication. Philosophical ideas expressed through teaching or writing, can lack depth if distracted.',
    Cancer: 'Optimistic and nurturing. Guides others with wisdom and compassion, often focuses on family, education, or emotional growth.',
    Leo: 'Optimistic, generous, and inspirational. Believes in leadership, growth, and guiding others; values honor and ethical principles.',
    Virgo: 'Philosophical about work and service. Seeks wisdom through practical learning and helping others. Can be overly critical or cautious.',
    Libra: 'Wise in relationships and partnerships. Values ethics, diplomacy, and fairness. Can guide others in social or legal matters.',
    Scorpio: 'Deeply philosophical about life, death, and transformation. Spiritual growth through intense experiences. Can be visionary but secretive.',
    Sagittarius: 'Strongest here (own sign). Wise, optimistic, generous, spiritually inclined. Loves teaching, guiding, and uplifting others.',
    Capricorn: 'Disciplined, realistic, and wise in material and worldly matters. Teaches by example, believes in structured growth, but may be cautious or conservative.',
    Aquarius: 'Expansive thinker with visionary ideas about society. Values equality, reform, and humanitarian efforts. May be philosophical but in a socially-oriented way.',
    Pisces: 'Very wise, philosophical, and spiritually inclined (Jupiter rules Pisces). A natural teacher or mentor, deeply compassionate, believes in universal love. Can be idealistic.'
  },
  venus: {
    Aries: 'Romantic and enthusiastic. Loves boldly and directly, passionate and adventurous in relationships, can be impatient.',
    Taurus: 'Strong here (own sign). Romantic, sensual, and loyal. Appreciates beauty, art, and comfort. Devoted in relationships.',
    Gemini: 'Romantic and playful. Values intellectual connection in relationships, enjoys variety and social interaction. Can be flirtatious.',
    Cancer: 'Romantic, caring, and emotionally devoted. Loves deeply, values home and security in relationships, can be sentimental or clingy.',
    Leo: 'Romantic, passionate, and expressive. Loves attention and grand gestures, loyal and devoted but may seek admiration in love.',
    Virgo: 'Loves in a practical, loyal, and helpful way. Appreciates service, neatness, and order in relationships. Can be shy or reserved in romance.',
    Libra: 'Strongly romantic and charming (own sign). Loves beauty, art, harmony, and partnership. Seeks balanced, equal, and refined relationships.',
    Scorpio: 'Passionate and intense in love. Loyal and devoted, but can be possessive or jealous. Loves deeply and profoundly.',
    Sagittarius: 'Loves freedom and adventure in relationships. Romantic, playful, fun-loving; dislikes possessiveness.',
    Capricorn: 'Loyal and committed in relationships. Appreciates long-term stability, prefers serious love over casual romance, often reserved in expressing affection.',
    Aquarius: 'Loves freedom and unconventional relationships. Friendly, charming, and appreciates intellectual connection over romantic intensity.',
    Pisces: 'Romantic, dreamy, and loving unconditionally (Venus is exalted here). Loves art, music, and devotion. Seeks soulful connections; may sacrifice for love.'
  },
  saturn: {
    Aries: 'Learns discipline through challenges and self-assertion. Can struggle with impatience or authority, but gains leadership through effort.',
    Taurus: 'Disciplined and patient. Learns responsibility through material and emotional stability. Can be stubborn or resistant to change.',
    Gemini: 'Learns discipline through communication and learning. Methodical thinker but may struggle with scattered ideas or indecision.',
    Cancer: 'Learns discipline through emotions and family responsibilities. Patient and loyal, may struggle with emotional fears or insecurity.',
    Leo: 'Disciplined in leadership and creative pursuits. Learns patience, responsibility, and authority. Can be rigid or overly serious about pride.',
    Virgo: 'Disciplined and hardworking. Focused on mastery, precision, and responsibility. Learns patience and diligence through work.',
    Libra: 'Learns discipline in relationships. Patient, responsible, and serious in partnerships. Can struggle with indecision or dependency.',
    Scorpio: 'Strategic, disciplined, and enduring. Works hard in secrecy, develops resilience, learns life lessons through challenges and intensity.',
    Sagittarius: 'Disciplined idealist. Works hard for long-term philosophical, educational, or travel-oriented goals. Can be rigid in beliefs.',
    Capricorn: 'Extremely strong here (own sign). Disciplined, responsible, patient, and pragmatic. Natural builder and authority figure; learns lessons through effort and persistence.',
    Aquarius: 'Disciplined in thought and social responsibility. Structured innovator, focused on long-term societal goals. Can be detached or serious.',
    Pisces: 'Works quietly and patiently, often in service or spiritual discipline. Learns detachment and inner strength. Can feel burdened by worldly realities but persists.'
  },
  rahu: {
    Aries: 'Obsessed with personal ambition, action, and independence. Craves recognition, may act impulsively or competitively.',
    Taurus: 'Obsessed with material security, wealth, or comfort. Ambitious for possessions or stability, may cling to status.',
    Gemini: 'Obsessed with knowledge, communication, or networking. Ambitious intellectually, may become manipulative or restless.',
    Cancer: 'Obsessed with emotional security, family status, or personal comfort. Can be emotionally ambitious or attached.',
    Leo: 'Obsessed with recognition, leadership, or personal achievement. Ambitious and creative but may crave attention excessively.',
    Virgo: 'Obsessed with perfection, efficiency, or career competence. Ambitious and strategic but may stress over details.',
    Libra: 'Obsessed with social status, relationships, or balance. Ambitious in partnerships or social circles, may face illusions about people.',
    Scorpio: 'Obsessed with power, transformation, and intensity. Drawn to mysteries, occult, or taboo subjects. Ambitious but secretive.',
    Sagittarius: 'Obsessed with freedom, adventure, and philosophical pursuits. Ambitious about learning, exploration, or spirituality.',
    Capricorn: 'Ambitious, materialistic, driven by success and recognition. Can be strategic but sometimes overly controlling or power-focused.',
    Aquarius: 'Obsessed with progress, innovation, and uniqueness. May crave recognition for being different. Visionary but sometimes detached from tradition.',
    Pisces: 'Drawn to mystical, spiritual, or artistic experiences. May crave fame or emotional intensity. Visionary but prone to illusion or escapism.'
  },
  ketu: {
    Aries: 'Detached from ego-driven ambitions. Focuses on inner strength, self-realization, and spiritual courage rather than personal gain.',
    Taurus: 'Detached from material attachment. Focuses on spiritual values, inner security, and understanding the impermanence of worldly things.',
    Gemini: 'Detached from superficial knowledge. Seeks deeper wisdom beyond chatter, can be contemplative or introspective.',
    Cancer: 'Detached from excessive emotional dependency. Focuses on inner nurturing, spiritual growth, and emotional resilience.',
    Leo: 'Detached from ego-centered pursuits. Focuses on inner strength, humility, and spiritual growth rather than outward fame.',
    Virgo: 'Detached from worldly perfectionism. Focuses on spiritual service and understanding higher purpose beyond material work.',
    Libra: 'Detached from personal gain in relationships. Seeks spiritual or karmic understanding in partnerships, not material success.',
    Scorpio: 'Detached from worldly attachments, seeks transformation and spiritual depth. Intuitive, mystical, often detached from superficiality.',
    Sagittarius: 'Detached from narrow or materialistic concerns. Seeks higher wisdom, truth, and spiritual or intellectual growth.',
    Capricorn: 'Detached from worldly ambitions, seeks mastery and discipline in personal growth. Practical, self-sufficient, and sometimes austere.',
    Aquarius: 'Naturally detached from social conformity, seeks spiritual or intellectual freedom. Innovative, eccentric, and forward-thinking, often ahead of the times.',
    Pisces: 'Naturally detached from materialism, spiritually oriented. Intuitive, meditative, and mystical. Can be indifferent to worldly rewards but very wise.'
  }
};

// Effects of each house lord placed in each house (classical paragraph style)
// Structure: houseLordInHouseEffects[houseLordNumber][placementHouseNumber] -> string
export const houseLordInHouseEffects = {
  1: {
    1: "When the 1st house lord is placed in the 1st house, the native possesses strong self-awareness, confidence, and vitality. Life revolves around self-development, independence, and personal authority. The body and mind are closely aligned, giving clarity of direction. If the planet is strong, this placement gives leadership, recognition, and good health; if afflicted, ego issues or health fluctuations may arise.",
    2: "With the Lagna lord in the 2nd house, the native’s identity becomes closely connected with family, wealth, and speech. The person values security, possessions, and family reputation. Earnings come through personal effort, and speech carries strong influence. If well placed, this gives financial stability and respectable lineage; if afflicted, self-worth may become overly dependent on money or family approval.",
    3: "This placement makes the native courageous, action-oriented, and self-made. Identity is built through effort, communication, and risk-taking. The person relies on personal skills rather than support from others. Relations with siblings and constant activity shape life direction. Success increases with age as confidence and experience grow.",
    4: "When the Lagna lord occupies the 4th house, emotional security, home, and inner peace become central to the native’s life. The person is sensitive, caring, and deeply attached to family and mother. Identity is shaped by emotional well-being and domestic stability. If afflicted, emotional restlessness or inner insecurity may disturb confidence.",
    5: "This placement gives an identity rooted in intelligence, creativity, and wisdom. The native is confident due to learning, knowledge, or artistic ability. Leadership, teaching, politics, or advisory roles suit this placement. Love, children, and past-life merit play an important role in shaping personality. If well placed, this gives fame and respect through intellect.",
    6: "With the Lagna lord in the 6th house, life becomes a continuous battle for improvement. The native develops a fighter mentality and gains strength through overcoming obstacles, enemies, and health challenges. Service, discipline, and competition define identity. If strong, the person defeats rivals and rises through struggle; if weak, stress and health issues may dominate life.",
    7: "When the Lagna lord is placed in the 7th house, identity is strongly shaped by relationships, marriage, and public interaction. The native seeks balance through others and may depend on spouse or partners. Business and partnerships play a key role in life direction. If well placed, this gives popularity and success through collaboration; if afflicted, loss of individuality or relationship conflicts may arise.",
    8: "This placement brings a life of deep transformation. The native experiences sudden changes, crises, or intense psychological growth. Identity is shaped through challenges and inner rebirths. Interest in occult, research, or hidden knowledge is common. If the planet is strong, this gives resilience and longevity; if afflicted, instability or health concerns may trouble the native.",
    9: "When the Lagna lord occupies the 9th house, life is guided by dharma, ethics, and higher purpose. The native is fortunate, principled, and respected. Faith, education, mentors, and long-distance travel shape identity. This placement gives protection in life and steady growth through righteous actions.",
    10: "This is one of the strongest placements for ambition and public success. The native’s identity is defined by career, authority, and achievements. Leadership roles, government service, or independent enterprises suit this position. Reputation and social status become central themes, and success comes through hard work and responsibility.",
    11: "With the Lagna lord in the 11th house, the native is goal-oriented and achievement-driven. Identity is linked to gains, income, and social networks. Friends and associations play a major role in life progress. If well placed, this gives strong financial success and fulfillment of desires.",
    12: "When the Lagna lord is placed in the 12th house, the native is introspective, private, and spiritually inclined. Life involves foreign lands, isolation, or sacrifice. Identity dissolves into service, charity, or spiritual pursuits. If well placed, this gives moksha-oriented growth; if afflicted, confusion, losses, or low vitality may occur."
  },
  2: {
    1: "When the 2nd house lord is placed in the 1st house, wealth, family values, and speech strongly influence the native’s personality. The person identifies with family traditions and gains confidence through financial stability. Speech is noticeable and carries authority or sweetness. If well placed, this position gives self-earned wealth and respect; if afflicted, self-worth may become overly tied to money or family approval.",
    2: "When the 2nd lord occupies its own house, it becomes very strong and supports stable wealth, savings, and family continuity. The native enjoys financial security, good food habits, and refined speech. Family lineage and values are well preserved. This is one of the best placements for long-term financial stability and respect in society.",
    3: "This placement links wealth with effort and communication. The native earns through writing, speaking, sales, marketing, media, or skills involving hands and courage. Income is largely self-made. Relations with siblings influence financial matters. Speech is bold and persuasive, though at times sharp.",
    4: "When the 2nd lord is placed in the 4th house, wealth is directed toward property, land, vehicles, and domestic comfort. The native gains financial support from family and enjoys emotional security through possessions. Home and family play an important role in financial decisions. This placement favors real estate and asset accumulation.",
    5: "This position connects wealth with intelligence, creativity, and speculation. The native earns through education, teaching, consulting, investments, or creative pursuits. Family values are passed on to children. If well placed, this gives success in speculation; if afflicted, financial risk-taking should be cautious.",
    6: "When the 2nd lord occupies the 6th house, finances may face obstacles through debts, disputes, or service-related struggles. Earnings come through jobs, loans, or competitive environments. Family harmony may be disturbed by financial stress. With discipline and strong placement, the native overcomes difficulties and builds wealth gradually.",
    7: "This placement brings wealth through marriage, partnerships, or business dealings. The spouse or partners contribute to income growth. Family reputation depends on public interactions. Speech is diplomatic and business-oriented. If afflicted, disputes over money with partners may arise.",
    8: "With the 2nd lord in the 8th house, finances experience sudden ups and downs. Wealth may come through inheritance, insurance, or joint assets. Family secrets or breaks are possible. Speech can be intense or guarded. A strong planet helps the native manage sudden financial changes wisely.",
    9: "This is an auspicious placement where wealth is supported by fortune and ethical conduct. The native earns through righteous means, higher education, teaching, law, or guidance. Family values are moral and traditional. Financial growth improves steadily with age.",
    10: "When the 2nd lord occupies the 10th house, career becomes the main source of wealth and family status. The native earns steadily through profession and gains authority in financial matters. Public reputation and family prestige rise together. This placement supports administrative and leadership roles.",
    11: "This is one of the strongest placements for income and gains. Wealth comes from multiple sources, networks, and long-term goals. Family benefits from strong financial inflow. Speech supports networking and influence. This placement gives financial abundance if not heavily afflicted.",
    12: "When the 2nd lord is placed in the 12th house, wealth is spent on foreign lands, charity, family needs, or spiritual pursuits. Savings may be difficult to retain. Speech may be restrained or private. If well placed, expenses are meaningful; if afflicted, financial leakage may occur."
  },
  3: {
    1: "When the 3rd house lord is placed in the 1st house, courage, initiative, and self-effort strongly shape the native’s personality. The person is bold, energetic, and action-oriented, preferring to carve their own path rather than depend on others. Communication skills are prominent, and confidence grows through personal achievements. If afflicted, impatience or aggression may disturb relationships.",
    2: "With the 3rd lord in the 2nd house, effort and communication become sources of wealth and family stability. The native earns through speech, writing, sales, or skill-based work. Family reputation improves through self-made income. Speech is persuasive, though at times sharp or argumentative.",
    3: "When the 3rd lord occupies its own house, courage and initiative become powerful strengths. The native is fearless, highly communicative, and capable of sustained effort. Relations with siblings are significant, and success is achieved through persistence rather than luck. This is one of the best placements for self-made growth and entrepreneurial success.",
    4: "This placement links effort with emotional security and domestic life. The native works hard to build comfort, property, or stability at home. Domestic responsibilities may require courage and patience. Emotional strength grows through effort, though inner restlessness may be present.",
    5: "When the 3rd lord is placed in the 5th house, courage is expressed through creativity and intelligence. The native takes intellectual risks and excels in writing, arts, performance, or strategic roles. Relations with children and romantic partners involve strong communication. Success comes through creative initiative.",
    6: "With the 3rd lord in the 6th house, the native becomes a fearless competitor. Courage is used to defeat enemies, overcome obstacles, and succeed in service-oriented or legal professions. Communication skills are sharp in debates or disputes. This is a strong placement for competitive success.",
    7: "This placement connects effort and communication with partnerships and public dealings. Business success depends on negotiation, marketing, and communication skills. The spouse or partners may be energetic or argumentative. Balance is required to avoid conflicts arising from strong opinions.",
    8: "When the 3rd lord occupies the 8th house, courage is tested through sudden changes, risks, or crises. The native may engage in research, investigation, or occult studies. Relations with siblings may experience sudden transformations. Inner strength develops through facing uncertainty.",
    9: "With the 3rd lord in the 9th house, effort is guided by beliefs, ethics, and higher knowledge. The native works hard toward education, teaching, publishing, or travel-related pursuits. Support from mentors and elders helps efforts bear fruit. Courage is refined by wisdom.",
    10: "This placement directs effort toward career and public achievement. The native succeeds through initiative, communication, and continuous hard work. Professions involving media, sales, leadership, or entrepreneurship are favored. Reputation grows steadily with sustained effort.",
    11: "When the 3rd lord is placed in the 11th house, gains result directly from courage and communication. Income comes through networking, sales, marketing, or social platforms. Support from siblings and friends helps fulfill ambitions. This is a favorable placement for growth.",
    12: "With the 3rd lord in the 12th house, effort is directed toward foreign lands, behind-the-scenes work, or spiritual pursuits. Communication may be reserved or private. Relations with siblings may involve distance or separation. Success comes after sacrifice and quiet perseverance."
  },
  4: {
    1: "When the 4th house lord is placed in the 1st house, emotional security and inner peace strongly influence the native’s personality. The person is sensitive, nurturing, and emotionally expressive. Attachment to mother and family is strong, and personal happiness depends on emotional balance. If afflicted, mood fluctuations or inner insecurity may affect confidence.",
    2: "With the 4th lord in the 2nd house, comfort and emotional stability come through family, wealth, and possessions. The native invests in property, food, and family well-being. Domestic happiness grows with financial security. This placement favors accumulation of assets and a stable home environment.",
    3: "This placement indicates that emotional peace is achieved through effort and communication. The native works hard to secure comfort and may change residences due to work or personal initiative. Relations with siblings affect domestic harmony. Inner peace develops through courage and adaptability.",
    4: "When the 4th lord occupies its own house, it becomes very strong and auspicious. The native enjoys emotional stability, domestic happiness, and support from mother. Property, vehicles, and education are well supported. This is one of the best placements for inner peace and material comfort.",
    5: "With the 4th lord in the 5th house, emotional fulfillment comes through education, creativity, and children. The native is emotionally intelligent and enjoys teaching, mentoring, or nurturing others intellectually. Happiness increases through learning and creative self-expression.",
    6: "This placement brings emotional challenges through service, disputes, or health matters. Domestic peace may be disturbed by work stress or conflicts. The native must consciously work to maintain emotional balance. If well placed, discipline and service help stabilize inner peace.",
    7: "When the 4th lord is placed in the 7th house, emotional security is closely linked to marriage and partnerships. The spouse significantly influences domestic happiness. The native seeks emotional fulfillment through relationships and public interactions. If afflicted, emotional dependence or domestic disturbances may arise.",
    8: "This placement indicates deep emotional transformations and sudden changes related to home, property, or mother. The native may experience emotional ups and downs or changes of residence. Inner strength develops through crises, leading to emotional maturity over time.",
    9: "With the 4th lord in the 9th house, emotional peace comes through faith, philosophy, and higher knowledge. The native benefits from blessings of elders and mentors. Education, travel, and spiritual practices provide comfort and inner satisfaction.",
    10: "This placement links emotional fulfillment with career and public responsibilities. The native may sacrifice domestic comfort for professional success. Property or vehicles may be gained through career. Balancing work and home life is essential for emotional well-being.",
    11: "When the 4th lord occupies the 11th house, comfort and happiness increase through gains, social support, and fulfillment of desires. The native may own multiple properties or enjoy a comfortable lifestyle supported by friends and networks. Emotional satisfaction grows with achievements.",
    12: "With the 4th lord in the 12th house, emotional peace is found through solitude, foreign lands, or spiritual detachment. The native may live away from homeland or mother. Expenses on home comforts are common. Inner peace comes through letting go of material attachments."
  },
  5: {
    1: "When the 5th house lord is placed in the 1st house, the native’s intelligence, creativity, and past-life merit strongly shape their personality. Such a person is confident, expressive, and naturally inclined toward leadership or advisory roles. Education and learning come easily, and the native often shines through intellect or creativity. If well placed, this position gives fame, respect, and strong self-belief; if afflicted, ego or overconfidence may disturb relationships.",
    2: "With the 5th lord in the 2nd house, intelligence and knowledge contribute directly to wealth, family growth, and refined speech. The native earns through education, teaching, counseling, or creative skills. Family values are strong, and children often bring prosperity. Speech is persuasive and cultured, though speculative risks should be taken cautiously if the planet is weak.",
    3: "This placement links creativity and intelligence with effort and communication. The native expresses ideas through writing, media, marketing, or performance-based skills. Success comes through self-effort rather than luck alone. Relations with siblings are important, though sometimes competitive. With maturity, this placement gives strong self-made achievements through intellectual courage.",
    4: "When the 5th lord occupies the 4th house, education, learning, and emotional intelligence are rooted in the home environment. The native benefits from a supportive mother or a scholarly domestic atmosphere. Happiness comes from teaching, mentoring, or nurturing others intellectually. This placement supports good education, inner peace, and a strong memory.",
    5: "When the 5th lord is placed in its own house, it becomes very strong and auspicious. The native is highly intelligent, creative, and blessed with strong past-life merit. Education, children, and speculative activities flourish. Moral values are firm, and decision-making ability is excellent. This is one of the best placements for wisdom, fame, and long-term success.",
    6: "With the 5th lord in the 6th house, education and creative pursuits face obstacles or competition. The native develops a sharp, problem-solving intellect and excels in competitive exams, law, medicine, or service-oriented fields. Matters related to children or romance may involve stress or disputes, but perseverance leads to success through discipline.",
    7: "This placement connects intelligence and creativity with marriage and partnerships. The spouse may be intelligent, expressive, or creative. Love marriage is possible, and business partnerships benefit from advisory or intellectual skills. Emotional expectations can be high, and balance is required to avoid ego clashes in relationships.",
    8: "When the 5th lord is placed in the 8th house, the native possesses deep, research-oriented intelligence. Interest in occult sciences, psychology, astrology, or hidden knowledge is strong. Sudden changes related to education, romance, or children may occur. If well placed, this position gives profound insight and transformative wisdom; if afflicted, mental stress or emotional instability may arise.",
    9: "This is a highly auspicious placement forming a strong **dharma connection**. Intelligence aligns with higher wisdom, spirituality, and ethical living. The native benefits from teachers, gurus, and higher education. Children bring fortune, and past-life merits manifest clearly. This placement supports teaching, philosophy, law, and spiritual leadership.",
    10: "When the 5th lord occupies the 10th house, intelligence and creativity drive career success. The native gains authority through strategic thinking, teaching, politics, management, or advisory roles. Public recognition comes from intellectual contributions. This placement supports leadership positions and professional respect.",
    11: "With the 5th lord in the 11th house, intelligence leads to gains, income, and fulfillment of desires. The native benefits from speculation, creativity, or intellectual networks. Children become successful, and social circles support ambitions. This placement is favorable for financial growth and long-term achievements.",
    12: "When the 5th lord is placed in the 12th house, intelligence turns inward toward spirituality, meditation, and inner wisdom. The native may spend on education, spiritual practices, or foreign learning. Children or creative pursuits may be connected to foreign lands. If well placed, this position supports moksha and deep inner fulfillment."
  },
  6: {
    1: "When the 6th house lord is placed in the 1st house, the native carries the energy of struggle into their personality itself. Such a person is naturally competitive, resilient, and capable of fighting obstacles head-on. Life often presents challenges related to health, opposition, or conflicts, but the native develops strong survival instincts. If the planet is well placed, the person defeats enemies and emerges stronger; if afflicted, the individual may attract disputes or suffer from stress-related health issues.",
    2: "With the 6th lord in the 2nd house, matters of wealth, family, and speech are influenced by struggle and service. The native may earn through service-oriented work, loans, or competitive environments. Family disputes, sharp or harsh speech, and financial instability can occur if the planet is weak. When strong, the native overcomes financial difficulties through disciplined effort and gains strength in speech and resource management.",
    3: "This placement gives exceptional courage and the ability to confront rivals through communication and effort. The native is fearless in competition and excels in fields involving debate, sales, law, or media. Siblings may play a role in conflicts or service-related matters. As both houses are Upachaya, results improve steadily with age, making this a powerful placement for self-made success.",
    4: "When the 6th lord occupies the 4th house, inner peace and domestic happiness are often disturbed by work pressure, disputes, or health concerns. The native may experience stress related to home, property, or the mother. Emotional restlessness is common, and professional struggles tend to spill into personal life. Conscious effort is required to maintain mental stability and domestic harmony.",
    5: "This placement creates a sharp, competitive intellect. The native faces struggles in education, romance, or matters related to children, but develops strong analytical and problem-solving abilities. It is favorable for professions such as law, medicine, finance, and competitive examinations. If afflicted, disputes involving children or speculative losses may arise.",
    6: "When the 6th lord resides in its own house, it becomes extremely strong. The native has a natural ability to defeat enemies, handle disputes, and succeed in service-oriented or competitive professions. Health improves with discipline, and the person gains authority in environments involving conflict or responsibility. This is one of the best placements for overcoming obstacles in life.",
    7: "With the 6th lord in the 7th house, conflicts may arise in marriage, partnerships, or business dealings. The spouse or business partners may be argumentative or connected to service or legal fields. Litigation, competition, or disputes through contracts are possible. A strong and well-placed planet can give success in business after competition, while a weak one can strain relationships.",
    8: "This placement indicates hidden enemies, sudden obstacles, or chronic health issues. The native may face unexpected debts, legal complications, or psychological stress. However, it also grants the ability to handle crises, making the person suitable for research, surgery, investigation, or occult studies. Life transforms through struggles, often leading to inner strength.",
    9: "When the 6th lord is placed in the 9th house, the native may struggle with beliefs, ethics, or relationships with father and mentors. There can be conflicts related to religion, law, or higher education. However, the person develops a strong sense of justice and may serve in legal, advisory, or religious institutions. Fortune improves after sustained effort and ethical struggle.",
    10: "This is a powerful placement for professional life. The native works hard, faces competition in career, and gradually rises to authority through service and discipline. Success is seen in government jobs, law, medicine, administration, or corporate service. Enemies are defeated in the workplace, and recognition comes after sustained struggle.",
    11: "Here, struggles ultimately lead to gains. The native earns through competition, litigation, service networks, or large organizations. Friends and colleagues may initially create obstacles but later become sources of income. Financial success improves steadily, especially after mid-life, making this a favorable placement for long-term gains.",
    12: "When the 6th lord is in the 12th house, enemies are hidden and struggles occur behind the scenes. Expenses related to health, hospitals, or legal matters are possible. The native may work in foreign lands, hospitals, prisons, or spiritual institutions. If well placed, this position allows the native to defeat enemies quietly and develop strong spiritual discipline."
  },
  7: {
    1: "When the 7th house lord is placed in the 1st house, the native’s identity becomes closely tied to relationships, marriage, and public interaction. Such a person seeks balance through others and is strongly influenced by the spouse or partners. Marriage plays a defining role in shaping personality and life direction. If the planet is strong, the native gains support, popularity, and harmony through partnerships; if weak or afflicted, dependency on others and relationship conflicts may disturb personal stability.",
    2: "With the 7th lord in the 2nd house, marriage and partnerships contribute directly to wealth, family growth, and social status. The spouse may come from a respectable or financially stable family, and business partnerships can enhance income. Speech and family reputation are influenced by the partner. If afflicted, disputes over money or family matters may arise after marriage.",
    3: "This placement indicates partnerships formed through communication, courage, and effort. The spouse or business partner may be energetic, skillful, or involved in media, sales, or travel. Marriage may require conscious effort and communication to sustain harmony. The native benefits from collaboration in self-made ventures, though occasional arguments are possible.",
    4: "When the 7th lord occupies the 4th house, marital happiness is closely linked to domestic peace and emotional security. The spouse contributes to home, property, and comfort. The native seeks emotional fulfillment through marriage, and the home environment is strongly influenced by the partner. If afflicted, domestic disturbances or emotional dissatisfaction may arise.",
    5: "This placement connects marriage with romance, creativity, and intelligence. The native may experience love marriage or a spouse with intellectual or artistic qualities. Children and education strengthen marital bonds. However, emotional expectations can be high, and imbalance may cause romantic or ego-related issues if the planet is weak.",
    6: "With the 7th lord in the 6th house, conflicts, disagreements, or competition can enter relationships. Marriage may involve service, health concerns, or legal disputes. Business partnerships face rivalry or litigation. If the planet is strong, the native overcomes relational conflicts; if weak, separation or ongoing disputes are possible.",
    7: "When the 7th lord is placed in its own house, partnerships become a central life theme. The native is highly relationship-oriented and often successful in business or public dealings. Marriage is significant and usually stable if the planet is strong. This placement enhances charm, negotiation skills, and public visibility, though excessive dependence on relationships should be avoided.",
    8: "This placement brings transformation through marriage and partnerships. Sudden changes, emotional intensity, or secrecy may characterize relationships. The spouse may face health or psychological challenges, or the native may gain through inheritance or joint assets. Deep emotional bonds form, but stability requires maturity and trust.",
    9: "When the 7th lord is placed in the 9th house, marriage brings fortune, growth, and expanded beliefs. The spouse may come from a different culture, religion, or distant place. Partnerships support education, travel, and spiritual development. This is generally an auspicious placement that improves luck after marriage.",
    10: "This is a powerful placement for business and public life. The spouse contributes to career growth, reputation, or professional authority. The native may engage in business partnerships or public-facing roles. Marriage enhances status, but professional responsibilities may dominate personal life if balance is not maintained.",
    11: "With the 7th lord in the 11th house, partnerships bring gains, income, and social expansion. The spouse helps fulfill ambitions, and business alliances are profitable. Marriage increases social connections and financial stability. This is one of the best placements for success through collaboration.",
    12: "When the 7th lord occupies the 12th house, relationships may involve distance, foreign lands, or sacrifice. The spouse may live abroad or belong to a different background. Emotional or financial expenses through marriage are common. If spiritually inclined, this placement can bring deep, selfless love; otherwise, secrecy or separation may arise."
  },
  8: {
    1: "When the 8th house lord is placed in the 1st house, the native’s life becomes deeply transformational. The personality carries intensity, secrecy, and resilience, often shaped by sudden changes or crises. Health may fluctuate, and the person may appear mysterious or serious. If well placed, this position grants longevity, research ability, and inner strength; if afflicted, it can bring instability and recurring obstacles.",
    2: "With the 8th lord in the 2nd house, finances and family matters undergo sudden changes. The native may gain or lose wealth unexpectedly, often through inheritance, insurance, or joint assets. Speech can be sharp or secretive, and family life may carry hidden tensions. A strong planet gives the ability to manage resources wisely after crises.",
    3: "This placement gives fearless courage and the ability to face danger. The native may engage in risky ventures, research, or investigative work. Communication is intense and persuasive, though relationships with siblings may experience sudden shifts. The person grows stronger through self-effort after periods of struggle.",
    4: "When the 8th lord occupies the 4th house, emotional security and domestic peace are subject to sudden disruptions. Changes related to home, property, or mother may occur. The native experiences deep emotional transformations and may live in multiple residences. If well placed, it provides resilience and inner maturity.",
    5: "This position creates a deeply analytical and research-oriented mind. The native may experience sudden events related to education, romance, or children. Interest in occult sciences, psychology, or hidden knowledge is strong. Creativity expresses itself in intense or unconventional ways, though emotional ups and downs are common.",
    6: "With the 8th lord in the 6th house, the native gains the power to overcome hidden enemies and chronic problems. Health issues may exist but can be managed through discipline. This placement is favorable for medical, investigative, or legal professions, as the person excels in crisis situations and conflict resolution.",
    7: "This placement brings transformation through marriage and partnerships. Relationships may involve sudden changes, emotional intensity, or power struggles. The spouse may face health issues or carry a mysterious nature. If handled maturely, partnerships become a source of deep bonding and personal growth.",
    8: "When the 8th lord is placed in its own house, it becomes very strong. The native possesses deep resilience, long life, and strong research abilities. Interest in occult sciences, healing, finance, or inheritance-related matters is common. Though life brings sudden changes, the person has the power to regenerate and rise repeatedly.",
    9: "With the 8th lord in the 9th house, belief systems and higher knowledge undergo transformation. The native may question traditional philosophies or experience sudden changes related to father, teachers, or fortune. Spiritual growth often follows crises, leading to a mature and philosophical outlook on life.",
    10: "This placement brings sudden changes in career and public life. The native may experience ups and downs in profession, but also gains authority in research, investigation, medicine, or crisis management roles. Reputation may fluctuate, yet perseverance leads to long-term success.",
    11: "When the 8th lord occupies the 11th house, gains come suddenly and unexpectedly. Income may arise through inheritance, insurance, research, or joint ventures. Friendships and social circles may change abruptly. A strong planet brings powerful gains after sudden transformations.",
    12: "This placement intensifies the themes of isolation, spirituality, and hidden matters. The native may face expenses due to health or secrecy but also gains deep interest in meditation, healing, or moksha-related practices. If well placed, it grants spiritual liberation and inner transformation."
  },
  9: {
    1: "When the 9th house lord is placed in the 1st house, the native is naturally fortunate, ethical, and guided by strong principles. Life tends to support the person through grace rather than struggle. The individual gains respect, wisdom, and moral authority, often acting as a guide or teacher to others. This placement gives protection in difficult times and improves health and confidence.",
    2: "With the 9th lord in the 2nd house, fortune expresses itself through wealth, family, and speech. The native is blessed with good values, cultured behavior, and financial stability over time. Family lineage is honorable, and earnings improve through righteous means. Speech carries wisdom and inspires trust.",
    3: "This placement makes the native courageous in following their beliefs. Success comes through self-effort, communication, writing, or travel. The person may work in publishing, teaching, or advisory roles. Relationships with siblings are influenced by moral responsibility, and fortune increases through disciplined action.",
    4: "When the 9th lord occupies the 4th house, blessings flow into home, education, and emotional peace. The native enjoys protection in domestic life and often benefits from property, vehicles, or a supportive mother. Inner happiness increases with age, and the person develops a calm, philosophical mindset.",
    5: "This is one of the best placements for the 9th lord. The native gains strong intelligence, spiritual wisdom, and excellent education. Children bring fortune, and past-life merits manifest clearly. This placement forms powerful Dharma–Trikona connections, giving success in teaching, politics, or advisory roles.",
    6: "With the 9th lord in the 6th house, fortune comes after struggle. The native faces ethical challenges, debts, or competition but ultimately wins through righteousness. Service-oriented professions, law, medicine, or social work are favored. This placement strengthens moral courage and discipline.",
    7: "Marriage and partnerships bring luck and expansion. The spouse may be wise, cultured, or from a respected background. Business partnerships are beneficial, and the native gains fortune through public interactions. Ethical conduct in relationships enhances prosperity.",
    8: "This placement indicates transformation of beliefs through sudden events or crises. The native may question traditional philosophies but eventually develops deep spiritual understanding. Inheritance, research, or occult studies may bring fortune. Luck works subtly and activates after major life changes.",
    9: "When the 9th lord is in its own house, dharma is extremely strong. The native is highly principled, protected, and fortunate. Blessings from father, teachers, and elders are prominent. This placement supports higher education, spirituality, long-distance travel, and lasting respect in society.",
    10: "Fortune supports career and public life. The native achieves success, authority, and recognition through ethical work. The profession may involve law, education, government, or advisory roles. Hard work is rewarded, and reputation improves steadily.",
    11: "With the 9th lord in the 11th house, gains and ambitions are strongly supported by destiny. The native benefits from influential friends and networks. Income grows through righteous actions, and long-term goals are fulfilled with ease. This is an excellent placement for financial and social success.",
    12: "This placement directs fortune toward spirituality, foreign lands, and liberation. The native may travel or settle abroad and find peace in spiritual or charitable activities. Though material gains may fluctuate, inner fulfillment and divine protection remain strong."
  },
  10: {
    1: "When the 10th house lord is placed in the 1st house, career and public responsibilities become central to the native’s identity. Such a person is ambitious, authoritative, and strongly driven to achieve recognition. Leadership qualities are prominent, and the native prefers to work independently or in positions of command. If well placed, this gives fame, respect, and success; if afflicted, excessive work pressure or ego conflicts may arise.",
    2: "With the 10th lord in the 2nd house, profession directly supports wealth, family status, and reputation. The native earns steadily through career efforts, and speech or financial management plays an important role in professional success. Family prestige rises through work, and the person may work in finance, administration, or family businesses.",
    3: "This placement makes the native self-made and action-oriented in career matters. Success comes through communication, writing, sales, media, travel, or entrepreneurship. The person relies on personal effort rather than luck. Career progress is gradual but stable, improving significantly with age due to continuous initiative.",
    4: "When the 10th lord occupies the 4th house, career and home life strongly influence each other. The native may work from home, deal with property, vehicles, or education-related professions. Public responsibilities can disturb domestic peace, but strong placement gives property, respect, and emotional satisfaction through work.",
    5: "This position gives authority through intelligence, creativity, and strategy. The native succeeds in teaching, politics, management, advisory roles, or creative leadership. Professional recognition comes from wisdom and decision-making ability. Children or education may play a role in career advancement.",
    6: "When the 10th lord is placed in the 6th house, the native rises through service, discipline, and competition. Success comes after struggle, hard work, and persistence. Careers in government service, law, medicine, administration, or large organizations are favored. Enemies are defeated through perseverance.",
    7: "This placement connects career with business partnerships and public dealings. The native may succeed in trade, business, consultancy, or client-facing roles. The spouse or partners contribute to professional growth. Reputation depends on how well relationships and agreements are managed.",
    8: "With the 10th lord in the 8th house, career experiences sudden changes, transformations, or breaks. The native may work in research, investigation, medicine, insurance, finance, or crisis management. Public image may fluctuate, but strong inner resilience leads to long-term authority in specialized fields.",
    9: "This is an auspicious placement where profession aligns with dharma. The native gains success through ethical work, law, teaching, government, religion, or advisory roles. Support from mentors, seniors, or father figures enhances career growth. Reputation improves steadily over time.",
    10: "When the 10th lord occupies its own house, career strength is exceptional. The native gains authority, recognition, and lasting reputation. Leadership roles, government positions, or independent enterprises flourish. This is one of the best placements for professional success and public respect.",
    11: "With the 10th lord in the 11th house, career brings gains, income, and fulfillment of ambitions. The native benefits from networks, large organizations, and influential contacts. Professional efforts translate directly into financial and social success, making this a very favorable placement.",
    12: "When the 10th lord is placed in the 12th house, career is linked to foreign lands, hospitals, spiritual institutions, or behind-the-scenes work. Public recognition may be limited, but inner satisfaction can be strong. The native may sacrifice status for peace or spiritual fulfillment, and expenses related to profession are common."
  },
  11: {
    1: "When the 11th house lord is placed in the 1st house, the native’s personality is strongly oriented toward achievement and ambition. The person is goal-driven, socially active, and capable of attracting opportunities through personal effort. Gains come through self-initiative and visibility. If well placed, this position gives popularity and steady income; if afflicted, desires may become excessive or ego-driven.",
    2: "With the 11th lord in the 2nd house, gains accumulate as wealth, savings, and family stability. The native benefits financially from speech, trade, or family-supported ventures. Income tends to grow steadily, and family reputation improves through earnings. This is a favorable placement for financial security.",
    3: "This placement indicates gains through communication, courage, and persistent effort. The native succeeds in sales, marketing, writing, media, or entrepreneurial activities. Siblings and close associates may help in achieving goals. Income increases with age and experience due to continuous self-effort.",
    4: "When the 11th lord occupies the 4th house, gains come through property, land, vehicles, or domestic assets. The native experiences fulfillment through comfort and emotional security. Support from mother or family helps achieve ambitions. This placement often gives multiple properties or a comfortable home.",
    5: "This position brings gains through intelligence, creativity, speculation, or children. The native may profit from investments, education, teaching, or artistic pursuits. Children become a source of pride and fulfillment. If the planet is well placed, this is excellent for wealth creation through intellect.",
    6: "With the 11th lord in the 6th house, gains arise after competition, service, or legal struggles. Income comes through jobs, disputes, or overcoming obstacles. The native benefits from defeating rivals, though stress and health concerns may accompany success. Discipline is essential to sustain gains.",
    7: "This placement brings income and opportunities through partnerships, marriage, and public dealings. Business alliances are profitable, and the spouse contributes to financial growth. Social connections expand, and gains increase through collaboration and networking.",
    8: "When the 11th lord is placed in the 8th house, gains are sudden, irregular, or unexpected. The native may earn through inheritance, insurance, research, or joint resources. Friendships and income sources may change abruptly. Strong placement brings powerful windfalls after transformation.",
    9: "This is a very auspicious placement where gains are supported by fortune and righteousness. The native benefits from mentors, teachers, and higher knowledge. Income increases through ethical work, teaching, law, or foreign connections. Desires are fulfilled with relative ease.",
    10: "When the 11th lord occupies the 10th house, professional efforts lead directly to gains and recognition. The native’s ambitions are fulfilled through career success. Authority, leadership, and public reputation improve financial prospects. This is a strong placement for sustained income and status.",
    11: "With the 11th lord in its own house, the native experiences strong gains, influential networks, and fulfillment of major desires. Income sources are stable and often multiple. Friends and associations play a powerful role in success. This is one of the best placements for wealth and achievements.",
    12: "When the 11th lord is placed in the 12th house, gains may be spent quickly or directed toward foreign lands, charity, or spiritual pursuits. Income can come from abroad or behind-the-scenes activities. Fulfillment is more spiritual than material, and expenses tend to be high."
  },
  12: {
    1: "When the 12th house lord is placed in the 1st house, the native’s personality carries a sense of detachment, introspection, or sacrifice. The person may appear reserved or private and often feels a pull toward solitude or spiritual pursuits. Expenses related to health, self-development, or foreign connections are common. If well placed, this position supports spiritual growth and compassion; if afflicted, it can cause low vitality or confusion about life direction.",
    2: "With the 12th lord in the 2nd house, wealth and family resources tend to be spent rather than accumulated. The native may spend on family needs, charity, food, or foreign matters. Speech may be soft, restrained, or secretive. If the planet is strong, expenses are purposeful and controlled; if weak, financial leakage and family detachment may occur.",
    3: "This placement directs losses and expenditures toward effort, communication, and travel. The native may spend heavily on short journeys, skills, or media-related work. Relations with siblings may involve separation or distance. Courage develops through sacrifice, and success often comes after letting go of ego and expectations.",
    4: "When the 12th lord occupies the 4th house, domestic peace and emotional comfort may feel elusive. The native may live away from the birthplace or experience separation from mother or homeland. Expenses on property, vehicles, or home comforts are common. If spiritually inclined, inner peace is found through detachment from material comfort.",
    5: "This placement connects loss and detachment with intelligence, children, and creativity. The native may spend heavily on education, children, or spiritual learning. Emotional fulfillment may come through meditation, mantra, or higher knowledge. If afflicted, stress related to children or mental restlessness may arise.",
    6: "With the 12th lord in the 6th house, the native defeats enemies quietly and overcomes obstacles behind the scenes. Expenses may relate to health, service, or litigation, but the person develops strong resilience. This is a favorable placement for hospital work, healing professions, or service in isolated environments.",
    7: "When the 12th lord is placed in the 7th house, relationships involve sacrifice, distance, or foreign influence. The spouse may come from a different background or live abroad. Expenses related to marriage or partnerships are common. If well placed, this gives spiritual bonding; if afflicted, secrecy or separation may occur.",
    8: "This placement intensifies themes of loss, transformation, and secrecy. The native may face sudden expenses, psychological depth, or interest in occult and hidden knowledge. Longevity can be good if the planet is strong. Spiritual transformation often follows periods of isolation or crisis.",
    9: "When the 12th lord occupies the 9th house, expenses and sacrifices are directed toward faith, charity, pilgrimage, or higher learning. The native may travel abroad for spiritual or educational reasons. This placement supports renunciation, philosophical depth, and divine grace through selfless acts.",
    10: "This placement connects profession with foreign lands, institutions, or behind-the-scenes work. The native may sacrifice public recognition for inner satisfaction. Career-related expenses are common, but success is found in hospitals, multinational organizations, spiritual institutions, or research roles.",
    11: "With the 12th lord in the 11th house, gains tend to be unstable or spent quickly. Income may come from foreign sources or charitable networks, but desires are fulfilled briefly. The native learns detachment from material ambitions and may find fulfillment through service or spiritual associations.",
    12: "When the 12th lord is placed in its own house, themes of isolation, spirituality, and liberation are very strong. The native is naturally detached from material excess and may seek solitude, meditation, or service. Though material gains may be limited, inner peace and spiritual progress are significant. This is a powerful placement for moksha."
  }
};

// Effects of each planet placed in each house (planet-in-house classical predictions)
// Structure: planetInHouseEffects[planetKey][houseNumber] -> string
export const planetInHouseEffects = {
  sun: {
    1: "When the Sun is placed in the 1st house, it gives a strong sense of identity, authority, and self-confidence. The native has leadership qualities, a commanding presence, and a desire to be recognized. Health and vitality are usually strong if the Sun is well placed. If afflicted, ego, arrogance, or dominance issues may arise, but the person still carries a powerful will and self-respect.",
    2: "With the Sun in the 2nd house, authority and self-worth are linked to wealth, family, and speech. The native may come from a respected family or gain status through financial means. Speech is authoritative and influential. Earnings may come through government, leadership roles, or family prestige. If afflicted, family disputes or harsh speech can occur.",
    3: "This placement gives courage, confidence, and strong willpower. The native is fearless in expressing ideas and taking initiative. Leadership manifests through communication, writing, administration, or media. Relations with siblings may involve dominance. This is a strong placement for self-made success and public influence.",
    4: "When the Sun occupies the 4th house, authority influences home, property, and emotional life. The native may have a powerful or authoritative father or mother figure. There can be focus on property, government assets, or administrative roles. Inner peace may fluctuate, as ego and emotions can clash. Respect in society is strong if well placed.",
    5: "With the Sun in the 5th house, intelligence, creativity, and leadership combine. The native is confident in knowledge, education, and decision-making. This placement favors politics, teaching, administration, and creative leadership. Children may be talented or authoritative. Ego should be balanced to avoid issues in romance or speculation.",
    6: "This is a powerful placement for defeating enemies and overcoming obstacles. The native succeeds in competition, service, administration, law, medicine, or government roles. Strong discipline and work ethic are present. Health improves with routine. This placement gives authority over rivals but may cause stress if ego is excessive.",
    7: "When the Sun is placed in the 7th house, authority enters relationships and public dealings. The native seeks recognition through partnerships, business, or marriage. The spouse may be dominant or influential. Success comes in business, politics, or public-facing roles. If afflicted, ego clashes and marital tension may arise.",
    8: "This placement brings transformation of ego and authority through crises. The native may experience sudden changes, power struggles, or interest in occult and hidden matters. Longevity can be good if the Sun is strong. The person develops inner strength after facing deep challenges, though authority may be exercised behind the scenes.",
    9: "When the Sun occupies the 9th house, dharma, ethics, and higher knowledge are highlighted. The native is principled, respected, and often guided by strong beliefs. Support from father, mentors, or authority figures is common. This placement favors leadership in law, education, religion, or government and brings natural fortune.",
    10: "This is one of the best placements for the Sun. The native gains authority, fame, and public recognition through career. Leadership roles, government service, administration, or politics are strongly supported. Reputation is powerful, and ambition is high. This placement often brings lasting name and status.",
    11: "With the Sun in the 11th house, authority brings gains, influence, and fulfillment of ambitions. The native benefits from powerful friends, networks, or government connections. Income comes through leadership and social standing. Desire for recognition within groups is strong.",
    12: "When the Sun is placed in the 12th house, authority turns inward. The native may work behind the scenes, in foreign lands, hospitals, spiritual institutions, or government-related secrecy. Ego is subdued, leading to introspection. If well placed, this supports spiritual growth and service; if afflicted, it can cause isolation or loss of confidence."
  },
  moon: {
    1: "When the Moon is placed in the 1st house, the native is emotionally sensitive, intuitive, and strongly influenced by surroundings. The mind and personality are closely connected, making the person expressive and receptive. Mood changes are frequent, and emotional well-being directly affects health and confidence. A strong Moon gives popularity and empathy; a weak Moon brings emotional instability or indecisiveness.",
    2: "With the Moon in the 2nd house, emotional security is tied to family, wealth, and food. The native is attached to family traditions and seeks comfort through financial stability. Speech is soft, emotional, and persuasive. Income may fluctuate but usually comes steadily. Emotional attachment to possessions and family is strong.",
    3: "This placement gives emotional courage and adaptability. The native expresses feelings through communication, writing, or travel. Relations with siblings are emotionally significant. The person may experience mental restlessness but gains strength through self-effort. Success comes gradually as confidence develops.",
    4: "Moon is very strong in the 4th house. The native has deep emotional needs, strong attachment to home, mother, and inner peace. Domestic comfort, property, and emotional security are central to life. A well-placed Moon gives happiness, nurturing nature, and public goodwill; an afflicted Moon causes emotional insecurity or domestic disturbances.",
    5: "With the Moon in the 5th house, emotions are expressed through creativity, intelligence, romance, and children. The native is imaginative, caring, and mentally sharp. Emotional fulfillment comes through learning and creative expression. Mood swings related to love or children are possible, but intuition is strong.",
    6: "This placement brings emotional stress related to work, health, or conflicts. The native worries easily and may experience mental pressure due to responsibilities or service. However, adaptability helps overcome obstacles. Care must be taken to manage stress, anxiety, and health routines.",
    7: "When the Moon is placed in the 7th house, emotional fulfillment comes through relationships and marriage. The native seeks emotional connection with others and is sensitive to partner’s moods. Public image is important, and popularity is common. If afflicted, emotional dependency or relationship instability may arise.",
    8: "This placement gives deep emotional intensity and psychological depth. The native experiences emotional transformations, sudden mood shifts, or hidden fears. Interest in mysteries, psychology, or occult matters is common. Emotional resilience develops through life’s ups and downs, though inner peace may be hard to maintain early in life.",
    9: "With the Moon in the 9th house, emotions are guided by beliefs, faith, and higher wisdom. The native is philosophical, compassionate, and respectful of traditions. Emotional support comes from mentors, teachers, or spiritual practices. Travel and learning bring mental peace and growth.",
    10: "This placement links emotions with career and public life. The native is responsive to public opinion and gains popularity in professional roles. Career may involve public service, hospitality, or caregiving fields. Emotional satisfaction depends on professional recognition, and frequent career changes are possible.",
    11: "When the Moon occupies the 11th house, emotional fulfillment comes through friendships, social networks, and achievements. The native is socially adaptable and gains support from groups. Income may fluctuate but desires are often fulfilled. Emotional happiness increases through social connection.",
    12: "With the Moon in the 12th house, emotions turn inward. The native is private, introspective, and spiritually inclined. Emotional sensitivity is high, and solitude or foreign environments may feel comforting. Sleep disturbances or emotional withdrawal are possible. A strong Moon here supports compassion, imagination, and spiritual growth."
  },
  mars: {
    1: "When Mars is placed in the 1st house, it gives a bold, energetic, and action-oriented personality. The native is courageous, competitive, and physically active, with strong willpower and leadership instincts. Such a person prefers to take initiative rather than follow others. If Mars is well placed, it gives confidence and success through self-effort; if afflicted, anger, impatience, or impulsive behavior may create conflicts and health issues.",
    2: "With Mars in the 2nd house, energy is directed toward wealth, family, and speech. The native works hard to earn money and protect family interests. Speech may be forceful, direct, or harsh, sometimes leading to disputes. Financial gains come through land, machinery, engineering, or action-based professions. Care is needed to avoid conflicts within the family.",
    3: "This is one of the strongest placements for Mars. The native is fearless, bold, and highly determined. Courage, initiative, and risk-taking abilities are exceptional. Success comes through self-effort, communication, business, sports, media, or entrepreneurship. Relations with siblings may involve rivalry, but the person has strong fighting spirit and endurance.",
    4: "When Mars occupies the 4th house, energy is focused on home, property, and emotional security. The native may experience domestic tension, disputes over property, or restlessness at home. Strong desire for land, vehicles, or construction-related assets is common. If well placed, Mars gives success in real estate or engineering; if afflicted, emotional agitation and family conflicts may arise.",
    5: "With Mars in the 5th house, passion, courage, and competitiveness influence creativity, romance, and children. The native may be bold in love, expressive in arts, or drawn to speculative ventures. Intelligence is sharp but must be channeled carefully to avoid impulsive decisions in love or finance.",
    6: "This is a powerful placement for Mars, especially for defeating enemies and handling conflicts. The native is hardworking, disciplined, and capable in service, law, military, or medical fields. Health can improve through physical activity and routine. If afflicted, this placement can bring accidents, injuries, or aggressive disputes.",
    7: "When Mars is placed in the 7th house, relationships and partnerships become intense and dynamic. The native may be attracted to bold or assertive partners. Marriage may involve strong passion but also conflict if ego is unchecked. Business partnerships may succeed in competitive fields but require clear boundaries.",
    8: "This placement gives deep, intense energy and attraction to hidden subjects, research, or occult sciences. The native may experience sudden transformations, crises, or power struggles. Sexual energy is strong. Properly directed, Mars here supports healing, investigation, or transformative work.",
    9: "With Mars in the 9th house, courage is guided by beliefs, principles, and higher learning. The native may be active in travel, sports, law, or military-related roles. There is strong will to defend ideals. If afflicted, impulsive behavior or ideological rigidity may create conflicts.",
    10: "This is a strong placement for career success. The native is ambitious, hardworking, and ready to face challenges in professional life. Leadership roles, engineering, military, surgery, or technical fields are favored. Reputation is built through courage and perseverance.",
    11: "When Mars occupies the 11th house, gains come through courage, initiative, and competitive environments. The native is ambitious and goal-oriented, often active in groups or organizations. Friendships may be energetic, assertive, or occasionally conflict-prone.",
    12: "With Mars in the 12th house, energy turns inward or toward hidden activities. The native may struggle with suppressed anger, restless sleep, or secret conflicts. However, this placement can support spiritual discipline, foreign work, or service in hospitals and ashrams if channeled constructively."
  },
  mercury: {
    1: "When Mercury is placed in the 1st house, the native is intelligent, curious, and communicative. The personality is youthful, adaptable, and mentally active. Speech and expression are strong, and the person may excel in writing, teaching, or business. If afflicted, restlessness or overthinking may disturb peace.",
    2: "With Mercury in the 2nd house, intellect supports wealth, speech, and family matters. The native is skilled in communication, finance, trade, or analytical work. Speech is clever, persuasive, or witty. Earnings often come through business, education, or information-related fields.",
    3: "This is a very favorable placement for Mercury. The native is intelligent, skilled, and versatile in communication, writing, media, or travel-related work. Relations with siblings are influenced by intellect and dialogue. Curiosity and learning capacity are strong.",
    4: "When Mercury occupies the 4th house, the mind is closely connected to emotions, home, and education. The native may be interested in study, teaching, psychology, or real estate. Domestic life involves intellectual discussions or learning. If afflicted, overthinking may disturb inner peace.",
    5: "With Mercury in the 5th house, intelligence, creativity, and analytical ability are strong. The native excels in studies, writing, strategy, or creative communication. This placement favors education, teaching, consulting, and artistic expression through words or ideas.",
    6: "This placement supports detailed, analytical, and service-oriented work. The native is skilled in problem-solving, accounts, law, medicine, or data-related fields. Communication is sharp but can be critical. Health may be sensitive to stress or nervous tension.",
    7: "When Mercury is placed in the 7th house, relationships and partnerships involve strong mental connection and communication. The native may attract intelligent, talkative, or business-minded partners. Success in business, trade, or consulting is favored.",
    8: "With Mercury in the 8th house, the mind is drawn to research, investigation, psychology, or occult subjects. The native thinks deeply about hidden matters, transformation, or joint resources. Communication may be secretive or analytical.",
    9: "This placement links intellect with higher knowledge, philosophy, and ethics. The native is interested in teaching, law, spirituality, or long-distance travel. Communication is wise and instructive, though at times overly theoretical.",
    10: "When Mercury occupies the 10th house, communication and intellect drive career success. The native excels in professions requiring speech, analysis, writing, teaching, or management. Reputation is built on intelligence and adaptability.",
    11: "With Mercury in the 11th house, gains come through communication, networks, trade, or intellectual groups. The native has many friends or contacts and may work in media, business, or information technology.",
    12: "When Mercury is placed in the 12th house, the mind turns inward or toward subtle subjects. The native may be interested in spirituality, research, foreign lands, or work behind the scenes. If afflicted, overthinking in isolation can lead to anxiety."
  },
  jupiter: {
    1: "When Jupiter is placed in the 1st house, the native is wise, optimistic, and morally inclined. The personality is generous, protective, and often respected. This placement brings luck, guidance, and spiritual inclination. Health and confidence are usually strong.",
    2: "With Jupiter in the 2nd house, wealth, family, and speech are blessed. The native enjoys good food, ethical values, and supportive family. Earnings can be strong over time, especially through education, law, teaching, or advisory roles.",
    3: "This placement gives positive thinking and supportive communication. The native may succeed in writing, teaching, publishing, or counseling. Relations with siblings are generally beneficial, and courage is guided by wisdom.",
    4: "When Jupiter occupies the 4th house, home life, education, and emotional peace are blessed. The native enjoys comfort, property, and good relations with mother. Inner happiness and spiritual inclination are strong.",
    5: "This is an excellent placement for intelligence, education, and creativity. The native is wise, ethical, and inclined toward teaching, counseling, or spiritual study. Children bring happiness and may be fortunate.",
    6: "With Jupiter in the 6th house, service, healing, and problem-solving are guided by wisdom. The native may work in law, medicine, counseling, or social service. Enemies are overcome through ethics and tolerance, though health must be managed with care.",
    7: "When Jupiter is placed in the 7th house, marriage and partnerships are generally beneficial. The spouse may be wise, supportive, or ethical. Business partnerships and public dealings are favorable.",
    8: "With Jupiter in the 8th house, interest in occult, research, or spiritual transformation is strong. The native may gain through inheritance, joint assets, or deep study of hidden subjects. Protection in crises is common.",
    9: "This is one of the best placements for Jupiter. The native is highly ethical, spiritual, and fortunate. Respect for teachers, scriptures, and higher learning is strong. Travel, education, and dharma flourish.",
    10: "When Jupiter occupies the 10th house, career and public life are guided by wisdom and ethics. The native may excel in law, teaching, government, or advisory roles. Reputation is dignified and respected.",
    11: "With Jupiter in the 11th house, gains, networks, and fulfillment of desires are strong. The native benefits from good friends, mentors, and supportive organizations.",
    12: "When Jupiter is placed in the 12th house, spirituality, charity, and inner growth are emphasized. The native may spend on religious, charitable, or educational causes. This placement favors moksha and deep inner peace."
  },
  venus: {
    1: "When Venus is placed in the 1st house, the native is charming, attractive, and sociable. There is a natural sense of beauty, grace, and diplomacy. Relationships and aesthetics are important in shaping personality.",
    2: "With Venus in the 2nd house, wealth, speech, and family life are pleasantly influenced. The native enjoys comfort, good food, music, and refined surroundings. Income may come through arts, beauty, or luxury goods.",
    3: "This placement gives artistic and communicative talent. The native may excel in writing, music, media, or performance. Relations with siblings are generally harmonious.",
    4: "When Venus occupies the 4th house, home and emotional life are filled with comfort, beauty, and affection. The native enjoys pleasant domestic surroundings, vehicles, and artistic decoration.",
    5: "With Venus in the 5th house, love, creativity, and romance flourish. The native is expressive, artistic, and enjoys pleasures of life. This placement supports artistic careers and happy romantic experiences.",
    6: "This placement can bring complexities in love and work. The native may experience relationships with co-workers or face challenges balancing comfort with duty. However, it can favor service in artistic or healing professions.",
    7: "When Venus is placed in the 7th house, it strongly favors marriage and partnerships. The native seeks harmony, love, and beauty in relationships. Spouse is often attractive or refined.",
    8: "With Venus in the 8th house, love and pleasure have a deep, intense, or secretive quality. The native may benefit from partner’s resources or be drawn to mystical or tantric practices.",
    9: "This placement gives love for travel, higher learning, and refined philosophies. The native may experience romantic or artistic experiences abroad or in spiritual settings.",
    10: "When Venus occupies the 10th house, charm and aesthetics support career success. The native may work in arts, fashion, entertainment, diplomacy, or luxury-related fields. Public image is pleasant.",
    11: "With Venus in the 11th house, gains come through social charm, friendships, or artistic networks. The native enjoys parties, gatherings, and supportive friends.",
    12: "When Venus is placed in the 12th house, love and pleasure are connected to solitude, foreign lands, or spiritual retreat. The native may enjoy private romance, artistic seclusion, or devotional practices."
  },
  saturn: {
    1: "When Saturn is placed in the 1st house, the native appears serious, disciplined, and mature. Life may present early responsibilities, delays, or tests, but with time the person gains strong character and resilience.",
    2: "With Saturn in the 2nd house, wealth and family matters develop slowly through effort and discipline. The native may experience financial delays or strict family values but gains stability over time.",
    3: "This placement gives disciplined communication and steady courage. The native works hard toward goals, especially in writing, business, or technical fields. Relations with siblings may be serious or duty-bound.",
    4: "When Saturn occupies the 4th house, emotional expression and domestic comfort may feel restricted. The native may experience responsibilities at home or with mother but gains property or stability later in life.",
    5: "With Saturn in the 5th house, creativity, romance, and children are influenced by discipline, delay, or responsibility. The native may be serious in love, cautious in speculation, and dutiful toward children.",
    6: "This is a strong placement for handling work, service, and responsibilities. The native is disciplined, hardworking, and capable of managing difficult tasks. Health requires long-term care and routine.",
    7: "When Saturn is placed in the 7th house, relationships and marriage demand patience and maturity. Marriage may be delayed or the spouse may be serious, older, or duty-oriented. Partnerships require responsibility and commitment. Business partnerships can be stable but grow slowly.",
    8: "This placement brings deep karmic lessons and transformation through hardship. The native may face fears, losses, or sudden changes but develops strong resilience. Longevity can be good if Saturn is well placed. Interest in research, occult, insurance, or long-term investments is common. Inner strength grows through endurance.",
    9: "With Saturn in the 9th house, beliefs and faith develop through experience rather than blind acceptance. Relations with father, teachers, or mentors may involve distance or responsibility. Luck improves slowly through disciplined effort. This placement favors law, ethics, philosophy, and structured spiritual practices.",
    10: "This is one of the strongest placements for Saturn. The native achieves authority, respect, and recognition through hard work and perseverance. Career success comes slowly but is long-lasting. Leadership roles in government, administration, engineering, or corporate structures are favored. Reputation is built on reliability and responsibility.",
    11: "When Saturn occupies the 11th house, gains and ambitions are fulfilled gradually. Income grows steadily over time through disciplined effort and long-term planning. Social circles are small but reliable. Desires are fulfilled later in life, often after sustained struggle.",
    12: "With Saturn in the 12th house, isolation, solitude, or foreign environments play a significant role in life. The native may work behind the scenes or in institutions such as hospitals, prisons, or ashrams. Expenses are controlled but unavoidable. Spiritual growth comes through renunciation, discipline, and acceptance."
  },
  rahu: {
    1: "When Rahu is placed in the 1st house, the native has an intense desire to stand out and define a unique identity. There is strong ambition, unconventional behavior, and fascination with power or fame. The personality may appear mysterious or larger than life. If well directed, this placement gives charisma and success through innovation; if afflicted, confusion, ego distortion, or identity crises may arise.",
    2: "With Rahu in the 2nd house, obsession with wealth, possessions, and status is strong. The native may gain money through unconventional or foreign sources. Speech can be dramatic or manipulative. Family values may differ from tradition. Financial ups and downs are common, but clever strategies can bring sudden gains.",
    3: "This is one of the best placements for Rahu. The native is fearless, bold, and highly ambitious. Success comes through communication, media, technology, politics, or unconventional efforts. Courage is extreme, and enemies are defeated through cleverness. Self-made success and fame are common with this placement.",
    4: "When Rahu occupies the 4th house, emotional peace and domestic life are disturbed by restlessness. The native may live away from birthplace or experience dissatisfaction with home and mother. Strong desire for property or luxury exists, often fulfilled in unconventional ways. Inner peace develops only after maturity.",
    5: "This placement gives intense desire for creativity, recognition, and intelligence-based success. The native may be drawn to speculative ventures, politics, or unconventional education. Romance and children may involve confusion or unusual circumstances. Strong intuition and strategic thinking are present, but judgment must be refined.",
    6: "This is an excellent placement for Rahu. The native defeats enemies, overcomes obstacles, and succeeds in competitive environments. Careers in politics, medicine, law, technology, or service thrive. Health improves through discipline. The person uses cleverness and persistence to rise above rivals.",
    7: "When Rahu is placed in the 7th house, relationships and partnerships become intense and unconventional. The spouse may be foreign, unconventional, or dominant. Strong desire for partnership exists, but satisfaction may be elusive. Business partnerships can bring sudden success or controversy. Conscious balance is required to maintain harmony.",
    8: "This placement gives fascination with secrets, occult, psychology, and hidden power. The native may experience sudden transformations, crises, or unexpected gains. Interest in research, mysticism, or taboo subjects is strong. Life involves sudden rises and falls, leading to deep inner transformation.",
    9: "With Rahu in the 9th house, belief systems and philosophies become unconventional. The native may challenge tradition, religion, or authority. Foreign cultures, ideologies, or teachers influence life direction. Fortune comes through non-traditional paths, but faith may fluctuate before stabilizing.",
    10: "This is one of the most powerful placements for material success. The native is obsessed with career, authority, and public recognition. Sudden rise in profession, fame, or political power is possible. Work may involve foreign companies, technology, or unconventional industries. Reputation must be handled carefully to avoid scandals.",
    11: "When Rahu occupies the 11th house, desires are large and ambitions are intense. The native gains through networks, technology, foreign connections, or mass influence. Income may come suddenly and from unconventional sources. Social circles are wide but unstable. Material fulfillment is strong.",
    12: "With Rahu in the 12th house, obsession turns toward foreign lands, isolation, or hidden pleasures. The native may live abroad or work behind the scenes. Expenses can be sudden or excessive. Spiritual curiosity, mysticism, or escapism may develop. Inner peace comes after learning moderation."
  },
  ketu: {
    1: "When Ketu is placed in the 1st house, the native experiences detachment from personal identity and ego. There is a sense of being different or inward-focused, often leading to spiritual inclination or self-questioning. Confidence may feel inconsistent, but deep inner awareness is strong. Life pushes the native toward understanding the self beyond appearance and recognition.",
    2: "With Ketu in the 2nd house, detachment arises toward wealth, family traditions, and material security. The native may feel disconnected from family values or experience breaks in lineage or speech patterns. Financial stability may fluctuate, but spiritual values deepen. Speech can be blunt or minimal, reflecting indifference toward material expression.",
    3: "This is one of the stronger placements for Ketu. The native possesses fearless inner courage and intuitive communication skills. Detachment from siblings or social effort may exist, yet the person performs boldly when required. Spiritual strength and self-mastery grow through disciplined action without attachment to results.",
    4: "When Ketu occupies the 4th house, emotional detachment from home, mother, or inner comfort is indicated. The native may feel restless at home or disconnected from emotional security. Peace is sought internally rather than through material comfort. Spiritual maturity develops through emotional independence.",
    5: "With Ketu in the 5th house, the native shows past-life mastery in intelligence, spirituality, or mantra knowledge. There may be detachment from romance, speculation, or children, or unusual circumstances related to them. The mind is intuitive and philosophical, inclined toward higher wisdom rather than worldly pleasure.",
    6: "This is an excellent placement for Ketu. The native effortlessly overcomes enemies, debts, and health challenges through inner strength and detachment. Service, healing, and spiritual discipline are strong. The person does not fear competition and often wins silently without ego involvement.",
    7: "When Ketu is placed in the 7th house, detachment appears in relationships and partnerships. Marriage may feel unsatisfying or spiritually driven rather than emotionally dependent. The spouse may be spiritual, distant, or unusual. This placement teaches balance between independence and partnership.",
    8: "This is a powerful spiritual placement. The native has deep intuitive knowledge, interest in occult sciences, and strong insight into life’s mysteries. Sudden transformations are common, but fearlessness in crises is high. Ketu here supports spiritual awakening, research, and liberation from fear of death.",
    9: "With Ketu in the 9th house, detachment from traditional belief systems and external authority figures occurs. The native questions religion, philosophy, or guru figures and seeks personal spiritual truth. Past-life spiritual practices influence this life strongly, leading toward independent wisdom and inner guidance.",
    10: "When Ketu occupies the 10th house, detachment from career, fame, and public recognition is seen. The native may change professions frequently or work without attachment to status. Spiritual or service-oriented careers are favored. True fulfillment comes from meaningful work rather than worldly success.",
    11: "With Ketu in the 11th house, the native feels detached from large social circles and material ambitions. Gains may come unexpectedly but do not bring lasting satisfaction. The person prefers a small, spiritually aligned network. Desire fulfillment feels incomplete, pushing the native toward inner growth.",
    12: "This is one of the most spiritual placements for Ketu. The native is naturally inclined toward meditation, isolation, and liberation. Detachment from material life is strong, and interest in moksha, foreign ashrams, or spiritual retreat is common. This placement supports deep spiritual realization and inner peace."
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

