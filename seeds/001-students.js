
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Nguyen', cohort_id: 2},
        {name: 'Thu', cohort_id: 1},
        {name: 'William', cohort_id: 3}
      ]);
    });
};
