
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
    ]),
    knex('user_account').insert([
        { id: 1, username: '1155039896', email: '1155093896@link.cuhk.edu.hk', password: '1155093896', user_type: 1}
    ])
  ])
};
