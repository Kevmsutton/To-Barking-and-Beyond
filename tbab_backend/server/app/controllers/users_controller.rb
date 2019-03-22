class UsersController < ApplicationController

def index
    @users = User.all
    render json: @users
end

def signin
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
        render json: {username: @user.username, token: issue_token({id: @user.id})}
    else 
        render json: {error: "Username/password combination invalid."}
    end
end

def validate
    @user = get_current_user
    if @user
        render json: {username: @user.username, token: issue_token({id: @user.id})}
    else 
        render json: {error: "Username/password combination invalid."}
    end
end

def get_journeys
    @user = get_current_user
    if @user
        render json: @User.journeys
    else
        render josn: {error: "Not a valid user."}
    end
end

def show
    @user = User.find(params[:id])
    render json: @user
end

def create
    @user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], )
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