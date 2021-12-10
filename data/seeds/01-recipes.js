
exports.seed = function(knex) { //maybe needs PROMISE?
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_name: 'tea'}
  ]);
};
