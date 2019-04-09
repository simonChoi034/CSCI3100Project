
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
          { name: 'Primary 1' },
          { name: 'Primary 2' },
          { name: 'Primary 3' },
          { name: 'Primary 4' },
          { name: 'Primary 5' },
          { name: 'Primary 6' },
          { name: 'Secondary 1' },
          { name: 'Secondary 2' },
          { name: 'Secondary 3' },
          { name: 'Secondary 4' },
          { name: 'Secondary 5' },
          { name: 'Secondary 6' },
      ])
  ])
};
