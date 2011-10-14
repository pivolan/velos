class IndexController < ApplicationController
	layout 'konigi'
	skip_before_filter :can_view, :only => [:null_page, :enter, :exit, :logout]
	skip_before_filter :login, :only => [:null_page, :exit, :logout]

	def index
		render :layout => false
	end
end