class ApplicationController < ActionController::Base
	protect_from_forgery

	def initialize
		super
		@title = ''
	end
end
