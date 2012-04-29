class Ride
  include Mongoid::Document
  field :title, :type => String
  belongs_to :user
  has_many :photos
  has_many :tracks
  field :description, :type => String
  field :rating, :type => Integer
end
