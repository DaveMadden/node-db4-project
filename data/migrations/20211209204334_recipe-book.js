
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable()
        table.datetime('created_at').defaultTo(knex.fn.now())
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number').unsigned().notNullable()
        table.text('step_instructions').notNullable()
        table.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes').onDelete('RESTRICT')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable().unique()
    })
    .createTable('steps_ingredients', table => {
        table.increments('step_ingredient_id')
        table.integer('ingredient_id').unsigned().notNullable().references('ingredient_id').inTable('ingredients').onDelete('RESTRICT')
        table.integer('step_id').unsigned().notNullable().references('step_id').inTable('steps').onDelete('RESTRICT')
        table.text('quantity').unsigned().notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
