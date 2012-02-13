class IndexController < ApplicationController
	skip_before_filter :login, :only => [:track] #
	#skip_after_filter :login, :only => [:track]

	def index
		@user = User.create(:_id => 1, :name=>'sdf')
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
		@user.save
	end

  def map

  end

	def track
		# поиск в центре
		@tracks = Track.where(:coords.within => { "$center" => [[3,104], 5]}).all.to_json
		# создание трека со списком точек. [[x,y], [x,y]]
		track = Track.create(
						:_id => 1,
						:name => 'new',
		        :coords => [[70, 8], [10, 150], [70, 45]]
		)
		# хитрое преобразование json с вытаскиванием связанных объектов из базы
		json_user_data = @user.to_json(:include => :tracks)
		# достать все объекты этого типа из базы
		@tracks = Track.all.to_json
	end

	def json
		respond_to do |format|
			format.html
			format.json { render :json => @user }
		end
	end

	def result
	  tracks = {
	          :lat =>params[:lat],
	          :lon => params[:lon]
					  }
	  render :json => tracks
	end

end