FactoryBot.define do
  factory :url do
    long_url { Faker::Url.long_url }
  end
end
