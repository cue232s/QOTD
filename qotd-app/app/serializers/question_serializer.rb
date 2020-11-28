class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :qotd, :publish_date
end
