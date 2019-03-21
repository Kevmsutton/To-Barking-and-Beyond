class UsersController < ApplicationController

def index
    @users = User.all
    render json: @users
end

def show
    @user = User.find(params[:id])
    render json: @user
end

def create
    @user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
    if @user.save
        render json: @user
    else
        render json: {error: "Unable to create user."}
    end
end

def destroy
    @user = User.find_by(id: params[:id])
    if @user
    @user.destroy
    render json: {message: "User account deleted."}
    else 
        render json: {error: "User could not be found"}
    end
end



end