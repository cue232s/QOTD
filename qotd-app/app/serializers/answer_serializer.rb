class AnswerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question_id, :answer

  attribute :respondent do |answer|
    answer&.contact&.phone_number
  end
end
