class GamesController < ApplicationController
  def create

    # puts params
    # puts params[:name]
    player = params[:name]
    # puts params[:url]

    ActionCable.server.broadcast 'game',
      name: player
    # head :ok
    redirect_to master_game_path
  end
  def master
  end
  def show
  end
end
