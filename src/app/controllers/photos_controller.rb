require 'rest-client'
require 'json'
require 'activerecord-import'

class PhotosController < ApplicationController
  def index
  end  
  
  def fetch
    photos = Photo.order("created_at DESC").limit(20)
    render json: photos
  end

  def update
    Photo.update(params['id'], :title => params['title'])
    head :no_content, status: :ok
  end

  def query_placeholder
    response = RestClient.get 'https://jsonplaceholder.typicode.com/photos'
    if response.code == 200
      clear_data
      parsed_json = JSON.parse(response.body)
      Photo.import parsed_json
      puts "#{Photo.count} imported"
    end
    render :nothing => true, :status => 200
  end
  
  private
    def clear_data
      Photo.delete_all 
    end
end
