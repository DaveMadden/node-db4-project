
exports.seed = function(knex) { //maybe needs PROMISE?
  // Deletes ALL existing entries
  return knex('steps_ingredients').insert([
    {ingredient_id: "2", step_id: "1", quantity: "1 cup"},
    {ingredient_id: "1", step_id: "2", quantity: "1 tbsp"},
    {ingredient_id: "3", step_id: "3", quantity: "1 tsp"},
  ]);
};
