class TasksController < ApplicationController
  before_action :set_task, only: %i[show update destroy]
  before_action :authorize_request
  
  def index
    
    @project = Project.find(params[:project_id])
    @tasks = Task.where(project_id: @project.id)
    
    render json: @tasks
  end

  
  def show
    render json: @task
  end

  
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task ,:only => [ :id, :name, :project_id, :isCompleted ], status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @task.destroy
  end
  
  private
  
  def set_task
    @task = Task.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no task matches that ID' }, status: 404
  end

  # Only allow a trusted parameter "white list" through.
  def task_params
    params.require(:task).permit(:name,:user_id,:project_id,:isCompleted)
  end
end
