class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy]
  before_action :authorize_request
  
  def index
    @project = Project.order(:id)
    render json: @project
  end

  
  def show
    render json: @project
  end

  def create 
    @project = Project.new(project_params)
    @project.save
  end 
  # def create
  #   @project = Project.new(project_params)
  #   # @project.users.add(User.find(current_user.id))
  #   # user = User.find(params[:user_id]) user.events << Event.new(params[:event])
  #   if @project.save
  #     render json: @project, status: :created

  #   else
  #     render json: @project.errors, status: :unprocessable_entity
  #   end
  # end

  
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @project.destroy
  end
  
  private
  
  def set_project
    @project = Project.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no project matches that ID' }, status: 404
  end

  # Only allow a trusted parameter "white list" through.
  def project_params
    params.require(:project).permit(:name,:description,:user_id)
    # accepts_nested_attributes_for :users
  end

  # def collaborator_params
  #   params.require(:collaborator).permit(:user_id,:project_id,:isOwner)
  # end
end
