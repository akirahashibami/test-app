class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(name: params[:name])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(name: params[:name])
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      head :no_content, status: :ok
      # headメソッド...本文(body)のないレスポンスをブラウザに送信できる
      # :no_content...レンダリングしようとすると、レスポンスから削除される
      # status: :ok...リクエストに成功
    else
      render json: @user.errors, stateus: :unprocessable_entity
      # stateus: :unprocessable_entity...バリデーションエラー
    end
  end
end
