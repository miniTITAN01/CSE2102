//import React from 'react';

const getQuestionsForTopic = (topic) => {
    const questions = {
      Language: [
        {
            questionText: "How are you, ma'am?",
            options: [
              'Tôi tên là Lan.',
              'Bà có khỏe không?',
              'Cô mới nói chi?',
            ],
            correctAnswer: 'Bà có khỏe không?',
          },
          {
            questionText: 'I understand perfectly.',
            options: [
              'Tôi hiểu hoàn toàn.',
              'Cô mới nói chi?',
              'Tôi không hiểu.',
            ],
            correctAnswer: 'Tôi hiểu hoàn toàn.',
          },
          {
            questionText: 'I speak only a little Vietnamese.',
            options: [
              'Tôi không nói tiếng Anh.',
              'Dạ tôi khỏe, cám ơn Ông.',
              'Tôi chỉ nói một ít tiếng Việt.',
            ],
            correctAnswer: 'Tôi chỉ nói một ít tiếng Việt.',
          },
          {
            questionText: 'Where is the bathroom?',
            options: [
              'Giá phòng ở đây ra sao?',
              'Phòng tắm ở đâu?',
              'Khi nào mới được vào phòng?',
            ],
            correctAnswer: 'Phòng tắm ở đâu?',
          },
          {
            questionText: 'This is too cold.',
            options: [
              'Cái này lạnh quá.',
              'Tôi muốn món thịt của tôi nấu chín kỹ.',
              'Tôi muốn kêu một ly mạc-ti-ni.',
            ],
            correctAnswer: 'Cái này lạnh quá.',
          },
      ],
      Math: [
        {
            questionText: "The sum of all the probabilities of an even is,",
            options: [
              '100',
              '1',
              '0',
            ],
            correctAnswer: '1',
          },
          {
            questionText: 'In a cricket match, a batsman hits a boundary 6 times out of 30 balls he plays, the probability that he did not hit a boundary is,',
            options: [
              '1/5',
              '4/5',
              '2/3',
            ],
            correctAnswer: '4/5',
          },
          {
            questionText: 'A bag contains 4 red balls and 3 black balls. If one ball is drawn at random, find the probability that it is red.',
            options: [
              '4/7',
              '3/7',
              '1/7',
            ],
            correctAnswer: '4/7',
          },
          {
            questionText: 'If an alphabet is selected randomly in English, find the probability that it is a consonant.',
            options: [
              '5/26',
              '21/26',
              '12/26',
            ],
            correctAnswer: '21/26',
          },
          {
            questionText: 'In a survey of 200 children, it was found that 142 likes outdoor games while 58 liked indoor games. Find the probability that a child chosen at random likes indoor games,',
            options: [
              '0.30',
              '0.29',
              '0.31',
            ],
            correctAnswer: '0.29',
          },
      ],
      Chemistry: [
        {
            questionText: "What is the name of this chemical? NH4+",
            options: [
              'Ammonium',
              'Nitrite',
              'Hydroxit',
            ],
            correctAnswer: 'Ammonium',
          },
          {
            questionText: 'Acetate can be shown as C2H3O2- or CH3COO-',
            options: [
              'True',
              'False',
            ],
            correctAnswer: 'True',
          },
          {
            questionText: 'OH- can be described as which polyatomic ion?',
            options: [
              'Hydroxide',
              'Hydroxite',
              'Helium',
            ],
            correctAnswer: 'Hydroxide',
          },
          {
            questionText: 'What does the ion phosphate contain?',
            options: [
              '2 phosphorus, 4 oxygen, to the third power negative',
              '1 phosphorus, 4 oxygen, to the third power negative',
              '2 phosphorus, 4 oxygen, to the second power negative',
            ],
            correctAnswer: '1 phosphorus, 4 oxygen, to the third power negative',
          },
          {
            questionText: 'What is the difference between sulfate and sulfite?',
            options: [
              'Sulfite has one less sulfur than sulfate',
              'Sulfate has a positive charge while sulfite has a negative charge',
              'Sulfate has one more oxygen than sulfite',
            ],
            correctAnswer: ' Sulfate has one more oxygen than sulfite.',
          },
      ],
      Biology: [
        {
            questionText: 'What do we call the most basic structure of living things?',
            options: [
                'DNA',
                'Skin ',
                'Cell ',
            ],
            correctAnswer: 'Cell',
        },
        {    questionText: 'Where is DNA found inside a cell?',
            options: [
                'Cell membrane ',
                'Cytoplasm ',
                'Nucleus',
            ],
            correctAnswer: 'Nucleus',
        },
        {   questionText: 'Photosynthesis is a chemical reaction that is important because ',
            options: [
                'It uses CO2 to produce sugar for producers and O2 as waste. ',
                'It helps destroy invasive species. ',
                'It uses O2 to produce sugar and CO2 as waste. ',
            ],
            correctAnswer: 'It uses CO2 to produce sugar for producers and O2 as waste.',
        },
        {   questionText: 'We use ______ in ecology to help model how energy is transferred from one organism to another',
            options: [
                'Enerygy ',
                'Water',
                'Food chain ',
            ],
            correctAnswer: '',
        },
        {    questionText: 'What does DNA stand for?',
            options: [
                'Divine Nature Alliance',
                'Deoxyribonucleic Acid ',
                'Dehydrogenated Acid ',
            ],
            correctAnswer: 'Deoxyribonucleic Acid',
        }
      ],
    };
  
    return questions[topic] || [];
  };
  
  export default getQuestionsForTopic;
