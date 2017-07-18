class IndexController < ApplicationController
  def index
    @token = request_forgery_protection_token
  end
  def url
  end
  def game
  end
end
