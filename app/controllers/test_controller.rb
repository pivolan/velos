class TestController < ApplicationController
	def index
		@user = User_.find(5)
		#for track in Track.all
		#	Track.delete(track._id)
		#end
		#track = Track.create(
		#				:_id => 1,
		#				:name => 'new',
		#        :coords => [[70, 8], [10, 150], [70, 45]]
		#)
		#@user.tracks.push(track)
		#@photos = Photo.all
		#Photo.create(:title => 'sdfsd')
		#@user.photos.push(@photos)
		#@user.save
	end
end