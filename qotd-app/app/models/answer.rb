class Answer < ApplicationRecord
  validates :question_id, presence: true
  validates :contact_id, presence: true
  
  
  belongs_to :question
  belongs_to :contact
end
