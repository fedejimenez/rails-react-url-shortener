# frozen_string_literal: true

class UrlSerializer < ActiveModel::Serializer
  attributes :id, :long_url, :short_url, :slug
end
