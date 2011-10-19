class User
  include MongoMapper::Document

	key :name, String
	key :lastname, String
	key :karma, Integer
	many :tracks
	many :photos
end