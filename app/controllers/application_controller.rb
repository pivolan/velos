class ApplicationController < ActionController::Base
	protect_from_forgery
	layout 'application'
	protect_from_forgery
	before_filter :login
	after_filter :after_filter

	def initialize
		super
		@title = ''
	end

	def login
		@user = User.find(4)
	end

	def after_filter
		
	end
end
