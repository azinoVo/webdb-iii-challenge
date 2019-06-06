// changes to database schema

exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(tbl) {
    tbl.increments();
    tbl.string('name', 125).notNullable();
  })
};


// how to undo changes from up

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};

// npx knex migrate:make  name_of_table
// npx knex migrate:latest for making tables "up"
// npx knex migrate:rollback for reversing tables "down"

// then to add test data, use npx knex seed:make 001-cohorts