class IndexController < ApplicationController

	def index
		@user = User.find(1)
		@photos = Photo.all
	end

	def vasya

	end
end