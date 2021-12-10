
exports.seed = function(knex) { //maybe needs PROMISE?
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {ingredient_name: "tea"},
    {ingredient_name: "water"},
    {ingredient_name: "honey"},
  ]);
};
