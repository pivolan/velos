class IndexController < ApplicationController

	def index
		@user = User.find(1)
	end
end