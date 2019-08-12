class CollaboratorsController < ApplicationController
  # before_action :set_collaborator, only: %i[show update destroy]
  before_action :authorize_request
  
  def index
    @collaborator = Collaborator.order(:id)
    render json: @collaborator
  end

  
  def show
    render json: @collaborator
  end

  # def create
  #   @collaborator = Collaborator.new(collaborator_params)
  #   if @event.save
  #     @event.users << current_user
  #     redirect_to event_path(@event)
  #   else
  #     render action: :new
  #   end
  # end
  def create
    @collaborator = Collaborator.new(collaborator_params)
    
    if @collaborator.save
      render json: @collaborator, status: :created
    else
      render json: @collaborator.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @collaborator.update(collaborator_params)
      render json: @collaborator
    else
      render json: @collaborator.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @collaborator.destroy
  end
  
  private
  
  # def set_collaborator
  #   @collaborator = collaborator.find(params[:id])
  # rescue ActiveRecord::RecordNotFound
  #   render json: { message: 'no collaborator matches that ID' }, status: 404
  # end

  

  def collaborator_params
    params.require(:collaborator).permit(:user_id,:collaborator_id,:isOwner)
  end
end
