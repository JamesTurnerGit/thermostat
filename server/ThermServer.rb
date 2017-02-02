require 'sinatra/base'
require 'json'

class ThermServer < Sinatra::Base
  $temp = 20
  get '/' do
     p $temp
     "Hello thermServer! #{$temp}"
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    {temp: $temp}.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    $temp = params[:temp].to_i
    "pizza"
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
