
class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  def getUserProjects(user, boolean)
    projects = user.collaborators.map do |collab|
      if collab.isOwner == boolean 
        collab.project
      end
    end

    projects = projects.select{|a| a != nil}
    
    projects.map do |project|
      { **project.as_json.symbolize_keys, tasks: project.tasks, collaborators: project.collaborators.map do |collab|
        { **collab.as_json.symbolize_keys, user: collab.user} 
      end
      }
    end
  end


  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    p header
    begin
      @decoded = decode(header)
      @current_user = User.find(@decoded[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end