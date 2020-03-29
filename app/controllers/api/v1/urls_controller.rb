# frozen_string_literal: true

class Api::V1::UrlsController < Api::V1::ApiController
  before_action :set_url, only: %i[show update destroy]

  def index
    @urls = Url.all

    render json: @urls
  end

  def show
    render json: @url
  end

  def create
    @url = Url.new(url_params)

    if @url.save
      render json: @url, status: :created
    else
      render json: @url.errors, status: :unprocessable_entity
    end
  end

  def update
    if @url.update(url_params)
      render json: @url
    else
      render json: @url.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @url.destroy
  end

  private

  def set_url
    @url = Url.find_by(id: params[:id])
  end

  def url_params
    params.require(:url).permit(:long_url, :short_url, :slug, :clicked)
  end
end
