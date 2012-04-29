class Photo
  include Mongoid::Document
  field :title, :type => String
  field :path, :type => String
  belongs_to :user
  belongs_to :ride
end
