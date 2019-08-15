class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  before_action :authorize_request, except: :create

  # GET /users
  def index
    @users = User.all
    render json: @users, include: [:skills,:interests,:projects]
  end

  # GET /users/1
  def show
    render json: @user, include: [:skills,:interests,:projects]
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def verify
    @user = {
      id: @current_user[:id],
      username: @current_user[:username],
      email: @current_user[:email],
      skills: @current_user.skills,
      interests: @current_user.interests
    }

    render json: @user
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
