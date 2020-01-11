# require('byebug')

class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy add_collaborator remove_collaborator]
  before_action :authorize_request 
  # before_action :authorize_request, except: %i[index show]

  def index
    @projects = Project.all
    render json: @projects, include: [:tasks, {collaborators: {include: [:user]}}]
  end

  def search
    # byebug
    # It will find all the projects whose name contains the search word and all the projects whose description contains it too, then perform an intersection of both results to avoids duplicates
    @projects = Project.where("name ILIKE ?", "%#{params[:search]}%") | Project.where("description ILIKE ?", "%#{params[:search]}%")

    p @projects
    
      @filteredProjects = @projects.select do |project|
        nil == project.collaborators.find do |colab|
          (colab.isOwner == true && colab.user_id == @current_user.id) || 
          (colab.isOwner == false && colab.user_id == @current_user.id)
        end
      end
      if @filteredProjects == []
          render json: { message: 'Sorry, no results found. Try again.' }, status: 404
      else 
        render json: @filteredProjects, include: [:tasks, {collaborators: {include: [:user]}}]
      end
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
    
    # @collaborator = Collaborator.new(user: @current_user, project: @project, isOwner:false)
    if Collaborator.where(user: @current_user, project: @project, isOwner:false).exists?
      render json: "Already been created"
    else  
      @collaborator = Collaborator.new(user: @current_user, project: @project, isOwner:false)
      @collaborator.save
      render json: @project, include: [:tasks, {collaborators: {include: [:user]}}], status: :created
    end 
  end

  def remove_collaborator 
    # debugger
    collaborator =  @project.collaborators.find do |collaborator|
      collaborator.isOwner == false && collaborator.user_id == @current_user.id 
    end 
    collaborator.destroy
    render json: "Not anymore a collaborator"
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
