# frozen_string_literal: true

class Url < ApplicationRecord
  validates :long_url, presence: true
end
