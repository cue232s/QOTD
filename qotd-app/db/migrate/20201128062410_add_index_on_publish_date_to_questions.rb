class AddIndexOnPublishDateToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_index :questions, :publish_date, unique: true
  end
end
