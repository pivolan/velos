class IndexController < ApplicationController

  def index
    @user = User.create(:name => 'kolya', :_id=>5)
    track = Track.create(
				    :_id => 1,
				    :name => 'sdf'
    )
    @user.tracks.push(track)
    @photos = Photo.all
    #Photo.create(:title => 'sdfsd')
    @user.photos.push(@photos)
	  @user.save
  end

  def vasya 

  end
end