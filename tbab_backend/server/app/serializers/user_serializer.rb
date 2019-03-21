class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
  has_many :journeys

  class JourneySerializer < ActiveModel::Serializer
    attributes :id, :user_id, :journey_name, :location_1_lat, :location_1_long, :location_2_lat, :location_2_long
  end

end
