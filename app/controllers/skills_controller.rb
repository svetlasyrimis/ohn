class SkillsController < ApplicationController
  before_action :set_skill, only: %i[show update destroy]
  before_action :authorize_request
  
  def index
    @skills = Skill.order(:id)
    render json: @skills
  end

  
  def show
    render json: @skill
  end

  
  def create
    @skill = Skill.new(skill_params)
    if @skill.save
      render json: @skill, status: :created
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @skill.update(skill_params)
      render json: @skill
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @skill.destroy
  end
  
  private
  
  def set_skill
    @skill = Skill.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no skill matches that ID' }, status: 404
  end

  # Only allow a trusted parameter "white list" through.
  def skill_params
    params.require(:skill).permit(:name,:user_id)
  end
end
