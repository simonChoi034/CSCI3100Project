
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
      knex('subject').insert([
          { name: 'General' },
          { name: 'Chinese' },
          { name: 'English' },
          { name: 'Mathematics' },
          { name: 'General education' },
          { name: 'M1' },
          { name: 'M2' },
          { name: 'Chinese history' },
          { name: 'History' },
          { name: 'Geography' },
          { name: 'Science' },
          { name: 'Physics' },
          { name: 'Chemistry' },
          { name: 'Biology' },
          { name: 'Business' },
          { name: 'Econ' },
          { name: 'BAFS' },
          { name: 'Statistics' }
      ]),
      knex('student_level').insert([
          { name: 'P1' },
          { name: 'P2' },
          { name: 'P3' },
          { name: 'P4' },
          { name: 'P5' },
          { name: 'P6' },
          { name: 'S1' },
          { name: 'S2' },
          { name: 'S3' },
          { name: 'S4' },
          { name: 'S5' },
          { name: 'S6' },
      ])
  ])
};
