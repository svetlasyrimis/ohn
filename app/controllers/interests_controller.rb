class InterestsController < ApplicationController
  before_action :set_interest, only: %i[show update destroy]
  before_action :authorize_request
  
  def index
    @interests = Interest.all
    render json: @interests
  end

  
  def show
    render json: @interest
  end

  
  def create
    @interest = Interest.new(interest_params)
    if @interest.save
      render json: @interest ,:only => [ :id, :name, :user_id ], status: :created
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @interest.destroy
  end

  private
  
  def set_interest
    @interest = Interest.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no skill matches that ID' }, status: 404
  end
  def interest_params
    params.require(:interest).permit(:name, :user_id)
  end

end