require 'rails_helper'

RSpec.describe Url, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:long_url) }
  end
end
