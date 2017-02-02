require 'sinatra/base'

class ThermServer < Sinatra::Base
  $temp = 100
  get '/' do
     p $temp
     "Hello thermServer! #{$temp}"
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    p $temp
    $temp
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    $temp = params[:temp].to_i
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
