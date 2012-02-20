class User_
  include MongoMapper::Document

	key :firstname, String
	key :lastname, String
	key :cookie_id, String
  key :short_url, String
  many :tracks

  def self.generate_short_url
	  dict = (0..9).to_a + ('a'..'z').to_a
	  new_short_url = Array.new(4) { (dict[rand(35)]) }.join until User_.where(:short_url => new_short_url).count == 0
	  @short_url = new_short_url
	  return new_short_url
  end

  def self.generate_cookie_id
	  dict = (0..9).to_a + ('a'..'z').to_a
	  new_short_url = Array.new(24) { (dict[rand(35)]) }.join until User_.where(:cookie_id => new_short_url).count == 0
	  return new_short_url
  end
end