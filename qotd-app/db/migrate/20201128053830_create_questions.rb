class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :qotd
      t.datetime :publish_date

      t.timestamps
    end
  end
end
