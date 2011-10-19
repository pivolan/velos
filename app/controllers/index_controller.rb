class IndexController < ApplicationController

	def index
		@user = User.find(1)

		@photos = Photo.all
		#Photo.create(:title => 'sdfsd')
		@user.photos.push(@photos)
	end
	def vasya

	end
end 