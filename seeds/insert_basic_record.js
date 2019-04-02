
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
    knex('living_area').insert([
        { name: 'Central and Western', region: 3 },
        { name: 'Eastern', region: 3 },
        { name: 'Southern', region: 3 },
        { name: 'Wan Chai', region: 3 },
        { name: 'Sham Shui Po', region: 2 },
        { name: 'Kowloon City', region: 2 },
        { name: 'Kwun Tong', region: 2 },
        { name: 'Wong Tai Sin', region: 2 },
        { name: 'Yau Tsim Mong', region: 2 },
        { name: 'Islands', region: 1 },
        { name: 'Kwai Tsing', region: 1 },
        { name: 'North', region: 1 },
        { name: 'Sai Kung', region: 1 },
        { name: 'Sha Tin', region: 1 },
        { name: 'Tai Po', region: 1 },
        { name: 'Tsuen Wan', region: 1 },
        { name: 'Tuen Mun', region: 1 },
        { name: 'Yuen Long', region: 1 }
    ])
  ])
};
