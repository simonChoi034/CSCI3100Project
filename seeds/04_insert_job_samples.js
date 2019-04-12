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
          { username: "HelloWorld", email: "Chan2016@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 2},
          { username: "Tutor1", email: "tut1@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor2", email: "tut2@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor3", email: "tut3@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor4", email: "tut4@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor5", email: "tut5@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor6", email: "tut6@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor7", email: "tut7@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor8", email: "tut8@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor9", email: "tut9@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor10", email: "tut10@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor11", email: "tut11@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor12", email: "tut12@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor13", email: "tut13@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor14", email: "tut14@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor15", email: "tut15@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1},
          { username: "Tutor16", email: "tut16@gmail.com", password: "$2b$10$1mGILaFWsOJjP11x8bmIjuUoBfPQhIPscCU6VnemYmsLnz8e1PLfC", user_type_id: 1}
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
      knex('tutor_profile').insert([
          { user_id: 17, email: "tut1@gmail.com", phone: "90000017", full_name_ch: "陳一", full_name_en: "ChanOne", nick_name: "Chan1", sex: "F", birth: "1998-1-1", education_level_id: "1", description: "I am very nice!"},
          { user_id: 18, email: "tut2@gmail.com", phone: "90000018", full_name_ch: "陳二", full_name_en: "ChanTwo", nick_name: "Chan2", sex: "M", birth: "1998-2-2", education_level_id: "2", description: "I am very good!"},
          { user_id: 19, email: "tut3@gmail.com", phone: "90000019", full_name_ch: "陳三", full_name_en: "ChanThree", nick_name: "Chan3", sex: "F", birth: "1998-3-3", education_level_id: "3", description: "I am very great!"},
          { user_id: 20, email: "tut4@gmail.com", phone: "90000020", full_name_ch: "陳四", full_name_en: "ChanFour", nick_name: "Chan4", sex: "M", birth: "1998-4-4", education_level_id: "4", description: "I am excellent!"},
          { user_id: 21, email: "tut5@gmail.com", phone: "90000021", full_name_ch: "陳五", full_name_en: "ChanFive", nick_name: "Chan5", sex: "F", birth: "1998-5-5", education_level_id: "5", description: "I am the best!"},
          { user_id: 22, email: "tut6@gmail.com", phone: "90000022", full_name_ch: "陳六", full_name_en: "ChanSix", nick_name: "Chan6", sex: "M", birth: "1998-6-6", education_level_id: "6", description: "I am wonderful!"},
          { user_id: 23, email: "tut7@gmail.com", phone: "90000023", full_name_ch: "陳七", full_name_en: "ChanSeven", nick_name: "Chan7", sex: "F", birth: "1998-7-7", education_level_id: "7", description: "I am brilliant!"},
          { user_id: 24, email: "tut8@gmail.com", phone: "90000024", full_name_ch: "陳八", full_name_en: "ChanEight", nick_name: "Chan8", sex: "M", birth: "1998-8-8", education_level_id: "1", description: "I am the best of the best!"},
          { user_id: 25, email: "tut9@gmail.com", phone: "90000025", full_name_ch: "陳九", full_name_en: "ChanNine", nick_name: "Chan9", sex: "F", birth: "1998-9-9", education_level_id: "2", description: "I am nice!"},
          { user_id: 26, email: "tut10@gmail.com", phone: "90000026", full_name_ch: "陳十", full_name_en: "ChanTen", nick_name: "Chan10", sex: "M", birth: "1998-10-10", education_level_id: "3", description: "I am good!"},
          { user_id: 27, email: "tut11@gmail.com", phone: "90000027", full_name_ch: "陳十一", full_name_en: "ChanEleven", nick_name: "Chan11", sex: "F", birth: "1998-11-11", education_level_id: "4", description: "I am genius!"},
          { user_id: 28, email: "tut12@gmail.com", phone: "90000028", full_name_ch: "陳十二", full_name_en: "ChanTwelve", nick_name: "Chan12", sex: "M", birth: "1998-12-12", education_level_id: "5", description: "I am sophisticated!"},
          { user_id: 29, email: "tut13@gmail.com", phone: "90000029", full_name_ch: "陳十三", full_name_en: "ChanThirteen", nick_name: "Chan13", sex: "F", birth: "1998-1-13", education_level_id: "6", description: "I am a nice guy!"},
          { user_id: 30, email: "tut14@gmail.com", phone: "90000030", full_name_ch: "陳十四", full_name_en: "ChanFourteen", nick_name: "Chan14", sex: "M", birth: "1998-2-14", education_level_id: "7", description: "I am experienced!"},
          { user_id: 31, email: "tut15@gmail.com", phone: "90000031", full_name_ch: "陳十五", full_name_en: "ChanFifteen", nick_name: "Chan15", sex: "F", birth: "1998-3-15", education_level_id: "1", description: "I am a good person!"},
          { user_id: 32, email: "tut16@gmail.com", phone: "90000032", full_name_ch: "陳十六", full_name_en: "ChanSixteen", nick_name: "Chan16", sex: "M", birth: "1998-4-16", education_level_id: "2", description: "I am a kind person!"}
      ])
          .returning("*")
          .then(function(result) {
              return knex('job').insert([
                  { client_id: result[0], open: true, district_id: 1, location: 'Pacific Coffee', student_level_id: 1, tuition_fee: "$255/hr", num_of_student: 1, tutor_academic_id: 1, tutor_sex: 'F', times_per_week: '1 hrs', duration: '1 year', lesson_time: 'Monday 10:00am-11:00am', hotline: '9000 0001', remark: 'the tutor should be nice'},
                  { client_id: result[1], open: true, district_id: 2, location: 'KFC', student_level_id: 2, tuition_fee: "$230/hr", num_of_student: 2, tutor_academic_id: 2, tutor_sex: 'M', times_per_week: '1.5 hrs', duration: '2 years', lesson_time: 'Tuesday 11:00am-12:30pm', hotline: '9000 0002', remark: 'want a patient tutor'},
                  { client_id: result[2], open: true, district_id: 3, location: 'at home', student_level_id: 3, tuition_fee: "$299/hr", num_of_student: 3, tutor_academic_id: 3, tutor_sex: 'O', times_per_week: '2 hrs', duration: '3 years', lesson_time: 'Wednesday 9:00am-11:00am', hotline: '9000 0003', remark: 'need to be patient'},
                  { client_id: result[3], open: true, district_id: 4, location: 'Library', student_level_id: 4, tuition_fee: "$211/hr", num_of_student: 4, tutor_academic_id: 4, tutor_sex: 'F', times_per_week: '2.5 hrs', duration: '4 years', lesson_time: 'Thursday 9:00am-11:30am', hotline: '9000 0004', remark: 'the tutor should be nice'},
                  { client_id: result[4], open: true, district_id: 5, location: 'Study Room', student_level_id: 5, tuition_fee: "$260/hr", num_of_student: 5, tutor_academic_id: 5, tutor_sex: 'M', times_per_week: '3 hrs', duration: '5 years', lesson_time: 'Friday 10:00am-1:00pm', hotline: '9000 0005', remark: 'the tutor should be kind'},
                  { client_id: result[5], open: true, district_id: 6, location: 'at home', student_level_id: 6, tuition_fee: "$300/hr", num_of_student: 1, tutor_academic_id: 6, tutor_sex: 'O', times_per_week: '3.5 hrs', duration: '6 years', lesson_time: 'Saturday 10:00am-1:30pm', hotline: '9000 0006', remark: 'the tutor should be a nice person'},
                  { client_id: result[6], open: true, district_id: 7, location: 'McCafe', student_level_id: 7, tuition_fee: "$400/hr", num_of_student: 2, tutor_academic_id: 7, tutor_sex: 'F', times_per_week: '4 hrs', duration: '1.5 years', lesson_time: 'Sunday 10:00am-2:00pm', hotline: '9000 0007', remark: 'the tutor should be a kind person'},
                  { client_id: result[7], open: true, district_id: 8, location: 'SUBWAY', student_level_id: 8, tuition_fee: "$200/hr", num_of_student: 3, tutor_academic_id: 1, tutor_sex: 'M', times_per_week: '4.5 hrs', duration: '2.5 years', lesson_time: 'Sunday 10:00am-2:30pm', hotline: '9000 0008', remark: 'the tutor should be patient'},
                  { client_id: result[8], open: true, district_id: 9, location: 'McCafe', student_level_id: 9, tuition_fee: "$265/hr", num_of_student: 4, tutor_academic_id: 2, tutor_sex: 'O', times_per_week: '5 hrs', duration: '3.5 years', lesson_time: 'Saturday, Sunday 10:00am-12:30pm', hotline: '9000 0009', remark: 'the tutor should be a patient guy'},
                  { client_id: result[9], open: true, district_id: 10, location: 'SUBWAY', student_level_id: 10, tuition_fee: "$275/hr", num_of_student: 5, tutor_academic_id: 3, tutor_sex: 'F', times_per_week: '5.5 hrs', duration: '4.5 years', lesson_time: 'Monday, Tuesday 10:00am-12:45pm', hotline: '9000 0010', remark: 'the tutor should be nice'},
                  { client_id: result[10], open: true, district_id: 11, location: 'Pacific Coffee', student_level_id: 11, tuition_fee: "$285/hr", num_of_student: 1, tutor_academic_id: 4, tutor_sex: 'M', times_per_week: '6 hrs', duration: '5.5 years', lesson_time: 'Tuesday, Wednesday 10:00am-1:00pm', hotline: '9000 0011', remark: 'the tutor should be a nice guy'},
                  { client_id: result[11], open: true, district_id: 12, location: 'KFC', student_level_id: 12, tuition_fee: "$295/hr", num_of_student: 2, tutor_academic_id: 5, tutor_sex: 'O', times_per_week: '6.5 hrs', duration: 'until DSE', lesson_time: 'Wednesday, Thursday 10:00am-1:15pm', hotline: '9000 0012', remark: 'the tutor should be kind'},
                  { client_id: result[12], open: true, district_id: 13, location: 'Study Room', student_level_id: 1, tuition_fee: "$215/hr", num_of_student: 3, tutor_academic_id: 6, tutor_sex: 'F', times_per_week: '7 hrs', duration: '1 year', lesson_time: 'Thursday, Friday 10:00am-1:30pm', hotline: '9000 0013', remark: 'the tutor should be patient'},
                  { client_id: result[13], open: true, district_id: 14, location: 'Library', student_level_id: 2, tuition_fee: "$225/hr", num_of_student: 4, tutor_academic_id: 7, tutor_sex: 'M', times_per_week: '7.5 hrs', duration: 'until DSE', lesson_time: 'Friday, Saturday 10:00am-1:45pm', hotline: '9000 0014', remark: 'the tutor should be kind'},
                  { client_id: result[14], open: true, district_id: 15, location: 'McDonald\'s', student_level_id: 3, tuition_fee: "$235/hr", num_of_student: 5, tutor_academic_id: 1, tutor_sex: 'O', times_per_week: '8 hrs', duration: '1 year', lesson_time: 'Monday, Wednesday, Friday, Saturday 10:30am-12:30pm', hotline: '9000 0015', remark: 'want a nice tutor'},
                  { client_id: result[15], open: true, district_id: 16, location: 'Starbucks', student_level_id: 4, tuition_fee: "$245/hr", num_of_student: 1, tutor_academic_id: 2, tutor_sex: 'F', times_per_week: '6 hrs', duration: 'until graduation', lesson_time: 'Tuesday, Thursday, Saturday 9:00am-11:00am', hotline: '9000 0016', remark: 'want a kind tutor'},
                  { client_id: result[0], open: true, district_id: 17, location: 'McDonald\'s', student_level_id: 5, tuition_fee: "$199/hr", num_of_student: 2, tutor_academic_id: 3, tutor_sex: 'M', times_per_week: '6 hrs', duration: '1 year', lesson_time: 'Wednesday, Friday, Sunday 1:00pm-3:00pm', hotline: '9000 0017', remark: 'want a nice tutor'},
                  { client_id: result[0], open: true, district_id: 18, location: 'Starbucks', student_level_id: 6, tuition_fee: "$399/hr", num_of_student: 3, tutor_academic_id: 4, tutor_sex: 'O', times_per_week: '6 hrs', duration: 'until graduation', lesson_time: 'Friday, Saturday, Sunday 3:00pm-5:00pm', hotline: '9000 0018', remark: 'want a patient tutor'}
              ])
                  .returning("*")
                  .then(function(result) {
                      return knex('job_subject').insert([
                          {job_id: result[0], subject_id: 1},
                          {job_id: result[1], subject_id: 2},
                          {job_id: result[2], subject_id: 3},
                          {job_id: result[3], subject_id: 4},
                          {job_id: result[4], subject_id: 5},
                          {job_id: result[5], subject_id: 6},
                          {job_id: result[6], subject_id: 7},
                          {job_id: result[7], subject_id: 8},
                          {job_id: result[8], subject_id: 9},
                          {job_id: result[9], subject_id: 10},
                          {job_id: result[10], subject_id: 11},
                          {job_id: result[11], subject_id: 12},
                          {job_id: result[12], subject_id: 13},
                          {job_id: result[13], subject_id: 14},
                          {job_id: result[14], subject_id: 15},
                          {job_id: result[15], subject_id: 16},
                          {job_id: result[16], subject_id: 17},
                          {job_id: result[17], subject_id: 18}
                      ])
                  })
          })
  ])
};