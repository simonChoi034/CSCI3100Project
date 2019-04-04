
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('user_type').insert([
        { name: 'tutor' },
        { name: 'parent' }
    ]),
    knex('education_level').insert([
        { name: 'HKCEE' },
        { name: 'HKALE' },
        { name: 'Hong Kong Diploma of Secondary Education' },
        { name: 'Diplomas / Associates / Professional diploma / Higher diploma / Advanced diploma' },
        { name: 'Bachelors' },
        { name: 'Post-graduate certificates or diplomas / Masters' },
        { name: 'Phd' }
    ]),
    knex('region').insert([
        { name: 'New Territories' },
        { name: 'Kowloon' },
        { name: 'Hong Kong Island' }
    ])
  ])
};
