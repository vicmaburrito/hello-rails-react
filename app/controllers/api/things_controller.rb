class Api::ThingsController < ApplicationController
  def index
    render json: { things: [
      Thing.all.sample
    ] }.to_json
  end
end
