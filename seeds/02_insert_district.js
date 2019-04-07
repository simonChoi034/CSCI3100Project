
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('district').insert([
        { name: 'Central and Western', region_id: 3 },
        { name: 'Eastern', region_id: 3 },
        { name: 'Southern', region_id: 3 },
        { name: 'Wan Chai', region_id: 3 },
        { name: 'Sham Shui Po', region_id: 2 },
        { name: 'Kowloon City', region_id: 2 },
        { name: 'Kwun Tong', region_id: 2 },
        { name: 'Wong Tai Sin', region_id: 2 },
        { name: 'Yau Tsim Mong', region_id: 2 },
        { name: 'Islands', region_id: 1 },
        { name: 'Kwai Tsing', region_id: 1 },
        { name: 'North', region_id: 1 },
        { name: 'Sai Kung', region_id: 1 },
        { name: 'Sha Tin', region_id: 1 },
        { name: 'Tai Po', region_id: 1 },
        { name: 'Tsuen Wan', region_id: 1 },
        { name: 'Tuen Mun', region_id: 1 },
        { name: 'Yuen Long', region_id: 1 }
    ])
};
