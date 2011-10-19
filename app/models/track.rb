class Track
  include MongoMapper::Document
  #plugin GeoSpatial

	key :name, String
  belongs_to :user
	#geo_key :coords, Array
end