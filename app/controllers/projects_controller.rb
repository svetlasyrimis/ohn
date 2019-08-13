class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy add_collaborator]
  before_action :authorize_request 
  # before_action :authorize_request, except: %i[index show]

  def index
    @projects = Project.all
    render json: @projects, include: {collaborators: {include: [:user]} }
  end

  
  def show
    render json: @project
  end

  # def create 
  #   @project = Project.new(project_params)
  #   @project.save
  # end 
  def create
    @project = Project.new(project_params)    
    if @project.save
      @collaborator = Collaborator.new(user: @current_user, project: @project)
      @collaborator.save
      render json: @project, include: {collaborators: {include: [:user]} }, status: :created
    end 
  end
  
  def add_collaborator 
    @collaborator = Collaborator.new(user: @current_user, project: @project, isOwner:false)
    @collaborator.save
    render json: @project, include: :collaborators, status: :created
  end

  
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
    params.require(:project).permit(:name,:description)
    # accepts_nested_attributes_for :users
  end

  # def collaborator_params
  #   params.require(:collaborator).permit(:user_id,:project_id,:isOwner)
  # end
end
