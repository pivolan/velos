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
		if session[:id].present?
			user = User_.find(session[:id])
			if user != nil
			else
				session[:id] = nil
			end
		end
		if !session[:id].present?
			if cookies[:uid].present?
				users = User_.where(:cookie_id => cookies[:uid]).all
				if users.count == 1
					user = users[0]
					session[:id] = users[0]._id
					session[:from] = 'cookie'
					cookies[:uid] = {
									:value=>cookies[:uid],
									:expires => 1.year.from_now
					}
					cookies[:access] = {
									:value=>true,
									:expires => 1.year.from_now
					}
				else
					cookies.delete(:uid)
					session[:id] = nil
				end
			end
			# если никакой информации об авторизации у пользователя нет, создадим нового пользователя в базе.
			if !cookies[:uid].present?
				new_id = User_.generate_cookie_id
				# создадим пользователя
				user = User_.create(
								:_id => Incrementor[:user].inc,
								:cookie_id => new_id
				)
				@id = session[:id] = user._id
				cookies[:uid] = {
								:value=>new_id,
								:expires => 1.year.from_now
				}
			end
		end
		@user = user
	end

	def after_filter
		
	end
end
