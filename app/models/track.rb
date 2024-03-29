class Track
  include Mongoid::Document
  field :title, :type => String
  belongs_to :user
  has_many :rides
  has_many :photos
  has_many :videos
  field :coords, :type=> Hash
end
