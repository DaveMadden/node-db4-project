
exports.seed = function(knex) { //maybe needs PROMISE?
  // Deletes ALL existing entries
  return knex('steps').insert([
    {step_number: '1', step_instructions: 'boil water', recipe_id: '1'},
    {step_number: '2', step_instructions: 'put water in tea', recipe_id: '1'},
    {step_number: '3', step_instructions: 'put honey in cup', recipe_id: '1'},
    {step_number: '4', step_instructions: 'pour tea into cup', recipe_id: '1'},
    {step_number: '5', step_instructions: 'DRINK', recipe_id: '1'},
  ]);
};
