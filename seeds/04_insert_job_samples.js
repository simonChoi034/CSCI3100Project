const bcrypt = require("bcrypt");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
      knex('user_account').insert([
          { username: "ChanTaiMan", email: "Chan2001@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanSiuMan", email: "Chan2002@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanChongMan", email: "Chan2003@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanManMan", email: "Chan2004@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiTai", email: "Chan2005@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanMan", email: "Chan2006@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTai", email: "Chan2007@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanChanMan", email: "Chan2008@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiSun", email: "Chan2009@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiGo", email: "Chan2010@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiLou", email: "Chan2011@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "GouTaiLo", email: "Chan2012@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiDai", email: "Chan2013@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "LoTaiNgan", email: "Chan2014@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "ChanTaiGou", email: "Chan2015@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "HelloWorld", email: "Chan2016@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2}
      ]),
      knex('parent_profile').insert([
          { user_id: 1, name: "Chan Tai Man", phone: "90000001", email: "Chan2001@gmail.com", living_district_id: 1, address: "here"},
          { user_id: 2, name: "Chan Siu Man", phone: "90000002", email: "Chan2002@gmail.com", living_district_id: 2, address: "here"},
          { user_id: 3, name: "Chan Chong Man", phone: "90000003", email: "Chan2003@gmail.com", living_district_id: 3, address: "here"},
          { user_id: 4, name: "Chan Man Man", phone: "90000004", email: "Chan2004@gmail.com", living_district_id: 4, address: "here"},
          { user_id: 5, name: "Chan Tai Tai", phone: "90000005", email: "Chan2005@gmail.com", living_district_id: 5, address: "here"},
          { user_id: 6, name: "Chan Man", phone: "90000006", email: "Chan2006@gmail.com", living_district_id: 6, address: "here"},
          { user_id: 7, name: "Chan Tai", phone: "90000007", email: "Chan2007@gmail.com", living_district_id: 7, address: "here"},
          { user_id: 8, name: "Chan Chan Man", phone: "90000008", email: "Chan2008@gmail.com", living_district_id: 8, address: "here"},
          { user_id: 9, name: "Chan Tai Sun", phone: "90000009", email: "Chan2009@gmail.com", living_district_id: 9, address: "here"},
          { user_id: 10, name: "Chan Tai Go", phone: "90000010", email: "Chan2010@gmail.com", living_district_id: 10, address: "here"},
          { user_id: 11, name: "Chan Tai Lou", phone: "90000011", email: "Chan2011@gmail.com", living_district_id: 11, address: "here"},
          { user_id: 12, name: "Gou Tai Lo", phone: "90000012", email: "Chan2012@gmail.com", living_district_id: 12, address: "here"},
          { user_id: 13, name: "Chan Tai Dai", phone: "90000013", email: "Chan2013@gmail.com", living_district_id: 13, address: "here"},
          { user_id: 14, name: "Lo Tai Ngan", phone: "90000014", email: "Chan2014@gmail.com", living_district_id: 14, address: "here"},
          { user_id: 15, name: "Chan Tai Gou", phone: "90000015", email: "Chan2015@gmail.com", living_district_id: 15, address: "here"},
          { user_id: 16, name: "Hello World", phone: "90000016", email: "Chan2016@gmail.com", living_district_id: 16, address: "here"}
      ]),
      knex('job').insert([
          { open: true, district_id: 1, location: 'this street', student_level_id: 1, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 7, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 2, location: 'that street', student_level_id: 2, tuition_fee: "230", num_of_student: 2, tutor_academic_id: 3, tutor_sex: 'M', times_per_week: '10 hrs', duration: '3 years', time: 'Monday Tuesday 10:00am-11:30am', remark: 'want patient tutor'},
          { open: true, district_id: 3, location: 'the street next to that street', student_level_id: 2, tuition_fee: "299", num_of_student: 4, tutor_academic_id: 4, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'need to be patient'},
          { open: true, district_id: 4, location: 'the street between this street and that street', student_level_id: 1, tuition_fee: "211", num_of_student: 1, tutor_academic_id: 7, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 5, location: 'that street', student_level_id: 4, tuition_fee: "260", num_of_student: 1, tutor_academic_id: 3, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 6, location: 'this street', student_level_id: 1, tuition_fee: "300", num_of_student: 1, tutor_academic_id: 5, tutor_sex: 'F', times_per_week: '6 hrs', duration: '6 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 7, location: 'right over here', student_level_id: 6, tuition_fee: "400", num_of_student: 1, tutor_academic_id: 5, tutor_sex: 'M', times_per_week: '10 hrs', duration: '6 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 8, location: 'this street', student_level_id: 6, tuition_fee: "200", num_of_student: 1, tutor_academic_id: 4, tutor_sex: 'F', times_per_week: '12 hrs', duration: '3 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 9, location: 'there', student_level_id: 4, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 6, tutor_sex: 'F', times_per_week: '10 hrs', duration: '2 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 10, location: '1000 room, this buiding', student_level_id: 6, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 1, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 11, location: 'that building', student_level_id: 5, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 4, tutor_sex: 'F', times_per_week: '10 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 12, location: 'this street', student_level_id: 10, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 3, tutor_sex: 'M', times_per_week: '20 hrs', duration: '3 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 13, location: 'over there', student_level_id: 9, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 2, tutor_sex: 'F', times_per_week: '10 hrs', duration: '4 years', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 14, location: 'this street', student_level_id: 10, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 6, tutor_sex: 'F', times_per_week: '5 hrs', duration: 'until DSE', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 15, location: 'Mcdonald', student_level_id: 11, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 4, tutor_sex: 'F', times_per_week: '1.5 hrs', duration: '1 year', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'},
          { open: true, district_id: 16, location: 'Starbucks', student_level_id: 12, tuition_fee: "255", num_of_student: 1, tutor_academic_id: 5, tutor_sex: 'M', times_per_week: '1 hrs', duration: 'until graduration', time: 'Wednesday 10:00am-11:30am', remark: 'the tutor should be nice'}
      ])
  ])
};