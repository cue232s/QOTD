class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.belongs_to :question, null: false, foreign_key: true
      t.belongs_to :contact, null: false, foreign_key: true
      t.string :answer

      t.timestamps
    end
  end
end
