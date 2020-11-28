def reset_db_data
  ActiveRecord::Base.establish_connection
  ActiveRecord::Base.connection.tables.each do |table|
    next if table == "schema_migrations"

    # MySQL and PostgreSQL
    ActiveRecord::Base.connection.execute("TRUNCATE #{table} CASCADE")

    # SQLite
    # ActiveRecord::Base.connection.execute("DELETE FROM #{table}")
  end
end

reset_db_data

questions = Question.create([
  {
    publish_date: "2020-12-01",
    qotd: "What do you think we should do?",
  },
  {
    publish_date: "2020-12-02",
    qotd: "What is you favorite Holiday?",
  },
  {
    publish_date: "2020-12-03",
    qotd: "Where are the best lunch spots in St. Louis?",
  },
  {
    publish_date: "2020-12-04",
    qotd: "How many people do you think jog around Forest Park weekly?",
  },
  {
    publish_date: "2020-12-05",
    qotd: "How many women have been out to orbit?",
  },
  {
    publish_date: "2020-12-06",
    qotd: "What's your favorite thing about Downtown St. Louis?",
  },
])

10.times do
  Contact.create([
    {
      name: Faker::Name.name,
      phone_number: Faker::PhoneNumber.cell_phone,
      permission_requested: true,
      permission_granted: true,
    },
  ])
end

contact_ids = Contact.all.ids
question_ids = Question.all.ids
answers_ary = []
question_contact_permutation_group = contact_ids.product(question_ids)
question_contact_permutation_group.each do |pair|
  answers_ary.push({
    contact_id: pair[0],
    question_id: pair[1],
    answer: Faker::TvShows::FamilyGuy.quote,
  })
end
Answer.create(answers_ary)
