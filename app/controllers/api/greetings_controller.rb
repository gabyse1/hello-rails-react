class Api::GreetingsController < ApplicationController
  def index
    count = Greeting.count
    greeting_offset = rand(count)
    render json: { greetings: [Greeting.offset(greeting_offset).first] }.to_json
  end
end