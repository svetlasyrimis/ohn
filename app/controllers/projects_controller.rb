class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy add_collaborator]
  before_action :authorize_request 
  # before_action :authorize_request, except: %i[index show]

  def index
    @projects = Project.all
    render json: @projects, include: [:tasks, {collaborators: {include: [:user]}}]
  end

  def search
    @projects = Project.where("name LIKE ?", "%#{params[:search]}%")
    p @projects
    @filteredProjects = @projects.select do |project|
      nil == project.collaborators.find do |colab|
        colab.isOwner == true && colab.user_id == @current_user.id
      end
    end
    render json: @filteredProjects, include: [:tasks, {collaborators: {include: [:user]}}]
  end
 
  def show
    render json: @project,include: [:tasks, {collaborators: {include: [:user]}}]
  end

  
  def create
    @project = Project.new(project_params)    
    if @project.save
      @collaborator = Collaborator.new(user: @current_user, project: @project)
      @collaborator.save
      render json: @project, include: [:tasks, {collaborators: {include: [:user]}}], status: :created
    end 
  end
  
  def add_collaborator 
    @collaborator = Collaborator.new(user: @current_user, project: @project, isOwner:false)
    @collaborator.save
    render json: @project, include: [:tasks, {collaborators: {include: [:user]}}], status: :created
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

  
  def project_params
    params.require(:project).permit(:name,:description, :search)
  
  end

  
end
